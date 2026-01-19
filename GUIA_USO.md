# Bot de Scraping de Aerolíneas - Detección de Personalización de Precios

## 📋 Descripción

Este bot automatiza el proceso de scraping de múltiples sitios web de aerolíneas para detectar posibles casos de personalización de precios (price discrimination).

El bot simula múltiples perfiles de usuario (diferentes dispositivos, navegadores, resoluciones) y realiza búsquedas idénticas varias veces al día, registrando los precios de vuelos básicos y servicios auxiliares en un archivo Excel para su análisis posterior.

## ⚠️ Aviso Legal

Este software está diseñado exclusivamente para fines de **investigación legítima sobre prácticas comerciales** en el sector de la aviación. El usuario es responsable de:

- Cumplir con los Términos de Servicio de cada aerolínea
- Respetar las políticas de scraping (robots.txt)
- No sobrecargar los servidores con peticiones excesivas
- Usar los datos obtenidos de forma ética y legal

## 🚀 Instalación

### 1. Requisitos Previos

- Python 3.8 o superior
- Google Chrome instalado
- Conexión a internet estable

### 2. Clonar o Descargar el Proyecto

```bash
cd /ruta/al/proyecto/consumo
```

### 3. Crear Entorno Virtual (Recomendado)

```bash
# En Windows
python -m venv venv
venv\Scripts\activate

# En Linux/Mac
python3 -m venv venv
source venv/bin/activate
```

### 4. Instalar Dependencias

```bash
pip install -r requirements.txt
```

## 📁 Estructura de Archivos

```
consumo/
├── bot_precios_mejorado.py    # Script principal mejorado
├── airline_scraper.py          # Script alternativo con más funcionalidades
├── config.json                 # Archivo de configuración
├── requirements.txt            # Dependencias de Python
├── GUIA_USO.md                # Esta guía
├── registro_precios_vuelos.xlsx  # Excel generado (se crea automáticamente)
└── bot_precios.log            # Log de actividad
```

## ⚙️ Configuración

### Editar Rutas y Fechas

Abre `config.json` y modifica las rutas que quieres monitorear:

```json
"rutas_a_monitorear": [
  {
    "nombre": "Madrid-Bruselas",
    "origen": "MAD",
    "destino": "BRU",
    "fecha": "2026-02-19",
    "adultos": 1,
    "activo": true
  }
]
```

**IMPORTANTE**: Cambia las fechas a fechas futuras relevantes para tu investigación.

### Configurar Horarios de Ejecución

Modifica los horarios en `config.json`:

```json
"horas_ejecucion": ["09:00", "13:00", "17:00", "21:00"]
```

### Activar/Desactivar Aerolíneas

En `config.json`, puedes activar o desactivar aerolíneas:

```json
"RYANAIR": {
  "activo": true,
  ...
}
```

### Configurar Perfiles de Usuario

Puedes agregar o modificar perfiles de usuario en `config.json`:

```json
"perfiles_usuario": [
  {
    "id": "Usuario_1_Win_Chrome",
    "user_agent": "Mozilla/5.0...",
    "resolucion": "1920,1080",
    "activo": true
  }
]
```

## 🎮 Uso del Bot

### Modo 1: Ejecutar Test Rápido

Para probar que todo funciona correctamente:

```bash
python bot_precios_mejorado.py --test
```

Esto ejecutará una prueba rápida con un solo perfil y una aerolínea.

### Modo 2: Ejecutar Una Sola Vez

Para ejecutar una ronda completa una sola vez:

```bash
python bot_precios_mejorado.py --once
```

### Modo 3: Ejecución Programada (24/7)

Para ejecutar el bot de forma continua según los horarios configurados:

```bash
python bot_precios_mejorado.py
```

**IMPORTANTE**:
- Mantén la terminal abierta
- No apagues el ordenador
- Para detener: Ctrl+C

### Modo 4: Ejecutar en Segundo Plano (Linux/Mac)

