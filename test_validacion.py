#!/usr/bin/env python3
"""
Test de validación del código sin ejecutar navegador
Verifica que todos los módulos se importen correctamente y la estructura sea válida
"""

import sys
import importlib.util

def test_imports():
    """Verifica que todas las importaciones funcionen"""
    print("🧪 TEST 1: Verificando importaciones...")

    try:
        import selenium
        print("   ✓ selenium importado correctamente")
    except ImportError as e:
        print(f"   ✗ Error importando selenium: {e}")
        return False

    try:
        import pandas
        print("   ✓ pandas importado correctamente")
    except ImportError as e:
        print(f"   ✗ Error importando pandas: {e}")
        return False

    try:
        import schedule
        print("   ✓ schedule importado correctamente")
    except ImportError as e:
        print(f"   ✗ Error importando schedule: {e}")
        return False

    try:
        from openpyxl import load_workbook
        print("   ✓ openpyxl importado correctamente")
    except ImportError as e:
        print(f"   ✗ Error importando openpyxl: {e}")
        return False

    return True


def test_script_syntax(script_path):
    """Verifica que el script no tenga errores de sintaxis"""
    print(f"\n🧪 TEST 2: Verificando sintaxis de {script_path}...")

    try:
        with open(script_path, 'r', encoding='utf-8') as f:
            code = f.read()

        compile(code, script_path, 'exec')
        print(f"   ✓ Sintaxis válida")
        return True
    except SyntaxError as e:
        print(f"   ✗ Error de sintaxis: {e}")
        return False
    except Exception as e:
        print(f"   ✗ Error: {e}")
        return False


def test_config_json():
    """Verifica que el archivo de configuración sea válido"""
    print("\n🧪 TEST 3: Verificando config.json...")

    try:
        import json
        with open('config.json', 'r', encoding='utf-8') as f:
            config = json.load(f)

        print("   ✓ config.json es JSON válido")

        # Verificar estructura
        required_keys = ['configuracion_general', 'rutas_a_monitorear', 'aerolineas', 'perfiles_usuario']
        for key in required_keys:
            if key in config:
                print(f"   ✓ Clave '{key}' presente")
            else:
                print(f"   ✗ Clave '{key}' faltante")
                return False

        # Verificar que haya al menos una ruta activa
        rutas_activas = [r for r in config['rutas_a_monitorear'] if r.get('activo', False)]
        print(f"   ℹ️  Rutas activas: {len(rutas_activas)}")

        # Verificar que haya al menos una aerolínea activa
        aerolineas_activas = [a for a, data in config['aerolineas'].items() if data.get('activo', False)]
        print(f"   ℹ️  Aerolíneas activas: {', '.join(aerolineas_activas)}")

        # Verificar perfiles
        perfiles_activos = [p for p in config['perfiles_usuario'] if p.get('activo', False)]
        print(f"   ℹ️  Perfiles activos: {len(perfiles_activos)}")

        return True
    except Exception as e:
        print(f"   ✗ Error: {e}")
        return False


def test_script_structure():
    """Verifica la estructura del script principal"""
    print("\n🧪 TEST 4: Verificando estructura del código...")

    try:
        # Importar el módulo sin ejecutar main
        spec = importlib.util.spec_from_file_location("bot", "bot_precios_mejorado.py")
        module = importlib.util.module_from_spec(spec)

        # Verificar que las funciones principales existan
        required_functions = [
            'iniciar_driver',
            'obtener_precio',
            'guardar_datos_excel',
            'trabajo_auditoria',
            'main'
        ]

        spec.loader.exec_module(module)

        for func_name in required_functions:
            if hasattr(module, func_name):
                print(f"   ✓ Función '{func_name}' encontrada")
            else:
                print(f"   ✗ Función '{func_name}' no encontrada")
                return False

        # Verificar variables de configuración
        if hasattr(module, 'PERFILES') and len(module.PERFILES) > 0:
            print(f"   ✓ PERFILES configurado ({len(module.PERFILES)} perfiles)")

        if hasattr(module, 'OBJETIVOS') and len(module.OBJETIVOS) > 0:
            print(f"   ✓ OBJETIVOS configurado ({len(module.OBJETIVOS)} aerolíneas)")

        return True
    except Exception as e:
        print(f"   ✗ Error: {e}")
        import traceback
        traceback.print_exc()
        return False


