# Sistema de Atención al Consumidor

Sistema web para información y asistencia sobre derechos del consumidor.

🌐 **Demo online:** https://csdelbarrio.github.io/consumo-faq

## 📂 Estructura del Proyecto

```
consumo-faq/
├── index.html              # Página principal
├── css/
│   ├── base/
│   │   ├── variables.css   # Variables CSS
│   │   └── reset.css       # Reset CSS
│   ├── components/
│   │   └── components.css  # Estilos de componentes
│   ├── layouts/
│   │   └── main-layout.css # Layout responsive
│   └── styles.css          # Import principal
├── js/
│   ├── data/
│   │   ├── dataLoader.js   # Carga de datos JSON
│   │   ├── tree.js         # Árbol de decisiones
│   │   ├── links.js        # Enlaces de reclamación
│   │   ├── resources.js    # Recursos
│   │   └── sectors.js      # Configuración sectores
│   └── main.js             # Lógica principal
├── data/
│   └── sectores/           # Datos JSON por sector
│       ├── vivienda.json
│       ├── banca-seguros.json
│       ├── viajes-transportes.json
│       ├── suministros.json
│       ├── compras.json
│       ├── proteccion-datos.json
│       ├── turismo.json
│       └── servicios-varios.json
└── README.md
```

## 📊 Datos por Sector

| Sector | Archivo | Preguntas |
|--------|---------|-----------|
| Vivienda | vivienda.json | 80 |
| Banca y seguros | banca-seguros.json | 112 |
| Viajes y transportes | viajes-transportes.json | 118 |
| Suministros | suministros.json | 106 |
| Compras | compras.json | 90 |
| Protección de datos | proteccion-datos.json | 24 |
| Turismo | turismo.json | 41 |
| Servicios varios | servicios-varios.json | 75 |
| **Total** | | **646** |

## ✏️ Modificar Preguntas

1. Edita el archivo JSON en `data/sectores/`
2. Actualiza `total_preguntas` si añades/eliminas
3. Haz commit y push

## 🚀 Desarrollo Local

```bash
# Con Python
python -m http.server 8000

# Con Node.js
npx serve .
```

Abre http://localhost:8000

## 🔧 Características

- ✅ Búsqueda en tiempo real
- ✅ Navegación por sectores
- ✅ Árbol de decisiones interactivo
- ✅ 646 preguntas frecuentes
- ✅ Diseño responsive
- ✅ Datos en JSON (fácil mantenimiento)