```bash
nohup python bot_precios_mejorado.py > output.log 2>&1 &
```

Para detener:
```bash
ps aux | grep bot_precios_mejorado.py
kill [PID]
```

## 📊 Análisis de Resultados

### Archivo Excel Generado

El bot genera un archivo `registro_precios_vuelos.xlsx` con dos hojas:

1. **Datos**: Registro completo de todas las búsquedas
   - Fecha y hora
   - Perfil de usuario utilizado
   - Precios por aerolínea
   - Precios de servicios auxiliares (maleta, asiento, embarque)

2. **Análisis** (si se detectan diferencias):
   - Comparación de precios entre perfiles
   - Diferencias detectadas
   - Porcentajes de variación

### Columnas del Excel

- `Fecha_Hora`: Timestamp de la búsqueda
- `Dia_Semana`: Día de la semana
- `Perfil_ID`: Identificador del perfil de usuario
- `Dispositivo_Simulado`: User agent utilizado
- `[AEROLINEA]_precio_base`: Precio del vuelo básico
- `[AEROLINEA]_maleta`: Precio maleta facturada
- `[AEROLINEA]_asiento`: Precio selección de asiento
- `[AEROLINEA]_embarque`: Precio embarque prioritario

### Análisis de Personalización

El bot detecta automáticamente diferencias de precio y las reporta en:
1. La consola/log (durante la ejecución)
2. El archivo de log (`bot_precios.log`)

**Indicadores de posible personalización**:
- Diferencias de precio > 5€ para la misma ruta y fecha
- Variaciones consistentes asociadas a ciertos perfiles
- Diferencias en precios de servicios auxiliares

## 🔧 Solución de Problemas

### Error: "ChromeDriver not found"

**Solución**: El script descarga automáticamente ChromeDriver, pero asegúrate de tener Chrome instalado.

```bash
# Verificar Chrome instalado
google-chrome --version  # Linux
chrome --version         # Mac
```

### Error: "Timeout esperando elementos"

**Causas posibles**:
1. Internet lento
2. La página tardó mucho en cargar
3. Los selectores CSS han cambiado

**Solución**:
1. Aumenta el timeout en el código:
   ```python
   wait = WebDriverWait(driver, 30)  # Aumentar de 20 a 30
   ```
2. Actualiza los selectores CSS en `config.json`

### Error: "Precio no encontrado"

**Causa**: Los selectores CSS están desactualizados.

**Solución**:
1. Abre la página de la aerolínea en Chrome
2. Inspecciona el elemento del precio (F12 → Seleccionar elemento)
3. Copia el selector CSS
4. Actualízalo en `config.json`

### No se están guardando datos

**Verificar**:
1. Permisos de escritura en la carpeta
2. Excel no está abierto en otra aplicación
3. Revisar el archivo de log para errores

### El bot no se ejecuta a las horas programadas

**Verificar**:
1. El formato de hora es correcto: "HH:MM" (24 horas)
2. El ordenador está encendido y no en suspensión
3. El script no se ha detenido (revisar log)

## 📈 Mejores Prácticas

### 1. Espaciado de Ejecuciones

- **Recomendado**: 3-4 veces al día
- **Mínimo**: Esperar 4 horas entre ejecuciones
- **Evitar**: Más de 6 ejecuciones diarias

### 2. Duración del Estudio

Para resultados estadísticamente significativos:
- **Mínimo**: 2 semanas
- **Recomendado**: 1 mes
- **Ideal**: 2-3 meses

### 3. Variedad de Rutas

Incluye diferentes tipos de rutas:
- Rutas domésticas cortas
- Rutas internacionales
- Rutas populares vs. menos populares
- Diferentes días de la semana
- Diferentes temporadas

### 4. Análisis de Datos

Usar Excel o Python para:
- Calcular estadísticas descriptivas (media, mediana, desviación estándar)
- Realizar tests estadísticos (ANOVA, t-test)
- Crear visualizaciones (gráficos de dispersión, boxplots)
- Identificar patrones temporales

