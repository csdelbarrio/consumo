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
    
    if (!preguntaEl || !contenido) return;
    
    preguntaEl.className = 'pregunta-principal';
    preguntaEl.textContent = '¿En qué podemos ayudarte?';
    if (btnVolver) btnVolver.classList.remove('visible');
    historial = [];
    
    // Quitar active de sectores
    document.querySelectorAll('.sector-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    let html = `
        <div class="search-container">
            <p class="mensaje-inicial">Describe tu consulta en lenguaje natural o selecciona un sector:</p>
            <div class="search-box">
                <input type="text" class="search-input" id="searchInput" placeholder="Ej: Me han cobrado de más en la factura de la luz...">
                <button class="search-btn" onclick="buscarConsulta()">Buscar</button>
            </div>
            <div id="searchResults" class="search-results"></div>
        </div>
    `;
    
    html += '<p class="mensaje-inicial" style="margin-top: 40px;">O selecciona directamente un sector:</p>';
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
    
    // Búsqueda en tiempo real mientras escribes
    const searchInput = document.getElementById('searchInput');
    let timeoutBusqueda = null;
    
    if (searchInput) {
        // Evento input: buscar mientras escribes (con debounce)
        searchInput.addEventListener('input', function(e) {
            clearTimeout(timeoutBusqueda);
            const valor = e.target.value.trim();
            
            if (valor.length >= 3) {
                // Esperar 300ms después de que el usuario deje de escribir
                timeoutBusqueda = setTimeout(() => {
                    buscarConsulta();
                }, 300);
            } else if (valor.length === 0) {
                // Limpiar resultados si se borra todo
                document.getElementById('searchResults').innerHTML = '';
            }
        });
        
        // Mantener Enter para búsqueda inmediata
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                clearTimeout(timeoutBusqueda);
                buscarConsulta();
            }
        });
    }
}

function buscarConsulta() {
    const query = document.getElementById('searchInput').value.trim().toLowerCase();
    if (!query) return;
    
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
    
    // Mostrar resultados
    const resultsDiv = document.getElementById('searchResults');
    if (resultados.length === 0) {
        resultsDiv.innerHTML = '<p style="text-align: center; color: #666; margin-top: 20px;">No se encontraron resultados. Intenta con otras palabras o selecciona un sector directamente.</p>';
    } else {
        let html = '<h3 style="color: #043263; margin-bottom: 20px; text-align: center;">📋 Resultados de búsqueda:</h3>';
        resultados.slice(0, 5).forEach((resultado, i) => {
            const subcatInfo = resultado.subcategoria ? ` (${resultado.subcategoria})` : '';
            html += `
                <div class="search-result-item" onclick="mostrarRespuestaBusqueda('${resultado.sector}', ${resultado.index})">
                    <div class="search-result-pregunta">${resultado.sector}${subcatInfo}: ${resultado.pregunta}</div>
                    <div class="search-result-respuesta">${resultado.respuesta}</div>
                </div>
            `;
        });
        resultsDiv.innerHTML = html;
    }
    
    window.ultimosResultados = resultados;
}

function mostrarRespuestaBusqueda(sector, index) {
    const faq = BASE_CONOCIMIENTO[sector][index];
    const preguntaEl = document.getElementById('preguntaPrincipal');
    const contenido = document.getElementById('contenidoArea');
    const btnVolver = document.getElementById('btnVolver');
    
    preguntaEl.className = 'pregunta-principal solucion';
    preguntaEl.textContent = 'Información encontrada';
    btnVolver.classList.add('visible');
    
    historial.push({ tipo: 'busqueda' });
    
    let html = '<div class="solucion-container">';
    html += '<div class="solucion-final">';
    html += `<strong>${faq.pregunta}</strong>`;
    html += `<p>${faq.respuesta}</p>`;
    html += '</div>';
    
    // Preguntas relacionadas
    const relacionadas = BASE_CONOCIMIENTO[sector].filter((item, i) => i !== index).slice(0, 3);
    if (relacionadas.length > 0) {
        html += '<div class="faqs-sector">';
        html += '<h3>💡 Preguntas relacionadas:</h3>';
        relacionadas.forEach((item, i) => {
            const realIndex = BASE_CONOCIMIENTO[sector].indexOf(item);
            html += `
                <div class="faq-item" onclick="mostrarRespuestaBusqueda('${sector}', ${realIndex})">
                    <div class="faq-pregunta">${item.pregunta}</div>
                </div>
            `;
        });
        html += '</div>';
    }
    
    html += '<div class="reiniciar-container">';
    html += '<button class="reset-btn" onclick="reiniciar()">Nueva búsqueda</button>';
    html += '</div>';
    html += '</div>';
    
    contenido.innerHTML = html;
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
    
    mostrarPreguntaConFAQs(nodoActual, nombreSector);
}

function mostrarPreguntaConFAQs(nodo, sectorNombre) {
    const preguntaEl = document.getElementById('preguntaPrincipal');
    const contenido = document.getElementById('contenidoArea');
    
    preguntaEl.className = 'pregunta-principal en-conversacion';
    preguntaEl.textContent = nodo.pregunta;
    contenido.innerHTML = '';
    
    // Explicación si existe
    if (nodo.explicacion) {
        const explicacionDiv = document.createElement('div');
        explicacionDiv.className = 'explicacion-detallada';
        explicacionDiv.innerHTML = `<strong>ℹ️ Información:</strong> ${nodo.explicacion}`;
        contenido.appendChild(explicacionDiv);
    }
    
    // Botones de opciones
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
    
    // FAQs del sector
    if (nodo.primera_pregunta_sector && BASE_CONOCIMIENTO[sectorNombre]) {
        const todasFAQs = BASE_CONOCIMIENTO[sectorNombre];
        const faqsIniciales = 3;
        
        const faqsDiv = document.createElement('div');
        faqsDiv.className = 'faqs-sector';
        faqsDiv.innerHTML = `<h3>❓ Preguntas frecuentes de ${sectorNombre}:</h3>`;
        faqsDiv.id = 'faqsContainer';
        
        for (let i = 0; i < Math.min(faqsIniciales, todasFAQs.length); i++) {
            const faqItem = document.createElement('div');
            faqItem.className = 'faq-item';
            faqItem.innerHTML = `<div class="faq-pregunta">${todasFAQs[i].pregunta}</div>`;
            faqItem.onclick = () => mostrarFAQ(sectorNombre, i);
            faqsDiv.appendChild(faqItem);
        }
        
        if (todasFAQs.length > faqsIniciales) {
            const btnVerMas = document.createElement('button');
            btnVerMas.className = 'opcion-btn';
            btnVerMas.style.marginTop = '15px';
            btnVerMas.style.fontSize = '0.9rem';
            btnVerMas.textContent = `Ver más preguntas (${todasFAQs.length - faqsIniciales} más)`;
            btnVerMas.onclick = () => mostrarTodasFAQs(sectorNombre, faqsDiv, todasFAQs, faqsIniciales);
            faqsDiv.appendChild(btnVerMas);
        }
        
        contenido.appendChild(faqsDiv);
    }
}

function mostrarTodasFAQs(sectorNombre, contenedor, todasFAQs, yaVisible) {
    const titulo = contenedor.querySelector('h3').outerHTML;
    contenedor.innerHTML = titulo;
    
    todasFAQs.forEach((faq, index) => {
        const faqItem = document.createElement('div');
        faqItem.className = 'faq-item';
        faqItem.innerHTML = `<div class="faq-pregunta">${faq.pregunta}</div>`;
        faqItem.onclick = () => mostrarFAQ(sectorNombre, index);
        contenedor.appendChild(faqItem);
    });
    
    const btnVerMenos = document.createElement('button');
    btnVerMenos.className = 'opcion-btn';
    btnVerMenos.style.marginTop = '15px';
    btnVerMenos.style.fontSize = '0.9rem';
    btnVerMenos.textContent = 'Ver menos';
    btnVerMenos.onclick = () => {
        contenedor.innerHTML = titulo;
        for (let i = 0; i < Math.min(yaVisible, todasFAQs.length); i++) {
            const faqItem = document.createElement('div');
            faqItem.className = 'faq-item';
            faqItem.innerHTML = `<div class="faq-pregunta">${todasFAQs[i].pregunta}</div>`;
            faqItem.onclick = () => mostrarFAQ(sectorNombre, i);
            contenedor.appendChild(faqItem);
        }
        
        const btnVerMasNuevo = document.createElement('button');
        btnVerMasNuevo.className = 'opcion-btn';
        btnVerMasNuevo.style.marginTop = '15px';
        btnVerMasNuevo.style.fontSize = '0.9rem';
        btnVerMasNuevo.textContent = `Ver más preguntas (${todasFAQs.length - yaVisible} más)`;
        btnVerMasNuevo.onclick = () => mostrarTodasFAQs(sectorNombre, contenedor, todasFAQs, yaVisible);
        contenedor.appendChild(btnVerMasNuevo);
    };
    contenedor.appendChild(btnVerMenos);
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
    const faq = BASE_CONOCIMIENTO[sector][index];
    const preguntaEl = document.getElementById('preguntaPrincipal');
    const contenido = document.getElementById('contenidoArea');
    
    preguntaEl.className = 'pregunta-principal solucion';
    preguntaEl.textContent = 'Información encontrada';
    
    historial.push({ tipo: 'faq', sector: sector, index: index });
    
    let html = '<div class="solucion-container">';
    html += '<div class="solucion-final">';
    html += `<strong>${faq.pregunta}</strong>`;
    html += `<p>${faq.respuesta}</p>`;
    html += '</div>';
    
    // Preguntas relacionadas
    const relacionadas = BASE_CONOCIMIENTO[sector].filter((item, i) => i !== index).slice(0, 3);
    if (relacionadas.length > 0) {
        html += '<div class="faqs-sector">';
        html += '<h3>💡 Preguntas relacionadas:</h3>';
        relacionadas.forEach((item) => {
            const realIndex = BASE_CONOCIMIENTO[sector].indexOf(item);
            html += `
                <div class="faq-item" onclick="mostrarFAQ('${sector}', ${realIndex})">
                    <div class="faq-pregunta">${item.pregunta}</div>
                </div>
            `;
        });
        html += '</div>';
    }
    
    html += '<div class="reiniciar-container">';
    html += '<button class="reset-btn" onclick="reiniciar()">Nueva consulta</button>';
    html += '</div>';
    html += '</div>';
    
    contenido.innerHTML = html;
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
    
    mostrarBusquedaInicial();
}

// Exponer funciones globalmente para onclick en HTML
window.buscarConsulta = buscarConsulta;
window.mostrarRespuestaBusqueda = mostrarRespuestaBusqueda;
window.iniciarPorSector = iniciarPorSector;
window.mostrarFAQ = mostrarFAQ;
window.volverAtras = volverAtras;
window.reiniciar = reiniciar;
