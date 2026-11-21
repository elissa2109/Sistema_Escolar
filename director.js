function dibujarGraficaBarras() {
    const canvas = document.getElementById("graficaBarras");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const zonas = ["[Baños]", "[Bebederos]", "[Jardines]", "[Oficinas]"];
    const valores = [17, 5, 12, 10];
    const colores = ["#5dade2", "#5dade2", "#82e0aa", "#48c9b0"];

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const origenX = 45;
    const origenY = 175;
    const alturaMax = 150;
    const valorMax = 20;

    // Ejes Y y X
    ctx.strokeStyle = "#2c3e50";
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(origenX, 20);
    ctx.lineTo(origenX, origenY);
    ctx.lineTo(canvas.width - 15, origenY);
    ctx.stroke();

    // Etiquetas del eje Y (0, 5, 10, 15, 20)
    ctx.fillStyle = "#2c3e50";
    ctx.font = "12px Segoe UI, sans-serif";
    ctx.textAlign = "right";
    ctx.textBaseline = "middle";

    for (let v = 0; v <= valorMax; v += 5) {
        const y = origenY - (v / valorMax) * alturaMax;
        ctx.fillText(v.toString(), origenX - 6, y);

        ctx.beginPath();
        ctx.moveTo(origenX - 4, y);
        ctx.lineTo(origenX, y);
        ctx.stroke();
    }

    // Barras y etiquetas del eje X
    const anchoBarra = 36;
    const espacio = 70;

    ctx.textAlign = "center";
    ctx.textBaseline = "top";
    ctx.font = "11px Segoe UI, sans-serif";

    valores.forEach((val, i) => {
        const alto = (val / valorMax) * alturaMax;
        const x = origenX + 18 + i * espacio;
        const y = origenY - alto;

        ctx.fillStyle = colores[i];
        ctx.fillRect(x, y, anchoBarra, alto);

        ctx.strokeStyle = "#2c3e50";
        ctx.lineWidth = 1.2;
        ctx.strokeRect(x, y, anchoBarra, alto);

        ctx.fillStyle = "#2c3e50";
        ctx.fillText(zonas[i], x + anchoBarra / 2, origenY + 6);
    });
}

function dibujarGraficaPastel() {
    const canvas = document.getElementById("graficaPastel");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const cx = canvas.width / 2;
    const cy = canvas.height / 2;
    const radio = 78;

    // Segmentos basados en los porcentajes del boceto (78% atendidas, 14% proceso, 8% pendientes)
    const segmentos = [
        { porcentaje: 0.78, color: "#7dcea0" }, // Verde (Atendidas)
        { porcentaje: 0.14, color: "#f7dc6f" }, // Amarillo (En proceso)
        { porcentaje: 0.08, color: "#f1948a" }  // Rojo/Salmón (Pendientes)
    ];

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    let anguloInicio = -Math.PI / 2.3;

    segmentos.forEach(seg => {
        const anguloFin = anguloInicio + seg.porcentaje * Math.PI * 2;
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.arc(cx, cy, radio, anguloInicio, anguloFin);
        ctx.closePath();
        ctx.fillStyle = seg.color;
        ctx.fill();

        ctx.strokeStyle = "#2c3e50";
        ctx.lineWidth = 1.3;
        ctx.stroke();

        anguloInicio = anguloFin;
    });

    // Etiqueta interna 14%
    ctx.fillStyle = "#2c3e50";
    ctx.font = "bold 12px Segoe UI, sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("14%", cx - 22, cy - 28);
}

dibujarGraficaBarras();
dibujarGraficaPastel();