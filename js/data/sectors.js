/**
 * Configuración de Sectores
 */

export const SECTORES = [
    { 
        nombre: "Vivienda", 
        icono: "🏠",
        pregunta: "¿Tu consulta es sobre compraventa o alquiler de vivienda?",
        nodo_inicial: "VIV-ORIENT"
    },
    { 
        nombre: "Banca y seguros", 
        icono: "🏦",
        pregunta: "¿Tu consulta es sobre banca o seguros?",
        nodo_inicial: "BS-ORIENT"
    },
    { 
        nombre: "Viajes y transportes", 
        icono: "✈️",
        pregunta: "¿Tu consulta es sobre vuelos o transporte terrestre?",
        nodo_inicial: "VT-ORIENT"
    },
    { 
        nombre: "Suministros", 
        icono: "⚡",
        pregunta: "¿Tienes un problema con tus suministros?",
        nodo_inicial: "SUM-ORIENT"
    },
    { 
        nombre: "Compras", 
        icono: "🛒",
        pregunta: "¿Tienes un problema con una compra?",
        nodo_inicial: "COM-ORIENT"
    },
    { 
        nombre: "Protección de datos personales", 
        icono: "🔒",
        pregunta: "¿Tienes un problema relacionado con tus datos personales?",
        nodo_inicial: "DAT-ORIENT"
    },
    { 
        nombre: "Turismo", 
        icono: "🏨",
        pregunta: "¿Tienes un problema con alojamiento o restauración?",
        nodo_inicial: "TUR-ORIENT"
    },
    { 
        nombre: "Servicios varios", 
        icono: "🔧",
        pregunta: "¿Tienes un problema con algún servicio?",
        nodo_inicial: "SER-ORIENT"
    }
];

export default SECTORES;
