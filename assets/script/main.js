import { particle } from "./particle.js";
import { slide } from "./switch-slide.js";

particle.startMain(100);

const landingPage = document.querySelector('#slide-1');
const showroomTrigger = document.querySelector('#trigger-showroom');
showroomTrigger.addEventListener('click', () => {

    showroomTrigger.classList.add('hide-opacity');
    landingPage.classList.add('slide-out');
    const contentContainer = document.querySelector('body');
    const contentBone = document.createElement('article');

    contentBone.classList.add('showroom');

    const repoCardContainer = document.createElement('div');
    repoCardContainer.classList.add('repo-card-container');

    fetch('https://api.github.com/users/warriordeere/repos')
        .then(async (r) => {
            const repoArray = await r.json();
            for (let i = 0; i < repoArray.length; i++) {
                const comtentItemBone = document.createElement('div');
                comtentItemBone.classList.add('repo-card');
                comtentItemBone.innerHTML = `
                    <div class="repo-card-head">
                        <img class="repo-icon" src="/assets/img/github-mark-white.svg" />
                        <h2 class="repo-title">${repoArray[i].name}</h2>
                        <p class="repo-description">${repoArray[i].description}</p>
                    </div>
                    <div class="repo-card-ui">
                    <a role="link" href="${repoArray[i].html_url}" target="_blank" class="repo-card-link">
                        GitHub
                        <span class="material-symbols-outlined">
                            open_in_new
                        </span>
                    </a>
                    </div>`;

                repoCardContainer.appendChild(comtentItemBone);
                contentBone.appendChild(repoCardContainer);
            }

            contentContainer.appendChild(contentBone);
        })
        .catch((err) => {
            contentBone.innerHTML = `
            <code>Error while fetching repositories</code>
            <details>
                <summary>details</summary>
                    ${err}
            </details>`;
            contentContainer.appendChild(contentBone);
            throw new Error(err);
        })
});

const cards = document.querySelectorAll('.card');
cards.forEach((card) => {
    card.addEventListener('click', () => {
        card.classList.toggle('card-link');
    })
})