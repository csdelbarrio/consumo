#!/usr/bin/env python3
"""
Script de análisis de datos para resultados de scraping de aerolíneas
Genera estadísticas, visualizaciones y reportes sobre personalización de precios
"""

import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from datetime import datetime
import os
import sys

# Configurar estilo de gráficos
sns.set_style("whitegrid")
plt.rcParams['figure.figsize'] = (12, 6)


class AnalizadorPrecios:
    """Analiza los datos de scraping de aerolíneas"""

    def __init__(self, archivo_excel='registro_precios_vuelos.xlsx'):
        """
        Inicializa el analizador

        Args:
            archivo_excel: Ruta al archivo Excel con los datos
        """
        if not os.path.exists(archivo_excel):
            raise FileNotFoundError(f"No se encontró el archivo: {archivo_excel}")

        self.archivo = archivo_excel
        self.df = pd.read_excel(archivo_excel, sheet_name='Datos')

        # Limpiar y preparar datos
        self._preparar_datos()

    def _preparar_datos(self):
        """Prepara y limpia los datos para análisis"""
        print("Preparando datos...")

        # Convertir fecha/hora a datetime
        self.df['Fecha_Hora'] = pd.to_datetime(self.df['Fecha_Hora'])

        # Extraer componentes de tiempo
        self.df['Fecha'] = self.df['Fecha_Hora'].dt.date
        self.df['Hora'] = self.df['Fecha_Hora'].dt.hour
        self.df['Dia_Num'] = self.df['Fecha_Hora'].dt.dayofweek

        # Identificar columnas de precios
        self.columnas_precio = [col for col in self.df.columns if 'precio_base' in col.lower()]

        # Limpiar y convertir precios a numérico
        for col in self.columnas_precio:
            self.df[col + '_num'] = self.df[col].apply(self._extraer_precio)

        print(f"✓ Datos preparados: {len(self.df)} registros")

    @staticmethod
    def _extraer_precio(precio_str):
        """Extrae el valor numérico de un string de precio"""
        if pd.isna(precio_str) or precio_str in ['Error/No encontrado', 'Error', 'N/A']:
            return np.nan

        try:
            # Eliminar símbolos y convertir a float
            precio_limpio = str(precio_str).replace('€', '').replace(',', '.').strip()
            # Extraer solo números y punto decimal
            precio_num = ''.join(c for c in precio_limpio if c.isdigit() or c == '.')
            return float(precio_num) if precio_num else np.nan
        except:
            return np.nan

    def resumen_general(self):
        """Genera un resumen general de los datos"""
        print("\n" + "="*80)
        print("RESUMEN GENERAL DE DATOS")
        print("="*80)

        print(f"\n📊 Total de registros: {len(self.df)}")
        print(f"📅 Período: {self.df['Fecha'].min()} a {self.df['Fecha'].max()}")
        print(f"📅 Días únicos analizados: {self.df['Fecha'].nunique()}")

        print(f"\n👥 Perfiles de usuario:")
        for perfil, count in self.df['Perfil_ID'].value_counts().items():
            print(f"   - {perfil}: {count} búsquedas")

        print(f"\n✈️  Aerolíneas analizadas:")
        aerolineas = set()
        for col in self.columnas_precio:
            aerolinea = col.replace('_precio_base', '').replace('_Precio', '')
            aerolineas.add(aerolinea)

        for aerolinea in sorted(aerolineas):
            col_precio = f"{aerolinea}_precio_base_num"
            if col_precio in self.df.columns:
                datos_validos = self.df[col_precio].notna().sum()
                print(f"   - {aerolinea}: {datos_validos} precios válidos")

    def analizar_personalizacion(self, umbral_diferencia=5.0):
        """
        Analiza si hay evidencia de personalización de precios

        Args:
            umbral_diferencia: Diferencia mínima en euros para considerar significativa
        """
        print("\n" + "="*80)
        print("ANÁLISIS DE PERSONALIZACIÓN DE PRECIOS")
        print("="*80)

        # Agrupar por fecha y hora para comparar perfiles
        for col_precio in self.columnas_precio:
            col_num = col_precio + '_num'
            if col_num not in self.df.columns:
                continue

            aerolinea = col_precio.replace('_precio_base', '')
            print(f"\n✈️  {aerolinea.upper()}")
            print("-" * 60)

            # Agrupar por timestamp (misma búsqueda, diferentes perfiles)
            grupos_fecha = self.df.groupby('Fecha_Hora')

            casos_personalizacion = []

            for fecha_hora, grupo in grupos_fecha:
                precios = grupo[col_num].dropna()

                if len(precios) < 2:
                    continue

                min_precio = precios.min()
                max_precio = precios.max()
                diferencia = max_precio - min_precio

                if diferencia >= umbral_diferencia:
                    perfiles_min = grupo[grupo[col_num] == min_precio]['Perfil_ID'].values
                    perfiles_max = grupo[grupo[col_num] == max_precio]['Perfil_ID'].values

                    casos_personalizacion.append({
                        'fecha_hora': fecha_hora,
                        'min_precio': min_precio,
                        'max_precio': max_precio,
                        'diferencia': diferencia,
                        'porcentaje': (diferencia / min_precio * 100),
                        'perfiles_min': perfiles_min,
                        'perfiles_max': perfiles_max
                    })

            if casos_personalizacion:
                print(f"⚠️  Se detectaron {len(casos_personalizacion)} casos de diferencias significativas:")
                for caso in casos_personalizacion[:5]:  # Mostrar primeros 5
                    print(f"\n   {caso['fecha_hora'].strftime('%Y-%m-%d %H:%M')}:")
                    print(f"   - Precio mínimo: {caso['min_precio']:.2f}€ ({caso['perfiles_min']})")
                    print(f"   - Precio máximo: {caso['max_precio']:.2f}€ ({caso['perfiles_max']})")
                    print(f"   - Diferencia: {caso['diferencia']:.2f}€ ({caso['porcentaje']:.1f}%)")

                if len(casos_personalizacion) > 5:
                    print(f"\n   ... y {len(casos_personalizacion) - 5} casos más")
            else:
                print(f"✓ No se detectaron diferencias significativas (>{umbral_diferencia}€)")

    def estadisticas_por_perfil(self):
        """Calcula estadísticas de precios por perfil de usuario"""
        print("\n" + "="*80)
        print("ESTADÍSTICAS POR PERFIL DE USUARIO")
        print("="*80)

        for col_precio in self.columnas_precio:
            col_num = col_precio + '_num'
            if col_num not in self.df.columns:
                continue

            aerolinea = col_precio.replace('_precio_base', '')
            print(f"\n✈️  {aerolinea.upper()}")

            # Estadísticas por perfil
            stats = self.df.groupby('Perfil_ID')[col_num].agg([
                ('count', 'count'),
                ('media', 'mean'),
                ('mediana', 'median'),
                ('min', 'min'),
                ('max', 'max'),
                ('desv_std', 'std')
            ]).round(2)

            print(stats.to_string())

            # Test ANOVA simple (comparación entre grupos)
            try:
                from scipy import stats as scipy_stats
                grupos = [grupo[col_num].dropna() for _, grupo in self.df.groupby('Perfil_ID')]
                grupos_validos = [g for g in grupos if len(g) > 0]

                if len(grupos_validos) > 1:
                    f_stat, p_value = scipy_stats.f_oneway(*grupos_validos)
                    print(f"\nTest ANOVA: F={f_stat:.2f}, p-value={p_value:.4f}")
                    if p_value < 0.05:
                        print("⚠️  Diferencias estadísticamente significativas entre perfiles (p<0.05)")
                    else:
                        print("✓ No hay diferencias estadísticamente significativas entre perfiles")
            except ImportError:
                print("\n(Instala scipy para análisis estadístico avanzado: pip install scipy)")
            except Exception as e:
                print(f"\nError en análisis estadístico: {e}")

    def graficar_precios(self, output_dir='graficos'):
        """
        Genera gráficos de análisis

        Args:
            output_dir: Directorio donde guardar los gráficos
        """
        print("\n" + "="*80)
        print("GENERANDO GRÁFICOS")
        print("="*80)

        # Crear directorio si no existe
        os.makedirs(output_dir, exist_ok=True)

        for col_precio in self.columnas_precio:
            col_num = col_precio + '_num'
            if col_num not in self.df.columns:
                continue

            aerolinea = col_precio.replace('_precio_base', '')
            df_filtrado = self.df[self.df[col_num].notna()].copy()

            if len(df_filtrado) == 0:
                continue

            # Gráfico 1: Boxplot por perfil
            plt.figure(figsize=(12, 6))
            df_filtrado.boxplot(column=col_num, by='Perfil_ID', rot=45)
            plt.title(f'Distribución de Precios por Perfil - {aerolinea}')
            plt.suptitle('')  # Remover título auto-generado
            plt.ylabel('Precio (€)')
            plt.xlabel('Perfil de Usuario')
            plt.tight_layout()
            filename = os.path.join(output_dir, f'{aerolinea}_boxplot_perfiles.png')
            plt.savefig(filename, dpi=300, bbox_inches='tight')
            plt.close()
            print(f"✓ Guardado: {filename}")

            # Gráfico 2: Evolución temporal
            plt.figure(figsize=(14, 6))
            for perfil in df_filtrado['Perfil_ID'].unique():
                df_perfil = df_filtrado[df_filtrado['Perfil_ID'] == perfil]
                plt.plot(df_perfil['Fecha_Hora'], df_perfil[col_num],
                        marker='o', label=perfil, alpha=0.7)

            plt.title(f'Evolución Temporal de Precios - {aerolinea}')
            plt.xlabel('Fecha y Hora')
            plt.ylabel('Precio (€)')
            plt.legend(bbox_to_anchor=(1.05, 1), loc='upper left')
            plt.xticks(rotation=45)
            plt.grid(True, alpha=0.3)
            plt.tight_layout()
            filename = os.path.join(output_dir, f'{aerolinea}_evolucion_temporal.png')
            plt.savefig(filename, dpi=300, bbox_inches='tight')
            plt.close()
            print(f"✓ Guardado: {filename}")

            # Gráfico 3: Histograma de diferencias
            if df_filtrado['Fecha_Hora'].nunique() > 1:
                diferencias = []
                for fecha_hora, grupo in df_filtrado.groupby('Fecha_Hora'):
                    precios = grupo[col_num]
                    if len(precios) > 1:
                        diferencias.append(precios.max() - precios.min())

                if diferencias:
                    plt.figure(figsize=(10, 6))
                    plt.hist(diferencias, bins=20, edgecolor='black', alpha=0.7)
                    plt.title(f'Distribución de Diferencias de Precio - {aerolinea}')
                    plt.xlabel('Diferencia de Precio (€)')
                    plt.ylabel('Frecuencia')
                    plt.axvline(np.mean(diferencias), color='red', linestyle='--',
                               label=f'Media: {np.mean(diferencias):.2f}€')
                    plt.legend()
                    plt.grid(True, alpha=0.3)
                    plt.tight_layout()
                    filename = os.path.join(output_dir, f'{aerolinea}_diferencias.png')
                    plt.savefig(filename, dpi=300, bbox_inches='tight')
                    plt.close()
                    print(f"✓ Guardado: {filename}")

        print(f"\n✓ Gráficos guardados en el directorio: {output_dir}/")

    def exportar_reporte(self, filename='reporte_analisis.txt'):
        """Exporta un reporte de texto con el análisis"""
        print(f"\nGenerando reporte en {filename}...")

        with open(filename, 'w', encoding='utf-8') as f:
            f.write("="*80 + "\n")
            f.write("REPORTE DE ANÁLISIS - PERSONALIZACIÓN DE PRECIOS EN AEROLÍNEAS\n")
            f.write("="*80 + "\n\n")

            f.write(f"Fecha de generación: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}\n")
            f.write(f"Archivo analizado: {self.archivo}\n\n")

            # Resumen
            f.write("RESUMEN GENERAL\n")
            f.write("-" * 80 + "\n")
            f.write(f"Total de registros: {len(self.df)}\n")
            f.write(f"Período: {self.df['Fecha'].min()} a {self.df['Fecha'].max()}\n")
            f.write(f"Días analizados: {self.df['Fecha'].nunique()}\n")
            f.write(f"Perfiles utilizados: {self.df['Perfil_ID'].nunique()}\n\n")

            # Estadísticas por aerolínea
            for col_precio in self.columnas_precio:
                col_num = col_precio + '_num'
                if col_num not in self.df.columns:
                    continue

                aerolinea = col_precio.replace('_precio_base', '')
                f.write(f"\n{aerolinea.upper()}\n")
                f.write("-" * 80 + "\n")

                stats = self.df.groupby('Perfil_ID')[col_num].agg([
                    ('count', 'count'),
                    ('media', 'mean'),
                    ('min', 'min'),
                    ('max', 'max')
                ])

                f.write(stats.to_string())
                f.write("\n\n")

        print(f"✓ Reporte guardado: {filename}")


