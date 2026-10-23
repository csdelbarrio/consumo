/**
 * Configuración de Sectores
 */

export const SECTORES = [
    { 
        nombre: "Vivienda", 
        icono: "🏠",
        pregunta: "¿Con quién tienes el problema de vivienda?",
        nodo_inicial: "VIV-ORIENT"
    },
    { 
        nombre: "Banca y seguros", 
        icono: "🏦",
        pregunta: "¿Sobre qué producto o servicio quieres reclamar?",
        nodo_inicial: "BS-ORIENT"
    },
    { 
        nombre: "Viajes y transportes", 
        icono: "✈️",
        pregunta: "¿Con qué servicio tienes el problema?",
        nodo_inicial: "VT-ORIENT"
    },
    { 
        nombre: "Suministros", 
        icono: "⚡",
        pregunta: "¿Con qué suministro tienes el problema?",
        nodo_inicial: "SUM-ORIENT"
    },
    { 
        nombre: "Compras", 
        icono: "🛒",
        pregunta: "¿En qué punto está tu reclamación?",
        nodo_inicial: "COM-ORIENT"
    },
    { 
        nombre: "Protección de datos personales", 
        icono: "🔒",
        pregunta: "¿Qué quieres hacer respecto a tus datos personales?",
        nodo_inicial: "DAT-ORIENT"
    },
    { 
        nombre: "Turismo", 
        icono: "🏨",
        pregunta: "¿Con qué servicio turístico tienes el problema?",
        nodo_inicial: "TUR-ORIENT"
    },
    { 
        nombre: "Servicios varios", 
        icono: "🔧",
        pregunta: "¿De qué servicio se trata?",
        nodo_inicial: "SER-ORIENT"
    }
];

export default SECTORES;
