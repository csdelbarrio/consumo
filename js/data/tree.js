/**
 * Árbol de decisiones — v4 (revisión 2026-10-20)
 * Generado desde arbol-decisiones-sac-v4.json. No editar a mano: editar el JSON y regenerar.
 */

export const ARBOL_DECISIONES = {
    "VIV-ORIENT": {
        "id": "VIV-ORIENT",
        "sector": "Vivienda",
        "pregunta": "¿Con quién tienes el problema de vivienda?",
        "es_solucion": false,
        "opciones_custom": [
            {
                "texto": "Con una promotora, constructora, inmobiliaria o arrendador profesional",
                "siguiente": "VIV-ESTADO"
            },
            {
                "texto": "Con un vendedor o arrendador que actúa como particular",
                "siguiente": "SOL-VIV-PARTICULAR"
            },
            {
                "texto": "No sé si actúa como profesional",
                "siguiente": "SOL-VIV-IDENTIFICAR"
            }
        ],
        "explicacion": "Aunque el propietario sea particular, puedes reclamar en consumo por los servicios de una inmobiliaria que haya intervenido.",
        "primera_pregunta_sector": true
    },
    "VIV-ESTADO": {
        "id": "VIV-ESTADO",
        "sector": "Vivienda",
        "pregunta": "¿En qué punto está tu reclamación?",
        "es_solucion": false,
        "opciones_custom": [
            {
                "texto": "Aún no he reclamado a la empresa",
                "siguiente": "SOL-VIV-RECLAMAR"
            },
            {
                "texto": "Ya he reclamado y el problema continúa",
                "siguiente": "SOL-VIV-OPCIONES"
            },
            {
                "texto": "Quiero comunicar una posible infracción o pedir orientación",
                "siguiente": "SOL-VIV-ORIENTACION"
            }
        ]
    },
    "SOL-VIV-RECLAMAR": {
        "id": "SOL-VIV-RECLAMAR",
        "sector": "Vivienda",
        "es_solucion": true,
        "texto_solucion": "Primero, reclama a la empresa\nExplica por escrito qué ha ocurrido y qué solución pides. Guarda el justificante y adjunta contrato, factura y pruebas. Si intervino una plataforma, reclama a cada empresa por las obligaciones que le correspondan.\n\nOrganismos públicos de consumo\nPuedes pedir ayuda desde ahora a consumo de tu comunidad autónoma o tu OMIC. Si la empresa no soluciona el problema, presenta allí tu reclamación con la documentación.\n\nSi necesitas otras vías\nSegún el asunto, también puedes valorar el arbitraje de consumo o acudir a los tribunales. No es necesario pasar sucesivamente por todas las vías.",
        "sector_reclamacion": "Consumo",
        "bloques_solucion": [
            {
                "titulo": "Primero, reclama a la empresa",
                "texto": "Explica por escrito qué ha ocurrido y qué solución pides. Guarda el justificante y adjunta contrato, factura y pruebas. Si intervino una plataforma, reclama a cada empresa por las obligaciones que le correspondan.",
                "enlaces": []
            },
            {
                "titulo": "Organismos públicos de consumo",
                "texto": "Puedes pedir ayuda desde ahora a consumo de tu comunidad autónoma o tu OMIC. Si la empresa no soluciona el problema, presenta allí tu reclamación con la documentación.",
                "enlaces": [
                    {
                        "texto": "Localiza el organismo de consumo de tu comunidad autónoma",
                        "clave": "Consumo"
                    },
                    {
                        "texto": "Busca tu OMIC u oficina local de consumo",
                        "clave": "OMIC"
                    }
                ]
            },
            {
                "titulo": "Si necesitas otras vías",
                "texto": "Según el asunto, también puedes valorar el arbitraje de consumo o acudir a los tribunales. No es necesario pasar sucesivamente por todas las vías.",
                "enlaces": [
                    {
                        "texto": "Consulta cómo funciona el arbitraje y dónde solicitarlo",
                        "clave": "Arbitraje"
                    },
                    {
                        "texto": "Infórmate sobre el intento de acuerdo previo al juicio",
                        "clave": "Antes-del-juicio"
                    }
                ]
            }
        ]
    },
    "SOL-VIV-OPCIONES": {
        "id": "SOL-VIV-OPCIONES",
        "sector": "Vivienda",
        "es_solucion": true,
        "texto_solucion": "Organismos públicos de consumo\nSi ya has reclamado a la empresa y el problema continúa, puedes presentar tu reclamación ante consumo de tu comunidad autónoma o tu OMIC. Aporta el contrato, las pruebas y la reclamación previa, junto con la respuesta si la recibiste. Estos servicios pueden orientarte y tramitar tu reclamación.\n\nSi la empresa está en otro país europeo\nSi resides en España y la empresa a la que reclamas está establecida en otro país de la UE, Islandia o Noruega, puedes consultar si CEC-España puede ayudarte después de tu reclamación escrita a la empresa. En su web encontrarás las condiciones de intervención.\n\nOtra vía: arbitraje de consumo\nPuedes solicitar arbitraje de consumo si el asunto entra en su ámbito y la empresa está adherida para ese caso o acepta someterse. Es una vía gratuita y su laudo es vinculante. En la web encontrarás los requisitos y la Junta a la que dirigirte.\n\nVía judicial\nTambién puedes acudir a los tribunales, sin tener que agotar antes todas las vías administrativas. Antes de demandar, comprueba el intento de acuerdo previo que corresponda. El arbitraje y el juicio son vías alternativas para resolver el mismo conflicto.",
        "sector_reclamacion": "Consumo",
        "bloques_solucion": [
            {
                "titulo": "Organismos públicos de consumo",
                "texto": "Si ya has reclamado a la empresa y el problema continúa, puedes presentar tu reclamación ante consumo de tu comunidad autónoma o tu OMIC. Aporta el contrato, las pruebas y la reclamación previa, junto con la respuesta si la recibiste. Estos servicios pueden orientarte y tramitar tu reclamación.",
                "enlaces": [
                    {
                        "texto": "Localiza el organismo de consumo de tu comunidad autónoma",
                        "clave": "Consumo"
                    },
                    {
                        "texto": "Busca tu OMIC u oficina local de consumo",
                        "clave": "OMIC"
                    }
                ]
            },
            {
                "titulo": "Si la empresa está en otro país europeo",
                "texto": "Si resides en España y la empresa a la que reclamas está establecida en otro país de la UE, Islandia o Noruega, puedes consultar si CEC-España puede ayudarte después de tu reclamación escrita a la empresa. En su web encontrarás las condiciones de intervención.",
                "enlaces": [
                    {
                        "texto": "Conoce los servicios de CEC-España",
                        "clave": "CEC-informacion"
                    },
                    {
                        "texto": "Solicita asistencia a CEC-España",
                        "clave": "CEC"
                    }
                ]
            },
            {
                "titulo": "Otra vía: arbitraje de consumo",
                "texto": "Puedes solicitar arbitraje de consumo si el asunto entra en su ámbito y la empresa está adherida para ese caso o acepta someterse. Es una vía gratuita y su laudo es vinculante. En la web encontrarás los requisitos y la Junta a la que dirigirte.",
                "enlaces": [
                    {
                        "texto": "Consulta cómo funciona el arbitraje y dónde solicitarlo",
                        "clave": "Arbitraje"
                    }
                ]
            },
            {
                "titulo": "Vía judicial",
                "texto": "También puedes acudir a los tribunales, sin tener que agotar antes todas las vías administrativas. Antes de demandar, comprueba el intento de acuerdo previo que corresponda. El arbitraje y el juicio son vías alternativas para resolver el mismo conflicto.",
                "enlaces": [
                    {
                        "texto": "Infórmate sobre el intento de acuerdo previo al juicio",
                        "clave": "Antes-del-juicio"
                    }
                ]
            }
        ]
    },
    "SOL-VIV-ORIENTACION": {
        "id": "SOL-VIV-ORIENTACION",
        "sector": "Vivienda",
        "es_solucion": true,
        "texto_solucion": "Pide orientación o comunica los hechos\nDirígete a consumo de tu comunidad autónoma o tu OMIC. Identifica a la empresa y aporta las pruebas. Para comunicar una posible infracción no tienes que esperar una respuesta empresarial. Si además pides devolución o indemnización, indícalo expresamente: comunicar una infracción no garantiza por sí solo que recuperes el dinero.",
        "sector_reclamacion": "Consumo",
        "bloques_solucion": [
            {
                "titulo": "Pide orientación o comunica los hechos",
                "texto": "Dirígete a consumo de tu comunidad autónoma o tu OMIC. Identifica a la empresa y aporta las pruebas. Para comunicar una posible infracción no tienes que esperar una respuesta empresarial. Si además pides devolución o indemnización, indícalo expresamente: comunicar una infracción no garantiza por sí solo que recuperes el dinero.",
                "enlaces": [
                    {
                        "texto": "Localiza el organismo de consumo de tu comunidad autónoma",
                        "clave": "Consumo"
                    },
                    {
                        "texto": "Busca tu OMIC u oficina local de consumo",
                        "clave": "OMIC"
                    }
                ]
            }
        ]
    },
    "SOL-VIV-PARTICULAR": {
        "id": "SOL-VIV-PARTICULAR",
        "sector": "Vivienda",
        "es_solucion": true,
        "texto_solucion": "Conflicto entre particulares\nContacta con la otra parte y guarda las pruebas. Puedes pedir orientación al servicio público de vivienda de tu comunidad autónoma o ayuntamiento y buscar asesoramiento jurídico para negociar o reclamar el cumplimiento del contrato.\n\nVía judicial\nSi no se soluciona, puedes valorar la vía civil. Comprueba el intento de acuerdo previo aplicable. Si has recibido una demanda o hay riesgo inmediato de perder tu vivienda, busca asistencia jurídica sin esperar.\n\nSi intervino una inmobiliaria\nPuedes reclamar ante consumo por los servicios de la inmobiliaria, aunque el propietario actúe como particular.",
        "sector_reclamacion": "Antes-del-juicio",
        "bloques_solucion": [
            {
                "titulo": "Conflicto entre particulares",
                "texto": "Contacta con la otra parte y guarda las pruebas. Puedes pedir orientación al servicio público de vivienda de tu comunidad autónoma o ayuntamiento y buscar asesoramiento jurídico para negociar o reclamar el cumplimiento del contrato.",
                "enlaces": []
            },
            {
                "titulo": "Vía judicial",
                "texto": "Si no se soluciona, puedes valorar la vía civil. Comprueba el intento de acuerdo previo aplicable. Si has recibido una demanda o hay riesgo inmediato de perder tu vivienda, busca asistencia jurídica sin esperar.",
                "enlaces": [
                    {
                        "texto": "Infórmate sobre el intento de acuerdo previo al juicio",
                        "clave": "Antes-del-juicio"
                    }
                ]
            },
            {
                "titulo": "Si intervino una inmobiliaria",
                "texto": "Puedes reclamar ante consumo por los servicios de la inmobiliaria, aunque el propietario actúe como particular.",
                "enlaces": [
                    {
                        "texto": "Localiza el organismo de consumo de tu comunidad autónoma",
                        "clave": "Consumo"
                    },
                    {
                        "texto": "Busca tu OMIC u oficina local de consumo",
                        "clave": "OMIC"
                    }
                ]
            }
        ]
    },
    "SOL-VIV-IDENTIFICAR": {
        "id": "SOL-VIV-IDENTIFICAR",
        "sector": "Vivienda",
        "es_solucion": true,
        "texto_solucion": "Te ayudan a identificar la vía\nPide orientación a consumo de tu comunidad autónoma o tu OMIC y aporta contrato, anuncios y datos de quien te cobra. Que el propietario sea una persona física no basta para descartar que actúe profesionalmente. Según el caso, te orientarán hacia consumo, vivienda o las vías civiles.",
        "sector_reclamacion": "Consumo",
        "bloques_solucion": [
            {
                "titulo": "Te ayudan a identificar la vía",
                "texto": "Pide orientación a consumo de tu comunidad autónoma o tu OMIC y aporta contrato, anuncios y datos de quien te cobra. Que el propietario sea una persona física no basta para descartar que actúe profesionalmente. Según el caso, te orientarán hacia consumo, vivienda o las vías civiles.",
                "enlaces": [
                    {
                        "texto": "Localiza el organismo de consumo de tu comunidad autónoma",
                        "clave": "Consumo"
                    },
                    {
                        "texto": "Busca tu OMIC u oficina local de consumo",
                        "clave": "OMIC"
                    }
                ]
            }
        ]
    },
    "BS-ORIENT": {
        "id": "BS-ORIENT",
        "sector": "Banca y seguros",
        "pregunta": "¿Sobre qué producto o servicio quieres reclamar?",
        "es_solucion": false,
        "opciones_custom": [
            {
                "texto": "Cuenta, tarjeta, transferencia, préstamo o hipoteca",
                "siguiente": "SOL-BANCA-BDE"
            },
            {
                "texto": "Acciones, fondos de inversión u otros servicios de inversión",
                "siguiente": "SOL-BANCA-CNMV"
            },
            {
                "texto": "Seguro o plan de pensiones",
                "siguiente": "SOL-SEG-OPCIONES"
            },
            {
                "texto": "No sé qué tipo de producto es",
                "siguiente": "SOL-BS-IDENTIFICAR"
            }
        ],
        "primera_pregunta_sector": true
    },
    "SOL-BANCA-BDE": {
        "id": "SOL-BANCA-BDE",
        "sector": "Banca y seguros",
        "es_solucion": true,
        "texto_solucion": "Primero, reclama a la entidad\nPresenta tu reclamación documentada al Servicio de Atención al Cliente o, en su caso, a su defensor. El plazo de respuesta es de 15 días hábiles para servicios de pago, excepcionalmente hasta un mes con justificación, y de un mes para otras reclamaciones de consumidores.\n\nDespués, Banco de España\nSi rechazan tu petición o vence el plazo sin respuesta, puedes acudir al Banco de España. No dejes pasar un año desde la reclamación a la entidad. Examina materias de transparencia y buenas prácticas dentro de su competencia; consulta también su orientación para entidades de otros países.\n\nVía judicial\nSi necesitas una decisión judicial sobre el contrato o reclamar daños, puedes acudir a los tribunales sin agotar todos los organismos administrativos. Comprueba el requisito previo aplicable. El informe del supervisor no equivale a una sentencia ni obliga por sí solo a indemnizar.",
        "sector_reclamacion": "Banca",
        "subsector": "Banca",
        "bloques_solucion": [
            {
                "titulo": "Primero, reclama a la entidad",
                "texto": "Presenta tu reclamación documentada al Servicio de Atención al Cliente o, en su caso, a su defensor. El plazo de respuesta es de 15 días hábiles para servicios de pago, excepcionalmente hasta un mes con justificación, y de un mes para otras reclamaciones de consumidores.",
                "enlaces": []
            },
            {
                "titulo": "Después, Banco de España",
                "texto": "Si rechazan tu petición o vence el plazo sin respuesta, puedes acudir al Banco de España. No dejes pasar un año desde la reclamación a la entidad. Examina materias de transparencia y buenas prácticas dentro de su competencia; consulta también su orientación para entidades de otros países.",
                "enlaces": [
                    {
                        "texto": "Consulta cómo reclamar ante el Banco de España",
                        "clave": "Banca"
                    }
                ]
            },
            {
                "titulo": "Vía judicial",
                "texto": "Si necesitas una decisión judicial sobre el contrato o reclamar daños, puedes acudir a los tribunales sin agotar todos los organismos administrativos. Comprueba el requisito previo aplicable. El informe del supervisor no equivale a una sentencia ni obliga por sí solo a indemnizar.",
                "enlaces": [
                    {
                        "texto": "Infórmate sobre el intento de acuerdo previo al juicio",
                        "clave": "Antes-del-juicio"
                    }
                ]
            }
        ]
    },
    "SOL-BANCA-CNMV": {
        "id": "SOL-BANCA-CNMV",
        "sector": "Banca y seguros",
        "es_solucion": true,
        "texto_solucion": "Primero, reclama a la entidad\nReclama por escrito al Servicio de Atención al Cliente del prestador del servicio de inversión o a su defensor. Conserva el contrato, los documentos del producto y el justificante.\n\nDespués, CNMV\nSi la respuesta no te satisface o transcurre un mes sin respuesta, puedes reclamar ante la CNMV. Su plazo de un año se cuenta desde la respuesta si se emitió dentro del primer mes o, en otro caso, desde que terminó ese mes. Su web explica la presentación y la ayuda de FIN-NET para controversias financieras europeas.\n\nVía judicial\nSi necesitas una decisión judicial sobre el contrato o reclamar daños, puedes acudir a los tribunales sin agotar todos los organismos administrativos. Comprueba el requisito previo aplicable. El informe del supervisor no equivale a una sentencia ni obliga por sí solo a indemnizar.",
        "sector_reclamacion": "Banca-CNMV",
        "subsector": "Inversión",
        "bloques_solucion": [
            {
                "titulo": "Primero, reclama a la entidad",
                "texto": "Reclama por escrito al Servicio de Atención al Cliente del prestador del servicio de inversión o a su defensor. Conserva el contrato, los documentos del producto y el justificante.",
                "enlaces": []
            },
            {
                "titulo": "Después, CNMV",
                "texto": "Si la respuesta no te satisface o transcurre un mes sin respuesta, puedes reclamar ante la CNMV. Su plazo de un año se cuenta desde la respuesta si se emitió dentro del primer mes o, en otro caso, desde que terminó ese mes. Su web explica la presentación y la ayuda de FIN-NET para controversias financieras europeas.",
                "enlaces": [
                    {
                        "texto": "Consulta el procedimiento de reclamación ante la CNMV",
                        "clave": "Banca-CNMV"
                    }
                ]
            },
            {
                "titulo": "Vía judicial",
                "texto": "Si necesitas una decisión judicial sobre el contrato o reclamar daños, puedes acudir a los tribunales sin agotar todos los organismos administrativos. Comprueba el requisito previo aplicable. El informe del supervisor no equivale a una sentencia ni obliga por sí solo a indemnizar.",
                "enlaces": [
                    {
                        "texto": "Infórmate sobre el intento de acuerdo previo al juicio",
                        "clave": "Antes-del-juicio"
                    }
                ]
            }
        ]
    },
    "SOL-SEG-OPCIONES": {
        "id": "SOL-SEG-OPCIONES",
        "sector": "Banca y seguros",
        "es_solucion": true,
        "texto_solucion": "Primero, reclama a la entidad\nReclama por escrito al Servicio de Atención al Cliente de la aseguradora o de la entidad responsable del plan de pensiones, o a su defensor cuando corresponda. No necesitas agotar sucesivamente ambos.\n\nDespués, DGSFP\nSi rechazan tu petición o transcurre un mes sin respuesta y eres una persona consumidora, puedes acudir a la Dirección General de Seguros y Fondos de Pensiones. Consulta los documentos y requisitos de admisión; presenta la reclamación sin demora.\n\nVía judicial\nSi necesitas una decisión judicial sobre el contrato o reclamar daños, puedes acudir a los tribunales sin agotar todos los organismos administrativos. Comprueba el requisito previo aplicable. El informe del supervisor no equivale a una sentencia ni obliga por sí solo a indemnizar.",
        "sector_reclamacion": "Seguros",
        "subsector": "Seguros y pensiones",
        "bloques_solucion": [
            {
                "titulo": "Primero, reclama a la entidad",
                "texto": "Reclama por escrito al Servicio de Atención al Cliente de la aseguradora o de la entidad responsable del plan de pensiones, o a su defensor cuando corresponda. No necesitas agotar sucesivamente ambos.",
                "enlaces": []
            },
            {
                "titulo": "Después, DGSFP",
                "texto": "Si rechazan tu petición o transcurre un mes sin respuesta y eres una persona consumidora, puedes acudir a la Dirección General de Seguros y Fondos de Pensiones. Consulta los documentos y requisitos de admisión; presenta la reclamación sin demora.",
                "enlaces": [
                    {
                        "texto": "Consulta cómo reclamar ante la DGSFP",
                        "clave": "Seguros"
                    }
                ]
            },
            {
                "titulo": "Vía judicial",
                "texto": "Si necesitas una decisión judicial sobre el contrato o reclamar daños, puedes acudir a los tribunales sin agotar todos los organismos administrativos. Comprueba el requisito previo aplicable. El informe del supervisor no equivale a una sentencia ni obliga por sí solo a indemnizar.",
                "enlaces": [
                    {
                        "texto": "Infórmate sobre el intento de acuerdo previo al juicio",
                        "clave": "Antes-del-juicio"
                    }
                ]
            }
        ]
    },
    "SOL-BS-IDENTIFICAR": {
        "id": "SOL-BS-IDENTIFICAR",
        "sector": "Banca y seguros",
        "es_solucion": true,
        "texto_solucion": "Identifica el producto y reclama\nConsulta el contrato y presenta la reclamación al Servicio de Atención al Cliente de la entidad. Consumo o tu OMIC puede ayudarte a identificar la vía.\n\nElige el supervisor correspondiente\nBanco de España: cuentas, pagos y préstamos. CNMV: servicios de inversión. DGSFP: seguros y pensiones. Cada procedimiento tiene sus requisitos; para una entidad de otro país europeo, consulta al supervisor sobre FIN-NET.",
        "sector_reclamacion": "Consumo",
        "bloques_solucion": [
            {
                "titulo": "Identifica el producto y reclama",
                "texto": "Consulta el contrato y presenta la reclamación al Servicio de Atención al Cliente de la entidad. Consumo o tu OMIC puede ayudarte a identificar la vía.",
                "enlaces": [
                    {
                        "texto": "Localiza el organismo de consumo de tu comunidad autónoma",
                        "clave": "Consumo"
                    },
                    {
                        "texto": "Busca tu OMIC u oficina local de consumo",
                        "clave": "OMIC"
                    }
                ]
            },
            {
                "titulo": "Elige el supervisor correspondiente",
                "texto": "Banco de España: cuentas, pagos y préstamos. CNMV: servicios de inversión. DGSFP: seguros y pensiones. Cada procedimiento tiene sus requisitos; para una entidad de otro país europeo, consulta al supervisor sobre FIN-NET.",
                "enlaces": [
                    {
                        "texto": "Consulta cómo reclamar ante el Banco de España",
                        "clave": "Banca"
                    },
                    {
                        "texto": "Consulta el procedimiento de reclamación ante la CNMV",
                        "clave": "Banca-CNMV"
                    },
                    {
                        "texto": "Consulta cómo reclamar ante la DGSFP",
                        "clave": "Seguros"
                    }
                ]
            }
        ]
    },
    "VT-ORIENT": {
        "id": "VT-ORIENT",
        "sector": "Viajes y transportes",
        "pregunta": "¿Con qué servicio tienes el problema?",
        "es_solucion": false,
        "opciones_custom": [
            {
                "texto": "Vuelo",
                "siguiente": "VT-VUELO-TIPO"
            },
            {
                "texto": "Tren",
                "siguiente": "SOL-VT-TREN"
            },
            {
                "texto": "Autobús, taxi, VTC u otro transporte terrestre",
                "siguiente": "SOL-VT-CARRETERA"
            },
            {
                "texto": "Barco o ferry",
                "siguiente": "VT-MAR-TIPO"
            },
            {
                "texto": "Alquiler de vehículo sin conductor",
                "siguiente": "VT-COCHE-ESTADO"
            },
            {
                "texto": "Viaje combinado: por ejemplo, transporte y hotel contratados como paquete",
                "siguiente": "SOL-VT-COMBINADO"
            }
        ],
        "explicacion": "Los derechos de los pasajeros también pueden protegerte si viajas por trabajo.",
        "primera_pregunta_sector": true
    },
    "VT-VUELO-TIPO": {
        "id": "VT-VUELO-TIPO",
        "sector": "Viajes y transportes",
        "pregunta": "¿Cuál es el problema principal del vuelo?",
        "es_solucion": false,
        "opciones_custom": [
            {
                "texto": "Cancelación, retraso, denegación de embarque o cambio a clase inferior",
                "siguiente": "SOL-VUELO-AESA"
            },
            {
                "texto": "Asistencia o discriminación por discapacidad o movilidad reducida",
                "siguiente": "SOL-VUELO-PMR"
            },
            {
                "texto": "Pérdida, daño o retraso del equipaje",
                "siguiente": "SOL-VUELO-EQUIPAJE"
            },
            {
                "texto": "Precio, cargos, reserva u otro problema contractual",
                "siguiente": "VT-AIRE-ESTADO"
            }
        ]
    },
    "SOL-VUELO-AESA": {
        "id": "SOL-VUELO-AESA",
        "sector": "Viajes y transportes",
        "es_solucion": true,
        "texto_solucion": "Primero, reclama a la aerolínea\nReclama a la compañía que operaba el vuelo y guarda billetes, comunicaciones y facturas. Si rechaza tu petición o pasa un mes sin respuesta, puedes acudir a la autoridad competente.\n\nDespués, AESA si el vuelo entra en su ámbito\nAESA conoce, en general, de salidas de España y de llegadas a España desde fuera de la UE operadas por compañías comunitarias. Hay reglas específicas para conexiones. Para incidencias desde el 2 de junio de 2023, tienes un año desde la reclamación previa para acudir a su vía alternativa; su decisión vincula a la compañía. Si corresponde otro país, consulta su autoridad.\n\nSi valoras acudir a juicio\nTambién puedes acudir a los tribunales. No inicies simultáneamente ante AESA y en juicio la resolución del mismo asunto. Para vuelos anteriores al 2 de junio de 2023 existe una vía informativa distinta.",
        "sector_reclamacion": "Vuelos",
        "subsector": "Vuelos",
        "bloques_solucion": [
            {
                "titulo": "Primero, reclama a la aerolínea",
                "texto": "Reclama a la compañía que operaba el vuelo y guarda billetes, comunicaciones y facturas. Si rechaza tu petición o pasa un mes sin respuesta, puedes acudir a la autoridad competente.",
                "enlaces": []
            },
            {
                "titulo": "Después, AESA si el vuelo entra en su ámbito",
                "texto": "AESA conoce, en general, de salidas de España y de llegadas a España desde fuera de la UE operadas por compañías comunitarias. Hay reglas específicas para conexiones. Para incidencias desde el 2 de junio de 2023, tienes un año desde la reclamación previa para acudir a su vía alternativa; su decisión vincula a la compañía. Si corresponde otro país, consulta su autoridad.",
                "enlaces": [
                    {
                        "texto": "Consulta el procedimiento y la competencia de AESA",
                        "clave": "Vuelos"
                    }
                ]
            },
            {
                "titulo": "Si valoras acudir a juicio",
                "texto": "También puedes acudir a los tribunales. No inicies simultáneamente ante AESA y en juicio la resolución del mismo asunto. Para vuelos anteriores al 2 de junio de 2023 existe una vía informativa distinta.",
                "enlaces": [
                    {
                        "texto": "Infórmate sobre el intento de acuerdo previo al juicio",
                        "clave": "Antes-del-juicio"
                    }
                ]
            }
        ]
    },
    "SOL-VUELO-PMR": {
        "id": "SOL-VUELO-PMR",
        "sector": "Viajes y transportes",
        "es_solucion": true,
        "texto_solucion": "Primero, reclama al responsable\nReclama a la aerolínea o al gestor aeroportuario responsable de la asistencia. Conserva las comunicaciones y las pruebas del problema.\n\nDespués, consulta el procedimiento de AESA\nSi rechazan tu petición o pasa un mes sin respuesta, consulta la vía de discapacidad y movilidad reducida de AESA y su competencia sobre el aeropuerto y el vuelo. Para su procedimiento alternativo, presenta la solicitud dentro del año siguiente a la reclamación previa. La web distingue el procedimiento según la fecha de la incidencia.\n\nOtras vías\nLa decisión de la vía alternativa vincula a la compañía o al gestor aeroportuario responsable. Conservas el acceso al juicio, pero no se tramita simultáneamente el mismo asunto en AESA y ante los tribunales.",
        "sector_reclamacion": "Vuelos",
        "subsector": "Vuelos",
        "bloques_solucion": [
            {
                "titulo": "Primero, reclama al responsable",
                "texto": "Reclama a la aerolínea o al gestor aeroportuario responsable de la asistencia. Conserva las comunicaciones y las pruebas del problema.",
                "enlaces": []
            },
            {
                "titulo": "Después, consulta el procedimiento de AESA",
                "texto": "Si rechazan tu petición o pasa un mes sin respuesta, consulta la vía de discapacidad y movilidad reducida de AESA y su competencia sobre el aeropuerto y el vuelo. Para su procedimiento alternativo, presenta la solicitud dentro del año siguiente a la reclamación previa. La web distingue el procedimiento según la fecha de la incidencia.",
                "enlaces": [
                    {
                        "texto": "Consulta el procedimiento y la competencia de AESA",
                        "clave": "Vuelos"
                    }
                ]
            },
            {
                "titulo": "Otras vías",
                "texto": "La decisión de la vía alternativa vincula a la compañía o al gestor aeroportuario responsable. Conservas el acceso al juicio, pero no se tramita simultáneamente el mismo asunto en AESA y ante los tribunales.",
                "enlaces": [
                    {
                        "texto": "Infórmate sobre el intento de acuerdo previo al juicio",
                        "clave": "Antes-del-juicio"
                    }
                ]
            }
        ]
    },
    "SOL-VUELO-EQUIPAJE": {
        "id": "SOL-VUELO-EQUIPAJE",
        "sector": "Viajes y transportes",
        "es_solucion": true,
        "texto_solucion": "Actúa cuanto antes\nComunica la incidencia en el aeropuerto, solicita el parte de irregularidad de equipaje (PIR) y reclama por escrito a la aerolínea. Cuando se aplica el Convenio de Montreal, los plazos de protesta son siete días desde la recepción para daños y veintiún días desde la puesta a disposición para retraso. Para pérdida, reclama sin demora.\n\nOrganismos públicos de consumo\nAESA no resuelve las reclamaciones de equipaje. Si no se soluciona con la compañía, consumo de tu comunidad autónoma o tu OMIC puede orientarte.\n\nVía judicial\nPuedes valorar la vía judicial; el plazo del Convenio de Montreal es de dos años. Si la empresa está en otro país europeo y resides en España, consulta también si puede ayudarte CEC-España.",
        "sector_reclamacion": "Consumo",
        "subsector": "Equipaje",
        "bloques_solucion": [
            {
                "titulo": "Actúa cuanto antes",
                "texto": "Comunica la incidencia en el aeropuerto, solicita el parte de irregularidad de equipaje (PIR) y reclama por escrito a la aerolínea. Cuando se aplica el Convenio de Montreal, los plazos de protesta son siete días desde la recepción para daños y veintiún días desde la puesta a disposición para retraso. Para pérdida, reclama sin demora.",
                "enlaces": []
            },
            {
                "titulo": "Organismos públicos de consumo",
                "texto": "AESA no resuelve las reclamaciones de equipaje. Si no se soluciona con la compañía, consumo de tu comunidad autónoma o tu OMIC puede orientarte.",
                "enlaces": [
                    {
                        "texto": "Localiza el organismo de consumo de tu comunidad autónoma",
                        "clave": "Consumo"
                    },
                    {
                        "texto": "Busca tu OMIC u oficina local de consumo",
                        "clave": "OMIC"
                    }
                ]
            },
            {
                "titulo": "Vía judicial",
                "texto": "Puedes valorar la vía judicial; el plazo del Convenio de Montreal es de dos años. Si la empresa está en otro país europeo y resides en España, consulta también si puede ayudarte CEC-España.",
                "enlaces": [
                    {
                        "texto": "Infórmate sobre el intento de acuerdo previo al juicio",
                        "clave": "Antes-del-juicio"
                    },
                    {
                        "texto": "Conoce los servicios de CEC-España",
                        "clave": "CEC-informacion"
                    }
                ]
            }
        ]
    },
    "VT-AIRE-ESTADO": {
        "id": "VT-AIRE-ESTADO",
        "sector": "Viajes y transportes",
        "pregunta": "¿En qué punto está tu reclamación?",
        "es_solucion": false,
        "opciones_custom": [
            {
                "texto": "Aún no he reclamado a la empresa",
                "siguiente": "SOL-VT-AIRE-RECLAMAR"
            },
            {
                "texto": "Ya he reclamado y el problema continúa",
                "siguiente": "VT-AIRE-PAIS"
            },
            {
                "texto": "Quiero comunicar una posible infracción o pedir orientación",
                "siguiente": "SOL-VT-AIRE-ORIENTACION"
            }
        ]
    },
    "VT-AIRE-PAIS": {
        "id": "VT-AIRE-PAIS",
        "sector": "Viajes y transportes",
        "pregunta": "¿La empresa tiene su sede en otro país de la UE, Islandia o Noruega?",
        "es_solucion": false,
        "opciones_custom": [
            {
                "texto": "Sí",
                "siguiente": "SOL-VT-AIRE-CEC"
            },
            {
                "texto": "No",
                "siguiente": "SOL-VT-AIRE-OPCIONES"
            },
            {
                "texto": "No lo sé",
                "siguiente": "SOL-VT-AIRE-OPCIONES"
            }
        ],
        "explicacion": "Mira los datos legales del contrato, factura o web. La sede de la empresa, no el lugar del viaje o el idioma de la web, es lo relevante."
    },
    "SOL-VT-AIRE-RECLAMAR": {
        "id": "SOL-VT-AIRE-RECLAMAR",
        "sector": "Viajes y transportes",
        "es_solucion": true,
        "texto_solucion": "Primero, reclama a la empresa\nExplica por escrito qué ha ocurrido y qué solución pides. Guarda el justificante y adjunta contrato, factura y pruebas. Si intervino una plataforma, reclama a cada empresa por las obligaciones que le correspondan.\n\nOrganismos públicos de consumo\nPuedes pedir ayuda desde ahora a consumo de tu comunidad autónoma o tu OMIC. Si la empresa no soluciona el problema, presenta allí tu reclamación con la documentación.\n\nSi necesitas otras vías\nSegún el asunto, también puedes valorar el arbitraje de consumo o acudir a los tribunales. No es necesario pasar sucesivamente por todas las vías.",
        "sector_reclamacion": "Consumo",
        "bloques_solucion": [
            {
                "titulo": "Primero, reclama a la empresa",
                "texto": "Explica por escrito qué ha ocurrido y qué solución pides. Guarda el justificante y adjunta contrato, factura y pruebas. Si intervino una plataforma, reclama a cada empresa por las obligaciones que le correspondan.",
                "enlaces": []
            },
            {
                "titulo": "Organismos públicos de consumo",
                "texto": "Puedes pedir ayuda desde ahora a consumo de tu comunidad autónoma o tu OMIC. Si la empresa no soluciona el problema, presenta allí tu reclamación con la documentación.",
                "enlaces": [
                    {
                        "texto": "Localiza el organismo de consumo de tu comunidad autónoma",
                        "clave": "Consumo"
                    },
                    {
                        "texto": "Busca tu OMIC u oficina local de consumo",
                        "clave": "OMIC"
                    }
                ]
            },
            {
                "titulo": "Si necesitas otras vías",
                "texto": "Según el asunto, también puedes valorar el arbitraje de consumo o acudir a los tribunales. No es necesario pasar sucesivamente por todas las vías.",
                "enlaces": [
                    {
                        "texto": "Consulta cómo funciona el arbitraje y dónde solicitarlo",
                        "clave": "Arbitraje"
                    },
                    {
                        "texto": "Infórmate sobre el intento de acuerdo previo al juicio",
                        "clave": "Antes-del-juicio"
                    }
                ]
            }
        ]
    },
    "SOL-VT-AIRE-OPCIONES": {
        "id": "SOL-VT-AIRE-OPCIONES",
        "sector": "Viajes y transportes",
        "es_solucion": true,
        "texto_solucion": "Organismos públicos de consumo\nSi ya has reclamado a la empresa y el problema continúa, puedes presentar tu reclamación ante consumo de tu comunidad autónoma o tu OMIC. Aporta el contrato, las pruebas y la reclamación previa, junto con la respuesta si la recibiste. Estos servicios pueden orientarte y tramitar tu reclamación.\n\nOtra vía: arbitraje de consumo\nPuedes solicitar arbitraje de consumo si el asunto entra en su ámbito y la empresa está adherida para ese caso o acepta someterse. Es una vía gratuita y su laudo es vinculante. En la web encontrarás los requisitos y la Junta a la que dirigirte.\n\nVía judicial\nTambién puedes acudir a los tribunales, sin tener que agotar antes todas las vías administrativas. Antes de demandar, comprueba el intento de acuerdo previo que corresponda. El arbitraje y el juicio son vías alternativas para resolver el mismo conflicto.",
        "sector_reclamacion": "Consumo",
        "bloques_solucion": [
            {
                "titulo": "Organismos públicos de consumo",
                "texto": "Si ya has reclamado a la empresa y el problema continúa, puedes presentar tu reclamación ante consumo de tu comunidad autónoma o tu OMIC. Aporta el contrato, las pruebas y la reclamación previa, junto con la respuesta si la recibiste. Estos servicios pueden orientarte y tramitar tu reclamación.",
                "enlaces": [
                    {
                        "texto": "Localiza el organismo de consumo de tu comunidad autónoma",
                        "clave": "Consumo"
                    },
                    {
                        "texto": "Busca tu OMIC u oficina local de consumo",
                        "clave": "OMIC"
                    }
                ]
            },
            {
                "titulo": "Otra vía: arbitraje de consumo",
                "texto": "Puedes solicitar arbitraje de consumo si el asunto entra en su ámbito y la empresa está adherida para ese caso o acepta someterse. Es una vía gratuita y su laudo es vinculante. En la web encontrarás los requisitos y la Junta a la que dirigirte.",
                "enlaces": [
                    {
                        "texto": "Consulta cómo funciona el arbitraje y dónde solicitarlo",
                        "clave": "Arbitraje"
                    }
                ]
            },
            {
                "titulo": "Vía judicial",
                "texto": "También puedes acudir a los tribunales, sin tener que agotar antes todas las vías administrativas. Antes de demandar, comprueba el intento de acuerdo previo que corresponda. El arbitraje y el juicio son vías alternativas para resolver el mismo conflicto.",
                "enlaces": [
                    {
                        "texto": "Infórmate sobre el intento de acuerdo previo al juicio",
                        "clave": "Antes-del-juicio"
                    }
                ]
            }
        ]
    },
    "SOL-VT-AIRE-ORIENTACION": {
        "id": "SOL-VT-AIRE-ORIENTACION",
        "sector": "Viajes y transportes",
        "es_solucion": true,
        "texto_solucion": "Pide orientación o comunica los hechos\nDirígete a consumo de tu comunidad autónoma o tu OMIC. Identifica a la empresa y aporta las pruebas. Para comunicar una posible infracción no tienes que esperar una respuesta empresarial. Si además pides devolución o indemnización, indícalo expresamente: comunicar una infracción no garantiza por sí solo que recuperes el dinero.",
        "sector_reclamacion": "Consumo",
        "bloques_solucion": [
            {
                "titulo": "Pide orientación o comunica los hechos",
                "texto": "Dirígete a consumo de tu comunidad autónoma o tu OMIC. Identifica a la empresa y aporta las pruebas. Para comunicar una posible infracción no tienes que esperar una respuesta empresarial. Si además pides devolución o indemnización, indícalo expresamente: comunicar una infracción no garantiza por sí solo que recuperes el dinero.",
                "enlaces": [
                    {
                        "texto": "Localiza el organismo de consumo de tu comunidad autónoma",
                        "clave": "Consumo"
                    },
                    {
                        "texto": "Busca tu OMIC u oficina local de consumo",
                        "clave": "OMIC"
                    }
                ]
            }
        ]
    },
    "SOL-VT-AIRE-CEC": {
        "id": "SOL-VT-AIRE-CEC",
        "sector": "Viajes y transportes",
        "es_solucion": true,
        "texto_solucion": "Solicita ayuda a CEC-España\nSi resides en España y ya has reclamado por escrito a una empresa establecida en otro país de la UE, Islandia o Noruega, puedes solicitar asistencia a CEC-España. Ayuda a buscar una solución, pero no sanciona ni dicta una decisión obligatoria. Comprueba sus condiciones antes de iniciar otra vía.\n\nOrganismos públicos de consumo\nTambién puedes pedir orientación a consumo de tu comunidad autónoma o tu OMIC para identificar la vía que corresponde a tu caso.\n\nVía judicial\nTambién puedes acudir a los tribunales, sin tener que agotar antes todas las vías administrativas. Antes de demandar, comprueba el intento de acuerdo previo que corresponda. El arbitraje y el juicio son vías alternativas para resolver el mismo conflicto.",
        "sector_reclamacion": "CEC-informacion",
        "bloques_solucion": [
            {
                "titulo": "Solicita ayuda a CEC-España",
                "texto": "Si resides en España y ya has reclamado por escrito a una empresa establecida en otro país de la UE, Islandia o Noruega, puedes solicitar asistencia a CEC-España. Ayuda a buscar una solución, pero no sanciona ni dicta una decisión obligatoria. Comprueba sus condiciones antes de iniciar otra vía.",
                "enlaces": [
                    {
                        "texto": "Conoce los servicios de CEC-España",
                        "clave": "CEC-informacion"
                    },
                    {
                        "texto": "Solicita asistencia a CEC-España",
                        "clave": "CEC"
                    }
                ]
            },
            {
                "titulo": "Organismos públicos de consumo",
                "texto": "También puedes pedir orientación a consumo de tu comunidad autónoma o tu OMIC para identificar la vía que corresponde a tu caso.",
                "enlaces": [
                    {
                        "texto": "Localiza el organismo de consumo de tu comunidad autónoma",
                        "clave": "Consumo"
                    },
                    {
                        "texto": "Busca tu OMIC u oficina local de consumo",
                        "clave": "OMIC"
                    }
                ]
            },
            {
                "titulo": "Vía judicial",
                "texto": "También puedes acudir a los tribunales, sin tener que agotar antes todas las vías administrativas. Antes de demandar, comprueba el intento de acuerdo previo que corresponda. El arbitraje y el juicio son vías alternativas para resolver el mismo conflicto.",
                "enlaces": [
                    {
                        "texto": "Infórmate sobre el intento de acuerdo previo al juicio",
                        "clave": "Antes-del-juicio"
                    }
                ]
            }
        ]
    },
    "VT-COCHE-ESTADO": {
        "id": "VT-COCHE-ESTADO",
        "sector": "Viajes y transportes",
        "pregunta": "¿En qué punto está tu reclamación?",
        "es_solucion": false,
        "opciones_custom": [
            {
                "texto": "Aún no he reclamado a la empresa",
                "siguiente": "SOL-VT-COCHE-RECLAMAR"
            },
            {
                "texto": "Ya he reclamado y el problema continúa",
                "siguiente": "VT-COCHE-PAIS"
            },
            {
                "texto": "Quiero comunicar una posible infracción o pedir orientación",
                "siguiente": "SOL-VT-COCHE-ORIENTACION"
            }
        ]
    },
    "VT-COCHE-PAIS": {
        "id": "VT-COCHE-PAIS",
        "sector": "Viajes y transportes",
        "pregunta": "¿La empresa tiene su sede en otro país de la UE, Islandia o Noruega?",
        "es_solucion": false,
        "opciones_custom": [
            {
                "texto": "Sí",
                "siguiente": "SOL-VT-COCHE-CEC"
            },
            {
                "texto": "No",
                "siguiente": "SOL-VT-COCHE-OPCIONES"
            },
            {
                "texto": "No lo sé",
                "siguiente": "SOL-VT-COCHE-OPCIONES"
            }
        ],
        "explicacion": "Mira los datos legales del contrato, factura o web. La sede de la empresa, no el lugar del viaje o el idioma de la web, es lo relevante."
    },
    "SOL-VT-COCHE-RECLAMAR": {
        "id": "SOL-VT-COCHE-RECLAMAR",
        "sector": "Viajes y transportes",
        "es_solucion": true,
        "texto_solucion": "Primero, reclama a la empresa\nExplica por escrito qué ha ocurrido y qué solución pides. Guarda el justificante y adjunta contrato, factura y pruebas. Si intervino una plataforma, reclama a cada empresa por las obligaciones que le correspondan. Si intervino una plataforma, identifica quién asumió cada obligación; para CEC importa la sede de la empresa concreta contra la que reclamas.\n\nPosible arbitraje de transporte\nEn conflictos de alquiler de vehículo sin conductor, consulta si la Junta Arbitral del Transporte competente puede conocer de tu caso. Esta vía tiene sus propias reglas de sumisión, distintas de las del arbitraje de consumo.\n\nOrganismos públicos de consumo\nPuedes pedir ayuda desde ahora a consumo de tu comunidad autónoma o tu OMIC. Si la empresa no soluciona el problema, presenta allí tu reclamación con la documentación.\n\nSi necesitas otras vías\nSegún el asunto, también puedes valorar el arbitraje de consumo o acudir a los tribunales. No es necesario pasar sucesivamente por todas las vías.",
        "sector_reclamacion": "Transporte",
        "bloques_solucion": [
            {
                "titulo": "Primero, reclama a la empresa",
                "texto": "Explica por escrito qué ha ocurrido y qué solución pides. Guarda el justificante y adjunta contrato, factura y pruebas. Si intervino una plataforma, reclama a cada empresa por las obligaciones que le correspondan. Si intervino una plataforma, identifica quién asumió cada obligación; para CEC importa la sede de la empresa concreta contra la que reclamas.",
                "enlaces": []
            },
            {
                "titulo": "Posible arbitraje de transporte",
                "texto": "En conflictos de alquiler de vehículo sin conductor, consulta si la Junta Arbitral del Transporte competente puede conocer de tu caso. Esta vía tiene sus propias reglas de sumisión, distintas de las del arbitraje de consumo.",
                "enlaces": [
                    {
                        "texto": "Consulta las condiciones legales del arbitraje de transporte",
                        "clave": "Transporte"
                    }
                ]
            },
            {
                "titulo": "Organismos públicos de consumo",
                "texto": "Puedes pedir ayuda desde ahora a consumo de tu comunidad autónoma o tu OMIC. Si la empresa no soluciona el problema, presenta allí tu reclamación con la documentación.",
                "enlaces": [
                    {
                        "texto": "Localiza el organismo de consumo de tu comunidad autónoma",
                        "clave": "Consumo"
                    },
                    {
                        "texto": "Busca tu OMIC u oficina local de consumo",
                        "clave": "OMIC"
                    }
                ]
            },
            {
                "titulo": "Si necesitas otras vías",
                "texto": "Según el asunto, también puedes valorar el arbitraje de consumo o acudir a los tribunales. No es necesario pasar sucesivamente por todas las vías.",
                "enlaces": [
                    {
                        "texto": "Consulta cómo funciona el arbitraje y dónde solicitarlo",
                        "clave": "Arbitraje"
                    },
                    {
                        "texto": "Infórmate sobre el intento de acuerdo previo al juicio",
                        "clave": "Antes-del-juicio"
                    }
                ]
            }
        ]
    },
    "SOL-VT-COCHE-OPCIONES": {
        "id": "SOL-VT-COCHE-OPCIONES",
        "sector": "Viajes y transportes",
        "es_solucion": true,
        "texto_solucion": "Organismos públicos de consumo\nSi ya has reclamado a la empresa y el problema continúa, puedes presentar tu reclamación ante consumo de tu comunidad autónoma o tu OMIC. Aporta el contrato, las pruebas y la reclamación previa, junto con la respuesta si la recibiste. Estos servicios pueden orientarte y tramitar tu reclamación. Si intervino una plataforma, identifica quién asumió cada obligación; para CEC importa la sede de la empresa concreta contra la que reclamas.\n\nPosible arbitraje de transporte\nEn conflictos de alquiler de vehículo sin conductor, consulta si la Junta Arbitral del Transporte competente puede conocer de tu caso. Esta vía tiene sus propias reglas de sumisión, distintas de las del arbitraje de consumo.\n\nOtra vía: arbitraje de consumo\nPuedes solicitar arbitraje de consumo si el asunto entra en su ámbito y la empresa está adherida para ese caso o acepta someterse. Es una vía gratuita y su laudo es vinculante. En la web encontrarás los requisitos y la Junta a la que dirigirte.\n\nVía judicial\nTambién puedes acudir a los tribunales, sin tener que agotar antes todas las vías administrativas. Antes de demandar, comprueba el intento de acuerdo previo que corresponda. El arbitraje y el juicio son vías alternativas para resolver el mismo conflicto.",
        "sector_reclamacion": "Consumo",
        "bloques_solucion": [
            {
                "titulo": "Organismos públicos de consumo",
                "texto": "Si ya has reclamado a la empresa y el problema continúa, puedes presentar tu reclamación ante consumo de tu comunidad autónoma o tu OMIC. Aporta el contrato, las pruebas y la reclamación previa, junto con la respuesta si la recibiste. Estos servicios pueden orientarte y tramitar tu reclamación. Si intervino una plataforma, identifica quién asumió cada obligación; para CEC importa la sede de la empresa concreta contra la que reclamas.",
                "enlaces": [
                    {
                        "texto": "Localiza el organismo de consumo de tu comunidad autónoma",
                        "clave": "Consumo"
                    },
                    {
                        "texto": "Busca tu OMIC u oficina local de consumo",
                        "clave": "OMIC"
                    }
                ]
            },
            {
                "titulo": "Posible arbitraje de transporte",
                "texto": "En conflictos de alquiler de vehículo sin conductor, consulta si la Junta Arbitral del Transporte competente puede conocer de tu caso. Esta vía tiene sus propias reglas de sumisión, distintas de las del arbitraje de consumo.",
                "enlaces": [
                    {
                        "texto": "Consulta las condiciones legales del arbitraje de transporte",
                        "clave": "Transporte"
                    }
                ]
            },
            {
                "titulo": "Otra vía: arbitraje de consumo",
                "texto": "Puedes solicitar arbitraje de consumo si el asunto entra en su ámbito y la empresa está adherida para ese caso o acepta someterse. Es una vía gratuita y su laudo es vinculante. En la web encontrarás los requisitos y la Junta a la que dirigirte.",
                "enlaces": [
                    {
                        "texto": "Consulta cómo funciona el arbitraje y dónde solicitarlo",
                        "clave": "Arbitraje"
                    }
                ]
            },
            {
                "titulo": "Vía judicial",
                "texto": "También puedes acudir a los tribunales, sin tener que agotar antes todas las vías administrativas. Antes de demandar, comprueba el intento de acuerdo previo que corresponda. El arbitraje y el juicio son vías alternativas para resolver el mismo conflicto.",
                "enlaces": [
                    {
                        "texto": "Infórmate sobre el intento de acuerdo previo al juicio",
                        "clave": "Antes-del-juicio"
                    }
                ]
            }
        ]
    },
    "SOL-VT-COCHE-ORIENTACION": {
        "id": "SOL-VT-COCHE-ORIENTACION",
        "sector": "Viajes y transportes",
        "es_solucion": true,
        "texto_solucion": "Pide orientación o comunica los hechos\nDirígete a consumo de tu comunidad autónoma o tu OMIC. Identifica a la empresa y aporta las pruebas. Para comunicar una posible infracción no tienes que esperar una respuesta empresarial. Si además pides devolución o indemnización, indícalo expresamente: comunicar una infracción no garantiza por sí solo que recuperes el dinero.",
        "sector_reclamacion": "Consumo",
        "bloques_solucion": [
            {
                "titulo": "Pide orientación o comunica los hechos",
                "texto": "Dirígete a consumo de tu comunidad autónoma o tu OMIC. Identifica a la empresa y aporta las pruebas. Para comunicar una posible infracción no tienes que esperar una respuesta empresarial. Si además pides devolución o indemnización, indícalo expresamente: comunicar una infracción no garantiza por sí solo que recuperes el dinero.",
                "enlaces": [
                    {
                        "texto": "Localiza el organismo de consumo de tu comunidad autónoma",
                        "clave": "Consumo"
                    },
                    {
                        "texto": "Busca tu OMIC u oficina local de consumo",
                        "clave": "OMIC"
                    }
                ]
            }
        ]
    },
    "SOL-VT-COCHE-CEC": {
        "id": "SOL-VT-COCHE-CEC",
        "sector": "Viajes y transportes",
        "es_solucion": true,
        "texto_solucion": "Solicita ayuda a CEC-España\nSi resides en España y ya has reclamado por escrito a una empresa establecida en otro país de la UE, Islandia o Noruega, puedes solicitar asistencia a CEC-España. Ayuda a buscar una solución, pero no sanciona ni dicta una decisión obligatoria. Comprueba sus condiciones antes de iniciar otra vía. Si intervino una plataforma, identifica quién asumió cada obligación; para CEC importa la sede de la empresa concreta contra la que reclamas.\n\nPosible arbitraje de transporte\nEn conflictos de alquiler de vehículo sin conductor, consulta si la Junta Arbitral del Transporte competente puede conocer de tu caso. Esta vía tiene sus propias reglas de sumisión, distintas de las del arbitraje de consumo.\n\nOrganismos públicos de consumo\nTambién puedes pedir orientación a consumo de tu comunidad autónoma o tu OMIC para identificar la vía que corresponde a tu caso.\n\nVía judicial\nTambién puedes acudir a los tribunales, sin tener que agotar antes todas las vías administrativas. Antes de demandar, comprueba el intento de acuerdo previo que corresponda. El arbitraje y el juicio son vías alternativas para resolver el mismo conflicto.",
        "sector_reclamacion": "CEC-informacion",
        "bloques_solucion": [
            {
                "titulo": "Solicita ayuda a CEC-España",
                "texto": "Si resides en España y ya has reclamado por escrito a una empresa establecida en otro país de la UE, Islandia o Noruega, puedes solicitar asistencia a CEC-España. Ayuda a buscar una solución, pero no sanciona ni dicta una decisión obligatoria. Comprueba sus condiciones antes de iniciar otra vía. Si intervino una plataforma, identifica quién asumió cada obligación; para CEC importa la sede de la empresa concreta contra la que reclamas.",
                "enlaces": [
                    {
                        "texto": "Conoce los servicios de CEC-España",
                        "clave": "CEC-informacion"
                    },
                    {
                        "texto": "Solicita asistencia a CEC-España",
                        "clave": "CEC"
                    }
                ]
            },
            {
                "titulo": "Posible arbitraje de transporte",
                "texto": "En conflictos de alquiler de vehículo sin conductor, consulta si la Junta Arbitral del Transporte competente puede conocer de tu caso. Esta vía tiene sus propias reglas de sumisión, distintas de las del arbitraje de consumo.",
                "enlaces": [
                    {
                        "texto": "Consulta las condiciones legales del arbitraje de transporte",
                        "clave": "Transporte"
                    }
                ]
            },
            {
                "titulo": "Organismos públicos de consumo",
                "texto": "También puedes pedir orientación a consumo de tu comunidad autónoma o tu OMIC para identificar la vía que corresponde a tu caso.",
                "enlaces": [
                    {
                        "texto": "Localiza el organismo de consumo de tu comunidad autónoma",
                        "clave": "Consumo"
                    },
                    {
                        "texto": "Busca tu OMIC u oficina local de consumo",
                        "clave": "OMIC"
                    }
                ]
            },
            {
                "titulo": "Vía judicial",
                "texto": "También puedes acudir a los tribunales, sin tener que agotar antes todas las vías administrativas. Antes de demandar, comprueba el intento de acuerdo previo que corresponda. El arbitraje y el juicio son vías alternativas para resolver el mismo conflicto.",
                "enlaces": [
                    {
                        "texto": "Infórmate sobre el intento de acuerdo previo al juicio",
                        "clave": "Antes-del-juicio"
                    }
                ]
            }
        ]
    },
    "SOL-VT-TREN": {
        "id": "SOL-VT-TREN",
        "sector": "Viajes y transportes",
        "es_solucion": true,
        "texto_solucion": "Primero, reclama a la empresa o estación\nEn reclamaciones del Reglamento 2021/782, reclama dentro de los tres meses siguientes al incidente. Deben responder en un mes o, si está justificado, avisar de que responderán antes de tres meses.\n\nSi el problema continúa\nDirígete a la Dirección General de Transporte por Carretera y Ferrocarril para los servicios de su competencia, o a la autoridad autonómica correspondiente. El Reglamento prevé tres meses desde la denegación para acudir al organismo de ejecución; también permite hacerlo si no recibes respuesta en tres meses.\n\nPara resolver una reclamación económica\nPuedes consultar la Junta Arbitral del Transporte competente. Hasta 15.000 euros se presume el acuerdo arbitral si ninguna parte se opuso expresamente antes de iniciarse o de deber iniciarse el servicio; por encima hace falta acuerdo. Su laudo es vinculante. Esta vía tiene reglas distintas del arbitraje de consumo.\n\nVía judicial\nTambién puedes valorar el juicio si no existe un arbitraje vinculante sobre el mismo conflicto. Consumo o tu OMIC puede orientarte.",
        "sector_reclamacion": "Tren",
        "subsector": "Ferrocarril",
        "bloques_solucion": [
            {
                "titulo": "Primero, reclama a la empresa o estación",
                "texto": "En reclamaciones del Reglamento 2021/782, reclama dentro de los tres meses siguientes al incidente. Deben responder en un mes o, si está justificado, avisar de que responderán antes de tres meses.",
                "enlaces": []
            },
            {
                "titulo": "Si el problema continúa",
                "texto": "Dirígete a la Dirección General de Transporte por Carretera y Ferrocarril para los servicios de su competencia, o a la autoridad autonómica correspondiente. El Reglamento prevé tres meses desde la denegación para acudir al organismo de ejecución; también permite hacerlo si no recibes respuesta en tres meses.",
                "enlaces": [
                    {
                        "texto": "Consulta las vías de reclamación ferroviaria",
                        "clave": "Tren"
                    }
                ]
            },
            {
                "titulo": "Para resolver una reclamación económica",
                "texto": "Puedes consultar la Junta Arbitral del Transporte competente. Hasta 15.000 euros se presume el acuerdo arbitral si ninguna parte se opuso expresamente antes de iniciarse o de deber iniciarse el servicio; por encima hace falta acuerdo. Su laudo es vinculante. Esta vía tiene reglas distintas del arbitraje de consumo.",
                "enlaces": [
                    {
                        "texto": "Consulta las condiciones legales del arbitraje de transporte",
                        "clave": "Transporte"
                    }
                ]
            },
            {
                "titulo": "Vía judicial",
                "texto": "También puedes valorar el juicio si no existe un arbitraje vinculante sobre el mismo conflicto. Consumo o tu OMIC puede orientarte.",
                "enlaces": [
                    {
                        "texto": "Infórmate sobre el intento de acuerdo previo al juicio",
                        "clave": "Antes-del-juicio"
                    }
                ]
            }
        ]
    },
    "SOL-VT-CARRETERA": {
        "id": "SOL-VT-CARRETERA",
        "sector": "Viajes y transportes",
        "es_solucion": true,
        "texto_solucion": "Primero, reclama a la empresa\nEn autobús o autocar sujeto al Reglamento 181/2011, reclama dentro de los tres meses siguientes al servicio. La empresa debe comunicar el estado de la reclamación en un mes y responder definitivamente en tres meses.\n\nPara comunicar incumplimientos del transporte\nAcude a la autoridad de transportes competente: Ministerio para servicios estatales, o administración autonómica o local para los de su competencia. Los derechos concretos dependen del tipo de servicio.\n\nPara resolver una reclamación económica\nPuedes consultar la Junta Arbitral del Transporte competente. Hasta 15.000 euros se presume el acuerdo arbitral si ninguna parte se opuso expresamente antes de iniciarse o de deber iniciarse el servicio; por encima hace falta acuerdo. Su laudo es vinculante. Esta vía tiene reglas distintas del arbitraje de consumo.\n\nVía judicial\nTambién puedes acudir a los tribunales, sin tener que agotar antes todas las vías administrativas. Antes de demandar, comprueba el intento de acuerdo previo que corresponda. El arbitraje y el juicio son vías alternativas para resolver el mismo conflicto.",
        "sector_reclamacion": "Autobus",
        "subsector": "Transporte terrestre",
        "bloques_solucion": [
            {
                "titulo": "Primero, reclama a la empresa",
                "texto": "En autobús o autocar sujeto al Reglamento 181/2011, reclama dentro de los tres meses siguientes al servicio. La empresa debe comunicar el estado de la reclamación en un mes y responder definitivamente en tres meses.",
                "enlaces": []
            },
            {
                "titulo": "Para comunicar incumplimientos del transporte",
                "texto": "Acude a la autoridad de transportes competente: Ministerio para servicios estatales, o administración autonómica o local para los de su competencia. Los derechos concretos dependen del tipo de servicio.",
                "enlaces": [
                    {
                        "texto": "Consulta cómo reclamar por un viaje en autobús",
                        "clave": "Autobus"
                    }
                ]
            },
            {
                "titulo": "Para resolver una reclamación económica",
                "texto": "Puedes consultar la Junta Arbitral del Transporte competente. Hasta 15.000 euros se presume el acuerdo arbitral si ninguna parte se opuso expresamente antes de iniciarse o de deber iniciarse el servicio; por encima hace falta acuerdo. Su laudo es vinculante. Esta vía tiene reglas distintas del arbitraje de consumo.",
                "enlaces": [
                    {
                        "texto": "Consulta las condiciones legales del arbitraje de transporte",
                        "clave": "Transporte"
                    }
                ]
            },
            {
                "titulo": "Vía judicial",
                "texto": "También puedes acudir a los tribunales, sin tener que agotar antes todas las vías administrativas. Antes de demandar, comprueba el intento de acuerdo previo que corresponda. El arbitraje y el juicio son vías alternativas para resolver el mismo conflicto.",
                "enlaces": [
                    {
                        "texto": "Infórmate sobre el intento de acuerdo previo al juicio",
                        "clave": "Antes-del-juicio"
                    }
                ]
            }
        ]
    },
    "VT-MAR-TIPO": {
        "id": "VT-MAR-TIPO",
        "sector": "Viajes y transportes",
        "pregunta": "¿Qué problema tienes en el viaje por barco?",
        "es_solucion": false,
        "opciones_custom": [
            {
                "texto": "Cancelación, retraso, asistencia o derechos como pasajero",
                "siguiente": "SOL-VT-MAR"
            },
            {
                "texto": "Seguridad del buque, accesibilidad a bordo o instalaciones del puerto",
                "siguiente": "SOL-VT-MAR-TECNICO"
            },
            {
                "texto": "Otro problema contractual o con un crucero",
                "siguiente": "VT-BARCO-ESTADO"
            }
        ]
    },
    "SOL-VT-MAR": {
        "id": "SOL-VT-MAR",
        "sector": "Viajes y transportes",
        "es_solucion": true,
        "texto_solucion": "Primero, reclama a la naviera o terminal\nPara los derechos del Reglamento 1177/2010, reclama dentro de los dos meses siguientes al servicio realizado o previsto. Deben comunicarte el estado en un mes y responder definitivamente en dos meses.\n\nDespués, reclama tus derechos como pasajero\nSi no se resuelve y corresponde a España, presenta reclamación ante consumo según el procedimiento marítimo oficial. Como regla, España conoce de salidas de puertos españoles y llegadas desde terceros países; para otros casos, consulta la autoridad correspondiente.\n\nSi la empresa está en otro país europeo\nSi resides en España y reclamas a una empresa establecida en otro país de la UE, Islandia o Noruega, CEC-España puede ayudarte después de tu reclamación escrita a la empresa. Consulta en su web sus condiciones de intervención y la asistencia disponible para empresas del Reino Unido.\n\nVía judicial\nTambién puedes acudir a los tribunales, sin tener que agotar antes todas las vías administrativas. Antes de demandar, comprueba el intento de acuerdo previo que corresponda. El arbitraje y el juicio son vías alternativas para resolver el mismo conflicto.",
        "sector_reclamacion": "Maritimo",
        "subsector": "Marítimo",
        "bloques_solucion": [
            {
                "titulo": "Primero, reclama a la naviera o terminal",
                "texto": "Para los derechos del Reglamento 1177/2010, reclama dentro de los dos meses siguientes al servicio realizado o previsto. Deben comunicarte el estado en un mes y responder definitivamente en dos meses.",
                "enlaces": []
            },
            {
                "titulo": "Después, reclama tus derechos como pasajero",
                "texto": "Si no se resuelve y corresponde a España, presenta reclamación ante consumo según el procedimiento marítimo oficial. Como regla, España conoce de salidas de puertos españoles y llegadas desde terceros países; para otros casos, consulta la autoridad correspondiente.",
                "enlaces": [
                    {
                        "texto": "Consulta cómo reclamar tus derechos como pasajero de barco",
                        "clave": "Maritimo"
                    }
                ]
            },
            {
                "titulo": "Si la empresa está en otro país europeo",
                "texto": "Si resides en España y reclamas a una empresa establecida en otro país de la UE, Islandia o Noruega, CEC-España puede ayudarte después de tu reclamación escrita a la empresa. Consulta en su web sus condiciones de intervención y la asistencia disponible para empresas del Reino Unido.",
                "enlaces": [
                    {
                        "texto": "Conoce los servicios de CEC-España",
                        "clave": "CEC-informacion"
                    },
                    {
                        "texto": "Solicita asistencia a CEC-España",
                        "clave": "CEC"
                    }
                ]
            },
            {
                "titulo": "Vía judicial",
                "texto": "También puedes acudir a los tribunales, sin tener que agotar antes todas las vías administrativas. Antes de demandar, comprueba el intento de acuerdo previo que corresponda. El arbitraje y el juicio son vías alternativas para resolver el mismo conflicto.",
                "enlaces": [
                    {
                        "texto": "Infórmate sobre el intento de acuerdo previo al juicio",
                        "clave": "Antes-del-juicio"
                    }
                ]
            }
        ]
    },
    "SOL-VT-MAR-TECNICO": {
        "id": "SOL-VT-MAR-TECNICO",
        "sector": "Viajes y transportes",
        "es_solucion": true,
        "texto_solucion": "Dirígete al organismo del problema técnico\nPara seguridad del buque o deficiencias de acceso y asistencia a bordo, consulta a la Dirección General de la Marina Mercante. Para instalaciones o terminales, consulta a Puertos del Estado o a la autoridad portuaria competente. Ante peligro inmediato, avisa al personal de seguridad o a emergencias.\n\nSi reclamas cancelación, retraso o compensación\nEsos derechos de pasajeros tienen una vía de consumo específica. Utiliza el procedimiento correspondiente al lugar y servicio afectados.",
        "sector_reclamacion": "Maritimo-tecnico",
        "subsector": "Marítimo",
        "bloques_solucion": [
            {
                "titulo": "Dirígete al organismo del problema técnico",
                "texto": "Para seguridad del buque o deficiencias de acceso y asistencia a bordo, consulta a la Dirección General de la Marina Mercante. Para instalaciones o terminales, consulta a Puertos del Estado o a la autoridad portuaria competente. Ante peligro inmediato, avisa al personal de seguridad o a emergencias.",
                "enlaces": [
                    {
                        "texto": "Consulta los organismos y el procedimiento marítimo técnico",
                        "clave": "Maritimo-tecnico"
                    }
                ]
            },
            {
                "titulo": "Si reclamas cancelación, retraso o compensación",
                "texto": "Esos derechos de pasajeros tienen una vía de consumo específica. Utiliza el procedimiento correspondiente al lugar y servicio afectados.",
                "enlaces": [
                    {
                        "texto": "Consulta cómo reclamar tus derechos como pasajero de barco",
                        "clave": "Maritimo"
                    }
                ]
            }
        ]
    },
    "VT-BARCO-ESTADO": {
        "id": "VT-BARCO-ESTADO",
        "sector": "Viajes y transportes",
        "pregunta": "¿En qué punto está tu reclamación?",
        "es_solucion": false,
        "opciones_custom": [
            {
                "texto": "Aún no he reclamado a la empresa",
                "siguiente": "SOL-VT-BARCO-RECLAMAR"
            },
            {
                "texto": "Ya he reclamado y el problema continúa",
                "siguiente": "VT-BARCO-PAIS"
            },
            {
                "texto": "Quiero comunicar una posible infracción o pedir orientación",
                "siguiente": "SOL-VT-BARCO-ORIENTACION"
            }
        ]
    },
    "VT-BARCO-PAIS": {
        "id": "VT-BARCO-PAIS",
        "sector": "Viajes y transportes",
        "pregunta": "¿La empresa tiene su sede en otro país de la UE, Islandia o Noruega?",
        "es_solucion": false,
        "opciones_custom": [
            {
                "texto": "Sí",
                "siguiente": "SOL-VT-BARCO-CEC"
            },
            {
                "texto": "No",
                "siguiente": "SOL-VT-BARCO-OPCIONES"
            },
            {
                "texto": "No lo sé",
                "siguiente": "SOL-VT-BARCO-OPCIONES"
            }
        ],
        "explicacion": "Mira los datos legales del contrato, factura o web. La sede de la empresa, no el lugar del viaje o el idioma de la web, es lo relevante."
    },
    "SOL-VT-BARCO-RECLAMAR": {
        "id": "SOL-VT-BARCO-RECLAMAR",
        "sector": "Viajes y transportes",
        "es_solucion": true,
        "texto_solucion": "Primero, reclama a la empresa\nExplica por escrito qué ha ocurrido y qué solución pides. Guarda el justificante y adjunta contrato, factura y pruebas. Si intervino una plataforma, reclama a cada empresa por las obligaciones que le correspondan.\n\nOrganismos públicos de consumo\nPuedes pedir ayuda desde ahora a consumo de tu comunidad autónoma o tu OMIC. Si la empresa no soluciona el problema, presenta allí tu reclamación con la documentación.\n\nSi necesitas otras vías\nSegún el asunto, también puedes valorar el arbitraje de consumo o acudir a los tribunales. No es necesario pasar sucesivamente por todas las vías.",
        "sector_reclamacion": "Consumo",
        "bloques_solucion": [
            {
                "titulo": "Primero, reclama a la empresa",
                "texto": "Explica por escrito qué ha ocurrido y qué solución pides. Guarda el justificante y adjunta contrato, factura y pruebas. Si intervino una plataforma, reclama a cada empresa por las obligaciones que le correspondan.",
                "enlaces": []
            },
            {
                "titulo": "Organismos públicos de consumo",
                "texto": "Puedes pedir ayuda desde ahora a consumo de tu comunidad autónoma o tu OMIC. Si la empresa no soluciona el problema, presenta allí tu reclamación con la documentación.",
                "enlaces": [
                    {
                        "texto": "Localiza el organismo de consumo de tu comunidad autónoma",
                        "clave": "Consumo"
                    },
                    {
                        "texto": "Busca tu OMIC u oficina local de consumo",
                        "clave": "OMIC"
                    }
                ]
            },
            {
                "titulo": "Si necesitas otras vías",
                "texto": "Según el asunto, también puedes valorar el arbitraje de consumo o acudir a los tribunales. No es necesario pasar sucesivamente por todas las vías.",
                "enlaces": [
                    {
                        "texto": "Consulta cómo funciona el arbitraje y dónde solicitarlo",
                        "clave": "Arbitraje"
                    },
                    {
                        "texto": "Infórmate sobre el intento de acuerdo previo al juicio",
                        "clave": "Antes-del-juicio"
                    }
                ]
            }
        ]
    },
    "SOL-VT-BARCO-OPCIONES": {
        "id": "SOL-VT-BARCO-OPCIONES",
        "sector": "Viajes y transportes",
        "es_solucion": true,
        "texto_solucion": "Organismos públicos de consumo\nSi ya has reclamado a la empresa y el problema continúa, puedes presentar tu reclamación ante consumo de tu comunidad autónoma o tu OMIC. Aporta el contrato, las pruebas y la reclamación previa, junto con la respuesta si la recibiste. Estos servicios pueden orientarte y tramitar tu reclamación.\n\nOtra vía: arbitraje de consumo\nPuedes solicitar arbitraje de consumo si el asunto entra en su ámbito y la empresa está adherida para ese caso o acepta someterse. Es una vía gratuita y su laudo es vinculante. En la web encontrarás los requisitos y la Junta a la que dirigirte.\n\nVía judicial\nTambién puedes acudir a los tribunales, sin tener que agotar antes todas las vías administrativas. Antes de demandar, comprueba el intento de acuerdo previo que corresponda. El arbitraje y el juicio son vías alternativas para resolver el mismo conflicto.",
        "sector_reclamacion": "Consumo",
        "bloques_solucion": [
            {
                "titulo": "Organismos públicos de consumo",
                "texto": "Si ya has reclamado a la empresa y el problema continúa, puedes presentar tu reclamación ante consumo de tu comunidad autónoma o tu OMIC. Aporta el contrato, las pruebas y la reclamación previa, junto con la respuesta si la recibiste. Estos servicios pueden orientarte y tramitar tu reclamación.",
                "enlaces": [
                    {
                        "texto": "Localiza el organismo de consumo de tu comunidad autónoma",
                        "clave": "Consumo"
                    },
                    {
                        "texto": "Busca tu OMIC u oficina local de consumo",
                        "clave": "OMIC"
                    }
                ]
            },
            {
                "titulo": "Otra vía: arbitraje de consumo",
                "texto": "Puedes solicitar arbitraje de consumo si el asunto entra en su ámbito y la empresa está adherida para ese caso o acepta someterse. Es una vía gratuita y su laudo es vinculante. En la web encontrarás los requisitos y la Junta a la que dirigirte.",
                "enlaces": [
                    {
                        "texto": "Consulta cómo funciona el arbitraje y dónde solicitarlo",
                        "clave": "Arbitraje"
                    }
                ]
            },
            {
                "titulo": "Vía judicial",
                "texto": "También puedes acudir a los tribunales, sin tener que agotar antes todas las vías administrativas. Antes de demandar, comprueba el intento de acuerdo previo que corresponda. El arbitraje y el juicio son vías alternativas para resolver el mismo conflicto.",
                "enlaces": [
                    {
                        "texto": "Infórmate sobre el intento de acuerdo previo al juicio",
                        "clave": "Antes-del-juicio"
                    }
                ]
            }
        ]
    },
    "SOL-VT-BARCO-ORIENTACION": {
        "id": "SOL-VT-BARCO-ORIENTACION",
        "sector": "Viajes y transportes",
        "es_solucion": true,
        "texto_solucion": "Pide orientación o comunica los hechos\nDirígete a consumo de tu comunidad autónoma o tu OMIC. Identifica a la empresa y aporta las pruebas. Para comunicar una posible infracción no tienes que esperar una respuesta empresarial. Si además pides devolución o indemnización, indícalo expresamente: comunicar una infracción no garantiza por sí solo que recuperes el dinero.",
        "sector_reclamacion": "Consumo",
        "bloques_solucion": [
            {
                "titulo": "Pide orientación o comunica los hechos",
                "texto": "Dirígete a consumo de tu comunidad autónoma o tu OMIC. Identifica a la empresa y aporta las pruebas. Para comunicar una posible infracción no tienes que esperar una respuesta empresarial. Si además pides devolución o indemnización, indícalo expresamente: comunicar una infracción no garantiza por sí solo que recuperes el dinero.",
                "enlaces": [
                    {
                        "texto": "Localiza el organismo de consumo de tu comunidad autónoma",
                        "clave": "Consumo"
                    },
                    {
                        "texto": "Busca tu OMIC u oficina local de consumo",
                        "clave": "OMIC"
                    }
                ]
            }
        ]
    },
    "SOL-VT-BARCO-CEC": {
        "id": "SOL-VT-BARCO-CEC",
        "sector": "Viajes y transportes",
        "es_solucion": true,
        "texto_solucion": "Solicita ayuda a CEC-España\nSi resides en España y ya has reclamado por escrito a una empresa establecida en otro país de la UE, Islandia o Noruega, puedes solicitar asistencia a CEC-España. Ayuda a buscar una solución, pero no sanciona ni dicta una decisión obligatoria. Comprueba sus condiciones antes de iniciar otra vía.\n\nOrganismos públicos de consumo\nTambién puedes pedir orientación a consumo de tu comunidad autónoma o tu OMIC para identificar la vía que corresponde a tu caso.\n\nVía judicial\nTambién puedes acudir a los tribunales, sin tener que agotar antes todas las vías administrativas. Antes de demandar, comprueba el intento de acuerdo previo que corresponda. El arbitraje y el juicio son vías alternativas para resolver el mismo conflicto.",
        "sector_reclamacion": "CEC-informacion",
        "bloques_solucion": [
            {
                "titulo": "Solicita ayuda a CEC-España",
                "texto": "Si resides en España y ya has reclamado por escrito a una empresa establecida en otro país de la UE, Islandia o Noruega, puedes solicitar asistencia a CEC-España. Ayuda a buscar una solución, pero no sanciona ni dicta una decisión obligatoria. Comprueba sus condiciones antes de iniciar otra vía.",
                "enlaces": [
                    {
                        "texto": "Conoce los servicios de CEC-España",
                        "clave": "CEC-informacion"
                    },
                    {
                        "texto": "Solicita asistencia a CEC-España",
                        "clave": "CEC"
                    }
                ]
            },
            {
                "titulo": "Organismos públicos de consumo",
                "texto": "También puedes pedir orientación a consumo de tu comunidad autónoma o tu OMIC para identificar la vía que corresponde a tu caso.",
                "enlaces": [
                    {
                        "texto": "Localiza el organismo de consumo de tu comunidad autónoma",
                        "clave": "Consumo"
                    },
                    {
                        "texto": "Busca tu OMIC u oficina local de consumo",
                        "clave": "OMIC"
                    }
                ]
            },
            {
                "titulo": "Vía judicial",
                "texto": "También puedes acudir a los tribunales, sin tener que agotar antes todas las vías administrativas. Antes de demandar, comprueba el intento de acuerdo previo que corresponda. El arbitraje y el juicio son vías alternativas para resolver el mismo conflicto.",
                "enlaces": [
                    {
                        "texto": "Infórmate sobre el intento de acuerdo previo al juicio",
                        "clave": "Antes-del-juicio"
                    }
                ]
            }
        ]
    },
    "SOL-VT-COMBINADO": {
        "id": "SOL-VT-COMBINADO",
        "sector": "Viajes y transportes",
        "es_solucion": true,
        "texto_solucion": "Primero, reclama al organizador o a la agencia\nComunica sin demora los incumplimientos al organizador o al minorista del viaje combinado. Guarda contrato, reserva y pruebas; indica qué solución pides.\n\nOrganismos públicos de consumo\nSi no se resuelve, presenta reclamación ante consumo de tu comunidad autónoma o tu OMIC. Para incumplimientos turísticos también puede intervenir la autoridad autonómica de turismo.\n\nSi la empresa es insolvente\nSolicita la cobertura de la garantía identificada en la documentación del viaje. Puede cubrir el reembolso de servicios no prestados y, cuando corresponda, la repatriación. Consumo o turismo puede orientarte.\n\nOtras vías disponibles\nSegún el caso, puedes valorar arbitraje de consumo o juicio. Si resides en España y la empresa está en otro país de la UE, Islandia o Noruega, consulta la asistencia de CEC-España. No tienes que agotar todas estas vías sucesivamente.",
        "sector_reclamacion": "Consumo",
        "subsector": "Viajes combinados",
        "bloques_solucion": [
            {
                "titulo": "Primero, reclama al organizador o a la agencia",
                "texto": "Comunica sin demora los incumplimientos al organizador o al minorista del viaje combinado. Guarda contrato, reserva y pruebas; indica qué solución pides.",
                "enlaces": []
            },
            {
                "titulo": "Organismos públicos de consumo",
                "texto": "Si no se resuelve, presenta reclamación ante consumo de tu comunidad autónoma o tu OMIC. Para incumplimientos turísticos también puede intervenir la autoridad autonómica de turismo.",
                "enlaces": [
                    {
                        "texto": "Localiza el organismo de consumo de tu comunidad autónoma",
                        "clave": "Consumo"
                    },
                    {
                        "texto": "Busca tu OMIC u oficina local de consumo",
                        "clave": "OMIC"
                    }
                ]
            },
            {
                "titulo": "Si la empresa es insolvente",
                "texto": "Solicita la cobertura de la garantía identificada en la documentación del viaje. Puede cubrir el reembolso de servicios no prestados y, cuando corresponda, la repatriación. Consumo o turismo puede orientarte.",
                "enlaces": [
                    {
                        "texto": "Localiza el organismo de consumo de tu comunidad autónoma",
                        "clave": "Consumo"
                    }
                ]
            },
            {
                "titulo": "Otras vías disponibles",
                "texto": "Según el caso, puedes valorar arbitraje de consumo o juicio. Si resides en España y la empresa está en otro país de la UE, Islandia o Noruega, consulta la asistencia de CEC-España. No tienes que agotar todas estas vías sucesivamente.",
                "enlaces": [
                    {
                        "texto": "Consulta cómo funciona el arbitraje y dónde solicitarlo",
                        "clave": "Arbitraje"
                    },
                    {
                        "texto": "Conoce los servicios de CEC-España",
                        "clave": "CEC-informacion"
                    },
                    {
                        "texto": "Infórmate sobre el intento de acuerdo previo al juicio",
                        "clave": "Antes-del-juicio"
                    }
                ]
            }
        ]
    },
    "SUM-ORIENT": {
        "id": "SUM-ORIENT",
        "sector": "Suministros",
        "pregunta": "¿Con qué suministro tienes el problema?",
        "es_solucion": false,
        "opciones_custom": [
            {
                "texto": "Telefonía o acceso a internet",
                "siguiente": "SOL-SUM-TELECO"
            },
            {
                "texto": "Electricidad",
                "siguiente": "SOL-SUM-ELECTRICIDAD"
            },
            {
                "texto": "Gas natural",
                "siguiente": "SOL-SUM-GAS"
            },
            {
                "texto": "Agua",
                "siguiente": "SOL-SUM-AGUA"
            }
        ],
        "primera_pregunta_sector": true
    },
    "SOL-SUM-TELECO": {
        "id": "SOL-SUM-TELECO",
        "sector": "Suministros",
        "es_solucion": true,
        "texto_solucion": "Primero, reclama al operador\nHazlo en el plazo de un mes desde que conoces el hecho y solicita referencia y justificante. Conserva contrato, facturas y comunicaciones.\n\nDespués, Oficina de Telecomunicaciones\nSi rechazan tu petición o pasa un mes sin respuesta, puedes acudir a la Oficina de Atención al Usuario de Telecomunicaciones. Tienes tres meses desde la respuesta o desde que terminó ese mes. Su resolución obliga al operador en las materias de su competencia.\n\nConsumo y otras vías\nConsumo o tu OMIC puede ayudarte. También puedes valorar arbitraje de consumo, con sus requisitos y reglas de coordinación con la Oficina, o juicio. Para un teléfono comprado como producto, utiliza consumo; para uso ilícito de datos, la vía de protección de datos.",
        "sector_reclamacion": "Telecomunicaciones",
        "subsector": "Telecomunicaciones",
        "bloques_solucion": [
            {
                "titulo": "Primero, reclama al operador",
                "texto": "Hazlo en el plazo de un mes desde que conoces el hecho y solicita referencia y justificante. Conserva contrato, facturas y comunicaciones.",
                "enlaces": []
            },
            {
                "titulo": "Después, Oficina de Telecomunicaciones",
                "texto": "Si rechazan tu petición o pasa un mes sin respuesta, puedes acudir a la Oficina de Atención al Usuario de Telecomunicaciones. Tienes tres meses desde la respuesta o desde que terminó ese mes. Su resolución obliga al operador en las materias de su competencia.",
                "enlaces": [
                    {
                        "texto": "Consulta cómo reclamar ante la Oficina de Telecomunicaciones",
                        "clave": "Telecomunicaciones"
                    }
                ]
            },
            {
                "titulo": "Consumo y otras vías",
                "texto": "Consumo o tu OMIC puede ayudarte. También puedes valorar arbitraje de consumo, con sus requisitos y reglas de coordinación con la Oficina, o juicio. Para un teléfono comprado como producto, utiliza consumo; para uso ilícito de datos, la vía de protección de datos.",
                "enlaces": [
                    {
                        "texto": "Localiza el organismo de consumo de tu comunidad autónoma",
                        "clave": "Consumo"
                    },
                    {
                        "texto": "Busca tu OMIC u oficina local de consumo",
                        "clave": "OMIC"
                    },
                    {
                        "texto": "Consulta cómo funciona el arbitraje y dónde solicitarlo",
                        "clave": "Arbitraje"
                    },
                    {
                        "texto": "Accede a los formularios de reclamación de la AEPD",
                        "clave": "Datos"
                    },
                    {
                        "texto": "Infórmate sobre el intento de acuerdo previo al juicio",
                        "clave": "Antes-del-juicio"
                    }
                ]
            }
        ]
    },
    "SOL-SUM-ELECTRICIDAD": {
        "id": "SOL-SUM-ELECTRICIDAD",
        "sector": "Suministros",
        "es_solucion": true,
        "texto_solucion": "Primero, reclama a la empresa responsable\nDirígete a la comercializadora o distribuidora y guarda la referencia. El plazo general es quince días hábiles. Para medida del consumo, facturas emitidas o cortes indebidos, es de cinco días hábiles con menos de 15 kW contratados y quince días hábiles para el resto.\n\nOrganismos públicos de consumo\nSi no se soluciona, acude a consumo de la comunidad autónoma donde está el suministro o tu OMIC. Según la materia, puede corresponder también al órgano autonómico de energía. La guía explica estas vías; la CNMC no es una ventanilla general de resolución de reclamaciones contractuales.\n\nConsulta la vía sectorial\nComprueba en la guía de electricidad a qué organismo dirigir la reclamación según el problema. El defensor de la empresa, si existe, es una vía adicional.\n\nOtra vía: arbitraje de consumo\nPuedes solicitar arbitraje de consumo si el asunto entra en su ámbito y la empresa está adherida para ese caso o acepta someterse. Es una vía gratuita y su laudo es vinculante. En la web encontrarás los requisitos y la Junta a la que dirigirte.\n\nVía judicial\nTambién puedes acudir a los tribunales, sin tener que agotar antes todas las vías administrativas. Antes de demandar, comprueba el intento de acuerdo previo que corresponda. El arbitraje y el juicio son vías alternativas para resolver el mismo conflicto.",
        "sector_reclamacion": "Consumo",
        "subsector": "Electricidad",
        "bloques_solucion": [
            {
                "titulo": "Primero, reclama a la empresa responsable",
                "texto": "Dirígete a la comercializadora o distribuidora y guarda la referencia. El plazo general es quince días hábiles. Para medida del consumo, facturas emitidas o cortes indebidos, es de cinco días hábiles con menos de 15 kW contratados y quince días hábiles para el resto.",
                "enlaces": []
            },
            {
                "titulo": "Organismos públicos de consumo",
                "texto": "Si no se soluciona, acude a consumo de la comunidad autónoma donde está el suministro o tu OMIC. Según la materia, puede corresponder también al órgano autonómico de energía. La guía explica estas vías; la CNMC no es una ventanilla general de resolución de reclamaciones contractuales.",
                "enlaces": [
                    {
                        "texto": "Localiza el organismo de consumo de tu comunidad autónoma",
                        "clave": "Consumo"
                    },
                    {
                        "texto": "Busca tu OMIC u oficina local de consumo",
                        "clave": "OMIC"
                    }
                ]
            },
            {
                "titulo": "Consulta la vía sectorial",
                "texto": "Comprueba en la guía de electricidad a qué organismo dirigir la reclamación según el problema. El defensor de la empresa, si existe, es una vía adicional.",
                "enlaces": [
                    {
                        "texto": "Consulta las vías de reclamación de electricidad",
                        "clave": "Electricidad"
                    }
                ]
            },
            {
                "titulo": "Otra vía: arbitraje de consumo",
                "texto": "Puedes solicitar arbitraje de consumo si el asunto entra en su ámbito y la empresa está adherida para ese caso o acepta someterse. Es una vía gratuita y su laudo es vinculante. En la web encontrarás los requisitos y la Junta a la que dirigirte.",
                "enlaces": [
                    {
                        "texto": "Consulta cómo funciona el arbitraje y dónde solicitarlo",
                        "clave": "Arbitraje"
                    }
                ]
            },
            {
                "titulo": "Vía judicial",
                "texto": "También puedes acudir a los tribunales, sin tener que agotar antes todas las vías administrativas. Antes de demandar, comprueba el intento de acuerdo previo que corresponda. El arbitraje y el juicio son vías alternativas para resolver el mismo conflicto.",
                "enlaces": [
                    {
                        "texto": "Infórmate sobre el intento de acuerdo previo al juicio",
                        "clave": "Antes-del-juicio"
                    }
                ]
            }
        ]
    },
    "SOL-SUM-GAS": {
        "id": "SOL-SUM-GAS",
        "sector": "Suministros",
        "es_solucion": true,
        "texto_solucion": "Primero, reclama a la empresa responsable\nDirígete a la comercializadora o distribuidora y conserva el justificante y las pruebas.\n\nOrganismos públicos de consumo\nSi no se soluciona, acude a consumo de tu comunidad autónoma o tu OMIC. Para suministro regulado o cuestiones técnicas, consulta también al órgano autonómico de energía correspondiente.\n\nConsulta la vía sectorial\nLa guía de gas natural explica las vías según la materia. La CNMC informa y supervisa, pero no resuelve las reclamaciones contractuales individuales de gas.\n\nOtra vía: arbitraje de consumo\nPuedes solicitar arbitraje de consumo si el asunto entra en su ámbito y la empresa está adherida para ese caso o acepta someterse. Es una vía gratuita y su laudo es vinculante. En la web encontrarás los requisitos y la Junta a la que dirigirte.\n\nVía judicial\nTambién puedes acudir a los tribunales, sin tener que agotar antes todas las vías administrativas. Antes de demandar, comprueba el intento de acuerdo previo que corresponda. El arbitraje y el juicio son vías alternativas para resolver el mismo conflicto.",
        "sector_reclamacion": "Consumo",
        "subsector": "Gas natural",
        "bloques_solucion": [
            {
                "titulo": "Primero, reclama a la empresa responsable",
                "texto": "Dirígete a la comercializadora o distribuidora y conserva el justificante y las pruebas.",
                "enlaces": []
            },
            {
                "titulo": "Organismos públicos de consumo",
                "texto": "Si no se soluciona, acude a consumo de tu comunidad autónoma o tu OMIC. Para suministro regulado o cuestiones técnicas, consulta también al órgano autonómico de energía correspondiente.",
                "enlaces": [
                    {
                        "texto": "Localiza el organismo de consumo de tu comunidad autónoma",
                        "clave": "Consumo"
                    },
                    {
                        "texto": "Busca tu OMIC u oficina local de consumo",
                        "clave": "OMIC"
                    }
                ]
            },
            {
                "titulo": "Consulta la vía sectorial",
                "texto": "La guía de gas natural explica las vías según la materia. La CNMC informa y supervisa, pero no resuelve las reclamaciones contractuales individuales de gas.",
                "enlaces": [
                    {
                        "texto": "Consulta las vías de reclamación de gas natural",
                        "clave": "Gas"
                    }
                ]
            },
            {
                "titulo": "Otra vía: arbitraje de consumo",
                "texto": "Puedes solicitar arbitraje de consumo si el asunto entra en su ámbito y la empresa está adherida para ese caso o acepta someterse. Es una vía gratuita y su laudo es vinculante. En la web encontrarás los requisitos y la Junta a la que dirigirte.",
                "enlaces": [
                    {
                        "texto": "Consulta cómo funciona el arbitraje y dónde solicitarlo",
                        "clave": "Arbitraje"
                    }
                ]
            },
            {
                "titulo": "Vía judicial",
                "texto": "También puedes acudir a los tribunales, sin tener que agotar antes todas las vías administrativas. Antes de demandar, comprueba el intento de acuerdo previo que corresponda. El arbitraje y el juicio son vías alternativas para resolver el mismo conflicto.",
                "enlaces": [
                    {
                        "texto": "Infórmate sobre el intento de acuerdo previo al juicio",
                        "clave": "Antes-del-juicio"
                    }
                ]
            }
        ]
    },
    "SOL-SUM-AGUA": {
        "id": "SOL-SUM-AGUA",
        "sector": "Suministros",
        "es_solucion": true,
        "texto_solucion": "Primero, reclama a quien presta o factura el servicio\nPresenta la reclamación y guarda el justificante. Si no se resuelve, dirígete también al ayuntamiento o entidad pública titular del abastecimiento.\n\nOrganismos públicos de consumo\nConsumo de tu comunidad autónoma o tu OMIC puede ayudarte a identificar la vía según quién preste el servicio y la naturaleza del problema.\n\nSi es una tasa o un acto administrativo\nUtiliza el recurso y el plazo indicados en la notificación; una reclamación de consumo no los sustituye.\n\nOtras vías, según la naturaleza del conflicto\nPara una relación contractual de consumo, puedes consultar si cabe arbitraje. Para acudir a los tribunales, la vía depende del acto o contrato de que se trate.",
        "sector_reclamacion": "Consumo",
        "subsector": "Agua",
        "bloques_solucion": [
            {
                "titulo": "Primero, reclama a quien presta o factura el servicio",
                "texto": "Presenta la reclamación y guarda el justificante. Si no se resuelve, dirígete también al ayuntamiento o entidad pública titular del abastecimiento.",
                "enlaces": []
            },
            {
                "titulo": "Organismos públicos de consumo",
                "texto": "Consumo de tu comunidad autónoma o tu OMIC puede ayudarte a identificar la vía según quién preste el servicio y la naturaleza del problema.",
                "enlaces": [
                    {
                        "texto": "Localiza el organismo de consumo de tu comunidad autónoma",
                        "clave": "Consumo"
                    },
                    {
                        "texto": "Busca tu OMIC u oficina local de consumo",
                        "clave": "OMIC"
                    }
                ]
            },
            {
                "titulo": "Si es una tasa o un acto administrativo",
                "texto": "Utiliza el recurso y el plazo indicados en la notificación; una reclamación de consumo no los sustituye.",
                "enlaces": []
            },
            {
                "titulo": "Otras vías, según la naturaleza del conflicto",
                "texto": "Para una relación contractual de consumo, puedes consultar si cabe arbitraje. Para acudir a los tribunales, la vía depende del acto o contrato de que se trate.",
                "enlaces": [
                    {
                        "texto": "Consulta cómo funciona el arbitraje y dónde solicitarlo",
                        "clave": "Arbitraje"
                    },
                    {
                        "texto": "Infórmate sobre el intento de acuerdo previo al juicio",
                        "clave": "Antes-del-juicio"
                    }
                ]
            }
        ]
    },
    "COM-ORIENT": {
        "id": "COM-ORIENT",
        "sector": "Compras",
        "pregunta": "¿En qué punto está tu reclamación?",
        "es_solucion": false,
        "opciones_custom": [
            {
                "texto": "Aún no he reclamado a la empresa",
                "siguiente": "SOL-COM-RECLAMAR"
            },
            {
                "texto": "Ya he reclamado y el problema continúa",
                "siguiente": "COM-PAIS"
            },
            {
                "texto": "Quiero comunicar una posible infracción o pedir orientación",
                "siguiente": "SOL-COM-ORIENTACION"
            }
        ],
        "primera_pregunta_sector": true
    },
    "COM-PAIS": {
        "id": "COM-PAIS",
        "sector": "Compras",
        "pregunta": "¿La empresa tiene su sede en otro país de la UE, Islandia o Noruega?",
        "es_solucion": false,
        "opciones_custom": [
            {
                "texto": "Sí",
                "siguiente": "SOL-COM-CEC"
            },
            {
                "texto": "No",
                "siguiente": "SOL-COM-OPCIONES"
            },
            {
                "texto": "No lo sé",
                "siguiente": "SOL-COM-OPCIONES"
            }
        ],
        "explicacion": "Mira los datos legales del contrato, factura o web. La sede de la empresa, no el lugar del viaje o el idioma de la web, es lo relevante."
    },
    "SOL-COM-RECLAMAR": {
        "id": "SOL-COM-RECLAMAR",
        "sector": "Compras",
        "es_solucion": true,
        "texto_solucion": "Primero, reclama a la empresa\nExplica por escrito qué ha ocurrido y qué solución pides. Guarda el justificante y adjunta contrato, factura y pruebas. Si intervino una plataforma, reclama a cada empresa por las obligaciones que le correspondan. Si intervino una plataforma, identifica quién asumió cada obligación; para CEC importa la sede de la empresa concreta contra la que reclamas.\n\nOrganismos públicos de consumo\nPuedes pedir ayuda desde ahora a consumo de tu comunidad autónoma o tu OMIC. Si la empresa no soluciona el problema, presenta allí tu reclamación con la documentación.\n\nSi necesitas otras vías\nSegún el asunto, también puedes valorar el arbitraje de consumo o acudir a los tribunales. No es necesario pasar sucesivamente por todas las vías.",
        "sector_reclamacion": "Consumo",
        "bloques_solucion": [
            {
                "titulo": "Primero, reclama a la empresa",
                "texto": "Explica por escrito qué ha ocurrido y qué solución pides. Guarda el justificante y adjunta contrato, factura y pruebas. Si intervino una plataforma, reclama a cada empresa por las obligaciones que le correspondan. Si intervino una plataforma, identifica quién asumió cada obligación; para CEC importa la sede de la empresa concreta contra la que reclamas.",
                "enlaces": []
            },
            {
                "titulo": "Organismos públicos de consumo",
                "texto": "Puedes pedir ayuda desde ahora a consumo de tu comunidad autónoma o tu OMIC. Si la empresa no soluciona el problema, presenta allí tu reclamación con la documentación.",
                "enlaces": [
                    {
                        "texto": "Localiza el organismo de consumo de tu comunidad autónoma",
                        "clave": "Consumo"
                    },
                    {
                        "texto": "Busca tu OMIC u oficina local de consumo",
                        "clave": "OMIC"
                    }
                ]
            },
            {
                "titulo": "Si necesitas otras vías",
                "texto": "Según el asunto, también puedes valorar el arbitraje de consumo o acudir a los tribunales. No es necesario pasar sucesivamente por todas las vías.",
                "enlaces": [
                    {
                        "texto": "Consulta cómo funciona el arbitraje y dónde solicitarlo",
                        "clave": "Arbitraje"
                    },
                    {
                        "texto": "Infórmate sobre el intento de acuerdo previo al juicio",
                        "clave": "Antes-del-juicio"
                    }
                ]
            }
        ]
    },
    "SOL-COM-OPCIONES": {
        "id": "SOL-COM-OPCIONES",
        "sector": "Compras",
        "es_solucion": true,
        "texto_solucion": "Organismos públicos de consumo\nSi ya has reclamado a la empresa y el problema continúa, puedes presentar tu reclamación ante consumo de tu comunidad autónoma o tu OMIC. Aporta el contrato, las pruebas y la reclamación previa, junto con la respuesta si la recibiste. Estos servicios pueden orientarte y tramitar tu reclamación. Si intervino una plataforma, identifica quién asumió cada obligación; para CEC importa la sede de la empresa concreta contra la que reclamas.\n\nOtra vía: arbitraje de consumo\nPuedes solicitar arbitraje de consumo si el asunto entra en su ámbito y la empresa está adherida para ese caso o acepta someterse. Es una vía gratuita y su laudo es vinculante. En la web encontrarás los requisitos y la Junta a la que dirigirte.\n\nVía judicial\nTambién puedes acudir a los tribunales, sin tener que agotar antes todas las vías administrativas. Antes de demandar, comprueba el intento de acuerdo previo que corresponda. El arbitraje y el juicio son vías alternativas para resolver el mismo conflicto.",
        "sector_reclamacion": "Consumo",
        "bloques_solucion": [
            {
                "titulo": "Organismos públicos de consumo",
                "texto": "Si ya has reclamado a la empresa y el problema continúa, puedes presentar tu reclamación ante consumo de tu comunidad autónoma o tu OMIC. Aporta el contrato, las pruebas y la reclamación previa, junto con la respuesta si la recibiste. Estos servicios pueden orientarte y tramitar tu reclamación. Si intervino una plataforma, identifica quién asumió cada obligación; para CEC importa la sede de la empresa concreta contra la que reclamas.",
                "enlaces": [
                    {
                        "texto": "Localiza el organismo de consumo de tu comunidad autónoma",
                        "clave": "Consumo"
                    },
                    {
                        "texto": "Busca tu OMIC u oficina local de consumo",
                        "clave": "OMIC"
                    }
                ]
            },
            {
                "titulo": "Otra vía: arbitraje de consumo",
                "texto": "Puedes solicitar arbitraje de consumo si el asunto entra en su ámbito y la empresa está adherida para ese caso o acepta someterse. Es una vía gratuita y su laudo es vinculante. En la web encontrarás los requisitos y la Junta a la que dirigirte.",
                "enlaces": [
                    {
                        "texto": "Consulta cómo funciona el arbitraje y dónde solicitarlo",
                        "clave": "Arbitraje"
                    }
                ]
            },
            {
                "titulo": "Vía judicial",
                "texto": "También puedes acudir a los tribunales, sin tener que agotar antes todas las vías administrativas. Antes de demandar, comprueba el intento de acuerdo previo que corresponda. El arbitraje y el juicio son vías alternativas para resolver el mismo conflicto.",
                "enlaces": [
                    {
                        "texto": "Infórmate sobre el intento de acuerdo previo al juicio",
                        "clave": "Antes-del-juicio"
                    }
                ]
            }
        ]
    },
    "SOL-COM-ORIENTACION": {
        "id": "SOL-COM-ORIENTACION",
        "sector": "Compras",
        "es_solucion": true,
        "texto_solucion": "Pide orientación o comunica los hechos\nDirígete a consumo de tu comunidad autónoma o tu OMIC. Identifica a la empresa y aporta las pruebas. Para comunicar una posible infracción no tienes que esperar una respuesta empresarial. Si además pides devolución o indemnización, indícalo expresamente: comunicar una infracción no garantiza por sí solo que recuperes el dinero.",
        "sector_reclamacion": "Consumo",
        "bloques_solucion": [
            {
                "titulo": "Pide orientación o comunica los hechos",
                "texto": "Dirígete a consumo de tu comunidad autónoma o tu OMIC. Identifica a la empresa y aporta las pruebas. Para comunicar una posible infracción no tienes que esperar una respuesta empresarial. Si además pides devolución o indemnización, indícalo expresamente: comunicar una infracción no garantiza por sí solo que recuperes el dinero.",
                "enlaces": [
                    {
                        "texto": "Localiza el organismo de consumo de tu comunidad autónoma",
                        "clave": "Consumo"
                    },
                    {
                        "texto": "Busca tu OMIC u oficina local de consumo",
                        "clave": "OMIC"
                    }
                ]
            }
        ]
    },
    "SOL-COM-CEC": {
        "id": "SOL-COM-CEC",
        "sector": "Compras",
        "es_solucion": true,
        "texto_solucion": "Solicita ayuda a CEC-España\nSi resides en España y ya has reclamado por escrito a una empresa establecida en otro país de la UE, Islandia o Noruega, puedes solicitar asistencia a CEC-España. Ayuda a buscar una solución, pero no sanciona ni dicta una decisión obligatoria. Comprueba sus condiciones antes de iniciar otra vía. Si intervino una plataforma, identifica quién asumió cada obligación; para CEC importa la sede de la empresa concreta contra la que reclamas.\n\nOrganismos públicos de consumo\nTambién puedes pedir orientación a consumo de tu comunidad autónoma o tu OMIC para identificar la vía que corresponde a tu caso.\n\nVía judicial\nTambién puedes acudir a los tribunales, sin tener que agotar antes todas las vías administrativas. Antes de demandar, comprueba el intento de acuerdo previo que corresponda. El arbitraje y el juicio son vías alternativas para resolver el mismo conflicto.",
        "sector_reclamacion": "CEC-informacion",
        "bloques_solucion": [
            {
                "titulo": "Solicita ayuda a CEC-España",
                "texto": "Si resides en España y ya has reclamado por escrito a una empresa establecida en otro país de la UE, Islandia o Noruega, puedes solicitar asistencia a CEC-España. Ayuda a buscar una solución, pero no sanciona ni dicta una decisión obligatoria. Comprueba sus condiciones antes de iniciar otra vía. Si intervino una plataforma, identifica quién asumió cada obligación; para CEC importa la sede de la empresa concreta contra la que reclamas.",
                "enlaces": [
                    {
                        "texto": "Conoce los servicios de CEC-España",
                        "clave": "CEC-informacion"
                    },
                    {
                        "texto": "Solicita asistencia a CEC-España",
                        "clave": "CEC"
                    }
                ]
            },
            {
                "titulo": "Organismos públicos de consumo",
                "texto": "También puedes pedir orientación a consumo de tu comunidad autónoma o tu OMIC para identificar la vía que corresponde a tu caso.",
                "enlaces": [
                    {
                        "texto": "Localiza el organismo de consumo de tu comunidad autónoma",
                        "clave": "Consumo"
                    },
                    {
                        "texto": "Busca tu OMIC u oficina local de consumo",
                        "clave": "OMIC"
                    }
                ]
            },
            {
                "titulo": "Vía judicial",
                "texto": "También puedes acudir a los tribunales, sin tener que agotar antes todas las vías administrativas. Antes de demandar, comprueba el intento de acuerdo previo que corresponda. El arbitraje y el juicio son vías alternativas para resolver el mismo conflicto.",
                "enlaces": [
                    {
                        "texto": "Infórmate sobre el intento de acuerdo previo al juicio",
                        "clave": "Antes-del-juicio"
                    }
                ]
            }
        ]
    },
    "DAT-ORIENT": {
        "id": "DAT-ORIENT",
        "sector": "Protección de datos personales",
        "pregunta": "¿Qué quieres hacer respecto a tus datos personales?",
        "es_solucion": false,
        "opciones_custom": [
            {
                "texto": "Acceder, corregir, borrar mis datos u oponerme a su uso",
                "siguiente": "DAT-DERECHOS"
            },
            {
                "texto": "Reclamar por un uso ilícito, difusión o publicidad no solicitada",
                "siguiente": "SOL-DAT-INFRACCION"
            },
            {
                "texto": "Discutir una factura, deuda o contrato",
                "siguiente": "SOL-DAT-CONTRATO"
            }
        ],
        "primera_pregunta_sector": true
    },
    "DAT-DERECHOS": {
        "id": "DAT-DERECHOS",
        "sector": "Protección de datos personales",
        "pregunta": "¿Has pedido a la entidad responsable que atienda tu derecho?",
        "es_solucion": false,
        "opcion_si": "SOL-DAT-AEPD",
        "opcion_no": "SOL-DAT-EJERCER"
    },
    "SOL-DAT-EJERCER": {
        "id": "SOL-DAT-EJERCER",
        "sector": "Protección de datos personales",
        "es_solucion": true,
        "texto_solucion": "Primero, solicita tu derecho a la entidad\nDirígete al responsable del tratamiento o a su delegado de protección de datos, si lo hay, por un canal que deje justificante. Identifica el derecho y los datos afectados. El plazo ordinario de respuesta es un mes; puede ampliarse dos meses más con aviso motivado dentro del primero.\n\nSi lo deniegan o vence el plazo\nPuedes reclamar por derechos no atendidos ante la AEPD o la autoridad autonómica competente, aportando solicitud, justificante y respuesta si la hubo.",
        "sector_reclamacion": "Derechos-datos",
        "bloques_solucion": [
            {
                "titulo": "Primero, solicita tu derecho a la entidad",
                "texto": "Dirígete al responsable del tratamiento o a su delegado de protección de datos, si lo hay, por un canal que deje justificante. Identifica el derecho y los datos afectados. El plazo ordinario de respuesta es un mes; puede ampliarse dos meses más con aviso motivado dentro del primero.",
                "enlaces": [
                    {
                        "texto": "Consulta cómo ejercer tus derechos de protección de datos",
                        "clave": "Derechos-datos"
                    }
                ]
            },
            {
                "titulo": "Si lo deniegan o vence el plazo",
                "texto": "Puedes reclamar por derechos no atendidos ante la AEPD o la autoridad autonómica competente, aportando solicitud, justificante y respuesta si la hubo.",
                "enlaces": [
                    {
                        "texto": "Accede a los formularios de reclamación de la AEPD",
                        "clave": "Datos"
                    }
                ]
            }
        ]
    },
    "SOL-DAT-AEPD": {
        "id": "SOL-DAT-AEPD",
        "sector": "Protección de datos personales",
        "es_solucion": true,
        "texto_solucion": "Reclama por un derecho no atendido\nSi han denegado tu solicitud o ha vencido el plazo aplicable, presenta reclamación con la solicitud previa, su justificante y la respuesta recibida. El plazo ordinario es un mes, ampliable dos meses más con aviso motivado dentro del primero. Si todavía está abierto, conserva las pruebas y espera su vencimiento para esta reclamación.\n\nAutoridad competente\nLa AEPD informa de los formularios y de su ámbito de actuación. En los casos que correspondan a una autoridad autonómica de protección de datos, la reclamación debe tramitarse ante esta.",
        "sector_reclamacion": "Datos",
        "bloques_solucion": [
            {
                "titulo": "Reclama por un derecho no atendido",
                "texto": "Si han denegado tu solicitud o ha vencido el plazo aplicable, presenta reclamación con la solicitud previa, su justificante y la respuesta recibida. El plazo ordinario es un mes, ampliable dos meses más con aviso motivado dentro del primero. Si todavía está abierto, conserva las pruebas y espera su vencimiento para esta reclamación.",
                "enlaces": [
                    {
                        "texto": "Accede a los formularios de reclamación de la AEPD",
                        "clave": "Datos"
                    }
                ]
            },
            {
                "titulo": "Autoridad competente",
                "texto": "La AEPD informa de los formularios y de su ámbito de actuación. En los casos que correspondan a una autoridad autonómica de protección de datos, la reclamación debe tramitarse ante esta.",
                "enlaces": [
                    {
                        "texto": "Accede a los formularios de reclamación de la AEPD",
                        "clave": "Datos"
                    }
                ]
            }
        ]
    },
    "SOL-DAT-INFRACCION": {
        "id": "SOL-DAT-INFRACCION",
        "sector": "Protección de datos personales",
        "es_solucion": true,
        "texto_solucion": "Presenta la reclamación de protección de datos\nSi tienes pruebas o indicios de un tratamiento ilícito, puedes reclamar sin ejercer previamente un derecho para toda denuncia. Selecciona el formulario adecuado; para publicidad no solicitada, comprueba las pruebas y requisitos del canal. Puede corresponder a la AEPD o a una autoridad autonómica, según la entidad.\n\nSi también pides dinero o discutes un contrato\nEste procedimiento no decide devoluciones contractuales ni concede indemnizaciones por daños. Para el contrato, utiliza consumo o el organismo sectorial; para daños, valora asesoramiento jurídico y la vía judicial.",
        "sector_reclamacion": "Datos",
        "bloques_solucion": [
            {
                "titulo": "Presenta la reclamación de protección de datos",
                "texto": "Si tienes pruebas o indicios de un tratamiento ilícito, puedes reclamar sin ejercer previamente un derecho para toda denuncia. Selecciona el formulario adecuado; para publicidad no solicitada, comprueba las pruebas y requisitos del canal. Puede corresponder a la AEPD o a una autoridad autonómica, según la entidad.",
                "enlaces": [
                    {
                        "texto": "Accede a los formularios de reclamación de la AEPD",
                        "clave": "Datos"
                    }
                ]
            },
            {
                "titulo": "Si también pides dinero o discutes un contrato",
                "texto": "Este procedimiento no decide devoluciones contractuales ni concede indemnizaciones por daños. Para el contrato, utiliza consumo o el organismo sectorial; para daños, valora asesoramiento jurídico y la vía judicial.",
                "enlaces": [
                    {
                        "texto": "Localiza el organismo de consumo de tu comunidad autónoma",
                        "clave": "Consumo"
                    },
                    {
                        "texto": "Infórmate sobre el intento de acuerdo previo al juicio",
                        "clave": "Antes-del-juicio"
                    }
                ]
            }
        ]
    },
    "SOL-DAT-CONTRATO": {
        "id": "SOL-DAT-CONTRATO",
        "sector": "Protección de datos personales",
        "es_solucion": true,
        "texto_solucion": "Reclama por el contrato o la factura\nDirígete primero a la empresa y, si no se resuelve, a consumo o al organismo sectorial correspondiente. La AEPD no decide la existencia o cuantía de una deuda ni el cumplimiento del contrato. Consumo o tu OMIC puede ayudarte a identificar la vía.\n\nSi además hay un uso indebido de datos\nPuedes plantear por separado esa cuestión ante la autoridad competente de protección de datos.",
        "sector_reclamacion": "Consumo",
        "bloques_solucion": [
            {
                "titulo": "Reclama por el contrato o la factura",
                "texto": "Dirígete primero a la empresa y, si no se resuelve, a consumo o al organismo sectorial correspondiente. La AEPD no decide la existencia o cuantía de una deuda ni el cumplimiento del contrato. Consumo o tu OMIC puede ayudarte a identificar la vía.",
                "enlaces": [
                    {
                        "texto": "Localiza el organismo de consumo de tu comunidad autónoma",
                        "clave": "Consumo"
                    },
                    {
                        "texto": "Busca tu OMIC u oficina local de consumo",
                        "clave": "OMIC"
                    }
                ]
            },
            {
                "titulo": "Si además hay un uso indebido de datos",
                "texto": "Puedes plantear por separado esa cuestión ante la autoridad competente de protección de datos.",
                "enlaces": [
                    {
                        "texto": "Accede a los formularios de reclamación de la AEPD",
                        "clave": "Datos"
                    }
                ]
            }
        ]
    },
    "TUR-ORIENT": {
        "id": "TUR-ORIENT",
        "sector": "Turismo",
        "pregunta": "¿Con qué servicio turístico tienes el problema?",
        "es_solucion": false,
        "opciones_custom": [
            {
                "texto": "Hotel, alojamiento, camping, restaurante u otro establecimiento",
                "siguiente": "TUR-ESTADO"
            },
            {
                "texto": "Viaje combinado contratado como paquete",
                "siguiente": "SOL-TUR-COMBINADO"
            }
        ],
        "primera_pregunta_sector": true
    },
    "TUR-ESTADO": {
        "id": "TUR-ESTADO",
        "sector": "Turismo",
        "pregunta": "¿En qué punto está tu reclamación?",
        "es_solucion": false,
        "opciones_custom": [
            {
                "texto": "Aún no he reclamado a la empresa",
                "siguiente": "SOL-TUR-RECLAMAR"
            },
            {
                "texto": "Ya he reclamado y el problema continúa",
                "siguiente": "TUR-PAIS"
            },
            {
                "texto": "Quiero comunicar una posible infracción o pedir orientación",
                "siguiente": "SOL-TUR-ORIENTACION"
            }
        ]
    },
    "TUR-PAIS": {
        "id": "TUR-PAIS",
        "sector": "Turismo",
        "pregunta": "¿La empresa tiene su sede en otro país de la UE, Islandia o Noruega?",
        "es_solucion": false,
        "opciones_custom": [
            {
                "texto": "Sí",
                "siguiente": "SOL-TUR-CEC"
            },
            {
                "texto": "No",
                "siguiente": "SOL-TUR-OPCIONES"
            },
            {
                "texto": "No lo sé",
                "siguiente": "SOL-TUR-OPCIONES"
            }
        ],
        "explicacion": "Mira los datos legales del contrato, factura o web. La sede de la empresa, no el lugar del viaje o el idioma de la web, es lo relevante."
    },
    "SOL-TUR-RECLAMAR": {
        "id": "SOL-TUR-RECLAMAR",
        "sector": "Turismo",
        "es_solucion": true,
        "texto_solucion": "Primero, reclama a la empresa\nExplica por escrito qué ha ocurrido y qué solución pides. Guarda el justificante y adjunta contrato, factura y pruebas. Si intervino una plataforma, reclama a cada empresa por las obligaciones que le correspondan. Si intervino una plataforma, identifica quién asumió cada obligación; para CEC importa la sede de la empresa concreta contra la que reclamas.\n\nSi hay un incumplimiento turístico\nPara cuestiones de registro, categoría o funcionamiento de un establecimiento situado en España, también puedes dirigirte al órgano de turismo de la comunidad autónoma donde está. Consumo puede ayudarte a identificarlo. La tramitación de las hojas de reclamaciones depende de la normativa autonómica.\n\nOrganismos públicos de consumo\nPuedes pedir ayuda desde ahora a consumo de tu comunidad autónoma o tu OMIC. Si la empresa no soluciona el problema, presenta allí tu reclamación con la documentación.\n\nSi necesitas otras vías\nSegún el asunto, también puedes valorar el arbitraje de consumo o acudir a los tribunales. No es necesario pasar sucesivamente por todas las vías.",
        "sector_reclamacion": "Consumo",
        "bloques_solucion": [
            {
                "titulo": "Primero, reclama a la empresa",
                "texto": "Explica por escrito qué ha ocurrido y qué solución pides. Guarda el justificante y adjunta contrato, factura y pruebas. Si intervino una plataforma, reclama a cada empresa por las obligaciones que le correspondan. Si intervino una plataforma, identifica quién asumió cada obligación; para CEC importa la sede de la empresa concreta contra la que reclamas.",
                "enlaces": []
            },
            {
                "titulo": "Si hay un incumplimiento turístico",
                "texto": "Para cuestiones de registro, categoría o funcionamiento de un establecimiento situado en España, también puedes dirigirte al órgano de turismo de la comunidad autónoma donde está. Consumo puede ayudarte a identificarlo. La tramitación de las hojas de reclamaciones depende de la normativa autonómica.",
                "enlaces": [
                    {
                        "texto": "Localiza el organismo de consumo de tu comunidad autónoma",
                        "clave": "Consumo"
                    }
                ]
            },
            {
                "titulo": "Organismos públicos de consumo",
                "texto": "Puedes pedir ayuda desde ahora a consumo de tu comunidad autónoma o tu OMIC. Si la empresa no soluciona el problema, presenta allí tu reclamación con la documentación.",
                "enlaces": [
                    {
                        "texto": "Localiza el organismo de consumo de tu comunidad autónoma",
                        "clave": "Consumo"
                    },
                    {
                        "texto": "Busca tu OMIC u oficina local de consumo",
                        "clave": "OMIC"
                    }
                ]
            },
            {
                "titulo": "Si necesitas otras vías",
                "texto": "Según el asunto, también puedes valorar el arbitraje de consumo o acudir a los tribunales. No es necesario pasar sucesivamente por todas las vías.",
                "enlaces": [
                    {
                        "texto": "Consulta cómo funciona el arbitraje y dónde solicitarlo",
                        "clave": "Arbitraje"
                    },
                    {
                        "texto": "Infórmate sobre el intento de acuerdo previo al juicio",
                        "clave": "Antes-del-juicio"
                    }
                ]
            }
        ]
    },
    "SOL-TUR-OPCIONES": {
        "id": "SOL-TUR-OPCIONES",
        "sector": "Turismo",
        "es_solucion": true,
        "texto_solucion": "Organismos públicos de consumo\nSi ya has reclamado a la empresa y el problema continúa, puedes presentar tu reclamación ante consumo de tu comunidad autónoma o tu OMIC. Aporta el contrato, las pruebas y la reclamación previa, junto con la respuesta si la recibiste. Estos servicios pueden orientarte y tramitar tu reclamación. Si intervino una plataforma, identifica quién asumió cada obligación; para CEC importa la sede de la empresa concreta contra la que reclamas.\n\nSi hay un incumplimiento turístico\nPara cuestiones de registro, categoría o funcionamiento de un establecimiento situado en España, también puedes dirigirte al órgano de turismo de la comunidad autónoma donde está. Consumo puede ayudarte a identificarlo. La tramitación de las hojas de reclamaciones depende de la normativa autonómica.\n\nOtra vía: arbitraje de consumo\nPuedes solicitar arbitraje de consumo si el asunto entra en su ámbito y la empresa está adherida para ese caso o acepta someterse. Es una vía gratuita y su laudo es vinculante. En la web encontrarás los requisitos y la Junta a la que dirigirte.\n\nVía judicial\nTambién puedes acudir a los tribunales, sin tener que agotar antes todas las vías administrativas. Antes de demandar, comprueba el intento de acuerdo previo que corresponda. El arbitraje y el juicio son vías alternativas para resolver el mismo conflicto.",
        "sector_reclamacion": "Consumo",
        "bloques_solucion": [
            {
                "titulo": "Organismos públicos de consumo",
                "texto": "Si ya has reclamado a la empresa y el problema continúa, puedes presentar tu reclamación ante consumo de tu comunidad autónoma o tu OMIC. Aporta el contrato, las pruebas y la reclamación previa, junto con la respuesta si la recibiste. Estos servicios pueden orientarte y tramitar tu reclamación. Si intervino una plataforma, identifica quién asumió cada obligación; para CEC importa la sede de la empresa concreta contra la que reclamas.",
                "enlaces": [
                    {
                        "texto": "Localiza el organismo de consumo de tu comunidad autónoma",
                        "clave": "Consumo"
                    },
                    {
                        "texto": "Busca tu OMIC u oficina local de consumo",
                        "clave": "OMIC"
                    }
                ]
            },
            {
                "titulo": "Si hay un incumplimiento turístico",
                "texto": "Para cuestiones de registro, categoría o funcionamiento de un establecimiento situado en España, también puedes dirigirte al órgano de turismo de la comunidad autónoma donde está. Consumo puede ayudarte a identificarlo. La tramitación de las hojas de reclamaciones depende de la normativa autonómica.",
                "enlaces": [
                    {
                        "texto": "Localiza el organismo de consumo de tu comunidad autónoma",
                        "clave": "Consumo"
                    }
                ]
            },
            {
                "titulo": "Otra vía: arbitraje de consumo",
                "texto": "Puedes solicitar arbitraje de consumo si el asunto entra en su ámbito y la empresa está adherida para ese caso o acepta someterse. Es una vía gratuita y su laudo es vinculante. En la web encontrarás los requisitos y la Junta a la que dirigirte.",
                "enlaces": [
                    {
                        "texto": "Consulta cómo funciona el arbitraje y dónde solicitarlo",
                        "clave": "Arbitraje"
                    }
                ]
            },
            {
                "titulo": "Vía judicial",
                "texto": "También puedes acudir a los tribunales, sin tener que agotar antes todas las vías administrativas. Antes de demandar, comprueba el intento de acuerdo previo que corresponda. El arbitraje y el juicio son vías alternativas para resolver el mismo conflicto.",
                "enlaces": [
                    {
                        "texto": "Infórmate sobre el intento de acuerdo previo al juicio",
                        "clave": "Antes-del-juicio"
                    }
                ]
            }
        ]
    },
    "SOL-TUR-ORIENTACION": {
        "id": "SOL-TUR-ORIENTACION",
        "sector": "Turismo",
        "es_solucion": true,
        "texto_solucion": "Pide orientación o comunica los hechos\nDirígete a consumo de tu comunidad autónoma o tu OMIC. Identifica a la empresa y aporta las pruebas. Para comunicar una posible infracción no tienes que esperar una respuesta empresarial. Si además pides devolución o indemnización, indícalo expresamente: comunicar una infracción no garantiza por sí solo que recuperes el dinero.\n\nSi hay un incumplimiento turístico\nPara cuestiones de registro, categoría o funcionamiento de un establecimiento situado en España, también puedes dirigirte al órgano de turismo de la comunidad autónoma donde está. Consumo puede ayudarte a identificarlo. La tramitación de las hojas de reclamaciones depende de la normativa autonómica.",
        "sector_reclamacion": "Consumo",
        "bloques_solucion": [
            {
                "titulo": "Pide orientación o comunica los hechos",
                "texto": "Dirígete a consumo de tu comunidad autónoma o tu OMIC. Identifica a la empresa y aporta las pruebas. Para comunicar una posible infracción no tienes que esperar una respuesta empresarial. Si además pides devolución o indemnización, indícalo expresamente: comunicar una infracción no garantiza por sí solo que recuperes el dinero.",
                "enlaces": [
                    {
                        "texto": "Localiza el organismo de consumo de tu comunidad autónoma",
                        "clave": "Consumo"
                    },
                    {
                        "texto": "Busca tu OMIC u oficina local de consumo",
                        "clave": "OMIC"
                    }
                ]
            },
            {
                "titulo": "Si hay un incumplimiento turístico",
                "texto": "Para cuestiones de registro, categoría o funcionamiento de un establecimiento situado en España, también puedes dirigirte al órgano de turismo de la comunidad autónoma donde está. Consumo puede ayudarte a identificarlo. La tramitación de las hojas de reclamaciones depende de la normativa autonómica.",
                "enlaces": [
                    {
                        "texto": "Localiza el organismo de consumo de tu comunidad autónoma",
                        "clave": "Consumo"
                    }
                ]
            }
        ]
    },
    "SOL-TUR-CEC": {
        "id": "SOL-TUR-CEC",
        "sector": "Turismo",
        "es_solucion": true,
        "texto_solucion": "Solicita ayuda a CEC-España\nSi resides en España y ya has reclamado por escrito a una empresa establecida en otro país de la UE, Islandia o Noruega, puedes solicitar asistencia a CEC-España. Ayuda a buscar una solución, pero no sanciona ni dicta una decisión obligatoria. Comprueba sus condiciones antes de iniciar otra vía. Si intervino una plataforma, identifica quién asumió cada obligación; para CEC importa la sede de la empresa concreta contra la que reclamas.\n\nSi hay un incumplimiento turístico\nPara cuestiones de registro, categoría o funcionamiento de un establecimiento situado en España, también puedes dirigirte al órgano de turismo de la comunidad autónoma donde está. Consumo puede ayudarte a identificarlo. La tramitación de las hojas de reclamaciones depende de la normativa autonómica.\n\nOrganismos públicos de consumo\nTambién puedes pedir orientación a consumo de tu comunidad autónoma o tu OMIC para identificar la vía que corresponde a tu caso.\n\nVía judicial\nTambién puedes acudir a los tribunales, sin tener que agotar antes todas las vías administrativas. Antes de demandar, comprueba el intento de acuerdo previo que corresponda. El arbitraje y el juicio son vías alternativas para resolver el mismo conflicto.",
        "sector_reclamacion": "CEC-informacion",
        "bloques_solucion": [
            {
                "titulo": "Solicita ayuda a CEC-España",
                "texto": "Si resides en España y ya has reclamado por escrito a una empresa establecida en otro país de la UE, Islandia o Noruega, puedes solicitar asistencia a CEC-España. Ayuda a buscar una solución, pero no sanciona ni dicta una decisión obligatoria. Comprueba sus condiciones antes de iniciar otra vía. Si intervino una plataforma, identifica quién asumió cada obligación; para CEC importa la sede de la empresa concreta contra la que reclamas.",
                "enlaces": [
                    {
                        "texto": "Conoce los servicios de CEC-España",
                        "clave": "CEC-informacion"
                    },
                    {
                        "texto": "Solicita asistencia a CEC-España",
                        "clave": "CEC"
                    }
                ]
            },
            {
                "titulo": "Si hay un incumplimiento turístico",
                "texto": "Para cuestiones de registro, categoría o funcionamiento de un establecimiento situado en España, también puedes dirigirte al órgano de turismo de la comunidad autónoma donde está. Consumo puede ayudarte a identificarlo. La tramitación de las hojas de reclamaciones depende de la normativa autonómica.",
                "enlaces": [
                    {
                        "texto": "Localiza el organismo de consumo de tu comunidad autónoma",
                        "clave": "Consumo"
                    }
                ]
            },
            {
                "titulo": "Organismos públicos de consumo",
                "texto": "También puedes pedir orientación a consumo de tu comunidad autónoma o tu OMIC para identificar la vía que corresponde a tu caso.",
                "enlaces": [
                    {
                        "texto": "Localiza el organismo de consumo de tu comunidad autónoma",
                        "clave": "Consumo"
                    },
                    {
                        "texto": "Busca tu OMIC u oficina local de consumo",
                        "clave": "OMIC"
                    }
                ]
            },
            {
                "titulo": "Vía judicial",
                "texto": "También puedes acudir a los tribunales, sin tener que agotar antes todas las vías administrativas. Antes de demandar, comprueba el intento de acuerdo previo que corresponda. El arbitraje y el juicio son vías alternativas para resolver el mismo conflicto.",
                "enlaces": [
                    {
                        "texto": "Infórmate sobre el intento de acuerdo previo al juicio",
                        "clave": "Antes-del-juicio"
                    }
                ]
            }
        ]
    },
    "SOL-TUR-COMBINADO": {
        "id": "SOL-TUR-COMBINADO",
        "sector": "Turismo",
        "es_solucion": true,
        "texto_solucion": "Primero, reclama al organizador o a la agencia\nComunica sin demora los incumplimientos al organizador o al minorista del viaje combinado. Guarda contrato, reserva y pruebas; indica qué solución pides.\n\nOrganismos públicos de consumo\nSi no se resuelve, presenta reclamación ante consumo de tu comunidad autónoma o tu OMIC. Para incumplimientos turísticos también puede intervenir la autoridad autonómica de turismo.\n\nSi la empresa es insolvente\nSolicita la cobertura de la garantía identificada en la documentación del viaje. Puede cubrir el reembolso de servicios no prestados y, cuando corresponda, la repatriación. Consumo o turismo puede orientarte.\n\nOtras vías disponibles\nSegún el caso, puedes valorar arbitraje de consumo o juicio. Si resides en España y la empresa está en otro país de la UE, Islandia o Noruega, consulta la asistencia de CEC-España. No tienes que agotar todas estas vías sucesivamente.",
        "sector_reclamacion": "Consumo",
        "subsector": "Viajes combinados",
        "bloques_solucion": [
            {
                "titulo": "Primero, reclama al organizador o a la agencia",
                "texto": "Comunica sin demora los incumplimientos al organizador o al minorista del viaje combinado. Guarda contrato, reserva y pruebas; indica qué solución pides.",
                "enlaces": []
            },
            {
                "titulo": "Organismos públicos de consumo",
                "texto": "Si no se resuelve, presenta reclamación ante consumo de tu comunidad autónoma o tu OMIC. Para incumplimientos turísticos también puede intervenir la autoridad autonómica de turismo.",
                "enlaces": [
                    {
                        "texto": "Localiza el organismo de consumo de tu comunidad autónoma",
                        "clave": "Consumo"
                    },
                    {
                        "texto": "Busca tu OMIC u oficina local de consumo",
                        "clave": "OMIC"
                    }
                ]
            },
            {
                "titulo": "Si la empresa es insolvente",
                "texto": "Solicita la cobertura de la garantía identificada en la documentación del viaje. Puede cubrir el reembolso de servicios no prestados y, cuando corresponda, la repatriación. Consumo o turismo puede orientarte.",
                "enlaces": [
                    {
                        "texto": "Localiza el organismo de consumo de tu comunidad autónoma",
                        "clave": "Consumo"
                    }
                ]
            },
            {
                "titulo": "Otras vías disponibles",
                "texto": "Según el caso, puedes valorar arbitraje de consumo o juicio. Si resides en España y la empresa está en otro país de la UE, Islandia o Noruega, consulta la asistencia de CEC-España. No tienes que agotar todas estas vías sucesivamente.",
                "enlaces": [
                    {
                        "texto": "Consulta cómo funciona el arbitraje y dónde solicitarlo",
                        "clave": "Arbitraje"
                    },
                    {
                        "texto": "Conoce los servicios de CEC-España",
                        "clave": "CEC-informacion"
                    },
                    {
                        "texto": "Infórmate sobre el intento de acuerdo previo al juicio",
                        "clave": "Antes-del-juicio"
                    }
                ]
            }
        ]
    },
    "SER-ORIENT": {
        "id": "SER-ORIENT",
        "sector": "Servicios varios",
        "pregunta": "¿De qué servicio se trata?",
        "es_solucion": false,
        "opciones_custom": [
            {
                "texto": "Reparaciones, academia, gimnasio u otro servicio contratado",
                "siguiente": "SER-ESTADO"
            },
            {
                "texto": "Mudanza o transporte de bienes",
                "siguiente": "SOL-SER-MUDANZA"
            },
            {
                "texto": "Atención sanitaria",
                "siguiente": "SOL-SER-SANIDAD"
            },
            {
                "texto": "Correo, mensajería o paquetería",
                "siguiente": "SER-POSTAL"
            },
            {
                "texto": "Actuación de un profesional colegiado",
                "siguiente": "SOL-SER-COLEGIO"
            }
        ],
        "primera_pregunta_sector": true
    },
    "SER-ESTADO": {
        "id": "SER-ESTADO",
        "sector": "Servicios varios",
        "pregunta": "¿En qué punto está tu reclamación?",
        "es_solucion": false,
        "opciones_custom": [
            {
                "texto": "Aún no he reclamado a la empresa",
                "siguiente": "SOL-SER-RECLAMAR"
            },
            {
                "texto": "Ya he reclamado y el problema continúa",
                "siguiente": "SER-PAIS"
            },
            {
                "texto": "Quiero comunicar una posible infracción o pedir orientación",
                "siguiente": "SOL-SER-ORIENTACION"
            }
        ]
    },
    "SER-PAIS": {
        "id": "SER-PAIS",
        "sector": "Servicios varios",
        "pregunta": "¿La empresa tiene su sede en otro país de la UE, Islandia o Noruega?",
        "es_solucion": false,
        "opciones_custom": [
            {
                "texto": "Sí",
                "siguiente": "SOL-SER-CEC"
            },
            {
                "texto": "No",
                "siguiente": "SOL-SER-OPCIONES"
            },
            {
                "texto": "No lo sé",
                "siguiente": "SOL-SER-OPCIONES"
            }
        ],
        "explicacion": "Mira los datos legales del contrato, factura o web. La sede de la empresa, no el lugar del viaje o el idioma de la web, es lo relevante."
    },
    "SOL-SER-RECLAMAR": {
        "id": "SOL-SER-RECLAMAR",
        "sector": "Servicios varios",
        "es_solucion": true,
        "texto_solucion": "Primero, reclama a la empresa\nExplica por escrito qué ha ocurrido y qué solución pides. Guarda el justificante y adjunta contrato, factura y pruebas. Si intervino una plataforma, reclama a cada empresa por las obligaciones que le correspondan.\n\nOrganismos públicos de consumo\nPuedes pedir ayuda desde ahora a consumo de tu comunidad autónoma o tu OMIC. Si la empresa no soluciona el problema, presenta allí tu reclamación con la documentación.\n\nSi necesitas otras vías\nSegún el asunto, también puedes valorar el arbitraje de consumo o acudir a los tribunales. No es necesario pasar sucesivamente por todas las vías.",
        "sector_reclamacion": "Consumo",
        "bloques_solucion": [
            {
                "titulo": "Primero, reclama a la empresa",
                "texto": "Explica por escrito qué ha ocurrido y qué solución pides. Guarda el justificante y adjunta contrato, factura y pruebas. Si intervino una plataforma, reclama a cada empresa por las obligaciones que le correspondan.",
                "enlaces": []
            },
            {
                "titulo": "Organismos públicos de consumo",
                "texto": "Puedes pedir ayuda desde ahora a consumo de tu comunidad autónoma o tu OMIC. Si la empresa no soluciona el problema, presenta allí tu reclamación con la documentación.",
                "enlaces": [
                    {
                        "texto": "Localiza el organismo de consumo de tu comunidad autónoma",
                        "clave": "Consumo"
                    },
                    {
                        "texto": "Busca tu OMIC u oficina local de consumo",
                        "clave": "OMIC"
                    }
                ]
            },
            {
                "titulo": "Si necesitas otras vías",
                "texto": "Según el asunto, también puedes valorar el arbitraje de consumo o acudir a los tribunales. No es necesario pasar sucesivamente por todas las vías.",
                "enlaces": [
                    {
                        "texto": "Consulta cómo funciona el arbitraje y dónde solicitarlo",
                        "clave": "Arbitraje"
                    },
                    {
                        "texto": "Infórmate sobre el intento de acuerdo previo al juicio",
                        "clave": "Antes-del-juicio"
                    }
                ]
            }
        ]
    },
    "SOL-SER-OPCIONES": {
        "id": "SOL-SER-OPCIONES",
        "sector": "Servicios varios",
        "es_solucion": true,
        "texto_solucion": "Organismos públicos de consumo\nSi ya has reclamado a la empresa y el problema continúa, puedes presentar tu reclamación ante consumo de tu comunidad autónoma o tu OMIC. Aporta el contrato, las pruebas y la reclamación previa, junto con la respuesta si la recibiste. Estos servicios pueden orientarte y tramitar tu reclamación.\n\nOtra vía: arbitraje de consumo\nPuedes solicitar arbitraje de consumo si el asunto entra en su ámbito y la empresa está adherida para ese caso o acepta someterse. Es una vía gratuita y su laudo es vinculante. En la web encontrarás los requisitos y la Junta a la que dirigirte.\n\nVía judicial\nTambién puedes acudir a los tribunales, sin tener que agotar antes todas las vías administrativas. Antes de demandar, comprueba el intento de acuerdo previo que corresponda. El arbitraje y el juicio son vías alternativas para resolver el mismo conflicto.",
        "sector_reclamacion": "Consumo",
        "bloques_solucion": [
            {
                "titulo": "Organismos públicos de consumo",
                "texto": "Si ya has reclamado a la empresa y el problema continúa, puedes presentar tu reclamación ante consumo de tu comunidad autónoma o tu OMIC. Aporta el contrato, las pruebas y la reclamación previa, junto con la respuesta si la recibiste. Estos servicios pueden orientarte y tramitar tu reclamación.",
                "enlaces": [
                    {
                        "texto": "Localiza el organismo de consumo de tu comunidad autónoma",
                        "clave": "Consumo"
                    },
                    {
                        "texto": "Busca tu OMIC u oficina local de consumo",
                        "clave": "OMIC"
                    }
                ]
            },
            {
                "titulo": "Otra vía: arbitraje de consumo",
                "texto": "Puedes solicitar arbitraje de consumo si el asunto entra en su ámbito y la empresa está adherida para ese caso o acepta someterse. Es una vía gratuita y su laudo es vinculante. En la web encontrarás los requisitos y la Junta a la que dirigirte.",
                "enlaces": [
                    {
                        "texto": "Consulta cómo funciona el arbitraje y dónde solicitarlo",
                        "clave": "Arbitraje"
                    }
                ]
            },
            {
                "titulo": "Vía judicial",
                "texto": "También puedes acudir a los tribunales, sin tener que agotar antes todas las vías administrativas. Antes de demandar, comprueba el intento de acuerdo previo que corresponda. El arbitraje y el juicio son vías alternativas para resolver el mismo conflicto.",
                "enlaces": [
                    {
                        "texto": "Infórmate sobre el intento de acuerdo previo al juicio",
                        "clave": "Antes-del-juicio"
                    }
                ]
            }
        ]
    },
    "SOL-SER-ORIENTACION": {
        "id": "SOL-SER-ORIENTACION",
        "sector": "Servicios varios",
        "es_solucion": true,
        "texto_solucion": "Pide orientación o comunica los hechos\nDirígete a consumo de tu comunidad autónoma o tu OMIC. Identifica a la empresa y aporta las pruebas. Para comunicar una posible infracción no tienes que esperar una respuesta empresarial. Si además pides devolución o indemnización, indícalo expresamente: comunicar una infracción no garantiza por sí solo que recuperes el dinero.",
        "sector_reclamacion": "Consumo",
        "bloques_solucion": [
            {
                "titulo": "Pide orientación o comunica los hechos",
                "texto": "Dirígete a consumo de tu comunidad autónoma o tu OMIC. Identifica a la empresa y aporta las pruebas. Para comunicar una posible infracción no tienes que esperar una respuesta empresarial. Si además pides devolución o indemnización, indícalo expresamente: comunicar una infracción no garantiza por sí solo que recuperes el dinero.",
                "enlaces": [
                    {
                        "texto": "Localiza el organismo de consumo de tu comunidad autónoma",
                        "clave": "Consumo"
                    },
                    {
                        "texto": "Busca tu OMIC u oficina local de consumo",
                        "clave": "OMIC"
                    }
                ]
            }
        ]
    },
    "SOL-SER-CEC": {
        "id": "SOL-SER-CEC",
        "sector": "Servicios varios",
        "es_solucion": true,
        "texto_solucion": "Solicita ayuda a CEC-España\nSi resides en España y ya has reclamado por escrito a una empresa establecida en otro país de la UE, Islandia o Noruega, puedes solicitar asistencia a CEC-España. Ayuda a buscar una solución, pero no sanciona ni dicta una decisión obligatoria. Comprueba sus condiciones antes de iniciar otra vía.\n\nOrganismos públicos de consumo\nTambién puedes pedir orientación a consumo de tu comunidad autónoma o tu OMIC para identificar la vía que corresponde a tu caso.\n\nVía judicial\nTambién puedes acudir a los tribunales, sin tener que agotar antes todas las vías administrativas. Antes de demandar, comprueba el intento de acuerdo previo que corresponda. El arbitraje y el juicio son vías alternativas para resolver el mismo conflicto.",
        "sector_reclamacion": "CEC-informacion",
        "bloques_solucion": [
            {
                "titulo": "Solicita ayuda a CEC-España",
                "texto": "Si resides en España y ya has reclamado por escrito a una empresa establecida en otro país de la UE, Islandia o Noruega, puedes solicitar asistencia a CEC-España. Ayuda a buscar una solución, pero no sanciona ni dicta una decisión obligatoria. Comprueba sus condiciones antes de iniciar otra vía.",
                "enlaces": [
                    {
                        "texto": "Conoce los servicios de CEC-España",
                        "clave": "CEC-informacion"
                    },
                    {
                        "texto": "Solicita asistencia a CEC-España",
                        "clave": "CEC"
                    }
                ]
            },
            {
                "titulo": "Organismos públicos de consumo",
                "texto": "También puedes pedir orientación a consumo de tu comunidad autónoma o tu OMIC para identificar la vía que corresponde a tu caso.",
                "enlaces": [
                    {
                        "texto": "Localiza el organismo de consumo de tu comunidad autónoma",
                        "clave": "Consumo"
                    },
                    {
                        "texto": "Busca tu OMIC u oficina local de consumo",
                        "clave": "OMIC"
                    }
                ]
            },
            {
                "titulo": "Vía judicial",
                "texto": "También puedes acudir a los tribunales, sin tener que agotar antes todas las vías administrativas. Antes de demandar, comprueba el intento de acuerdo previo que corresponda. El arbitraje y el juicio son vías alternativas para resolver el mismo conflicto.",
                "enlaces": [
                    {
                        "texto": "Infórmate sobre el intento de acuerdo previo al juicio",
                        "clave": "Antes-del-juicio"
                    }
                ]
            }
        ]
    },
    "SOL-SER-MUDANZA": {
        "id": "SOL-SER-MUDANZA",
        "sector": "Servicios varios",
        "es_solucion": true,
        "texto_solucion": "Primero, reclama a la empresa\nDescribe los daños o incumplimientos y aporta contrato, inventario, fotografías y justificantes.\n\nPara resolver una reclamación económica\nPuedes consultar la Junta Arbitral del Transporte competente. Hasta 15.000 euros se presume el acuerdo arbitral si ninguna parte se opuso expresamente antes de iniciarse o de deber iniciarse el servicio; por encima hace falta acuerdo. Su laudo es vinculante. Esta vía tiene reglas distintas del arbitraje de consumo.\n\nOrganismos públicos de consumo\nPara orientación o comunicar infracciones de consumo, acude a consumo de tu comunidad autónoma o tu OMIC.\n\nVía judicial\nTambién puedes acudir a los tribunales, sin tener que agotar antes todas las vías administrativas. Antes de demandar, comprueba el intento de acuerdo previo que corresponda. El arbitraje y el juicio son vías alternativas para resolver el mismo conflicto.",
        "sector_reclamacion": "Transporte",
        "subsector": "Mudanzas",
        "bloques_solucion": [
            {
                "titulo": "Primero, reclama a la empresa",
                "texto": "Describe los daños o incumplimientos y aporta contrato, inventario, fotografías y justificantes.",
                "enlaces": []
            },
            {
                "titulo": "Para resolver una reclamación económica",
                "texto": "Puedes consultar la Junta Arbitral del Transporte competente. Hasta 15.000 euros se presume el acuerdo arbitral si ninguna parte se opuso expresamente antes de iniciarse o de deber iniciarse el servicio; por encima hace falta acuerdo. Su laudo es vinculante. Esta vía tiene reglas distintas del arbitraje de consumo.",
                "enlaces": [
                    {
                        "texto": "Consulta las condiciones legales del arbitraje de transporte",
                        "clave": "Transporte"
                    }
                ]
            },
            {
                "titulo": "Organismos públicos de consumo",
                "texto": "Para orientación o comunicar infracciones de consumo, acude a consumo de tu comunidad autónoma o tu OMIC.",
                "enlaces": [
                    {
                        "texto": "Localiza el organismo de consumo de tu comunidad autónoma",
                        "clave": "Consumo"
                    },
                    {
                        "texto": "Busca tu OMIC u oficina local de consumo",
                        "clave": "OMIC"
                    }
                ]
            },
            {
                "titulo": "Vía judicial",
                "texto": "También puedes acudir a los tribunales, sin tener que agotar antes todas las vías administrativas. Antes de demandar, comprueba el intento de acuerdo previo que corresponda. El arbitraje y el juicio son vías alternativas para resolver el mismo conflicto.",
                "enlaces": [
                    {
                        "texto": "Infórmate sobre el intento de acuerdo previo al juicio",
                        "clave": "Antes-del-juicio"
                    }
                ]
            }
        ]
    },
    "SOL-SER-SANIDAD": {
        "id": "SOL-SER-SANIDAD",
        "sector": "Servicios varios",
        "es_solucion": true,
        "texto_solucion": "Reclama al centro y a la autoridad sanitaria\nPresenta la queja en atención al paciente. Para deficiencias asistenciales, seguridad o autorización del centro, dirígete también a la autoridad sanitaria de tu comunidad autónoma.\n\nOrganismos públicos de consumo\nSi el centro es privado y el problema es de precios, publicidad o contratación, puedes reclamar ante consumo de tu comunidad autónoma o tu OMIC.\n\nSi hay daños o un seguro de salud\nPara daños personales, busca asesoramiento jurídico y, cuando proceda, pericial; el arbitraje de consumo no resuelve reclamaciones sobre lesiones o muerte. Si reclamas por el seguro, dirígete a la aseguradora y después, cuando proceda, a la DGSFP.",
        "sector_reclamacion": "Consumo",
        "subsector": "Sanidad",
        "bloques_solucion": [
            {
                "titulo": "Reclama al centro y a la autoridad sanitaria",
                "texto": "Presenta la queja en atención al paciente. Para deficiencias asistenciales, seguridad o autorización del centro, dirígete también a la autoridad sanitaria de tu comunidad autónoma.",
                "enlaces": []
            },
            {
                "titulo": "Organismos públicos de consumo",
                "texto": "Si el centro es privado y el problema es de precios, publicidad o contratación, puedes reclamar ante consumo de tu comunidad autónoma o tu OMIC.",
                "enlaces": [
                    {
                        "texto": "Localiza el organismo de consumo de tu comunidad autónoma",
                        "clave": "Consumo"
                    },
                    {
                        "texto": "Busca tu OMIC u oficina local de consumo",
                        "clave": "OMIC"
                    }
                ]
            },
            {
                "titulo": "Si hay daños o un seguro de salud",
                "texto": "Para daños personales, busca asesoramiento jurídico y, cuando proceda, pericial; el arbitraje de consumo no resuelve reclamaciones sobre lesiones o muerte. Si reclamas por el seguro, dirígete a la aseguradora y después, cuando proceda, a la DGSFP.",
                "enlaces": [
                    {
                        "texto": "Consulta cómo reclamar ante la DGSFP",
                        "clave": "Seguros"
                    },
                    {
                        "texto": "Infórmate sobre el intento de acuerdo previo al juicio",
                        "clave": "Antes-del-juicio"
                    }
                ]
            }
        ]
    },
    "OTR-ORIENT": {
        "id": "OTR-ORIENT",
        "sector": "Otros",
        "pregunta": "¿Con quién tienes el problema?",
        "es_solucion": false,
        "opciones_custom": [
            {
                "texto": "Con una empresa o profesional",
                "siguiente": "OTR-ESTADO"
            },
            {
                "texto": "Con una Administración: multa, impuesto, ayuda o trámite",
                "siguiente": "SOL-OTR-ADMIN"
            },
            {
                "texto": "Con un particular",
                "siguiente": "SOL-OTR-PARTICULAR"
            },
            {
                "texto": "No sé qué vía corresponde",
                "siguiente": "SOL-OTR-ORIENTACION"
            }
        ],
        "primera_pregunta_sector": true
    },
    "OTR-ESTADO": {
        "id": "OTR-ESTADO",
        "sector": "Otros",
        "pregunta": "¿En qué punto está tu reclamación?",
        "es_solucion": false,
        "opciones_custom": [
            {
                "texto": "Aún no he reclamado a la empresa",
                "siguiente": "SOL-OTR-RECLAMAR"
            },
            {
                "texto": "Ya he reclamado y el problema continúa",
                "siguiente": "OTR-PAIS"
            },
            {
                "texto": "Quiero comunicar una posible infracción o pedir orientación",
                "siguiente": "SOL-OTR-ORIENTACION"
            }
        ]
    },
    "OTR-PAIS": {
        "id": "OTR-PAIS",
        "sector": "Otros",
        "pregunta": "¿La empresa tiene su sede en otro país de la UE, Islandia o Noruega?",
        "es_solucion": false,
        "opciones_custom": [
            {
                "texto": "Sí",
                "siguiente": "SOL-OTR-CEC"
            },
            {
                "texto": "No",
                "siguiente": "SOL-OTR-OPCIONES"
            },
            {
                "texto": "No lo sé",
                "siguiente": "SOL-OTR-OPCIONES"
            }
        ],
        "explicacion": "Mira los datos legales del contrato, factura o web. La sede de la empresa, no el lugar del viaje o el idioma de la web, es lo relevante."
    },
    "SOL-OTR-RECLAMAR": {
        "id": "SOL-OTR-RECLAMAR",
        "sector": "Otros",
        "es_solucion": true,
        "texto_solucion": "Primero, reclama a la empresa\nExplica por escrito qué ha ocurrido y qué solución pides. Guarda el justificante y adjunta contrato, factura y pruebas. Si intervino una plataforma, reclama a cada empresa por las obligaciones que le correspondan.\n\nOrganismos públicos de consumo\nPuedes pedir ayuda desde ahora a consumo de tu comunidad autónoma o tu OMIC. Si la empresa no soluciona el problema, presenta allí tu reclamación con la documentación.\n\nSi necesitas otras vías\nSegún el asunto, también puedes valorar el arbitraje de consumo o acudir a los tribunales. No es necesario pasar sucesivamente por todas las vías.",
        "sector_reclamacion": "Consumo",
        "bloques_solucion": [
            {
                "titulo": "Primero, reclama a la empresa",
                "texto": "Explica por escrito qué ha ocurrido y qué solución pides. Guarda el justificante y adjunta contrato, factura y pruebas. Si intervino una plataforma, reclama a cada empresa por las obligaciones que le correspondan.",
                "enlaces": []
            },
            {
                "titulo": "Organismos públicos de consumo",
                "texto": "Puedes pedir ayuda desde ahora a consumo de tu comunidad autónoma o tu OMIC. Si la empresa no soluciona el problema, presenta allí tu reclamación con la documentación.",
                "enlaces": [
                    {
                        "texto": "Localiza el organismo de consumo de tu comunidad autónoma",
                        "clave": "Consumo"
                    },
                    {
                        "texto": "Busca tu OMIC u oficina local de consumo",
                        "clave": "OMIC"
                    }
                ]
            },
            {
                "titulo": "Si necesitas otras vías",
                "texto": "Según el asunto, también puedes valorar el arbitraje de consumo o acudir a los tribunales. No es necesario pasar sucesivamente por todas las vías.",
                "enlaces": [
                    {
                        "texto": "Consulta cómo funciona el arbitraje y dónde solicitarlo",
                        "clave": "Arbitraje"
                    },
                    {
                        "texto": "Infórmate sobre el intento de acuerdo previo al juicio",
                        "clave": "Antes-del-juicio"
                    }
                ]
            }
        ]
    },
    "SOL-OTR-OPCIONES": {
        "id": "SOL-OTR-OPCIONES",
        "sector": "Otros",
        "es_solucion": true,
        "texto_solucion": "Organismos públicos de consumo\nSi ya has reclamado a la empresa y el problema continúa, puedes presentar tu reclamación ante consumo de tu comunidad autónoma o tu OMIC. Aporta el contrato, las pruebas y la reclamación previa, junto con la respuesta si la recibiste. Estos servicios pueden orientarte y tramitar tu reclamación.\n\nOtra vía: arbitraje de consumo\nPuedes solicitar arbitraje de consumo si el asunto entra en su ámbito y la empresa está adherida para ese caso o acepta someterse. Es una vía gratuita y su laudo es vinculante. En la web encontrarás los requisitos y la Junta a la que dirigirte.\n\nVía judicial\nTambién puedes acudir a los tribunales, sin tener que agotar antes todas las vías administrativas. Antes de demandar, comprueba el intento de acuerdo previo que corresponda. El arbitraje y el juicio son vías alternativas para resolver el mismo conflicto.",
        "sector_reclamacion": "Consumo",
        "bloques_solucion": [
            {
                "titulo": "Organismos públicos de consumo",
                "texto": "Si ya has reclamado a la empresa y el problema continúa, puedes presentar tu reclamación ante consumo de tu comunidad autónoma o tu OMIC. Aporta el contrato, las pruebas y la reclamación previa, junto con la respuesta si la recibiste. Estos servicios pueden orientarte y tramitar tu reclamación.",
                "enlaces": [
                    {
                        "texto": "Localiza el organismo de consumo de tu comunidad autónoma",
                        "clave": "Consumo"
                    },
                    {
                        "texto": "Busca tu OMIC u oficina local de consumo",
                        "clave": "OMIC"
                    }
                ]
            },
            {
                "titulo": "Otra vía: arbitraje de consumo",
                "texto": "Puedes solicitar arbitraje de consumo si el asunto entra en su ámbito y la empresa está adherida para ese caso o acepta someterse. Es una vía gratuita y su laudo es vinculante. En la web encontrarás los requisitos y la Junta a la que dirigirte.",
                "enlaces": [
                    {
                        "texto": "Consulta cómo funciona el arbitraje y dónde solicitarlo",
                        "clave": "Arbitraje"
                    }
                ]
            },
            {
                "titulo": "Vía judicial",
                "texto": "También puedes acudir a los tribunales, sin tener que agotar antes todas las vías administrativas. Antes de demandar, comprueba el intento de acuerdo previo que corresponda. El arbitraje y el juicio son vías alternativas para resolver el mismo conflicto.",
                "enlaces": [
                    {
                        "texto": "Infórmate sobre el intento de acuerdo previo al juicio",
                        "clave": "Antes-del-juicio"
                    }
                ]
            }
        ]
    },
    "SOL-OTR-ORIENTACION": {
        "id": "SOL-OTR-ORIENTACION",
        "sector": "Otros",
        "es_solucion": true,
        "texto_solucion": "Pide orientación o comunica los hechos\nDirígete a consumo de tu comunidad autónoma o tu OMIC. Identifica a la empresa y aporta las pruebas. Para comunicar una posible infracción no tienes que esperar una respuesta empresarial. Si además pides devolución o indemnización, indícalo expresamente: comunicar una infracción no garantiza por sí solo que recuperes el dinero.",
        "sector_reclamacion": "Consumo",
        "bloques_solucion": [
            {
                "titulo": "Pide orientación o comunica los hechos",
                "texto": "Dirígete a consumo de tu comunidad autónoma o tu OMIC. Identifica a la empresa y aporta las pruebas. Para comunicar una posible infracción no tienes que esperar una respuesta empresarial. Si además pides devolución o indemnización, indícalo expresamente: comunicar una infracción no garantiza por sí solo que recuperes el dinero.",
                "enlaces": [
                    {
                        "texto": "Localiza el organismo de consumo de tu comunidad autónoma",
                        "clave": "Consumo"
                    },
                    {
                        "texto": "Busca tu OMIC u oficina local de consumo",
                        "clave": "OMIC"
                    }
                ]
            }
        ]
    },
    "SOL-OTR-CEC": {
        "id": "SOL-OTR-CEC",
        "sector": "Otros",
        "es_solucion": true,
        "texto_solucion": "Solicita ayuda a CEC-España\nSi resides en España y ya has reclamado por escrito a una empresa establecida en otro país de la UE, Islandia o Noruega, puedes solicitar asistencia a CEC-España. Ayuda a buscar una solución, pero no sanciona ni dicta una decisión obligatoria. Comprueba sus condiciones antes de iniciar otra vía.\n\nOrganismos públicos de consumo\nTambién puedes pedir orientación a consumo de tu comunidad autónoma o tu OMIC para identificar la vía que corresponde a tu caso.\n\nVía judicial\nTambién puedes acudir a los tribunales, sin tener que agotar antes todas las vías administrativas. Antes de demandar, comprueba el intento de acuerdo previo que corresponda. El arbitraje y el juicio son vías alternativas para resolver el mismo conflicto.",
        "sector_reclamacion": "CEC-informacion",
        "bloques_solucion": [
            {
                "titulo": "Solicita ayuda a CEC-España",
                "texto": "Si resides en España y ya has reclamado por escrito a una empresa establecida en otro país de la UE, Islandia o Noruega, puedes solicitar asistencia a CEC-España. Ayuda a buscar una solución, pero no sanciona ni dicta una decisión obligatoria. Comprueba sus condiciones antes de iniciar otra vía.",
                "enlaces": [
                    {
                        "texto": "Conoce los servicios de CEC-España",
                        "clave": "CEC-informacion"
                    },
                    {
                        "texto": "Solicita asistencia a CEC-España",
                        "clave": "CEC"
                    }
                ]
            },
            {
                "titulo": "Organismos públicos de consumo",
                "texto": "También puedes pedir orientación a consumo de tu comunidad autónoma o tu OMIC para identificar la vía que corresponde a tu caso.",
                "enlaces": [
                    {
                        "texto": "Localiza el organismo de consumo de tu comunidad autónoma",
                        "clave": "Consumo"
                    },
                    {
                        "texto": "Busca tu OMIC u oficina local de consumo",
                        "clave": "OMIC"
                    }
                ]
            },
            {
                "titulo": "Vía judicial",
                "texto": "También puedes acudir a los tribunales, sin tener que agotar antes todas las vías administrativas. Antes de demandar, comprueba el intento de acuerdo previo que corresponda. El arbitraje y el juicio son vías alternativas para resolver el mismo conflicto.",
                "enlaces": [
                    {
                        "texto": "Infórmate sobre el intento de acuerdo previo al juicio",
                        "clave": "Antes-del-juicio"
                    }
                ]
            }
        ]
    },
    "SOL-OTR-ADMIN": {
        "id": "SOL-OTR-ADMIN",
        "sector": "Otros",
        "es_solucion": true,
        "texto_solucion": "Consulta el recurso y su plazo\nSi impugnas una multa, impuesto, ayuda o trámite, consulta el pie de recursos de la notificación y presenta el recurso ante el órgano indicado. Una queja de consumo no sustituye esos recursos ni suspende sus plazos.\n\nOrganismos públicos de consumo\nSi la entidad pública presta un bien o servicio en una relación de consumo, pide orientación a consumo o tu OMIC para identificar la vía aplicable.",
        "sector_reclamacion": "Consumo",
        "bloques_solucion": [
            {
                "titulo": "Consulta el recurso y su plazo",
                "texto": "Si impugnas una multa, impuesto, ayuda o trámite, consulta el pie de recursos de la notificación y presenta el recurso ante el órgano indicado. Una queja de consumo no sustituye esos recursos ni suspende sus plazos.",
                "enlaces": []
            },
            {
                "titulo": "Organismos públicos de consumo",
                "texto": "Si la entidad pública presta un bien o servicio en una relación de consumo, pide orientación a consumo o tu OMIC para identificar la vía aplicable.",
                "enlaces": [
                    {
                        "texto": "Localiza el organismo de consumo de tu comunidad autónoma",
                        "clave": "Consumo"
                    },
                    {
                        "texto": "Busca tu OMIC u oficina local de consumo",
                        "clave": "OMIC"
                    }
                ]
            }
        ]
    },
    "SOL-OTR-PARTICULAR": {
        "id": "SOL-OTR-PARTICULAR",
        "sector": "Otros",
        "es_solucion": true,
        "texto_solucion": "Busca una solución al conflicto privado\nSi el conflicto es exclusivamente entre particulares, busca asesoramiento para negociar o valorar la vía civil. Consumo no lo tramita como una reclamación de consumo frente a una empresa.\n\nSi hay indicios de delito\nComunica los hechos a Policía, Guardia Civil o al órgano judicial competente y aporta las pruebas. Un incumplimiento contractual no demuestra por sí solo que exista una estafa.",
        "sector_reclamacion": "Antes-del-juicio",
        "bloques_solucion": [
            {
                "titulo": "Busca una solución al conflicto privado",
                "texto": "Si el conflicto es exclusivamente entre particulares, busca asesoramiento para negociar o valorar la vía civil. Consumo no lo tramita como una reclamación de consumo frente a una empresa.",
                "enlaces": [
                    {
                        "texto": "Infórmate sobre el intento de acuerdo previo al juicio",
                        "clave": "Antes-del-juicio"
                    }
                ]
            },
            {
                "titulo": "Si hay indicios de delito",
                "texto": "Comunica los hechos a Policía, Guardia Civil o al órgano judicial competente y aporta las pruebas. Un incumplimiento contractual no demuestra por sí solo que exista una estafa.",
                "enlaces": []
            }
        ]
    },
    "SER-POSTAL": {
        "id": "SER-POSTAL",
        "sector": "Servicios varios",
        "pregunta": "¿El problema es la entrega de un producto que compraste a una tienda o empresa?",
        "explicacion": "Responde no si se trata de una carta, un envío que tú contrataste u otro servicio postal independiente de una compra.",
        "opcion_si": "SOL-SER-ENTREGA",
        "opcion_no": "SOL-SER-POSTAL",
        "es_solucion": false
    },
    "SOL-SER-ENTREGA": {
        "id": "SOL-SER-ENTREGA",
        "sector": "Servicios varios",
        "subsector": "Entrega de compras",
        "es_solucion": true,
        "texto_solucion": "Primero, reclama al vendedor\nEn una compra a una empresa, el vendedor responde con carácter general de la entrega hasta la recepción material del producto. La regla cambia si encargaste el transporte por tu cuenta o elegiste un transportista distinto de los propuestos por el vendedor. Conserva pedido, seguimiento y pruebas.\n\nOrganismos públicos de consumo\nSi no se soluciona, reclama ante consumo de tu comunidad autónoma o tu OMIC. Puedes avisar también al transportista sin renunciar a tu reclamación al vendedor.\n\nSi la empresa está en otro país europeo\nSi resides en España y reclamas a una empresa establecida en otro país de la UE, Islandia o Noruega, CEC-España puede ayudarte después de tu reclamación escrita a la empresa. Consulta en su web sus condiciones de intervención y la asistencia disponible para empresas del Reino Unido.",
        "sector_reclamacion": "Consumo",
        "bloques_solucion": [
            {
                "titulo": "Primero, reclama al vendedor",
                "texto": "En una compra a una empresa, el vendedor responde con carácter general de la entrega hasta la recepción material del producto. La regla cambia si encargaste el transporte por tu cuenta o elegiste un transportista distinto de los propuestos por el vendedor. Conserva pedido, seguimiento y pruebas.",
                "enlaces": []
            },
            {
                "titulo": "Organismos públicos de consumo",
                "texto": "Si no se soluciona, reclama ante consumo de tu comunidad autónoma o tu OMIC. Puedes avisar también al transportista sin renunciar a tu reclamación al vendedor.",
                "enlaces": [
                    {
                        "texto": "Localiza el organismo de consumo de tu comunidad autónoma",
                        "clave": "Consumo"
                    },
                    {
                        "texto": "Busca tu OMIC u oficina local de consumo",
                        "clave": "OMIC"
                    }
                ]
            },
            {
                "titulo": "Si la empresa está en otro país europeo",
                "texto": "Si resides en España y reclamas a una empresa establecida en otro país de la UE, Islandia o Noruega, CEC-España puede ayudarte después de tu reclamación escrita a la empresa. Consulta en su web sus condiciones de intervención y la asistencia disponible para empresas del Reino Unido.",
                "enlaces": [
                    {
                        "texto": "Conoce los servicios de CEC-España",
                        "clave": "CEC-informacion"
                    },
                    {
                        "texto": "Solicita asistencia a CEC-España",
                        "clave": "CEC"
                    }
                ]
            }
        ]
    },
    "SOL-SER-POSTAL": {
        "id": "SOL-SER-POSTAL",
        "sector": "Servicios varios",
        "subsector": "Servicios postales",
        "es_solucion": true,
        "texto_solucion": "Primero, reclama al operador postal\nConserva justificante y seguimiento. Como regla, tienes seis meses desde la admisión del envío para reclamar y el operador tiene un mes para responder. Para envíos internacionales se aplican los plazos de los convenios correspondientes.\n\nDespués, según el tipo de servicio\nSi el envío está incluido en el ámbito del servicio postal universal, puedes reclamar ante la Subdirección General de Régimen Postal. Tienes un mes desde la respuesta o desde que venció el plazo para responder, y el asunto no debe haberse sometido a una Junta Arbitral de Consumo. Comprueba el ámbito del envío en el procedimiento; no depende solo de que el operador sea Correos.\n\nOrganismos públicos de consumo\nConsumo o tu OMIC puede orientarte si el problema persiste. También puedes consultar si procede el arbitraje de consumo, teniendo en cuenta su coordinación con la vía postal.\n\nPara denunciar incumplimientos de información o reclamación\nLa CNMC recibe estas denuncias. Esa actuación supervisora no sustituye la vía para resolver tu pretensión económica.\n\nConsulta las alternativas\nEl arbitraje y el juicio pueden ser alternativas según el caso. Comprueba sus requisitos y no sometas a varias vías incompatibles la resolución del mismo asunto.",
        "sector_reclamacion": "Postal",
        "bloques_solucion": [
            {
                "titulo": "Primero, reclama al operador postal",
                "texto": "Conserva justificante y seguimiento. Como regla, tienes seis meses desde la admisión del envío para reclamar y el operador tiene un mes para responder. Para envíos internacionales se aplican los plazos de los convenios correspondientes.",
                "enlaces": []
            },
            {
                "titulo": "Después, según el tipo de servicio",
                "texto": "Si el envío está incluido en el ámbito del servicio postal universal, puedes reclamar ante la Subdirección General de Régimen Postal. Tienes un mes desde la respuesta o desde que venció el plazo para responder, y el asunto no debe haberse sometido a una Junta Arbitral de Consumo. Comprueba el ámbito del envío en el procedimiento; no depende solo de que el operador sea Correos.",
                "enlaces": [
                    {
                        "texto": "Consulta el procedimiento del servicio postal universal",
                        "clave": "Postal"
                    }
                ]
            },
            {
                "titulo": "Organismos públicos de consumo",
                "texto": "Consumo o tu OMIC puede orientarte si el problema persiste. También puedes consultar si procede el arbitraje de consumo, teniendo en cuenta su coordinación con la vía postal.",
                "enlaces": [
                    {
                        "texto": "Localiza el organismo de consumo de tu comunidad autónoma",
                        "clave": "Consumo"
                    },
                    {
                        "texto": "Busca tu OMIC u oficina local de consumo",
                        "clave": "OMIC"
                    }
                ]
            },
            {
                "titulo": "Para denunciar incumplimientos de información o reclamación",
                "texto": "La CNMC recibe estas denuncias. Esa actuación supervisora no sustituye la vía para resolver tu pretensión económica.",
                "enlaces": [
                    {
                        "texto": "Consulta cómo denunciar incumplimientos postales ante la CNMC",
                        "clave": "Postal-denuncias"
                    }
                ]
            },
            {
                "titulo": "Consulta las alternativas",
                "texto": "El arbitraje y el juicio pueden ser alternativas según el caso. Comprueba sus requisitos y no sometas a varias vías incompatibles la resolución del mismo asunto.",
                "enlaces": [
                    {
                        "texto": "Consulta cómo funciona el arbitraje y dónde solicitarlo",
                        "clave": "Arbitraje"
                    },
                    {
                        "texto": "Infórmate sobre el intento de acuerdo previo al juicio",
                        "clave": "Antes-del-juicio"
                    }
                ]
            }
        ]
    },
    "SOL-SER-COLEGIO": {
        "id": "SOL-SER-COLEGIO",
        "sector": "Servicios varios",
        "subsector": "Servicios profesionales",
        "es_solucion": true,
        "texto_solucion": "Primero, reclama al profesional\nDirígete al profesional, despacho o centro y conserva hoja de encargo, presupuesto, facturas y comunicaciones.\n\nOrganismos públicos de consumo\nPara aspectos económicos o contractuales de una relación de consumo, puedes acudir a consumo de tu comunidad autónoma o tu OMIC.\n\nPara la actuación profesional o deontológica\nPresenta la queja ante el servicio de atención a consumidores del Colegio Profesional correspondiente. El colegio valorará su tramitación y la posible intervención disciplinaria; esa vía no sustituye una reclamación de indemnización.\n\nVía judicial\nSi has sufrido daños, valora asesoramiento jurídico y, si procede, pericial y vía judicial. En asistencia sanitaria también puede intervenir la autoridad sanitaria.",
        "sector_reclamacion": "Consumo",
        "bloques_solucion": [
            {
                "titulo": "Primero, reclama al profesional",
                "texto": "Dirígete al profesional, despacho o centro y conserva hoja de encargo, presupuesto, facturas y comunicaciones.",
                "enlaces": []
            },
            {
                "titulo": "Organismos públicos de consumo",
                "texto": "Para aspectos económicos o contractuales de una relación de consumo, puedes acudir a consumo de tu comunidad autónoma o tu OMIC.",
                "enlaces": [
                    {
                        "texto": "Localiza el organismo de consumo de tu comunidad autónoma",
                        "clave": "Consumo"
                    },
                    {
                        "texto": "Busca tu OMIC u oficina local de consumo",
                        "clave": "OMIC"
                    }
                ]
            },
            {
                "titulo": "Para la actuación profesional o deontológica",
                "texto": "Presenta la queja ante el servicio de atención a consumidores del Colegio Profesional correspondiente. El colegio valorará su tramitación y la posible intervención disciplinaria; esa vía no sustituye una reclamación de indemnización.",
                "enlaces": []
            },
            {
                "titulo": "Vía judicial",
                "texto": "Si has sufrido daños, valora asesoramiento jurídico y, si procede, pericial y vía judicial. En asistencia sanitaria también puede intervenir la autoridad sanitaria.",
                "enlaces": [
                    {
                        "texto": "Infórmate sobre el intento de acuerdo previo al juicio",
                        "clave": "Antes-del-juicio"
                    }
                ]
            }
        ]
    }
};

export default ARBOL_DECISIONES;
