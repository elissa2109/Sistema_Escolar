document.getElementById("formLogin").addEventListener("submit", function(event) {
    // Nota: Quita event.preventDefault() cuando conectes validar_login.php con MySQL
    event.preventDefault();

    const usuario = document.getElementById("usuario").value.trim().toLowerCase();
    const password = document.getElementById("password").value.trim();

    if (password.length < 4) {
        alert("Por favor, ingresa una contraseña válida.");
        return;
    }

    // Simulación de redirección por rol (Director vs Servicios Generales)
    if (usuario === "director@cbtis166.edu.mx") {
        alert("Bienvenido, Director. Redirigiendo al Panel de Dirección...");
        window.location.href = "director.php";
    } else if (usuario === "servicios@cbtis166.edu.mx") {
        alert("Bienvenido, Personal de Mantenimiento. Redirigiendo al Panel de Servicios Generales...");
        window.location.href = "servicios_generales.php";
    } else {
        alert(
            "Credenciales de prueba:\n\n" +
            "• Director: director@cbtis166.edu.mx\n" +
            "• Servicios Generales: servicios@cbtis166.edu.mx\n" +
            "(Cualquier contraseña de 4+ caracteres)"
        );
    }
});

document.getElementById("linkOlvide").addEventListener("click", function(event) {
    event.preventDefault();
    alert("Para restablecer tu contraseña institucional, acude al departamento de Servicios Escolares o Soporte Técnico del CBTis 166.");
});