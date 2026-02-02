/**
 * Data Loader - Carga los datos de los sectores desde archivos JSON
 */

// Configuración de sectores y sus archivos
const SECTORES_CONFIG = [
    { nombre: 'Vivienda', archivo: 'vivienda.json', icono: '🏠', nodo_inicial: 'VIV-ORIENT' },
    { nombre: 'Banca y seguros', archivo: 'banca-seguros.json', icono: '🏦', nodo_inicial: 'BS-ORIENT' },
    { nombre: 'Viajes y transportes', archivo: 'viajes-transportes.json', icono: '✈️', nodo_inicial: 'VT-ORIENT' },
    { nombre: 'Suministros', archivo: 'suministros.json', icono: '⚡', nodo_inicial: 'SUM-ORIENT' },
    { nombre: 'Compras', archivo: 'compras.json', icono: '🛒', nodo_inicial: 'COM-ORIENT' },
    { nombre: 'Protección de datos personales', archivo: 'proteccion-datos.json', icono: '🔒', nodo_inicial: 'DAT-ORIENT' },
    { nombre: 'Turismo', archivo: 'turismo.json', icono: '🏨', nodo_inicial: 'TUR-ORIENT' },
    { nombre: 'Servicios varios', archivo: 'servicios-varios.json', icono: '🔧', nodo_inicial: 'SER-ORIENT' }
];

// Cache de datos cargados
let datosCache = {};
let baseConocimientoCompleta = {};

/**
 * Carga un archivo JSON de un sector
 */
async function cargarSector(archivo) {
    try {
        const response = await fetch(`./data/sectores/${archivo}`);
        if (!response.ok) {
            throw new Error(`Error cargando ${archivo}: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Error cargando sector ${archivo}:`, error);
        return null;
    }
}

/**
 * Carga todos los sectores y construye la base de conocimiento completa
 */
async function cargarTodosLosSectores() {
    console.log('Cargando datos de sectores...');
    
    const promesas = SECTORES_CONFIG.map(async (sector) => {
        const data = await cargarSector(sector.archivo);
        if (data) {
            datosCache[sector.nombre] = data;
            baseConocimientoCompleta[sector.nombre] = data.preguntas;
            console.log(`✓ ${sector.nombre}: ${data.total_preguntas} preguntas`);
        }
        return data;
    });
    
    await Promise.all(promesas);
    
    const totalPreguntas = Object.values(baseConocimientoCompleta)
        .reduce((sum, arr) => sum + arr.length, 0);
    console.log(`✓ Total cargado: ${totalPreguntas} preguntas`);
    
    return baseConocimientoCompleta;
}

/**
 * Obtiene la base de conocimiento completa (formato compatible con el sistema actual)
 */
function getBaseConocimiento() {
    return baseConocimientoCompleta;
}

/**
 * Obtiene las preguntas de un sector específico
 */
function getPreguntasSector(nombreSector) {
    return baseConocimientoCompleta[nombreSector] || [];
}

/**
 * Obtiene la configuración de sectores
 */
function getSectoresConfig() {
    return SECTORES_CONFIG;
}

/**
 * Obtiene los datos completos de un sector (incluye metadatos)
 */
function getDatosSector(nombreSector) {
    return datosCache[nombreSector] || null;
}

// Exportar funciones
export {
    cargarTodosLosSectores,
    getBaseConocimiento,
    getPreguntasSector,
    getSectoresConfig,
    getDatosSector,
    SECTORES_CONFIG
};
