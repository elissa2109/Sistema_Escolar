<?php
// Base inicial para sesión y conexión a MariaDB/MySQL
session_start();
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Panel de Dirección - PEC CBTis 166</title>
    <link rel="stylesheet" href="director.css">
</head>
<body>

    <!-- Barra de navegación superior -->
    <header class="navbar">
        <div class="logo-container">
            <div class="escudo-placeholder">166</div>
            <div class="logo-text">
                <strong>CBTis 166</strong>
                <span>Agua para el futuro</span>
            </div>
        </div>

        <nav class="nav-actions">
            <a href="servicios_generales.php" class="btn-nav-azul">REPORTES</a>
            <a href="login.html" class="btn-nav-verde">CERRAR SESIÓN</a>
        </nav>
    </header>

    <!-- Contenedor principal -->
    <main class="container">
        <section class="hero">
            <h1>Panel de Dirección - Reporte General PEC</h1>
            <p>Estadísticas y Seguimiento de Fugas CBTis 166</p>
        </section>

        <!-- 3 Tarjetas de métricas -->
        <section class="metricas-grid">
            <div class="metrica-card card-reportadas">
                <span class="metrica-titulo">Total Fugas<br>Reportadas:</span>
                <span class="metrica-valor" id="totalReportadas">28</span>
            </div>

            <div class="metrica-card card-proceso">
                <span class="metrica-titulo">Fugas en Proceso:</span>
                <span class="metrica-valor" id="fugasProceso">6</span>
            </div>

            <div class="metrica-card card-atendidas">
                <span class="metrica-titulo">Fugas Atendidas:</span>
                <span class="metrica-valor" id="fugasAtendidas">22</span>
            </div>
        </section>

        <!-- Gráficas lado a lado -->
        <section class="graficas-grid">
            <!-- Gráfica de barras -->
            <div class="grafica-box">
                <h2>Fugas por Zona del Plantel</h2>
                <canvas id="graficaBarras" width="340" height="210"></canvas>
            </div>

            <!-- Gráfica de pastel -->
            <div class="grafica-box">
                <h2>Estatus de Atención</h2>
                <div class="leyenda-pastel">
                    <span>[Atendidas] 14%</span>
                    <span>Proceso] [Pendientes] 8%</span>
                </div>
                <div class="pastel-wrapper">
                    <canvas id="graficaPastel" width="185" height="185"></canvas>
                    <span class="etiqueta-pastel-mayor">[78%</span>
                </div>
            </div>
        </section>

        <!-- Tabla Últimas 3 Fugas Atendidas -->
        <section class="ultimas-section">
            <h2>Últimas 3 Fugas Atendidas</h2>
            <div class="table-responsive">
                <table class="tabla-atendidas">
                    <thead>
                        <tr>
                            <th>Folio</th>
                            <th>Zona</th>
                            <th>Estatus</th>
                            <th>Fecha Final</th>
                        </tr>
                    </thead>
                    <tbody id="cuerpoUltimasAtendidas">
                        <tr>
                            <td>#0045</td>
                            <td>Bebederos</td>
                            <td class="estatus-cell">[Atendida]</td>
                            <td>18/11/2026</td>
                        </tr>
                        <tr>
                            <td>#0042</td>
                            <td>Baños</td>
                            <td class="estatus-cell">[Atendida]</td>
                            <td>17/11/2026</td>
                        </tr>
                        <tr>
                            <td>#0038</td>
                            <td>Jardines</td>
                            <td class="estatus-cell">[Atendida]</td>
                            <td>16/11/2026</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    </main>

    <!-- Pie de página -->
    <footer class="footer">
        <p>#CBTis166aguaparaelfuturo | Dirección del Plantel</p>
    </footer>

    <script src="director.js"></script>
</body>
</html>