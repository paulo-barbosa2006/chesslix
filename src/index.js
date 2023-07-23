import '../dist/styles/style.css';

const hamburguer = document.querySelector('.hamburguer');
const navMenu = document.querySelector('#nav_menu_container');

hamburguer.addEventListener('click', () => {
  hamburguer.classList.toggle('active');
  navMenu.classList.toggle('active');
});