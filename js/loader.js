/* ==========================================
   Component Loader
========================================== */

const components = {
    loading: "components/loading.html",
    header: "components/header.html",
    hero: "components/home-hero.html",
    "home-popular-quizzes": "components/home-popular-quizzes.html",
    "home-latest-jobs": "components/home-latest-jobs.html",
    "home-latest-results": "components/home-latest-results.html",
    "home-latest-admit-cards": "components/home-latest-admit-cards.html",
    "home-study-notes": "components/home-study-notes.html",
    "home-current-affairs": "components/home-current-affairs.html",
    "home-news": "components/home-news.html",
    footer: "components/footer.html"
};

async function loadComponent(id, file) {

    const element = document.getElementById(id);

    if (!element) return;

    try {

        const response = await fetch(file);

        if (!response.ok) {
            throw new Error(`${file} not found`);
        }

        element.innerHTML = await response.text();

    } catch (error) {

        console.error(error);

        element.innerHTML = "";

    }

}

async function loadComponents() {

    const tasks = [];

    for (const [id, file] of Object.entries(components)) {

        tasks.push(loadComponent(id, file));

    }

    await Promise.all(tasks);

    document.dispatchEvent(
        new CustomEvent("componentsLoaded")
    );

}

document.addEventListener(
    "DOMContentLoaded",
    loadComponents
);
