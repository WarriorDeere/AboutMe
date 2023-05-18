import { particle } from "./particle.js";
import { slide } from "./switch-slide.js";

particle.startMain(100);

const firstSlideTrigger = document.querySelector('#slide-1-trigger');
firstSlideTrigger.addEventListener('click', () => {
    slide.goFwd('#slide-1', '#slide-2', 'slide_top-bottom');
})

const cards = document.querySelectorAll('.card');
cards.forEach((card) => {
    card.addEventListener('click', () => {
        card.classList.toggle('card-link');
    })
})