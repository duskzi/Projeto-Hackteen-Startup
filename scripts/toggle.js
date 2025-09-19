// Toggle do menu hambúrguer
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

// Evento de clique no botão do menu
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  const isOpen = navLinks.classList.contains('active');
  menuToggle.setAttribute('aria-expanded', isOpen);
});