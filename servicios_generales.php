<?php
// Base inicial para conectar con sesión y base de datos MariaDB/MySQL
session_start();
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Panel de Control - Servicios Generales | CBTis 166</title>
    <link rel="stylesheet" href="servicios_generales.css">
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
            <a href="index.html" class="btn-nav-verde">INICIO</a>
            <a href="login.html" class="btn-nav-verde">CERRAR SESIÓN</a>
        </nav>
    </header>

    <!-- Contenedor principal -->
    <main class="container">
        <section class="hero">
            <h1>Panel de Control - Servicios Generales</h1>
            <p>Módulo de atención y reparación de fugas</p>
        </section>

        <!-- Caja de reportes asignados -->
        <section class="panel-box">
            <div class="panel-header">
                <h2>Listado de Reportes Asignados</h2>
                <div class="filtros">
                    <button type="button" class="btn-filtro activo" data-filtro="Todos">[Ver Todos]</button>
                    <button type="button" class="btn-filtro" data-filtro="Pendiente">[Pendientes]</button>
                    <button type="button" class="btn-filtro" data-filtro="En Proceso">[En Proceso]</button>
                </div>
            </div>

            <div class="table-responsive">
                <table class="tabla-reportes">
                    <thead>
                        <tr>
                            <th>Folio/Fecha</th>
                            <th>Ubicación/Descripción</th>
                            <th>Estatus</th>
                            <th>Acción</th>
                        </tr>
                    </thead>
                    <tbody id="cuerpoTablaReportes">
                        <!-- Filas generadas/controladas por JS o consulta PHP a MariaDB -->
                    </tbody>
                </table>
            </div>

            <!-- Paginación -->
            <div class="paginacion">
                <button type="button" class="btn-pag activo">[1]</button>
                <button type="button" class="btn-pag">[2]</button>
                <button type="button" class="btn-pag">[3]</button>
                <button type="button" class="btn-pag">&gt;</button>
            </div>
        </section>
    </main>

    <!-- Pie de página -->
    <footer class="footer">
        <p>#CBTis166aguaparaelfuturo | Coordinación de Mantenimiento</p>
        <p class="footer-sub">#CBTis166aguaparaelfuturo | <a href="rastreo.html">Consultar estado del folio</a></p>
    </footer>

    <script src="servicios_generales.js"></script>
</body>
</html>