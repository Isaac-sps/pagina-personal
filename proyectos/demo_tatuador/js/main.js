// Activar animaciones cuando los elementos aparecen en pantalla
const elements = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
});

elements.forEach((el) => observer.observe(el));

console.log("InkSoul Studio cargado correctamente");
