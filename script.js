// Botón iniciar sesión
document.getElementById('btn-login').addEventListener('click', () => {
  alert('Función de inicio de sesión próximamente disponible.');
});

// Formulario de contacto
document.getElementById('contact-form').addEventListener('submit', e => {
  e.preventDefault();
  alert('¡Gracias por tu mensaje! Pronto te responderemos.');
});

// Menú responsive
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
