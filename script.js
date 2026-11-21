document.getElementById('formReporte').addEventListener('submit', function(event) {
    event.preventDefault();

    const ubicacion = document.getElementById('ubicacion').value;
    const descripcion = document.getElementById('descripcion').value.trim();
    const urgencia = document.querySelector('input[name="urgencia"]:checked').value;

    if (descripcion.length < 10) {
        alert("Por favor, describe el problema con un poco más de detalle (mínimo 10 caracteres).");
        return;
    }

    const numeroFolio = Math.floor(1000 + Math.random() * 9000);
    const folioFormateado = "#" + numeroFolio;

    let cajaFolio = document.getElementById('comprobanteFolio');
    if (!cajaFolio) {
        cajaFolio = document.createElement('div');
        cajaFolio.id = 'comprobanteFolio';
        cajaFolio.style.marginTop = '22px';
        cajaFolio.style.padding = '18px';
        cajaFolio.style.borderRadius = '10px';
        cajaFolio.style.border = '2px solid #1e8449';
        cajaFolio.style.backgroundColor = '#eafaf1';
        cajaFolio.style.color = '#145a32';
        cajaFolio.style.textAlign = 'center';
        document.querySelector('.container').appendChild(cajaFolio);
    }

    cajaFolio.innerHTML = `
        <h2 style="margin-bottom: 8px; font-size: 1.25rem;">¡Reporte registrado! Guarda tu folio de seguimiento</h2>
        <p style="font-size: 1.6rem; font-weight: bold; margin: 10px 0; color: #1b4f72;">${folioFormateado}</p>
        <p style="margin-bottom: 14px; font-size: 0.95rem;">
            <strong>Ubicación:</strong> ${ubicacion} | <strong>Urgencia:</strong> ${urgencia}
        </p>
        <div style="display: flex; gap: 10px; justify-content: center; flex-wrap: wrap;">
            <button type="button" id="btnCopiarFolio" style="padding: 8px 16px; border-radius: 6px; border: 1px solid #1e8449; background: #52be80; color: #145a32; font-weight: bold; cursor: pointer;">
                Copiar folio
            </button>
            <a href="rastreo.html?folio=${encodeURIComponent(folioFormateado)}" style="padding: 8px 16px; border-radius: 6px; border: 1px solid #1b4f72; background: #2874a6; color: white; font-weight: bold; text-decoration: none;">
                Ir a rastrear este folio
            </a>
        </div>
    `;

    document.getElementById('btnCopiarFolio').addEventListener('click', function() {
        navigator.clipboard.writeText(folioFormateado);
        this.textContent = "¡Copiado!";
    });

    this.reset();
});