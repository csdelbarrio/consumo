/**
 * Sistema de Atención al Consumidor
 * Main Application Entry Point
 */

// Importar datos
import { cargarTodosLosSectores, getBaseConocimiento, getSectoresConfig } from './data/dataLoader.js';
import { ARBOL_DECISIONES } from './data/tree.js';
import { ENLACES_RECLAMACION } from './data/links.js';
import { RECURSOS } from './data/resources.js';
import { SECTORES } from './data/sectors.js';

// Estado global
let nodoActual = null;
let historial = [];
let sectorActual = null;
let BASE_CONOCIMIENTO = {};

// Sinónimos para búsqueda
const sinonimos = {
    'luz': ['electricidad', 'eléctrica', 'eléctrico'],
    'electricidad': ['luz', 'eléctrica', 'eléctrico'],
    'agua': ['suministro agua'],
    'gas': ['suministro gas'],
    'banco': ['bancario', 'banca', 'entidad financiera'],
    'seguro': ['aseguradora', 'póliza'],
    'vuelo': ['avión', 'aéreo', 'aerolínea'],
    'tren': ['ferrocarril', 'renfe'],
    'compra': ['comprar', 'adquirir', 'producto'],
    'factura': ['cobro', 'pago', 'recibo']
};

// ============================================
// SISTEMA DE ESTADÍSTICAS (localStorage)
// ============================================
const STATS_KEY = 'consumo_faq_stats';

function cargarEstadisticas() {
    try {
        const data = localStorage.getItem(STATS_KEY);
        return data ? JSON.parse(data) : { terminos: {}, preguntas: {} };
    } catch (e) {
        console.warn('No se pudieron cargar estadísticas:', e);
        return { terminos: {}, preguntas: {} };
    }
}

function guardarEstadisticas(stats) {
    try {
        localStorage.setItem(STATS_KEY, JSON.stringify(stats));
    } catch (e) {
        console.warn('No se pudieron guardar estadísticas:', e);
    }
}

function registrarBusqueda(termino) {
    if (!termino || termino.length < 2) return;
    termino = termino.toLowerCase().trim();
    
    const stats = cargarEstadisticas();
    stats.terminos[termino] = (stats.terminos[termino] || 0) + 1;
    guardarEstadisticas(stats);
}

function registrarClickPregunta(sector, index) {
    const stats = cargarEstadisticas();
    const key = `${sector}:${index}`;
    stats.preguntas[key] = (stats.preguntas[key] || 0) + 1;
    guardarEstadisticas(stats);
}

function obtenerPreguntasPopulares(sector, limite = 5) {
    const stats = cargarEstadisticas();
    const preguntasSector = [];
    
    // Filtrar preguntas del sector
    for (const key in stats.preguntas) {
        if (key.startsWith(sector + ':')) {
            const index = parseInt(key.split(':')[1]);
            preguntasSector.push({
                index: index,
                clicks: stats.preguntas[key]
            });
        }
    }
    
    // Ordenar por clicks (más populares primero)
    preguntasSector.sort((a, b) => b.clicks - a.clicks);
    
    return preguntasSector.slice(0, limite);
}

function obtenerTerminosPopulares(limite = 10) {
    const stats = cargarEstadisticas();
    const terminos = [];
    
    for (const termino in stats.terminos) {
        terminos.push({
            termino: termino,
            busquedas: stats.terminos[termino]
        });
    }
    
    terminos.sort((a, b) => b.busquedas - a.busquedas);
    return terminos.slice(0, limite);
}

// Inicialización
document.addEventListener('DOMContentLoaded', async function() {
    console.log('Inicializando Sistema de Atención al Consumidor...');
    
    // Cargar datos de sectores desde JSON
    BASE_CONOCIMIENTO = await cargarTodosLosSectores();
    
    // Cargar interfaz
    cargarSectores();
    mostrarBusquedaInicial();
    
    console.log('✓ Sistema inicializado');
});

// ============================================
// CARGA DE SECTORES EN SIDEBAR
// ============================================
function cargarSectores() {
    const lista = document.getElementById('sectoresLista');
    if (!lista) return;
    
    lista.innerHTML = '';
    
    SECTORES.forEach(sector => {
        const btn = document.createElement('button');
        btn.className = 'sector-btn';
        btn.innerHTML = `<span class="sector-icon">${sector.icono}</span> ${sector.nombre}`;
        btn.onclick = () => iniciarPorSector(sector.nombre);
        lista.appendChild(btn);
    });
}