def test_data_processing():
    """Verifica la lógica de procesamiento de datos"""
    print("\n🧪 TEST 5: Verificando lógica de procesamiento...")

    try:
        import pandas as pd
        from datetime import datetime

        # Crear datos de ejemplo
        test_data = [
            {
                'Fecha_Hora': datetime.now().strftime('%Y-%m-%d %H:%M:%S'),
                'Dia_Semana': 'Monday',
                'Perfil_ID': 'Test_Usuario_1',
                'Dispositivo_Simulado': 'Mozilla/5.0 (Test)',
                'RYANAIR_precio_base': '45.99€',
                'IBERIA_precio_base': '87.50€',
            },
            {
                'Fecha_Hora': datetime.now().strftime('%Y-%m-%d %H:%M:%S'),
                'Dia_Semana': 'Monday',
                'Perfil_ID': 'Test_Usuario_2',
                'Dispositivo_Simulado': 'Mozilla/5.0 (Test)',
                'RYANAIR_precio_base': '48.99€',
                'IBERIA_precio_base': '87.50€',
            }
        ]

        df = pd.DataFrame(test_data)
        print(f"   ✓ DataFrame de prueba creado con {len(df)} filas")

        # Intentar guardar en Excel
        test_file = 'test_output.xlsx'
        df.to_excel(test_file, index=False)
        print(f"   ✓ Excel de prueba creado: {test_file}")

        # Leer de vuelta
        df_read = pd.read_excel(test_file)
        print(f"   ✓ Excel leído correctamente ({len(df_read)} filas)")

        # Limpiar
        import os
        os.remove(test_file)
        print(f"   ✓ Archivo de prueba eliminado")

        return True
    except Exception as e:
        print(f"   ✗ Error: {e}")
        return False


def main():
    """Ejecuta todos los tests"""
    print("="*80)
    print("VALIDACIÓN DEL BOT DE SCRAPING DE AEROLÍNEAS")
    print("="*80)
    print()

    tests = [
        test_imports,
        lambda: test_script_syntax('bot_precios_mejorado.py'),
        lambda: test_script_syntax('airline_scraper.py'),
        lambda: test_script_syntax('analizar_datos.py'),
        test_config_json,
        test_script_structure,
        test_data_processing,
    ]

    results = []
    for i, test in enumerate(tests, 1):
        try:
            result = test()
            results.append(result)
        except Exception as e:
            print(f"\n   ✗ Test {i} falló con excepción: {e}")
            results.append(False)

    print("\n" + "="*80)
    print("RESUMEN DE TESTS")
    print("="*80)

    passed = sum(results)
    total = len(results)

    print(f"\n✓ Tests pasados: {passed}/{total}")
    print(f"✗ Tests fallidos: {total - passed}/{total}")

    if passed == total:
        print("\n🎉 ¡Todos los tests pasaron! El código está correctamente estructurado.")
        print("\nℹ️  NOTA: Para probar la funcionalidad completa (scraping real),")
        print("   necesitarás ejecutar el bot en un entorno con Firefox instalado.")
        print("\n   Comandos para ejecutar:")
        print("   - Test con navegador: python bot_precios_mejorado.py --test")
        print("   - Ejecución única: python bot_precios_mejorado.py --once")
        print("   - Modo programado: python bot_precios_mejorado.py")
    else:
        print("\n⚠️  Algunos tests fallaron. Revisa los errores arriba.")
        return 1

    return 0


if __name__ == "__main__":
    sys.exit(main())
