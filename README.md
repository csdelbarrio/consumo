# Bot de Scraping de Aerolíneas - Detección de Personalización de Precios

Proyecto de investigación para detectar posibles casos de personalización de precios en aerolíneas mediante scraping automatizado con múltiples perfiles de usuario.

## 🚀 Inicio Rápido

```bash
# 1. Instalar dependencias
pip install -r requirements.txt

# 2. Ejecutar test
python bot_precios_mejorado.py --test

# 3. Ejecutar una vez
python bot_precios_mejorado.py --once

# 4. Ejecutar en modo programado (24/7)
python bot_precios_mejorado.py
```

## 📁 Archivos del Proyecto

- `bot_precios_mejorado.py` - Script principal mejorado y corregido
- `airline_scraper.py` - Implementación alternativa más modular
- `analizar_datos.py` - Herramienta de análisis estadístico
- `config.json` - Configuración de rutas, horarios y selectores
- `requirements.txt` - Dependencias de Python
- `GUIA_USO.md` - **Documentación completa y detallada**

## 📖 Documentación

Para instrucciones completas de instalación, configuración y uso, consulta **[GUIA_USO.md](GUIA_USO.md)**.

## ⚠️ Aviso Legal

Este software es para investigación legítima sobre prácticas comerciales. El usuario es responsable de cumplir con los Términos de Servicio de cada aerolínea y usar los datos de forma ética y legal.

## 🔧 Características

- ✅ Simulación de múltiples perfiles de usuario (5 por defecto)
- ✅ Scraping de múltiples aerolíneas (Ryanair, Iberia, Vueling)
- ✅ Ejecución programada (4 veces al día configurable)
- ✅ Guardado automático en Excel
- ✅ Análisis estadístico de diferencias de precios
- ✅ Detección de servicios auxiliares (maleta, asiento, embarque)
- ✅ Logs detallados
- ✅ Anti-detección (rotación de user agents, delays aleatorios)

## 📊 Análisis de Datos

Una vez que tengas datos recopilados:

```bash
# Análisis básico
python analizar_datos.py

# Con gráficos
python analizar_datos.py --graficos

# Con reporte exportado
python analizar_datos.py --graficos --reporte
```

## 🤝 Contexto

Proyecto desarrollado en el contexto de la **Secretaría General de Consumo y Juego** para investigación sobre prácticas comerciales en el sector de aviación.
