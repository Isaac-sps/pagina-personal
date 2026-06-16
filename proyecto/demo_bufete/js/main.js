// ANIMACIÓN FADE-IN AL HACER SCROLL
const elementos = document.querySelectorAll(".fade-in");

function mostrarElementos() {
  elementos.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      el.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", mostrarElementos);
window.addEventListener("load", mostrarElementos);

// MENÚ HAMBURGUESA
const hamburgerBtn = document.getElementById("hamburgerBtn");
const navMenu = document.getElementById("navMenu");

// Animación hamburguesa → X (CORRECTO: fuera de la función)
hamburgerBtn.addEventListener("click", () => {
  hamburgerBtn.classList.toggle("open");
  navMenu.classList.toggle("active");
});

// Cerrar menú al hacer clic en un enlace (CORRECTO: fuera de la función)
document.querySelectorAll(".nav a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    hamburgerBtn.classList.remove("open");
  });
});

// LOADER + ENVÍO A WHATSAPP + REDIRECCIÓN A GRACIAS
function enviarWhatsApp(event) {
  event.preventDefault();

  const loader = document.getElementById("loader-balanza");
  loader.classList.add("active");

  const nombre = document.querySelector("input[name='nombre']").value;
  const email = document.querySelector("input[name='email']").value;
  const mensaje = document.querySelector("textarea[name='mensaje']").value;

  const texto =
    `Hola, quisiera realizar una consulta legal.%0A%0A` +
    `Mi nombre es: ${nombre}%0A` +
    `Mi correo es: ${email}%0A` +
    `Mi caso es:%0A${mensaje}`;

  const url = `https://wa.me/34698875464?text=${texto}`;

  setTimeout(() => {
    
    // Enviar formulario
    event.target.submit();

    // Redirigir a página de gracias
    window.location.href = "gracias.html";
  }, 1200);
}