// ============================================
// BÚSQUEDA
// ============================================
function mostrarBusquedaInicial() {
    const preguntaEl = document.getElementById('preguntaPrincipal');
    const contenido = document.getElementById('contenidoArea');
    const btnVolver = document.getElementById('btnVolver');
    const opcionesContainer = document.getElementById('opcionesContainer');
    
    if (!preguntaEl || !contenido) return;
    
    preguntaEl.className = 'pregunta-principal';
    preguntaEl.textContent = '¿En qué podemos ayudarte?';
    if (btnVolver) btnVolver.classList.remove('visible');
    if (opcionesContainer) opcionesContainer.innerHTML = '';
    historial = [];
    
    // Quitar active de sectores
    document.querySelectorAll('.sector-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Limpiar resultados de búsqueda fija
    const resultsFijo = document.getElementById('searchResultsFijo');
    if (resultsFijo) resultsFijo.innerHTML = '';
    
    let html = '<p class="mensaje-inicial">Describe tu consulta o selecciona un sector:</p>';
    html += '<div class="sectores-grid">';
    
    SECTORES.forEach(sector => {
        html += `
            <div class="sector-option" onclick="iniciarPorSector('${sector.nombre}')">
                <div class="sector-option-icon">${sector.icono}</div>
                <div class="sector-option-text">
                    <div class="sector-option-title">${sector.nombre}</div>
                    <div class="sector-option-pregunta">${sector.pregunta}</div>
                </div>
            </div>
        `;
    });
    
    html += '</div>';
    contenido.innerHTML = html;
}

// Función de búsqueda para el input fijo
function buscarConsultaFija(query, resultsContainer) {
    if (!query || query.trim().length < 2) return;
    
    query = query.trim().toLowerCase();
    const resultados = [];
    const palabrasBusqueda = query.split(' ').filter(p => p.length > 2);
    
    // Buscar en base de conocimiento
    for (const sector in BASE_CONOCIMIENTO) {
        BASE_CONOCIMIENTO[sector].forEach((item, index) => {
            let puntuacion = 0;
            const preguntaLower = item.pregunta.toLowerCase();
            const respuestaLower = item.respuesta.toLowerCase();
            
            // Coincidencia exacta de toda la query
            if (preguntaLower.includes(query)) puntuacion += 20;
            if (respuestaLower.includes(query)) puntuacion += 10;
            
            // Buscar cada palabra
            palabrasBusqueda.forEach(palabra => {
                if (preguntaLower.includes(palabra)) puntuacion += 8;
                if (respuestaLower.includes(palabra)) puntuacion += 4;
                
                // Sinónimos
                if (sinonimos[palabra]) {
                    sinonimos[palabra].forEach(sinonimo => {
                        if (preguntaLower.includes(sinonimo)) puntuacion += 7;
                        if (respuestaLower.includes(sinonimo)) puntuacion += 3;
                    });
                }
                
                // Keywords
                if (item.keywords) {
                    item.keywords.forEach(keyword => {
                        if (keyword === palabra) puntuacion += 5;
                        else if (keyword.includes(palabra) || palabra.includes(keyword)) puntuacion += 2;
                    });
                }
            });
            
            // Penalizar resultados contradictorios
            if (query.includes('luz') || query.includes('electricidad')) {
                if (preguntaLower.includes('gas') && !preguntaLower.includes('luz') && !preguntaLower.includes('electricidad')) {
                    puntuacion = puntuacion * 0.3;
                }
            }
            if (query.includes('gas')) {
                if ((preguntaLower.includes('luz') || preguntaLower.includes('electricidad')) && !preguntaLower.includes('gas')) {
                    puntuacion = puntuacion * 0.3;
                }
            }
            
            if (puntuacion > 0) {
                resultados.push({
                    sector: sector,
                    index: index,
                    pregunta: item.pregunta,
                    respuesta: item.respuesta,
                    subcategoria: item.subcategoria,
                    puntuacion: puntuacion
                });
            }
        });
    }
    
    // Ordenar por puntuación
    resultados.sort((a, b) => b.puntuacion - a.puntuacion);
    
    // Registrar búsqueda si hay resultados
    if (resultados.length > 0) {
        registrarBusqueda(query);
    }
    
    // Mostrar resultados en el contenedor proporcionado
    if (resultados.length === 0) {
        resultsContainer.innerHTML = '<p style="text-align: center; color: #666; margin-top: 20px;">No se encontraron resultados. Intenta con otras palabras o selecciona un sector directamente.</p>';
    } else {
        let html = '<h3 style="color: #043263; margin-bottom: 20px; text-align: center;">📋 Resultados de búsqueda:</h3>';
        resultados.slice(0, 5).forEach((resultado, i) => {
            const subcatInfo = resultado.subcategoria ? ` (${resultado.subcategoria})` : '';
            const sectorEscaped = resultado.sector.replace(/'/g, "\\'");
            html += `
                <div class="search-result-item" onclick="mostrarRespuestaBusqueda('${sectorEscaped}', ${resultado.index})">
                    <div class="search-result-pregunta">${resultado.sector}${subcatInfo}: ${resultado.pregunta}</div>
                    <div class="search-result-respuesta">${resultado.respuesta}</div>
                </div>
            `;
        });
        resultsContainer.innerHTML = html;
    }
    
    window.ultimosResultados = resultados;
}

function mostrarRespuestaBusqueda(sector, index) {
    console.log('mostrarRespuestaBusqueda llamada con:', sector, index);
    
    // Validar que existen los datos ANTES de modificar el DOM
    if (!BASE_CONOCIMIENTO[sector]) {
        console.error('Sector no encontrado:', sector);
        alert('Error: Sector no encontrado. Por favor, recarga la página.');
        return;
    }
    
    if (!BASE_CONOCIMIENTO[sector][index]) {
        console.error('Índice no encontrado:', index, 'en sector:', sector);
        alert('Error: Pregunta no encontrada. Por favor, recarga la página.');
        return;
    }
    
    const faq = BASE_CONOCIMIENTO[sector][index];
    const searchResults = document.getElementById('searchResults');
    const btnVolver = document.getElementById('btnVolver');
    
    if (!searchResults) {
        console.error('Elemento searchResults no encontrado');
        return;
    }
    
    // Registrar clic en esta pregunta
    registrarClickPregunta(sector, index);
    
    if (btnVolver) btnVolver.classList.add('visible');
    historial.push({ tipo: 'busqueda', sector: sector });
    
    // Escapar el nombre del sector para onclick
    const sectorEscaped = sector.replace(/'/g, "\\'");
    
    // Determinar el sector de reclamación
    let sectorReclamacion = sector;
    if (sector === 'Banca y seguros') {
        sectorReclamacion = faq.subcategoria === 'Banca' ? 'Banca' : 'Seguros';
    } else if (sector === 'Viajes y transportes') {
        sectorReclamacion = faq.subcategoria && faq.subcategoria.includes('Aéreo') ? 'Vuelos' : 'Transporte';
    } else if (sector === 'Protección de datos personales') {
        sectorReclamacion = 'Datos';
    } else if (sector === 'Servicios varios') {
        sectorReclamacion = 'Servicios';
    }
    
    let html = '<div class="respuesta-expandida">';
    
    // 1. Pregunta y respuesta
    html += `<div class="pregunta-seleccionada">
        <h3 style="color: #043263; margin-bottom: 15px;">📌 ${faq.pregunta}</h3>
        <div class="respuesta-contenido" style="background: #f8f9fa; padding: 20px; border-radius: 8px; border-left: 4px solid #28a745; margin-bottom: 20px;">
            <p style="line-height: 1.7; color: #333;">${faq.respuesta}</p>
        </div>
    </div>`;
    
    // 2. Solucion-container (recursos y botón reclamar)
    html += '<div class="solucion-container" style="margin-bottom: 25px;">';
    html += '<div class="recursos-links" style="display: flex; flex-wrap: wrap; gap: 10px; justify-content: center;">';
    
    // Botón reclamar
    if (ENLACES_RECLAMACION[sectorReclamacion] || ENLACES_RECLAMACION['General']) {
        const enlaceReclamar = ENLACES_RECLAMACION[sectorReclamacion] || ENLACES_RECLAMACION['General'];
        html += `<a href="${enlaceReclamar}" target="_blank" class="recurso-btn reclamar">🚨 Quiero reclamar</a>`;
    }
    
    html += '</div>';
    html += '</div>';
    
    // 3. Preguntas frecuentes del sector (excluyendo la actual)
    const preguntas = BASE_CONOCIMIENTO[sector];
    const populares = obtenerPreguntasPopulares(sector, 4);
    
    html += '<div class="preguntas-frecuentes" style="margin-top: 25px;">';
    html += `<h3 style="color: #043263; margin-bottom: 15px;">🔥 Otras preguntas frecuentes de ${sector}:</h3>`;
    
    if (populares.length > 0) {
        let mostradas = 0;
        populares.forEach(item => {
            if (item.index !== index && preguntas[item.index] && mostradas < 3) {
                const pregunta = preguntas[item.index];
                const subcatInfo = pregunta.subcategoria ? ` <span style="color: #666; font-size: 0.85em;">(${pregunta.subcategoria})</span>` : '';
                html += `
                    <div class="search-result-item" onclick="mostrarRespuestaBusqueda('${sectorEscaped}', ${item.index})">
                        <div class="search-result-pregunta">${pregunta.pregunta}${subcatInfo}</div>
                    </div>
                `;
                mostradas++;
            }
        });
    } else {
        // Si no hay estadísticas, mostrar otras preguntas del sector
        let mostradas = 0;
        preguntas.forEach((pregunta, i) => {
            if (i !== index && mostradas < 3) {
                const subcatInfo = pregunta.subcategoria ? ` <span style="color: #666; font-size: 0.85em;">(${pregunta.subcategoria})</span>` : '';
                html += `
                    <div class="search-result-item" onclick="mostrarRespuestaBusqueda('${sectorEscaped}', ${i})">
                        <div class="search-result-pregunta">${pregunta.pregunta}${subcatInfo}</div>
                    </div>
                `;
                mostradas++;
            }
        });
    }
    
    // Botón para ver todas las preguntas del sector
    if (preguntas.length > 5) {
        html += `
            <div style="text-align: center; margin-top: 15px;">
                <button class="opcion-btn" onclick="mostrarTodasPreguntasSector('${sectorEscaped}')">
                    📋 Ver todas las preguntas (${preguntas.length})
                </button>
            </div>
        `;
    }
    
    html += '</div>';
    html += '</div>';
    
    searchResults.innerHTML = html;
}

// ============================================
// NAVEGACIÓN POR SECTORES
// ============================================
function iniciarPorSector(nombreSector) {
    const sector = SECTORES.find(s => s.nombre === nombreSector);
    if (!sector) return;
    
    // Activar en sidebar
    document.querySelectorAll('.sector-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent.includes(nombreSector)) {
            btn.classList.add('active');
        }
    });
    
    sectorActual = nombreSector;
    nodoActual = ARBOL_DECISIONES[sector.nodo_inicial];
    historial = [{ nodo: nodoActual.id, sector: nombreSector }];
    
    const btnVolver = document.getElementById('btnVolver');
    if (btnVolver) btnVolver.classList.add('visible');
    
    // Mostrar preguntas populares en el área de búsqueda
    mostrarPreguntasPopularesSector(nombreSector);
    
    mostrarPreguntaConFAQs(nodoActual, nombreSector);
}

function mostrarPreguntasPopularesSector(nombreSector) {
    const searchResults = document.getElementById('searchResults');
    if (!searchResults || !BASE_CONOCIMIENTO[nombreSector]) return;
    
    // Escapar el nombre del sector para onclick
    const sectorEscaped = nombreSector.replace(/'/g, "\\'");
    
    // Obtener preguntas populares del sector
    const populares = obtenerPreguntasPopulares(nombreSector, 5);
    const preguntas = BASE_CONOCIMIENTO[nombreSector];
    
    let html = `<h3 style="color: #043263; margin-bottom: 20px; text-align: center;">🔥 Preguntas más consultadas de ${nombreSector}:</h3>`;
    
    if (populares.length > 0) {
        // Mostrar las preguntas populares según estadísticas
        populares.forEach(item => {
            if (preguntas[item.index]) {
                const faq = preguntas[item.index];
                const subcatInfo = faq.subcategoria ? ` (${faq.subcategoria})` : '';
                html += `
                    <div class="search-result-item" onclick="mostrarRespuestaBusqueda('${sectorEscaped}', ${item.index})">
                        <div class="search-result-pregunta">${nombreSector}${subcatInfo}: ${faq.pregunta}</div>
                        <div class="search-result-respuesta">${faq.respuesta}</div>
                    </div>
                `;
            }
        });
    } else {
        // Si no hay estadísticas, mostrar las primeras 5 preguntas del sector
        html = `<h3 style="color: #043263; margin-bottom: 20px; text-align: center;">📋 Preguntas destacadas de ${nombreSector}:</h3>`;
        preguntas.slice(0, 5).forEach((faq, index) => {
            const subcatInfo = faq.subcategoria ? ` (${faq.subcategoria})` : '';
            html += `
                <div class="search-result-item" onclick="mostrarRespuestaBusqueda('${sectorEscaped}', ${index})">
                    <div class="search-result-pregunta">${nombreSector}${subcatInfo}: ${faq.pregunta}</div>
                    <div class="search-result-respuesta">${faq.respuesta}</div>
                </div>
            `;
        });
    }
    
    // Botón para ver todas las preguntas del sector
    if (preguntas.length > 5) {
        html += `
            <div style="text-align: center; margin-top: 20px;">
                <button class="opcion-btn" onclick="mostrarTodasPreguntasSector('${sectorEscaped}')">
                    📋 Ver todas las preguntas de ${nombreSector} (${preguntas.length})
                </button>
            </div>
        `;
    }
    
    searchResults.innerHTML = html;
}

// Función para mostrar todas las preguntas de un sector
function mostrarTodasPreguntasSector(nombreSector) {
    const searchResults = document.getElementById('searchResults');
    if (!searchResults || !BASE_CONOCIMIENTO[nombreSector]) return;
    
    const sectorEscaped = nombreSector.replace(/'/g, "\\'");
    const preguntas = BASE_CONOCIMIENTO[nombreSector];
    
    let html = `<h3 style="color: #043263; margin-bottom: 20px; text-align: center;">📋 Todas las preguntas de ${nombreSector} (${preguntas.length}):</h3>`;
    
    preguntas.forEach((faq, index) => {
        const subcatInfo = faq.subcategoria ? ` (${faq.subcategoria})` : '';
        html += `
            <div class="search-result-item" onclick="mostrarRespuestaBusqueda('${sectorEscaped}', ${index})">
                <div class="search-result-pregunta">${faq.pregunta}${subcatInfo}</div>
            </div>
        `;
    });
    
    // Botón para volver a las más consultadas
    html += `
        <div style="text-align: center; margin-top: 20px;">
            <button class="opcion-btn" onclick="mostrarPreguntasPopularesSector('${sectorEscaped}')">
                ← Volver a preguntas más consultadas
            </button>
        </div>
    `;
    
    searchResults.innerHTML = html;
}

function mostrarPreguntaConFAQs(nodo, sectorNombre) {
    const preguntaEl = document.getElementById('preguntaPrincipal');
    const opcionesContainer = document.getElementById('opcionesContainer');
    const contenido = document.getElementById('contenidoArea');
    
    preguntaEl.className = 'pregunta-principal en-conversacion';
    preguntaEl.textContent = nodo.pregunta;
    if (contenido) contenido.innerHTML = '';
    
    // Explicación si existe (en contenidoArea)
    if (nodo.explicacion && contenido) {
        const explicacionDiv = document.createElement('div');
        explicacionDiv.className = 'explicacion-detallada';
        explicacionDiv.innerHTML = `<strong>ℹ️ Información:</strong> ${nodo.explicacion}`;
        contenido.appendChild(explicacionDiv);
    }
    
    // Botones de opciones (en opcionesContainer, encima de searchResults)
    if (opcionesContainer) {
        const opcionesDiv = document.createElement('div');
        opcionesDiv.className = 'opciones-container';
        
        if (nodo.opciones_custom) {
            nodo.opciones_custom.forEach(opcion => {
                const btn = document.createElement('button');
                btn.className = 'opcion-btn';
                btn.textContent = opcion.texto;
                btn.onclick = () => {
                    nodoActual = ARBOL_DECISIONES[opcion.siguiente];
                    historial.push({ nodo: nodoActual.id });
                    mostrarPregunta(nodoActual);
                };
                opcionesDiv.appendChild(btn);
            });
        } else {
            const btnSi = document.createElement('button');
            btnSi.className = 'opcion-btn';
            btnSi.textContent = 'Sí';
            btnSi.onclick = () => navegarArbol('si');
            
            const btnNo = document.createElement('button');
            btnNo.className = 'opcion-btn';
            btnNo.textContent = 'No';
            btnNo.onclick = () => navegarArbol('no');
            
            opcionesDiv.appendChild(btnSi);
            opcionesDiv.appendChild(btnNo);
        }
        
        opcionesContainer.innerHTML = '';
        opcionesContainer.appendChild(opcionesDiv);
    }
}

function mostrarPregunta(nodo) {
    const preguntaEl = document.getElementById('preguntaPrincipal');
    const contenido = document.getElementById('contenidoArea');
    
    preguntaEl.textContent = nodo.pregunta;
    contenido.innerHTML = '';
    
    if (nodo.explicacion) {
        const explicacionDiv = document.createElement('div');
        explicacionDiv.className = 'explicacion-detallada';
        explicacionDiv.innerHTML = `<strong>ℹ️ Información:</strong> ${nodo.explicacion}`;
        contenido.appendChild(explicacionDiv);
    }
    
    const opcionesDiv = document.createElement('div');
    opcionesDiv.className = 'opciones-container';
    
    if (nodo.opciones_custom) {
        nodo.opciones_custom.forEach(opcion => {
            const btn = document.createElement('button');
            btn.className = 'opcion-btn';
            btn.textContent = opcion.texto;
            btn.onclick = () => {
                nodoActual = ARBOL_DECISIONES[opcion.siguiente];
                historial.push({ nodo: nodoActual.id });
                mostrarPregunta(nodoActual);
            };
            opcionesDiv.appendChild(btn);
        });
    } else {
        const btnSi = document.createElement('button');
        btnSi.className = 'opcion-btn';
        btnSi.textContent = 'Sí';
        btnSi.onclick = () => navegarArbol('si');
        
        const btnNo = document.createElement('button');
        btnNo.className = 'opcion-btn';
        btnNo.textContent = 'No';
        btnNo.onclick = () => navegarArbol('no');
        
        opcionesDiv.appendChild(btnSi);
        opcionesDiv.appendChild(btnNo);
    }
    
    contenido.appendChild(opcionesDiv);
}

function navegarArbol(respuesta) {
    const siguienteId = respuesta === 'si' ? nodoActual.opcion_si : nodoActual.opcion_no;
    const siguienteNodo = ARBOL_DECISIONES[siguienteId];
    
    if (!siguienteNodo) {
        alert('Esta ruta del árbol aún no está completa.');
        return;
    }
    
    if (siguienteNodo.es_solucion) {
        mostrarSolucion(siguienteNodo);
    } else {
        nodoActual = siguienteNodo;
        historial.push({ nodo: nodoActual.id });
        mostrarPregunta(siguienteNodo);
    }
}

function mostrarFAQ(sector, index) {
    // Validar que existen los datos ANTES de modificar el DOM
    if (!BASE_CONOCIMIENTO[sector] || !BASE_CONOCIMIENTO[sector][index]) {
        console.error('FAQ no encontrada:', sector, index);
        alert('Error: No se encontró la pregunta. Por favor, recarga la página.');
        return;
    }
    
    const faq = BASE_CONOCIMIENTO[sector][index];
    const searchResults = document.getElementById('searchResults');
    const btnVolver = document.getElementById('btnVolver');
    
    if (!searchResults) {
        console.error('Elemento searchResults no encontrado');
        return;
    }
    
    // Registrar clic en esta pregunta
    registrarClickPregunta(sector, index);
    
    if (btnVolver) btnVolver.classList.add('visible');
    historial.push({ tipo: 'faq', sector: sector, index: index });
    
    // Escapar el nombre del sector para onclick
    const sectorEscaped = sector.replace(/'/g, "\\'");
    
    // Determinar el sector de reclamación
    let sectorReclamacion = sector;
    if (sector === 'Banca y seguros') {
        sectorReclamacion = faq.subcategoria === 'Banca' ? 'Banca' : 'Seguros';
    } else if (sector === 'Viajes y transportes') {
        sectorReclamacion = faq.subcategoria && faq.subcategoria.includes('Aéreo') ? 'Vuelos' : 'Transporte';
    } else if (sector === 'Protección de datos personales') {
        sectorReclamacion = 'Datos';
    } else if (sector === 'Servicios varios') {
        sectorReclamacion = 'Servicios';
    }
    
    let html = '<div class="respuesta-expandida">';
    
    // 1. Pregunta y respuesta
    html += `<div class="pregunta-seleccionada">
        <h3 style="color: #043263; margin-bottom: 15px;">📌 ${faq.pregunta}</h3>
        <div class="respuesta-contenido" style="background: #f8f9fa; padding: 20px; border-radius: 8px; border-left: 4px solid #28a745; margin-bottom: 20px;">
            <p style="line-height: 1.7; color: #333;">${faq.respuesta}</p>
        </div>
    </div>`;
    
    // 2. Solucion-container (recursos y botón reclamar)
    html += '<div class="solucion-container" style="margin-bottom: 25px;">';
    html += '<div class="recursos-links" style="display: flex; flex-wrap: wrap; gap: 10px; justify-content: center;">';
    
    // Botón reclamar
    if (ENLACES_RECLAMACION[sectorReclamacion] || ENLACES_RECLAMACION['General']) {
        const enlaceReclamar = ENLACES_RECLAMACION[sectorReclamacion] || ENLACES_RECLAMACION['General'];
        html += `<a href="${enlaceReclamar}" target="_blank" class="recurso-btn reclamar">🚨 Quiero reclamar</a>`;
    }
    
    html += '</div>';
    html += '</div>';
    
    // 3. Preguntas frecuentes del sector (excluyendo la actual)
    const preguntas = BASE_CONOCIMIENTO[sector];
    const populares = obtenerPreguntasPopulares(sector, 4);
    
    html += '<div class="preguntas-frecuentes" style="margin-top: 25px;">';
    html += `<h3 style="color: #043263; margin-bottom: 15px;">🔥 Otras preguntas frecuentes de ${sector}:</h3>`;
    
    if (populares.length > 0) {
        let mostradas = 0;
        populares.forEach(item => {
            if (item.index !== index && preguntas[item.index] && mostradas < 3) {
                const pregunta = preguntas[item.index];
                const subcatInfo = pregunta.subcategoria ? ` <span style="color: #666; font-size: 0.85em;">(${pregunta.subcategoria})</span>` : '';
                html += `
                    <div class="search-result-item" onclick="mostrarFAQ('${sectorEscaped}', ${item.index})">
                        <div class="search-result-pregunta">${pregunta.pregunta}${subcatInfo}</div>
                    </div>
                `;
                mostradas++;
            }
        });
    } else {
        // Si no hay estadísticas, mostrar otras preguntas del sector
        let mostradas = 0;
        preguntas.forEach((pregunta, i) => {
            if (i !== index && mostradas < 3) {
                const subcatInfo = pregunta.subcategoria ? ` <span style="color: #666; font-size: 0.85em;">(${pregunta.subcategoria})</span>` : '';
                html += `
                    <div class="search-result-item" onclick="mostrarFAQ('${sectorEscaped}', ${i})">
                        <div class="search-result-pregunta">${pregunta.pregunta}${subcatInfo}</div>
                    </div>
                `;
                mostradas++;
            }
        });
    }
    
    // Botón para ver todas las preguntas del sector
    if (preguntas.length > 5) {
        html += `
            <div style="text-align: center; margin-top: 15px;">
                <button class="opcion-btn" onclick="mostrarTodasPreguntasSector('${sectorEscaped}')">
                    📋 Ver todas las preguntas (${preguntas.length})
                </button>
            </div>
        `;
    }
    
    html += '</div>';
    html += '</div>';
    
    searchResults.innerHTML = html;
    window.faqsActuales = BASE_CONOCIMIENTO[sector];
}

function mostrarSolucion(nodo) {
    const preguntaEl = document.getElementById('preguntaPrincipal');
    const contenido = document.getElementById('contenidoArea');
    
    preguntaEl.className = 'pregunta-principal solucion';
    preguntaEl.textContent = 'Solución encontrada';
    
    let html = '<div class="solucion-container">';
    html += '<div class="solucion-final">';
    html += '<strong>Solución a su consulta:</strong>';
    html += `<p>${nodo.texto_solucion}</p>`;
    html += '</div>';
    
    // Botón reclamar
    if (nodo.sector_reclamacion && ENLACES_RECLAMACION[nodo.sector_reclamacion]) {
        html += '<div class="recursos-links" style="justify-content: center; margin-top: 30px;">';
        html += `<a href="${ENLACES_RECLAMACION[nodo.sector_reclamacion]}" target="_blank" class="recurso-btn reclamar">🚨 Quiero reclamar</a>`;
        html += '</div>';
    }
    
    // Recursos
    if (RECURSOS[nodo.id]) {
        html += '<div class="recursos-links" style="margin-top: 20px;">';
        RECURSOS[nodo.id].forEach(recurso => {
            const clase = recurso.tipo === 'modelo' ? 'recurso-btn modelo' : 'recurso-btn';
            const icono = recurso.tipo === 'modelo' ? '📄' : '🔗';
            html += `<a href="${recurso.url}" target="_blank" class="${clase}">${icono} ${recurso.nombre}</a>`;
        });
        html += '</div>';
    }
    
    html += '<div class="reiniciar-container">';
    html += '<button class="reset-btn" onclick="reiniciar()">Nueva consulta</button>';
    html += '</div>';
    html += '</div>';
    
    contenido.innerHTML = html;
    nodoActual = null;
}

// ============================================
// NAVEGACIÓN
// ============================================
function volverAtras() {
    if (historial.length <= 1) {
        reiniciar();
        return;
    }
    
    historial.pop();
    const estadoAnterior = historial[historial.length - 1];
    
    if (estadoAnterior.tipo === 'busqueda') {
        mostrarBusquedaInicial();
    } else if (estadoAnterior.tipo === 'faq') {
        mostrarRespuestaBusqueda(estadoAnterior.sector, 0);
    } else if (estadoAnterior.nodo) {
        nodoActual = ARBOL_DECISIONES[estadoAnterior.nodo];
        if (historial.length === 1 && estadoAnterior.sector) {
            mostrarPreguntaConFAQs(nodoActual, estadoAnterior.sector);
        } else {
            mostrarPregunta(nodoActual);
        }
    }
}

function reiniciar() {
    document.querySelectorAll('.sector-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    nodoActual = null;
    historial = [];
    sectorActual = null;
    
    // Limpiar búsqueda y opciones
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    const opcionesContainer = document.getElementById('opcionesContainer');
    if (searchInput) searchInput.value = '';
    if (searchResults) searchResults.innerHTML = '';
    if (opcionesContainer) opcionesContainer.innerHTML = '';
    
    mostrarBusquedaInicial();
}

// Función para volver a los resultados de búsqueda
function limpiarRespuesta() {
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    
    // Quitar del historial primero
    if (historial.length > 0) {
        const ultimo = historial.pop();
        // Si venía de una búsqueda o FAQ, guardar el sector para volver
        if (ultimo && ultimo.sector) {
            sectorActual = ultimo.sector;
        }
    }
    
    if (searchInput && searchInput.value.trim().length >= 2) {
        // Si hay texto en la búsqueda, volver a buscar
        window.buscarConsulta();
    } else if (sectorActual) {
        // Si hay un sector seleccionado, mostrar sus preguntas populares
        mostrarPreguntasPopularesSector(sectorActual);
    } else {
        // Si no, limpiar resultados y mostrar mensaje inicial
        if (searchResults) {
            searchResults.innerHTML = '<p class="mensaje-inicial" style="text-align: center; color: #666;">Escribe en la caja de búsqueda o selecciona un sector para ver preguntas frecuentes.</p>';
        }
    }
}

// Exponer funciones globalmente para onclick en HTML
window.buscarConsultaFija = buscarConsultaFija;
window.mostrarRespuestaBusqueda = mostrarRespuestaBusqueda;
window.iniciarPorSector = iniciarPorSector;
window.mostrarFAQ = mostrarFAQ;
window.volverAtras = volverAtras;
window.reiniciar = reiniciar;
window.limpiarRespuesta = limpiarRespuesta;
window.mostrarPreguntasPopularesSector = mostrarPreguntasPopularesSector;
window.mostrarTodasPreguntasSector = mostrarTodasPreguntasSector;

// Función para subir arriba
window.subirArriba = function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

// Función buscarConsulta para el input fijo del HTML
window.buscarConsulta = function() {
    const input = document.getElementById('searchInput');
    const results = document.getElementById('searchResults');
    if (input && results) {
        buscarConsultaFija(input.value, results);
    }
};

// Configurar eventos de búsqueda en tiempo real
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    let timeoutBusqueda = null;
    
    if (searchInput) {
        // Búsqueda en tiempo real mientras escribes
        searchInput.addEventListener('input', function(e) {
            clearTimeout(timeoutBusqueda);
            const valor = e.target.value.trim();
            
            if (valor.length >= 3) {
                timeoutBusqueda = setTimeout(() => {
                    window.buscarConsulta();
                }, 300);
            } else if (valor.length === 0) {
                document.getElementById('searchResults').innerHTML = '';
            }
        });
        
        // Enter para búsqueda inmediata
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                clearTimeout(timeoutBusqueda);
                window.buscarConsulta();
            }
        });
    }
    
    // Mostrar/ocultar botón subir según scroll
    const btnSubir = document.getElementById('btnSubir');
    if (btnSubir) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                btnSubir.classList.add('visible');
            } else {
                btnSubir.classList.remove('visible');
            }
        });
    }
});
