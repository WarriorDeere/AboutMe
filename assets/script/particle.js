class particles {

    /**
    * @description displays particles.
    * @param {number} particleCount amount of particles to be generated *required.
    */

    startMain(particleCount) {
        const container = document.querySelector('.particle-container');

        const containerWidth = container.offsetWidth;
        const containerHeight = container.offsetHeight;


        for (let i = 0; i < particleCount; i++) {
            const particleBone = document.createElement('span');
            particleBone.classList.add('ptc');
            placeSpanRandomly(particleBone);
            container.appendChild(particleBone);
            particleBone.style.animationDelay = `${Math.random()}s`
        }

        const spans = document.getElementsByClassName("ptc");

        for (let i = 0; i < spans.length; i++) {
            const span = spans[i];
            placeSpanRandomly(span);
        }

        function placeSpanRandomly(span) {
            const spanWidth = span.offsetWidth;
            const spanHeight = span.offsetHeight;

            const maxPosX = containerWidth - spanWidth;
            const maxPosY = containerHeight - spanHeight;

            const randomPosX = Math.floor(Math.random() * maxPosX);
            const randomPosY = Math.floor(Math.random() * maxPosY);

            span.style.transform = `translate(${randomPosX}px, ${randomPosY}px)`;

            animateSpan(span);
        }

        function animateSpan(span) {
            const animationDuration = Math.floor(Math.random() * 10) + 5;
            span.style.transition = `transform ${animationDuration}s linear`;

            setTimeout(function () {
                placeSpanRandomly(span);
            }, animationDuration * 1000);
        }
    }
}

export const particle = new particles();