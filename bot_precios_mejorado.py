#!/usr/bin/env python3
"""
Bot mejorado para detectar personalización de precios en aerolíneas
Ejecuta scraping automático varias veces al día con múltiples perfiles
"""

import time
import random
import os
import schedule
import pandas as pd
from datetime import datetime
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException, NoSuchElementException
from webdriver_manager.chrome import ChromeDriverManager
import logging

# Configurar logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s',
    handlers=[
        logging.FileHandler('bot_precios.log'),
        logging.StreamHandler()
    ]
)
logger = logging.getLogger(__name__)

# --- CONFIGURACIÓN DE TIEMPO Y ARCHIVO ---
ARCHIVO_EXCEL = "registro_precios_vuelos.xlsx"

# Horas de ejecución (formato 24h)
HORAS_EJECUCION = ["09:00", "13:00", "17:00", "21:00"]

# Solo ejecutar en días laborables (Lunes-Viernes)
DIAS_LABORABLES_ONLY = True

# --- PERFILES DE USUARIO ---
PERFILES = [
    {
        "id": "Usuario_1_Win_Chrome",
        "ua": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "window": "1920,1080"
    },
    {
        "id": "Usuario_2_Mac_Safari",
        "ua": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.1 Safari/605.1.15",
        "window": "1440,900"
    },
    {
        "id": "Usuario_3_iPhone",
        "ua": "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1",
        "window": "375,812"
    },
    {
        "id": "Usuario_4_Android",
        "ua": "Mozilla/5.0 (Linux; Android 13; SM-S918B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36",
        "window": "412,915"
    },
    {
        "id": "Usuario_5_Linux_Firefox",
        "ua": "Mozilla/5.0 (X11; Linux x86_64; rv:121.0) Gecko/20100101 Firefox/121.0",
        "window": "1366,768"
    }
]

# --- OBJETIVOS (URLs y Selectores) ---
# IMPORTANTE: Actualiza estas URLs con tus rutas y fechas deseadas
OBJETIVOS = {
    "RYANAIR": {
        "url": "https://www.ryanair.com/es/es/trip/flights/select?originIata=MAD&destinationIata=BRU&dateOut=2026-02-19&adults=1",
        "selectores_cookie": [
            "button.cookie-popup-with-overlay__button",
            "button[data-ref='cookie.accept-all']",
            ".cookie-popup button"
        ],
        "selectores_precio": [
            "flights-trip-details-price .flight-card-summary__price-value",
            ".flight-card-summary__price",
            "span[data-ref='price.currency']",
            ".price__integers"
        ],
        "selectores_servicios": {
            "maleta": [".bag-fee", ".baggage-price", "span[data-ref='bags.price']"],
            "asiento": [".seat-price", "span[data-ref='seat.price']"],
            "embarque": [".priority-price", ".priority-boarding-price"]
        }
    },
    "IBERIA": {
        "url": "https://www.iberia.com/flights/?market=ES&UserLanguage=es&TripType=OneWay&Cabin1=Economy&Adult=1&Origin1=MAD&Destination1=BRU&DepartureDate1=2026-02-19",
        "selectores_cookie": [
            "#onetrust-accept-btn-handler",
            "button[id='onetrust-accept-btn-handler']",
            ".onetrust-close-btn-handler"
        ],
        "selectores_precio": [
            ".price-amount",
            "span.total-price",
            ".fare-price",
            "[data-test='price']"
        ],
        "selectores_servicios": {
            "maleta": [".baggage-price", ".extra-baggage-fee"],
            "asiento": [".seat-selection-price"],
            "embarque": [".priority-boarding-price"]
        }
    },
    "VUELING": {
        "url": "https://www.vueling.com/es/vuelos-baratos/buscar",
        "selectores_cookie": [
            "#ensCloseBanner",
            "button[data-test='cookie-accept']",
            ".cookie-banner button"
        ],
        "selectores_precio": [
            ".flight-price",
            "[data-testid='price']",
            ".fare-amount"
        ],
        "selectores_servicios": {
            "maleta": [".baggage-fee"],
            "asiento": [".seat-price"],
            "embarque": [".priority-price"]
        }
    }
}


