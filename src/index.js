import './style.css';
import renderHome from './js/home.js';
import renderAbout from './js/about.js';
import renderMenu from './js/menu.js';

renderHome();
let header = document.querySelector('.header');
header.addEventListener("click", (e) => {
    if (e.target.classList.contains('home')) {
        renderHome();
    }
    else if (e.target.classList.contains('menu')) {
        renderMenu();
    }
    else if (e.target.classList.contains('about')) {
        renderAbout();
    }
})