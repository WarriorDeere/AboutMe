const backgrounds = document.querySelectorAll('.card-bg');
const range = 40;
const calcValue = (a, b) => (a / b * range - range / 2).toFixed(1);

let timeout;
document.addEventListener('mousemove', ({ x, y }) => {
    if (timeout) {
        window.cancelAnimationFrame(timeout);
    }

    timeout = window.requestAnimationFrame(() => {
        const yValue = calcValue(y, window.innerHeight);
        const xValue = calcValue(x, window.innerWidth);

        [].forEach.call(backgrounds, background => {
            background.style.backgroundPosition = `${xValue * .025}rem ${-yValue * .025}rem`;
        });
    });
}, false);