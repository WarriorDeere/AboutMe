import { particle } from "./particle.js";

particle.startMain(300);

const toggleScheme = document.querySelector('#toggle-scheme');
toggleScheme.addEventListener('click', () => {
    toggleScheme.classList.toggle('icon-light')
});

let container = document.getElementById('container');
let isScrollingDown = false;

container.addEventListener('scroll', function () {
    if (container.scrollTop > this.lastScrollTop) {
        // Benutzer scrollt nach unten
        isScrollingDown = true;
    } else {
        // Benutzer scrollt nach oben oder steht still
        isScrollingDown = false;
    }

    this.lastScrollTop = container.scrollTop;
});