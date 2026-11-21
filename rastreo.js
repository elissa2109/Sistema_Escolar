// Datos de ejemplo para probar el rastreo antes de conectar a la BD
const reportesEjemplo = {
    "#0045": {
        fechaRecibido: "18/11/2026",
        fechaReparacion: "19/11/2026",
        fechaReparado: "Pendiente",
        estado: "en_proceso",
        ubicacion: "Bebederos patio central.",
        descripcion: "Llave rota tirando mucha agua."
    },
    "#0042": {
        fechaRecibido: "16/11/2026",
        fechaReparacion: "16/11/2026",
        fechaReparado: "17/11/2026",
        estado: "reparado",
        ubicacion: "Baños Edificio A.",
        descripcion: "Fuga en lavabo."
    },
    "#0038": {
        fechaRecibido: "15/11/2026",
        fechaReparacion: "15/11/2026",
        fechaReparado: "16/11/2026",
        estado: "reparado",
        ubicacion: "Jardines.",
        descripcion: "Válvula dañada."
    }
};

function actualizarVistaFolio(folioRaw) {
    let folio = folioRaw.trim().toUpperCase();
    if (folio && !folio.startsWith("#")) {
        folio = "#" + folio;
    }

    const datos = reportesEjemplo[folio];

    if (!datos) {
        alert("No se encontró el folio " + folio + ". Prueba con #0045, #0042 o #0038.");
        return;
    }

    document.getElementById("tituloFolio").textContent = "Estado Actual del Folio " + folio;
    document.getElementById("fechaRecibido").textContent = "con fecha: " + datos.fechaRecibido;
    document.getElementById("fechaReparacion").textContent = "con fecha: " + datos.fechaReparacion;
    document.getElementById("fechaReparado").textContent = "con fecha: " + datos.fechaReparado;
    document.getElementById("detalleUbicacion").textContent = datos.ubicacion;
    document.getElementById("detalleDescripcion").textContent = datos.descripcion;

    const pasoReparacion = document.getElementById("pasoReparacion");
    const pasoReparado = document.getElementById("pasoReparado");
    const linea1 = document.getElementById("linea1");
    const linea2 = document.getElementById("linea2");

    linea1.classList.add("activa");

    if (datos.estado === "reparado") {
        pasoReparacion.className = "step completado";
        pasoReparado.className = "step completado";
        linea2.classList.add("activa");
    } else {
        pasoReparacion.className = "step en-proceso";
        pasoReparado.className = "step pendiente";
        linea2.classList.remove("activa");
    }
}

document.getElementById("formRastreo").addEventListener("submit", function(event) {
    event.preventDefault();
    const folioInput = document.getElementById("folioInput").value;
    actualizarVistaFolio(folioInput);
});