## 🔍 Actualizar Selectores CSS

Las aerolíneas actualizan sus sitios web frecuentemente. Para actualizar selectores:

### 1. Abrir DevTools en Chrome

- F12 o clic derecho → "Inspeccionar"

### 2. Seleccionar Elemento

- Clic en el icono de selector (flecha)
- Clic en el precio en la página

### 3. Obtener Selector CSS

- En el HTML resaltado, clic derecho
- Copy → Copy selector

### 4. Actualizar config.json

```json
"selectores": {
  "precio_base": [
    ".nuevo-selector-que-copiaste",
    ".selector-alternativo"
  ]
}
```

## 📝 Logs y Depuración

### Archivo de Log

Todo se registra en `bot_precios.log`:

```bash
# Ver últimas líneas
tail -f bot_precios.log

# Ver todo el log
cat bot_precios.log
```

### Nivel de Detalle

Para más información de depuración, edita el script:

```python
logging.basicConfig(
    level=logging.DEBUG,  # Cambiar de INFO a DEBUG
    ...
)
```

## 🤝 Contribuir

Si encuentras errores o mejoras:

1. Documenta el problema en detalle
2. Incluye logs relevantes
3. Especifica versiones (Python, Chrome, SO)

## 📧 Soporte

Para problemas o preguntas:
1. Revisa esta guía completa
2. Consulta los logs
3. Verifica los selectores CSS

## 🔄 Actualizaciones

Para actualizar las dependencias:

```bash
pip install --upgrade -r requirements.txt
```

## 📊 Ejemplo de Análisis en Python

```python
import pandas as pd
import matplotlib.pyplot as plt

# Cargar datos
df = pd.read_excel('registro_precios_vuelos.xlsx', sheet_name='Datos')

# Filtrar una aerolínea y ruta específica
df_filtrado = df[df['RYANAIR_precio_base'] != 'Error/No encontrado']

# Convertir precios a numérico
df_filtrado['precio_num'] = df_filtrado['RYANAIR_precio_base'].str.extract('(\d+\.?\d*)').astype(float)

# Agrupar por perfil
analisis = df_filtrado.groupby('Perfil_ID')['precio_num'].describe()
print(analisis)

# Visualizar
df_filtrado.boxplot(column='precio_num', by='Perfil_ID')
plt.title('Distribución de Precios por Perfil de Usuario')
plt.ylabel('Precio (€)')
plt.show()
```

## 🎯 Próximos Pasos

Una vez que tengas datos recopilados:

1. **Análisis Estadístico**: Determina si las diferencias son significativas
2. **Correlaciones**: Busca patrones (tipo de dispositivo, hora del día, etc.)
3. **Visualización**: Crea gráficos para presentar hallazgos
4. **Informe**: Documenta metodología y conclusiones

## ⚡ Consejos Avanzados

### Usar Proxies (Opcional)

Para simular diferentes ubicaciones geográficas:

```python
from selenium.webdriver.common.proxy import Proxy, ProxyType

proxy = Proxy()
proxy.proxy_type = ProxyType.MANUAL
proxy.http_proxy = "ip:puerto"
proxy.ssl_proxy = "ip:puerto"

capabilities = webdriver.DesiredCapabilities.CHROME
proxy.add_to_capabilities(capabilities)

driver = webdriver.Chrome(desired_capabilities=capabilities)
```

### Guardar Screenshots

Para debugging, guarda capturas de pantalla:

```python
driver.save_screenshot(f"screenshot_{datetime.now().strftime('%Y%m%d_%H%M%S')}.png")
```

### Modo Headless

Para ejecutar sin ventana visible (consume menos recursos):

En `config.json`:
```json
"modo_headless": true
```

---

**¡Buena suerte con tu investigación!** 🚀

Si encuentras evidencia de personalización de precios, considera compartir tus hallazgos con autoridades de consumo.
