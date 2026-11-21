let reportes = [
    {
        folio: "#0045",
        fecha: "18/11/2026",
        ubicacion: "Bebederos patio central.",
        descripcion: "Llave rota.",
        estatus: "Pendiente"
    },
    {
        folio: "#0042",
        fecha: "16/11/2026",
        ubicacion: "Baños Edificio A.",
        descripcion: "Fuga en lavabo.",
        estatus: "En Proceso"
    },
    {
        folio: "#0038",
        fecha: "15/11/2026",
        ubicacion: "Jardines.",
        descripcion: "Válvula dañada.",
        estatus: "Pendiente"
    }
];

let filtroActual = "Todos";

function obtenerClaseEstatus(estatus) {
    if (estatus === "Pendiente") return "estatus-pendiente";
    if (estatus === "En Proceso") return "estatus-proceso";
    return "estatus-reparado";
}

function renderizarTabla() {
    const tbody = document.getElementById("cuerpoTablaReportes");
    tbody.innerHTML = "";

    const filtrados = reportes.filter(r => {
        if (filtroActual === "Todos") return true;
        return r.estatus === filtroActual;
    });

    filtrados.forEach((rep) => {
        const tr = document.createElement("tr");

        let botonAccionHTML = "";
        if (rep.estatus === "Pendiente") {
            botonAccionHTML = `<button type="button" class="btn-accion btn-marcar-proceso" onclick="cambiarEstatus('${rep.folio}', 'En Proceso')">[Marcar en<br>Proceso]</button>`;
        } else if (rep.estatus === "En Proceso") {
            botonAccionHTML = `<button type="button" class="btn-accion btn-marcar-reparado" onclick="cambiarEstatus('${rep.folio}', 'Reparado')">Marcar<br>Reparado</button>`;
        } else {
            botonAccionHTML = `<button type="button" class="btn-accion btn-completado" disabled>[Atendida]</button>`;
        }

        tr.innerHTML = `
            <td><strong>${rep.folio} /</strong><br>${rep.fecha}</td>
            <td>${rep.ubicacion}<br>${rep.descripcion}</td>
            <td><span class="badge-estatus ${obtenerClaseEstatus(rep.estatus)}">[${rep.estatus}]</span></td>
            <td>${botonAccionHTML}</td>
        `;

        tbody.appendChild(tr);
    });
}

function cambiarEstatus(folio, nuevoEstatus) {
    reportes = reportes.map(r => {
        if (r.folio === folio) {
            return { ...r, estatus: nuevoEstatus };
        }
        return r;
    });
    alert(`El folio ${folio} cambió a estatus: ${nuevoEstatus}`);
    renderizarTabla();
}

document.querySelectorAll(".btn-filtro").forEach(btn => {
    btn.addEventListener("click", function() {
        document.querySelectorAll(".btn-filtro").forEach(b => b.classList.remove("activo"));
        this.classList.add("activo");
        filtroActual = this.getAttribute("data-filtro");
        renderizarTabla();
    });
});

// Carga inicial
renderizarTabla();