# Configuración para Firefox

El bot ha sido configurado para usar **Firefox** en lugar de Chrome.

## 🦊 Requisitos

### Instalar Firefox

**Windows:**
- Descarga desde: https://www.mozilla.org/firefox/
- O usa winget: `winget install Mozilla.Firefox`

**Mac:**
```bash
brew install --cask firefox
```

**Linux (Ubuntu/Debian):**
```bash
sudo apt update
sudo apt install firefox
```

**Linux (Fedora/RHEL):**
```bash
sudo dnf install firefox
```

## 🚀 Ejecutar el Bot

Una vez que Firefox esté instalado, el bot funcionará automáticamente:

```bash
# Test rápido
python bot_precios_mejorado.py --test

# Ejecución única
python bot_precios_mejorado.py --once

# Modo programado (24/7)
python bot_precios_mejorado.py
```

## 🔧 Configuración de Firefox

El script configura automáticamente Firefox con:

### User Agent Personalizado
Cada perfil de usuario usa un User Agent diferente para simular distintos dispositivos.

### Tamaño de Ventana
Se configura el tamaño de ventana según el perfil:
- Desktop: 1920x1080, 1440x900, 1366x768
- Mobile: 375x812 (iPhone), 412x915 (Android)

### Anti-Detección
- `dom.webdriver.enabled = false`
- `useAutomationExtension = false`
- Script JavaScript para ocultar el flag de webdriver

### Preferencias Adicionales
- Notificaciones deshabilitadas
- Push notifications deshabilitadas

## 🆚 Firefox vs Chrome

### Ventajas de Firefox:

✅ **Código abierto** - Completamente open source
✅ **Privacidad** - Mejor protección de privacidad por defecto
✅ **Menor detección** - Algunas webs detectan menos el automation
✅ **Consume menos RAM** - Generalmente más eficiente con memoria
✅ **Developer Tools** - Excelentes herramientas de desarrollo

### Consideraciones:

⚠️ **GeckoDriver** - Se descarga automáticamente con webdriver-manager
⚠️ **Selectores CSS** - Los mismos selectores funcionan en ambos navegadores
⚠️ **Rendimiento** - Similar al de Chrome para scraping

## 🐛 Solución de Problemas

### Error: "geckodriver not found"

El script descarga GeckoDriver automáticamente. Si falla:

```bash
# Instalar manualmente GeckoDriver
# Linux
sudo apt install firefox-geckodriver

# Mac
brew install geckodriver

# O descargar desde:
# https://github.com/mozilla/geckodriver/releases
```

### Error: "Firefox binary not found"

Verifica que Firefox esté instalado:

```bash
# Linux/Mac
which firefox
firefox --version

# Windows (PowerShell)
Get-Command firefox
```

Si no está en el PATH, especifica la ruta manualmente en el código:

```python
opts.binary_location = "/ruta/a/firefox"  # Linux/Mac
opts.binary_location = "C:\\Program Files\\Mozilla Firefox\\firefox.exe"  # Windows
```

### Firefox se abre pero no navega

1. Verifica tu conexión a internet
2. Comprueba que las URLs en config.json sean correctas
3. Revisa el archivo `bot_precios.log` para errores

### Modo Headless (Sin Ventana Visible)

Para ejecutar Firefox sin ventana visible, edita `bot_precios_mejorado.py`:

```python
def iniciar_driver(perfil):
    opts = FirefoxOptions()

    # Descomentar esta línea:
    opts.add_argument("--headless")
```

## 📊 Rendimiento

### Consumo de Recursos (Promedio)

- **RAM por instancia**: ~300-500 MB
- **CPU**: 5-15% durante scraping activo
- **Disco**: Logs + Excel + cookies < 50 MB

### Tiempo de Ejecución

- **Test rápido** (1 perfil, 1 aerolínea): 30-60 segundos
- **Ejecución una vez** (5 perfiles, 2 aerolíneas): 5-10 minutos
- **Ronda programada**: Similar a ejecución única

## 🔄 Volver a Chrome

Si prefieres usar Chrome, puedes revertir los cambios:

1. Edita `bot_precios_mejorado.py`:

```python
# Cambiar imports
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from webdriver_manager.chrome import ChromeDriverManager

# Cambiar función
def iniciar_driver(perfil):
    opts = Options()
    opts.add_argument(f"user-agent={perfil['ua']}")
    # ... resto de opciones de Chrome

    driver = webdriver.Chrome(
        service=Service(ChromeDriverManager().install()),
        options=opts
    )
    return driver
```

## 🎯 Perfiles Configurados

Los 5 perfiles de usuario simulan:

1. **Usuario_1_Win_Chrome** - Windows con Chrome user agent
2. **Usuario_2_Mac_Safari** - macOS con Safari user agent
3. **Usuario_3_iPhone** - iPhone con Mobile Safari
4. **Usuario_4_Android** - Android con Chrome Mobile
5. **Usuario_5_Linux_Firefox** - Linux con Firefox user agent

Todos se ejecutan con Firefox, pero usan diferentes User Agents para simular diversos dispositivos.

## 📝 Notas Adicionales

### Cookies y Sesiones

Firefox guarda cookies por perfil en:
- `cookies_profile_1.json`
- `cookies_profile_2.json`
- etc.

Para resetear las sesiones, elimina estos archivos.

### Capturas de Pantalla (Debugging)

Para guardar capturas de pantalla durante la ejecución:

```python
driver.save_screenshot(f"debug_{datetime.now().strftime('%Y%m%d_%H%M%S')}.png")
```

### Extensiones de Firefox

Si necesitas agregar extensiones (ej: VPN, bloqueador de anuncios):

```python
opts = FirefoxOptions()
opts.add_argument("--load-extension=/ruta/a/extension.xpi")
```

## 🔐 Seguridad

Firefox ofrece mejores características de privacidad:

- **Tracking Protection** - Protección contra rastreo
- **Enhanced Tracking Protection** - Bloqueo de rastreadores
- **Container Tabs** - Aislamiento de cookies (no usado en automation)
- **Privacy Settings** - Configuración de privacidad estricta

Estas features no afectan el scraping pero añaden una capa de protección.

---

**✅ Firefox está listo para usar con el bot de scraping**

Para cualquier problema, consulta los logs en `bot_precios.log` o la guía principal en `GUIA_USO.md`.
