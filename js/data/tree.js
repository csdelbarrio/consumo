/**
 * Árbol de Decisiones
 */

export const ARBOL_DECISIONES = {
            // === VIVIENDA ===
            "VIV-ORIENT": {
                "id": "VIV-ORIENT",
                "sector": "Vivienda",
                "pregunta": "¿Tu consulta es sobre compraventa o alquiler de vivienda?",
                "primera_pregunta_sector": true,
                "opciones_custom": [
                    { texto: "Compraventa", siguiente: "VIV-001" },
                    { texto: "Alquiler", siguiente: "VIV-001" }
                ],
                "es_solucion": false
            },
            "VIV-001": {
                "id": "VIV-001",
                "sector": "Vivienda",
                "pregunta": "¿Tienes un problema con tu vivienda (compra, alquiler, defectos)?",
                "opcion_si": "VIV-002",
                "opcion_no": "SOL-VIV-INFO",
                "es_solucion": false
            },
            "VIV-002": {
                "id": "VIV-002",
                "sector": "Vivienda",
                "pregunta": "¿Actúas como persona consumidora?",
                "opcion_si": "VIV-003",
                "opcion_no": "SOL-VIV-NO-CONSUMIDOR",
                "explicacion": "Actúas como consumidor si adquieres la vivienda para uso personal o familiar, no para actividad empresarial o profesional.",
                "es_solucion": false
            },
            "VIV-003": {
                "id": "VIV-003",
                "sector": "Vivienda",
                "pregunta": "¿Has presentado reclamación a la empresa o arrendador?",
                "opcion_si": "VIV-004",
                "opcion_no": "SOL-VIV-RECLAMAR",
                "explicacion": "Antes de acudir a otras instancias, es obligatorio presentar reclamación formal a la otra parte.",
                "es_solucion": false
            },
            "VIV-004": {
                "id": "VIV-004",
                "sector": "Vivienda",
                "pregunta": "¿Has recibido respuesta satisfactoria?",
                "opcion_si": "SOL-VIV-RESUELTO",
                "opcion_no": "SOL-VIV-OPCIONES",
                "es_solucion": false
            },
            
            // === BANCA Y SEGUROS - ORIENTACIÁ“N ===
            "BS-ORIENT": {
                "id": "BS-ORIENT",
                "sector": "Banca y seguros",
                "pregunta": "¿Tu consulta es sobre banca o seguros?",
                "primera_pregunta_sector": true,
                "opciones_custom": [
                    { texto: "Banca", siguiente: "BANCA-001" },
                    { texto: "Seguros", siguiente: "SEG-001" }
                ],
                "es_solucion": false
            },
            
            // SEGUROS (extraído del Word)
            "SEG-001": {
                "id": "SEG-001",
                "sector": "Banca y seguros",
                "subsector": "Seguros",
                "pregunta": "¿Tienes un problema con seguro o fondo de pensiones?",
                "opcion_si": "SEG-002",
                "opcion_no": "SOL-SEG-FIN",
                "es_solucion": false
            },
            "SEG-002": {
                "id": "SEG-002",
                "sector": "Banca y seguros",
                "subsector": "Seguros",
                "pregunta": "¿Actúas como persona consumidora?",
                "opcion_si": "SEG-003",
                "opcion_no": "SOL-SEG-FIN",
                "explicacion": "Actúas como consumidor si contratas el seguro para uso personal o familiar, no empresarial.",
                "es_solucion": false
            },
            "SEG-003": {
                "id": "SEG-003",
                "sector": "Banca y seguros",
                "subsector": "Seguros",
                "pregunta": "¿Has presentado reclamación a la empresa?",
                "opcion_si": "SEG-004",
                "opcion_no": "SOL-SEG-RECLAMAR",
                "explicacion": "Debes presentar reclamación al Servicio de Atención al Cliente de la aseguradora por escrito: correo postal con acuse de recibo, burofax, email con confirmación de recepción, o teléfono con justificante.",
                "es_solucion": false
            },
            "SEG-004": {
                "id": "SEG-004",
                "sector": "Banca y seguros",
                "subsector": "Seguros",
                "pregunta": "¿Has recibido respuesta satisfactoria en el plazo de un mes?",
                "opcion_si": "SOL-SEG-RESUELTO",
                "opcion_no": "SEG-005",
                "es_solucion": false
            },
            "SEG-005": {
                "id": "SEG-005",
                "sector": "Banca y seguros",
                "subsector": "Seguros",
                "pregunta": "¿Tiene la entidad la figura del Defensor del Asegurado?",
                "opcion_si": "SOL-SEG-DEFENSOR",
                "opcion_no": "SOL-SEG-OPCIONES",
                "explicacion": "El Defensor del Asegurado es una figura independiente que media en conflictos entre asegurados y compañías.",
                "es_solucion": false
            },
            
            // BANCA (extraído del Word)
            "BANCA-001": {
                "id": "BANCA-001",
                "sector": "Banca y seguros",
                "subsector": "Banca",
                "pregunta": "¿Tienes un problema con un banco?",
                "opcion_si": "BANCA-002",
                "opcion_no": "SOL-BANCA-FIN",
                "es_solucion": false
            },
            "BANCA-002": {
                "id": "BANCA-002",
                "sector": "Banca y seguros",
                "subsector": "Banca",
                "pregunta": "¿Actúas como persona consumidora?",
                "opcion_si": "BANCA-003",
                "opcion_no": "SOL-BANCA-FIN",
                "explicacion": "Actúas como consumidor si contratas productos bancarios para uso personal o familiar, no para negocio.",
                "es_solucion": false
            },
            "BANCA-003": {
                "id": "BANCA-003",
                "sector": "Banca y seguros",
                "subsector": "Banca",
                "pregunta": "¿Has presentado reclamación al banco?",
                "opcion_si": "BANCA-004",
                "opcion_no": "SOL-BANCA-RECLAMAR",
                "explicacion": "Debes presentar reclamación al Servicio de Atención al Cliente del banco por correo postal, burofax, email con confirmación, o teléfono con justificante.",
                "es_solucion": false
            },
            "BANCA-004": {
                "id": "BANCA-004",
                "sector": "Banca y seguros",
                "subsector": "Banca",
                "pregunta": "¿Has recibido respuesta satisfactoria en el plazo de 15 días?",
                "opcion_si": "SOL-BANCA-RESUELTO",
                "opcion_no": "BANCA-005",
                "explicacion": "El banco tiene 15 días hábiles para responder reclamaciones sobre servicios de pago, un mes para otras reclamaciones, o dos meses para servicios de inversión.",
                "es_solucion": false
            },
            "BANCA-005": {
                "id": "BANCA-005",
                "sector": "Banca y seguros",
                "subsector": "Banca",
                "pregunta": "¿El problema es por un servicio de inversión?",
                "opcion_si": "SOL-BANCA-CNMV",
                "opcion_no": "SOL-BANCA-BDE",
                "es_solucion": false
            },
            
            // === VIAJES Y TRANSPORTES - ORIENTACIÁ“N ===
            "VT-ORIENT": {
                "id": "VT-ORIENT",
                "sector": "Viajes y transportes",
                "pregunta": "¿Tu consulta es sobre vuelos o transporte terrestre?",
                "primera_pregunta_sector": true,
                "opciones_custom": [
                    { texto: "Vuelos", siguiente: "VUELO-001" },
                    { texto: "Transporte terrestre (tren/autobús)", siguiente: "TRANS-001" }
                ],
                "es_solucion": false
            },
            
            // VUELOS (extraído del Word)
            "VUELO-001": {
                "id": "VUELO-001",
                "sector": "Viajes y transportes",
                "subsector": "Vuelos",
                "pregunta": "¿Tienes un problema con un vuelo?",
                "opcion_si": "VUELO-002",
                "opcion_no": "SOL-VUELO-FIN",
                "es_solucion": false
            },
            "VUELO-002": {
                "id": "VUELO-002",
                "sector": "Viajes y transportes",
                "subsector": "Vuelos",
                "pregunta": "¿Actúas como persona consumidora?",
                "opcion_si": "VUELO-003",
                "opcion_no": "SOL-VUELO-FIN",
                "explicacion": "Actúas como consumidor si viajas por motivos personales o familiares, no por negocios con factura a empresa.",
                "es_solucion": false
            },
            "VUELO-003": {
                "id": "VUELO-003",
                "sector": "Viajes y transportes",
                "subsector": "Vuelos",
                "pregunta": "¿Has presentado reclamación a la compañía?",
                "opcion_si": "VUELO-004",
                "opcion_no": "SOL-VUELO-RECLAMAR",
                "explicacion": "Presenta reclamación a la aerolínea por correo postal, email, o formulario web de la compañía. Conserva todos los documentos (billetes, tarjetas embarque).",
                "es_solucion": false
            },
            "VUELO-004": {
                "id": "VUELO-004",
                "sector": "Viajes y transportes",
                "subsector": "Vuelos",
                "pregunta": "¿Has recibido respuesta satisfactoria en el plazo de un mes?",
                "opcion_si": "SOL-VUELO-RESUELTO",
                "opcion_no": "VUELO-005",
                "es_solucion": false
            },
            "VUELO-005": {
                "id": "VUELO-005",
                "sector": "Viajes y transportes",
                "subsector": "Vuelos",
                "pregunta": "¿El problema es por retraso, cancelación o denegación de embarque?",
                "opcion_si": "SOL-VUELO-AESA",
                "opcion_no": "SOL-VUELO-OPCIONES",
                "es_solucion": false
            },
            
            // TRANSPORTE TERRESTRE (extraído del Word)
            "TRANS-001": {
                "id": "TRANS-001",
                "sector": "Viajes y transportes",
                "subsector": "Transporte terrestre",
                "pregunta": "¿Tienes un problema con un viaje en tren, autobús o alquiler de vehículo?",
                "opcion_si": "TRANS-002",
                "opcion_no": "SOL-TRANS-FIN",
                "es_solucion": false
            },
            "TRANS-002": {
                "id": "TRANS-002",
                "sector": "Viajes y transportes",
                "subsector": "Transporte terrestre",
                "pregunta": "¿Actúas como persona consumidora?",
                "opcion_si": "TRANS-003",
                "opcion_no": "SOL-TRANS-FIN",
                "explicacion": "Actúas como consumidor si viajas por motivos personales, no profesionales.",
                "es_solucion": false
            },
            "TRANS-003": {
                "id": "TRANS-003",
                "sector": "Viajes y transportes",
                "subsector": "Transporte terrestre",
                "pregunta": "¿Has presentado reclamación a la empresa de transporte?",
                "opcion_si": "TRANS-004",
                "opcion_no": "SOL-TRANS-RECLAMAR",
                "explicacion": "Presenta reclamación por escrito con acuse de recibo. Muchas empresas tienen hojas de reclamaciones.",
                "es_solucion": false
            },
            "TRANS-004": {
                "id": "TRANS-004",
                "sector": "Viajes y transportes",
                "subsector": "Transporte terrestre",
                "pregunta": "¿Has recibido respuesta satisfactoria en el plazo de un mes?",
                "opcion_si": "SOL-TRANS-RESUELTO",
                "opcion_no": "SOL-TRANS-OPCIONES",
                "es_solucion": false
            },
            
            // === SUMINISTROS ===
            "SUM-ORIENT": {
                "id": "SUM-ORIENT",
                "sector": "Suministros",
                "pregunta": "¿Tienes un problema con tus suministros (electricidad, agua, gas, teléfono)?",
                "primera_pregunta_sector": true,
                "opcion_si": "SUM-001",
                "opcion_no": "SUM-001",
                "es_solucion": false
            },
            "SUM-001": {
                "id": "SUM-001",
                "sector": "Suministros",
                "pregunta": "¿Actúas como persona consumidora?",
                "opcion_si": "SUM-002",
                "opcion_no": "SOL-SUM-NO-CONSUMIDOR",
                "explicacion": "Actúas como consumidor si el suministro es para tu vivienda particular, no para actividad empresarial.",
                "es_solucion": false
            },
            "SUM-002": {
                "id": "SUM-002",
                "sector": "Suministros",
                "pregunta": "¿Has presentado reclamación a la empresa?",
                "opcion_si": "SUM-003",
                "opcion_no": "SOL-SUM-RECLAMAR",
                "explicacion": "Presenta reclamación a la compañía suministradora. Muchas tienen formularios específicos en sus webs.",
                "es_solucion": false
            },
            "SUM-003": {
                "id": "SUM-003",
                "sector": "Suministros",
                "pregunta": "¿Has recibido respuesta satisfactoria?",
                "opcion_si": "SOL-SUM-RESUELTO",
                "opcion_no": "SOL-SUM-OPCIONES",
                "es_solucion": false
            },
            
            // === COMPRAS ===
            "COM-ORIENT": {
                "id": "COM-ORIENT",
                "sector": "Compras",
                "pregunta": "¿Tienes un problema con una compra (tienda física, online, garantías)?",
                "primera_pregunta_sector": true,
                "opcion_si": "COM-001",
                "opcion_no": "COM-001",
                "es_solucion": false
            },
            "COM-001": {
                "id": "COM-001",
                "sector": "Compras",
                "pregunta": "¿Actúas como persona consumidora?",
                "opcion_si": "COM-002",
                "opcion_no": "SOL-COM-NO-CONSUMIDOR",
                "explicacion": "Actúas como consumidor si compras para uso personal o familiar, no para revender o usar en negocio.",
                "es_solucion": false
            },
            "COM-002": {
                "id": "COM-002",
                "sector": "Compras",
                "pregunta": "¿Has presentado reclamación a la empresa?",
                "opcion_si": "COM-003",
                "opcion_no": "SOL-COM-RECLAMAR",
                "explicacion": "Presenta reclamación al vendedor por escrito. Si es online, guarda todos los emails y capturas de pantalla.",
                "es_solucion": false
            },
            "COM-003": {
                "id": "COM-003",
                "sector": "Compras",
                "pregunta": "¿Has recibido respuesta satisfactoria?",
                "opcion_si": "SOL-COM-RESUELTO",
                "opcion_no": "SOL-COM-OPCIONES",
                "es_solucion": false
            },
            
            // === PROTECCIÁ“N DE DATOS ===
            "DAT-ORIENT": {
                "id": "DAT-ORIENT",
                "sector": "Protección de datos personales",
                "pregunta": "¿Tienes un problema relacionado con protección de datos personales?",
                "primera_pregunta_sector": true,
                "opcion_si": "DAT-001",
                "opcion_no": "DAT-001",
                "es_solucion": false
            },
            "DAT-001": {
                "id": "DAT-001",
                "sector": "Protección de datos personales",
                "pregunta": "¿Has intentado ejercer tus derechos RGPD ante la empresa?",
                "opcion_si": "DAT-002",
                "opcion_no": "SOL-DAT-EJERCER",
                "explicacion": "Tienes derecho de acceso, rectificación, supresión, oposición, limitación y portabilidad de tus datos personales.",
                "es_solucion": false
            },
            "DAT-002": {
                "id": "DAT-002",
                "sector": "Protección de datos personales",
                "pregunta": "¿Has recibido respuesta satisfactoria?",
                "opcion_si": "SOL-DAT-RESUELTO",
                "opcion_no": "SOL-DAT-AEPD",
                "es_solucion": false
            },
            
            // === TURISMO ===
            "TUR-ORIENT": {
                "id": "TUR-ORIENT",
                "sector": "Turismo",
                "pregunta": "¿Tienes un problema con servicios turísticos (hotel, camping, restaurante)?",
                "primera_pregunta_sector": true,
                "opcion_si": "TUR-001",
                "opcion_no": "TUR-001",
                "es_solucion": false
            },
            "TUR-001": {
                "id": "TUR-001",
                "sector": "Turismo",
                "pregunta": "¿Actúas como persona consumidora?",
                "opcion_si": "TUR-002",
                "opcion_no": "SOL-TUR-NO-CONSUMIDOR",
                "explicacion": "Actúas como consumidor si contratas servicios turísticos para uso personal o familiar.",
                "es_solucion": false
            },
            "TUR-002": {
                "id": "TUR-002",
                "sector": "Turismo",
                "pregunta": "¿Has presentado reclamación al establecimiento?",
                "opcion_si": "TUR-003",
                "opcion_no": "SOL-TUR-RECLAMAR",
                "explicacion": "Los establecimientos turísticos deben tener hojas de reclamaciones disponibles para clientes.",
                "es_solucion": false
            },
            "TUR-003": {
                "id": "TUR-003",
                "sector": "Turismo",
                "pregunta": "¿Has recibido respuesta satisfactoria?",
                "opcion_si": "SOL-TUR-RESUELTO",
                "opcion_no": "SOL-TUR-OPCIONES",
                "es_solucion": false
            },
            
            // === SERVICIOS VARIOS ===
            "SER-ORIENT": {
                "id": "SER-ORIENT",
                "sector": "Servicios varios",
                "pregunta": "¿Tienes un problema con servicios (reparaciones, mudanzas, academias)?",
                "primera_pregunta_sector": true,
                "opcion_si": "SER-001",
                "opcion_no": "SER-001",
                "es_solucion": false
            },
            "SER-001": {
                "id": "SER-001",
                "sector": "Servicios varios",
                "pregunta": "¿Actúas como persona consumidora?",
                "opcion_si": "SER-002",
                "opcion_no": "SOL-SER-NO-CONSUMIDOR",
                "explicacion": "Actúas como consumidor si contratas el servicio para uso personal o familiar.",
                "es_solucion": false
            },
            "SER-002": {
                "id": "SER-002",
                "sector": "Servicios varios",
                "pregunta": "¿Has presentado reclamación a la empresa?",
                "opcion_si": "SER-003",
                "opcion_no": "SOL-SER-RECLAMAR",
                "explicacion": "Presenta reclamación por escrito. Exige siempre factura y presupuesto detallado antes del servicio.",
                "es_solucion": false
            },
            "SER-003": {
                "id": "SER-003",
                "sector": "Servicios varios",
                "pregunta": "¿Has recibido respuesta satisfactoria?",
                "opcion_si": "SOL-SER-RESUELTO",
                "opcion_no": "SOL-SER-OPCIONES",
                "es_solucion": false
            },
            
            // === OTROS ===
            "OTR-ORIENT": {
                "id": "OTR-ORIENT",
                "sector": "Otros",
                "pregunta": "¿Tienes una consulta de consumo que no encaja en las categorías anteriores?",
                "primera_pregunta_sector": true,
                "opcion_si": "OTR-001",
                "opcion_no": "OTR-001",
                "es_solucion": false
            },
            "OTR-001": {
                "id": "OTR-001",
                "sector": "Otros",
                "pregunta": "¿Actúas como persona consumidora?",
                "opcion_si": "OTR-002",
                "opcion_no": "SOL-OTR-NO-CONSUMIDOR",
                "es_solucion": false
            },
            "OTR-002": {
                "id": "OTR-002",
                "sector": "Otros",
                "pregunta": "¿Has presentado reclamación a la empresa?",
                "opcion_si": "OTR-003",
                "opcion_no": "SOL-OTR-RECLAMAR",
                "es_solucion": false
            },
            "OTR-003": {
                "id": "OTR-003",
                "sector": "Otros",
                "pregunta": "¿Has recibido respuesta satisfactoria?",
                "opcion_si": "SOL-OTR-RESUELTO",
                "opcion_no": "SOL-OTR-OPCIONES",
                "es_solucion": false
            },
            
            // === SOLUCIONES ===
            // Vivienda
            "SOL-VIV-INFO": {
                "id": "SOL-VIV-INFO",
                "es_solucion": true,
                "texto_solucion": "Puedes consultar nuestro portal de información al consumidor para conocer tus derechos en materia de vivienda."
            },
            "SOL-VIV-NO-CONSUMIDOR": {
                "id": "SOL-VIV-NO-CONSUMIDOR",
                "es_solucion": true,
                "texto_solucion": "Si no actúas como consumidor, deberás dirigir tu consulta a la jurisdicción civil ordinaria."
            },
            "SOL-VIV-RECLAMAR": {
                "id": "SOL-VIV-RECLAMAR",
                "es_solucion": true,
                "texto_solucion": "Presenta reclamación formal a la empresa por correo con acuse de recibo, burofax o correo electrónico. También puedes solicitar apoyo de OMIC o tu Comunidad Autónoma.",
                "sector_reclamacion": "Vivienda"
            },
            "SOL-VIV-RESUELTO": {
                "id": "SOL-VIV-RESUELTO",
                "es_solucion": true,
                "texto_solucion": "¡Excelente! Tu problema se ha resuelto satisfactoriamente."
            },
            "SOL-VIV-OPCIONES": {
                "id": "SOL-VIV-OPCIONES",
                "es_solucion": true,
                "texto_solucion": "Puedes acudir al arbitraje de consumo (gratuito), mediación o vía judicial. También consulta con OMIC o tu Comunidad Autónoma para orientación específica.",
                "sector_reclamacion": "Vivienda"
            },
            
            // Seguros
            "SOL-SEG-FIN": {
                "id": "SOL-SEG-FIN",
                "es_solucion": true,
                "texto_solucion": "Si no tienes un problema con seguros o no actúas como consumidor, este procedimiento no aplica."
            },
            "SOL-SEG-RECLAMAR": {
                "id": "SOL-SEG-RECLAMAR",
                "es_solucion": true,
                "texto_solucion": "Presenta reclamación al Servicio de Atención al Cliente de la aseguradora de forma escrita y fehaciente: correo postal con acuse, burofax, o email con confirmación.",
                "sector_reclamacion": "Seguros"
            },
            "SOL-SEG-RESUELTO": {
                "id": "SOL-SEG-RESUELTO",
                "es_solucion": true,
                "texto_solucion": "¡Perfecto! Tu problema con el seguro se ha resuelto."
            },
            "SOL-SEG-DEFENSOR": {
                "id": "SOL-SEG-DEFENSOR",
                "es_solucion": true,
                "texto_solucion": "Puedes dirigirte al Defensor del Asegurado de tu entidad o pasar directamente a reclamar ante la Dirección General de Seguros y Fondos de Pensiones.",
                "sector_reclamacion": "Seguros"
            },
            "SOL-SEG-OPCIONES": {
                "id": "SOL-SEG-OPCIONES",
                "es_solucion": true,
                "texto_solucion": "Puedes reclamar ante la Dirección General de Seguros y Fondos de Pensiones, acudir al arbitraje de consumo, mediación o vía judicial.",
                "sector_reclamacion": "Seguros"
            },
            
            // Banca
            "SOL-BANCA-FIN": {
                "id": "SOL-BANCA-FIN",
                "es_solucion": true,
                "texto_solucion": "Si no tienes un problema con un banco o no actúas como consumidor, este procedimiento no aplica."
            },
            "SOL-BANCA-RECLAMAR": {
                "id": "SOL-BANCA-RECLAMAR",
                "es_solucion": true,
                "texto_solucion": "Presenta reclamación al Servicio de Atención al Cliente del banco de forma escrita y fehaciente.",
                "sector_reclamacion": "Banca"
            },
            "SOL-BANCA-RESUELTO": {
                "id": "SOL-BANCA-RESUELTO",
                "es_solucion": true,
                "texto_solucion": "¡Perfecto! Tu problema bancario se ha resuelto."
            },
            "SOL-BANCA-CNMV": {
                "id": "SOL-BANCA-CNMV",
                "es_solucion": true,
                "texto_solucion": "Para servicios de inversión, puedes reclamar ante la Comisión Nacional del Mercado de Valores (CNMV), acudir al arbitraje de consumo o la vía judicial.",
                "sector_reclamacion": "Banca-CNMV"
            },
            "SOL-BANCA-BDE": {
                "id": "SOL-BANCA-BDE",
                "es_solucion": true,
                "texto_solucion": "Puedes reclamar ante el Banco de España, acudir al arbitraje de consumo, mediación o vía judicial.",
                "sector_reclamacion": "Banca"
            },
            
            // Vuelos
            "SOL-VUELO-FIN": {
                "id": "SOL-VUELO-FIN",
                "es_solucion": true,
                "texto_solucion": "Si no tienes un problema con un vuelo o no actúas como consumidor, este procedimiento no aplica."
            },
            "SOL-VUELO-RECLAMAR": {
                "id": "SOL-VUELO-RECLAMAR",
                "es_solucion": true,
                "texto_solucion": "Presenta reclamación a la compañía aérea de forma escrita y fehaciente (correo postal, email, formulario web).",
                "sector_reclamacion": "Vuelos"
            },
            "SOL-VUELO-RESUELTO": {
                "id": "SOL-VUELO-RESUELTO",
                "es_solucion": true,
                "texto_solucion": "¡Perfecto! Tu problema con el vuelo se ha resuelto."
            },
            "SOL-VUELO-AESA": {
                "id": "SOL-VUELO-AESA",
                "es_solucion": true,
                "texto_solucion": "Puedes reclamar ante la Agencia Estatal de Seguridad Aérea (AESA) por retrasos, cancelaciones o denegación de embarque. También está el arbitraje de consumo o vía judicial.",
                "sector_reclamacion": "Vuelos"
            },
            "SOL-VUELO-OPCIONES": {
                "id": "SOL-VUELO-OPCIONES",
                "es_solucion": true,
                "texto_solucion": "Puedes acudir al arbitraje de consumo, mediación, Centro Europeo del Consumidor (si es vuelo internacional) o vía judicial.",
                "sector_reclamacion": "Vuelos"
            },
            
            // Transporte terrestre
            "SOL-TRANS-FIN": {
                "id": "SOL-TRANS-FIN",
                "es_solucion": true,
                "texto_solucion": "Si no tienes un problema con transporte terrestre o no actúas como consumidor, este procedimiento no aplica."
            },
            "SOL-TRANS-RECLAMAR": {
                "id": "SOL-TRANS-RECLAMAR",
                "es_solucion": true,
                "texto_solucion": "Presenta reclamación a la empresa de transporte de forma escrita y fehaciente.",
                "sector_reclamacion": "Transporte"
            },
            "SOL-TRANS-RESUELTO": {
                "id": "SOL-TRANS-RESUELTO",
                "es_solucion": true,
                "texto_solucion": "¡Perfecto! Tu problema con el transporte se ha resuelto."
            },
            "SOL-TRANS-OPCIONES": {
                "id": "SOL-TRANS-OPCIONES",
                "es_solucion": true,
                "texto_solucion": "Puedes acudir a las Juntas Arbitrales de Transporte, arbitraje de consumo, mediación o vía judicial.",
                "sector_reclamacion": "Transporte"
            },
            
            // Suministros
            "SOL-SUM-NO-CONSUMIDOR": {
                "id": "SOL-SUM-NO-CONSUMIDOR",
                "es_solucion": true,
                "texto_solucion": "Si no actúas como consumidor, deberás dirigir tu reclamación directamente a la empresa o a la jurisdicción civil."
            },
            "SOL-SUM-RECLAMAR": {
                "id": "SOL-SUM-RECLAMAR",
                "es_solucion": true,
                "texto_solucion": "Presenta reclamación a la compañía suministradora de forma escrita y fehaciente.",
                "sector_reclamacion": "Suministros"
            },
            "SOL-SUM-RESUELTO": {
                "id": "SOL-SUM-RESUELTO",
                "es_solucion": true,
                "texto_solucion": "¡Excelente! Tu problema con el suministro se ha resuelto."
            },
            "SOL-SUM-OPCIONES": {
                "id": "SOL-SUM-OPCIONES",
                "es_solucion": true,
                "texto_solucion": "Puedes reclamar ante el órgano competente de tu Comunidad Autónoma para suministros, acudir al arbitraje de consumo o vía judicial.",
                "sector_reclamacion": "Suministros"
            },
            
            // Compras
            "SOL-COM-NO-CONSUMIDOR": {
                "id": "SOL-COM-NO-CONSUMIDOR",
                "es_solucion": true,
                "texto_solucion": "Si no actúas como consumidor, deberás dirigir tu reclamación a la jurisdicción civil ordinaria."
            },
            "SOL-COM-RECLAMAR": {
                "id": "SOL-COM-RECLAMAR",
                "es_solucion": true,
                "texto_solucion": "Presenta reclamación a la empresa vendedora de forma escrita y fehaciente. Si es comercio electrónico, también puedes usar Confianza Online.",
                "sector_reclamacion": "Compras"
            },
            "SOL-COM-RESUELTO": {
                "id": "SOL-COM-RESUELTO",
                "es_solucion": true,
                "texto_solucion": "¡Excelente! Tu problema con la compra se ha resuelto."
            },
            "SOL-COM-OPCIONES": {
                "id": "SOL-COM-OPCIONES",
                "es_solucion": true,
                "texto_solucion": "Puedes acudir al arbitraje de consumo, mediación, Confianza Online (si es e-commerce) o vía judicial.",
                "sector_reclamacion": "Compras"
            },
            
            // Protección de datos
            "SOL-DAT-EJERCER": {
                "id": "SOL-DAT-EJERCER",
                "es_solucion": true,
                "texto_solucion": "Debes ejercer tus derechos RGPD (acceso, rectificación, supresión, etc.) ante la empresa de forma escrita y fehaciente. La empresa tiene un mes para responder.",
                "sector_reclamacion": "Datos"
            },
            "SOL-DAT-RESUELTO": {
                "id": "SOL-DAT-RESUELTO",
                "es_solucion": true,
                "texto_solucion": "¡Perfecto! Tu problema de protección de datos se ha resuelto."
            },
            "SOL-DAT-AEPD": {
                "id": "SOL-DAT-AEPD",
                "es_solucion": true,
                "texto_solucion": "Puedes presentar reclamación ante la Agencia Española de Protección de Datos (AEPD) a través de su sede electrónica.",
                "sector_reclamacion": "Datos"
            },
            
            // Turismo
            "SOL-TUR-NO-CONSUMIDOR": {
                "id": "SOL-TUR-NO-CONSUMIDOR",
                "es_solucion": true,
                "texto_solucion": "Si no actúas como consumidor, deberás dirigir tu reclamación a la jurisdicción civil ordinaria."
            },
            "SOL-TUR-RECLAMAR": {
                "id": "SOL-TUR-RECLAMAR",
                "es_solucion": true,
                "texto_solucion": "Presenta reclamación al establecimiento turístico de forma escrita y fehaciente. También puedes contactar con el órgano de turismo de tu Comunidad Autónoma.",
                "sector_reclamacion": "Turismo"
            },
            "SOL-TUR-RESUELTO": {
                "id": "SOL-TUR-RESUELTO",
                "es_solucion": true,
                "texto_solucion": "¡Excelente! Tu problema turístico se ha resuelto."
            },
            "SOL-TUR-OPCIONES": {
                "id": "SOL-TUR-OPCIONES",
                "es_solucion": true,
                "texto_solucion": "Puedes reclamar ante el órgano de turismo de tu Comunidad Autónoma, acudir al arbitraje de consumo o vía judicial.",
                "sector_reclamacion": "Turismo"
            },
            
            // Servicios varios
            "SOL-SER-NO-CONSUMIDOR": {
                "id": "SOL-SER-NO-CONSUMIDOR",
                "es_solucion": true,
                "texto_solucion": "Si no actúas como consumidor, deberás dirigir tu reclamación a la jurisdicción civil ordinaria."
            },
            "SOL-SER-RECLAMAR": {
                "id": "SOL-SER-RECLAMAR",
                "es_solucion": true,
                "texto_solucion": "Presenta reclamación a la empresa prestadora del servicio de forma escrita y fehaciente.",
                "sector_reclamacion": "Servicios"
            },
            "SOL-SER-RESUELTO": {
                "id": "SOL-SER-RESUELTO",
                "es_solucion": true,
                "texto_solucion": "¡Excelente! Tu problema con el servicio se ha resuelto."
            },
            "SOL-SER-OPCIONES": {
                "id": "SOL-SER-OPCIONES",
                "es_solucion": true,
                "texto_solucion": "Puedes acudir al arbitraje de consumo, mediación o vía judicial.",
                "sector_reclamacion": "Servicios"
            },
            
            // Otros
            "SOL-OTR-NO-CONSUMIDOR": {
                "id": "SOL-OTR-NO-CONSUMIDOR",
                "es_solucion": true,
                "texto_solucion": "Si no actúas como consumidor, deberás dirigir tu reclamación a la jurisdicción civil ordinaria."
            },
            "SOL-OTR-RECLAMAR": {
                "id": "SOL-OTR-RECLAMAR",
                "es_solucion": true,
                "texto_solucion": "Presenta reclamación a la empresa de forma escrita y fehaciente. También puedes solicitar apoyo de OMIC.",
                "sector_reclamacion": "General"
            },
            "SOL-OTR-RESUELTO": {
                "id": "SOL-OTR-RESUELTO",
                "es_solucion": true,
                "texto_solucion": "¡Excelente! Tu problema se ha resuelto."
            },
            "SOL-OTR-OPCIONES": {
                "id": "SOL-OTR-OPCIONES",
                "es_solucion": true,
                "texto_solucion": "Puedes acudir al arbitraje de consumo, mediación o vía judicial. Consulta con OMIC para orientación específica.",
                "sector_reclamacion": "General"
            }
        };

export default ARBOL_DECISIONES;
