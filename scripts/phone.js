
// Manipulando a opacidade do título ao passar o mouse sobre o telefone
const phone = document.querySelector('.phone');
const title = document.querySelector('.title');

phone.addEventListener('mouseenter', () => {
	title.style.opacity = '0';
	title.style.transition = 'opacity 0.3s ease';
});

phone.addEventListener('mouseleave', () => {
	title.style.opacity = '1';
});