def iniciar_driver(perfil):
    """Inicializa el driver de Chrome con el perfil especificado"""
    opts = Options()

    # Descomenta la siguiente línea para ejecutar sin ventana visible (headless)
    # opts.add_argument("--headless=new")

    opts.add_argument(f"user-agent={perfil['ua']}")
    opts.add_argument(f"--window-size={perfil['window']}")

    # Opciones anti-detección
    opts.add_argument("--disable-blink-features=AutomationControlled")
    opts.add_experimental_option("excludeSwitches", ["enable-automation"])
    opts.add_experimental_option('useAutomationExtension', False)

    # Opciones adicionales para estabilidad
    opts.add_argument("--no-sandbox")
    opts.add_argument("--disable-dev-shm-usage")
    opts.add_argument("--disable-gpu")

    try:
        driver = webdriver.Chrome(
            service=Service(ChromeDriverManager().install()),
            options=opts
        )

        # Script para ocultar webdriver
        driver.execute_script("Object.defineProperty(navigator, 'webdriver', {get: () => undefined})")

        return driver
    except Exception as e:
        logger.error(f"Error al iniciar driver: {e}")
        raise


def intentar_con_multiples_selectores(driver, wait, selectores, tipo="click"):
    """
    Intenta encontrar un elemento con múltiples selectores CSS

    Args:
        driver: WebDriver de Selenium
        wait: WebDriverWait
        selectores: Lista de selectores CSS para probar
        tipo: 'click' o 'text' - acción a realizar

    Returns:
        Elemento encontrado o None
    """
    for selector in selectores:
        try:
            if tipo == "click":
                elemento = wait.until(EC.element_to_be_clickable((By.CSS_SELECTOR, selector)))
                elemento.click()
                logger.info(f"✓ Click exitoso con selector: {selector}")
                return elemento
            else:  # text
                elemento = wait.until(EC.presence_of_element_located((By.CSS_SELECTOR, selector)))
                if elemento.text.strip():
                    logger.info(f"✓ Texto encontrado con selector: {selector}")
                    return elemento
        except (TimeoutException, NoSuchElementException):
            continue

    return None


def obtener_precio(driver, aerolinea, datos_objetivo):
    """
    Obtiene el precio de un vuelo y servicios auxiliares

    Returns:
        Dict con precio base y servicios adicionales
    """
    wait = WebDriverWait(driver, 20)
    resultado = {
        "precio_base": "Error/No encontrado",
        "maleta": "N/A",
        "asiento": "N/A",
        "embarque": "N/A"
    }

    try:
        logger.info(f"   Accediendo a {aerolinea}...")
        driver.get(datos_objetivo["url"])

        # Espera inicial para que cargue la página
        time.sleep(random.uniform(4, 7))

        # Intentar cerrar el banner de cookies
        logger.info(f"   Cerrando banner de cookies...")
        intentar_con_multiples_selectores(
            driver,
            wait,
            datos_objetivo["selectores_cookie"],
            tipo="click"
        )
        time.sleep(1)

        # Obtener precio base
        logger.info(f"   Buscando precio base...")
        elemento_precio = intentar_con_multiples_selectores(
            driver,
            wait,
            datos_objetivo["selectores_precio"],
            tipo="text"
        )

        if elemento_precio:
            resultado["precio_base"] = elemento_precio.text.strip().replace('\n', ' ')
            logger.info(f"   ✓ Precio encontrado: {resultado['precio_base']}")

        # Intentar obtener precios de servicios adicionales
        if "selectores_servicios" in datos_objetivo:
            for servicio, selectores in datos_objetivo["selectores_servicios"].items():
                elemento_servicio = intentar_con_multiples_selectores(
                    driver,
                    WebDriverWait(driver, 5),  # Timeout más corto para servicios
                    selectores,
                    tipo="text"
                )
                if elemento_servicio and elemento_servicio.text.strip():
                    resultado[servicio] = elemento_servicio.text.strip()

    except Exception as e:
        logger.error(f"   [!] Error en {aerolinea}: {str(e)[:100]}")

    return resultado


