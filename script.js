document.addEventListener("DOMContentLoaded", () => {
  // Mensaje dinámico de bienvenida
  const mensaje = document.getElementById("mensaje-bienvenida");
  const hora = new Date().getHours();
  let saludo = "Bienvenida a tu proyecto TI";

  if (hora < 12) saludo = "Buenos días";
  else if (hora < 18) saludo = "Buenas tardes";
  else saludo = "Buenas noches";

  mensaje.innerHTML = `
    <p><strong>${saludo}</strong>. Esta página muestra productos y servicios de TI actuales, 
    integrando valores institucionales y estrategias digitales.</p>
  `;

  // Frase inspiradora aleatoria
  const frases = [
    "La tecnología no reemplaza al ser humano, lo potencia.",
    "Innovar es transformar ideas en soluciones.",
    "La ética es el mejor software de cualquier sistema.",
    "Cada línea de código puede cambiar el mundo.",
    "La mejora continua no es una opción, es una cultura."
  ];
  const fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];
  const fraseElemento = document.getElementById("frase-inspiradora");
  if (fraseElemento) {
    fraseElemento.innerHTML = `<p>💡 ${fraseAleatoria}</p>`;
  }

  // Contador de visitas simulado
  const visitasPrevias = localStorage.getItem("visitas");
  const visitas = visitasPrevias ? parseInt(visitasPrevias) : 0;
  const nuevasVisitas = visitas + 1;
  localStorage.setItem("visitas", nuevasVisitas);

  const contadorElemento = document.getElementById("visitas");
  if (contadorElemento) {
    contadorElemento.textContent = nuevasVisitas;
  }
});

// Mostrar/ocultar información adicional en sección "Nosotros"
function toggleInfo() {
  const info = document.getElementById("info-extra");
  if (info) {
    info.style.display = info.style.display === "none" ? "block" : "none";
  }
}

// Validación de formulario de contacto
document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.getElementById("formulario-contacto");
  if (formulario) {
    formulario.addEventListener("submit", function (e) {
      e.preventDefault();
      const nombre = document.getElementById("nombre").value.trim();
      const correo = document.getElementById("correo").value.trim();
      const mensaje = document.getElementById("mensaje-formulario");

      const correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);

      if (nombre && correo && correoValido) {
        mensaje.innerHTML = `
          <p>Gracias, <strong>${nombre}</strong>. Hemos recibido tu mensaje y te contactaremos pronto.</p>
        `;
        this.reset();
      } else {
        mensaje.innerHTML = `<p style="color:red;">Por favor completa todos los campos correctamente.</p>`;
      }
    });
  }
});