def main():
    """Función principal"""
    import argparse

    parser = argparse.ArgumentParser(description='Analiza datos de scraping de aerolíneas')
    parser.add_argument('--archivo', default='registro_precios_vuelos.xlsx',
                       help='Archivo Excel con los datos')
    parser.add_argument('--umbral', type=float, default=5.0,
                       help='Umbral de diferencia de precio (€) para considerar significativa')
    parser.add_argument('--graficos', action='store_true',
                       help='Generar gráficos')
    parser.add_argument('--reporte', action='store_true',
                       help='Exportar reporte de texto')

    args = parser.parse_args()

    try:
        # Crear analizador
        analizador = AnalizadorPrecios(args.archivo)

        # Ejecutar análisis
        analizador.resumen_general()
        analizador.analizar_personalizacion(umbral_diferencia=args.umbral)
        analizador.estadisticas_por_perfil()

        # Gráficos si se solicitan
        if args.graficos:
            analizador.graficar_precios()

        # Reporte si se solicita
        if args.reporte:
            analizador.exportar_reporte()

        print("\n" + "="*80)
        print("✅ ANÁLISIS COMPLETADO")
        print("="*80 + "\n")

    except FileNotFoundError as e:
        print(f"\n❌ Error: {e}")
        print("Asegúrate de que el archivo Excel existe y tiene datos.")
        sys.exit(1)
    except Exception as e:
        print(f"\n❌ Error inesperado: {e}")
        import traceback
        traceback.print_exc()
        sys.exit(1)


if __name__ == "__main__":
    main()