def guardar_datos_excel(nuevos_datos):
    """Guarda los datos en el archivo Excel"""
    try:
        df_nuevo = pd.DataFrame(nuevos_datos)

        if os.path.exists(ARCHIVO_EXCEL):
            df_existente = pd.read_excel(ARCHIVO_EXCEL)
            df_final = pd.concat([df_existente, df_nuevo], ignore_index=True)
            logger.info(f"📊 Agregando {len(nuevos_datos)} filas a {len(df_existente)} existentes")
        else:
            df_final = df_nuevo
            logger.info(f"📊 Creando nuevo archivo con {len(nuevos_datos)} filas")

        df_final.to_excel(ARCHIVO_EXCEL, index=False)
        logger.info(f"💾 Datos guardados exitosamente en {ARCHIVO_EXCEL}")

    except Exception as e:
        logger.error(f"Error al guardar Excel: {e}")
        # Guardar copia de respaldo
        backup_file = f"backup_{datetime.now().strftime('%Y%m%d_%H%M%S')}.xlsx"
        pd.DataFrame(nuevos_datos).to_excel(backup_file, index=False)
        logger.info(f"💾 Copia de respaldo guardada en {backup_file}")


def analizar_diferencias_precios():
    """Analiza las diferencias de precios entre perfiles"""
    if not os.path.exists(ARCHIVO_EXCEL):
        return

    try:
        df = pd.read_excel(ARCHIVO_EXCEL)

        # Última ronda de datos
        ultima_fecha = df['Fecha_Hora'].max()
        df_ultima = df[df['Fecha_Hora'] == ultima_fecha]

        logger.info("\n" + "="*60)
        logger.info("ANÁLISIS DE PERSONALIZACIÓN DE PRECIOS")
        logger.info("="*60)

        for aerolinea_col in [col for col in df_ultima.columns if 'Precio' in col]:
            aerolinea = aerolinea_col.replace('_Precio', '').replace('_precio_base', '')
            precios = df_ultima[aerolinea_col]

            # Filtrar valores no numéricos y convertir
            precios_numericos = []
            for p in precios:
                try:
                    # Extraer número del string
                    precio_limpio = str(p).replace('€', '').replace(',', '.').strip()
                    precio_numero = float(''.join(filter(lambda x: x.isdigit() or x == '.', precio_limpio)))
                    precios_numericos.append(precio_numero)
                except:
                    continue

            if len(precios_numericos) > 1:
                min_precio = min(precios_numericos)
                max_precio = max(precios_numericos)
                diferencia = max_precio - min_precio

                logger.info(f"\n{aerolinea}:")
                logger.info(f"  Precio mínimo: {min_precio:.2f}€")
                logger.info(f"  Precio máximo: {max_precio:.2f}€")
                logger.info(f"  Diferencia: {diferencia:.2f}€")

                if diferencia > 0:
                    porcentaje = (diferencia / min_precio) * 100
                    logger.info(f"  ⚠️  VARIACIÓN DEL {porcentaje:.1f}% DETECTADA")

        logger.info("\n" + "="*60 + "\n")

    except Exception as e:
        logger.error(f"Error al analizar diferencias: {e}")


def trabajo_auditoria():
    """Ejecuta una ronda completa de auditoría"""

    # Verificar si debe ejecutarse (días laborables)
    dia_semana = datetime.today().weekday()
    if DIAS_LABORABLES_ONLY and dia_semana > 4:
        logger.info("📅 Hoy es fin de semana. No se ejecuta la auditoría.")
        return

    logger.info("\n" + "="*80)
    logger.info(f"⏰ INICIANDO RONDA DE AUDITORÍA: {datetime.now().strftime('%Y-%m-%d %H:%M')}")
    logger.info("="*80)

    registros_ronda = []
    timestamp = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
    dia_nombre = datetime.today().strftime('%A')

    for i, perfil in enumerate(PERFILES, 1):
        logger.info(f"\n👤 [{i}/{len(PERFILES)}] Procesando perfil: {perfil['id']}")

        driver = None
        try:
            driver = iniciar_driver(perfil)

            fila = {
                "Fecha_Hora": timestamp,
                "Dia_Semana": dia_nombre,
                "Perfil_ID": perfil['id'],
                "Dispositivo_Simulado": perfil['ua'].split(')')[0] + ")"
            }

            # Procesar cada aerolínea
            for aerolinea, datos in OBJETIVOS.items():
                try:
                    resultado = obtener_precio(driver, aerolinea, datos)

                    # Agregar resultados a la fila
                    fila[f"{aerolinea}_precio_base"] = resultado["precio_base"]
                    fila[f"{aerolinea}_maleta"] = resultado["maleta"]
                    fila[f"{aerolinea}_asiento"] = resultado["asiento"]
                    fila[f"{aerolinea}_embarque"] = resultado["embarque"]

                    # Limpiar cookies entre aerolíneas
                    driver.delete_all_cookies()
                    time.sleep(random.uniform(2, 4))

                except Exception as e:
                    logger.error(f"   Error procesando {aerolinea}: {e}")
                    fila[f"{aerolinea}_precio_base"] = "Error"
                    fila[f"{aerolinea}_maleta"] = "Error"
                    fila[f"{aerolinea}_asiento"] = "Error"
                    fila[f"{aerolinea}_embarque"] = "Error"

            registros_ronda.append(fila)

        except Exception as e:
            logger.error(f"Error con perfil {perfil['id']}: {e}")

        finally:
            if driver:
                driver.quit()

        # Pausa entre perfiles
        if i < len(PERFILES):
            logger.info(f"   Esperando antes del siguiente perfil...")
            time.sleep(random.uniform(5, 10))

    # Guardar datos
    if registros_ronda:
        guardar_datos_excel(registros_ronda)
        analizar_diferencias_precios()

    logger.info("✅ Ronda finalizada. Esperando siguiente ejecución...\n")


def ejecutar_test():
    """Ejecuta un test rápido con un solo perfil"""
    logger.info("\n🧪 EJECUTANDO TEST RÁPIDO")
    logger.info("="*60)

    perfil_test = PERFILES[0]
    logger.info(f"Usando perfil: {perfil_test['id']}")

    driver = None
    try:
        driver = iniciar_driver(perfil_test)

        # Probar solo la primera aerolínea
        primera_aerolinea = list(OBJETIVOS.keys())[0]
        datos = OBJETIVOS[primera_aerolinea]

        logger.info(f"\nProbando {primera_aerolinea}...")
        resultado = obtener_precio(driver, primera_aerolinea, datos)

        logger.info("\n📋 RESULTADOS DEL TEST:")
        for key, value in resultado.items():
            logger.info(f"  {key}: {value}")

        logger.info("\n✅ Test completado exitosamente")

    except Exception as e:
        logger.error(f"❌ Error en test: {e}")

    finally:
        if driver:
            driver.quit()


def main():
    """Función principal"""
    import argparse

    parser = argparse.ArgumentParser(description='Bot de scraping de aerolíneas')
    parser.add_argument('--test', action='store_true', help='Ejecutar modo test')
    parser.add_argument('--once', action='store_true', help='Ejecutar una sola vez')
    args = parser.parse_args()

    if args.test:
        ejecutar_test()
        return

    if args.once:
        trabajo_auditoria()
        return

    # Modo programado
    logger.info("="*80)
    logger.info("🤖 BOT DE AUDITORÍA DE PRECIOS INICIADO")
    logger.info("="*80)
    logger.info(f"📅 Horarios programados: {', '.join(HORAS_EJECUCION)}")
    logger.info(f"📊 Archivo de salida: {ARCHIVO_EXCEL}")
    logger.info(f"👥 Perfiles a utilizar: {len(PERFILES)}")
    logger.info(f"✈️  Aerolíneas monitoreadas: {', '.join(OBJETIVOS.keys())}")
    logger.info("\n⚠️  IMPORTANTE: Mantén esta ventana abierta y el PC encendido")
    logger.info("="*80 + "\n")

    # Programar ejecuciones
    for hora in HORAS_EJECUCION:
        schedule.every().day.at(hora).do(trabajo_auditoria)
        logger.info(f"✓ Programada ejecución a las {hora}")

    logger.info("\n⏳ Esperando próxima ejecución programada...\n")

    # Bucle principal
    try:
        while True:
            schedule.run_pending()
            time.sleep(30)
    except KeyboardInterrupt:
        logger.info("\n\n🛑 Bot detenido por el usuario")


if __name__ == "__main__":
    main()
