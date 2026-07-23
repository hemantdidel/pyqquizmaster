/* =========================================================
   PYQ Quiz Master
   Component Loader
========================================================= */

const components = {

    /* Loading */
    loading: "components/loading.html",

    /* Header */
    header: "components/header.html",

    /* Hero */
    hero: "components/home-hero.html",

    /* Home Sections */
    "home-popular-quizzes": "components/home-popular-quizzes.html",

    "home-latest-jobs": "components/home-latest-jobs.html",

    "home-latest-results": "components/home-latest-results.html",

    "home-latest-admit-cards": "components/home-latest-admit-cards.html",

    "home-study-notes": "components/home-study-notes.html",

    "home-current-affairs": "components/home-current-affairs.html",

    "home-news": "components/home-news.html",

    /* Footer */
    footer: "components/footer.html",

    /* Mobile Bottom Navigation */
    mobileBottomNav: "components/mobile-bottom-nav.html"

};


/* =========================================================
   Load Single Component
========================================================= */

async function loadComponent(id, file) {

    const element = document.getElementById(id);

    if (!element) return;

    try {

        const response = await fetch(file, {
            cache: "no-cache"
        });

        if (!response.ok) {
            throw new Error(`${file} not found`);
        }

        element.innerHTML = await response.text();

    }

    catch (error) {

        console.error(
            `Component Load Error (${id})`,
            error
        );

        element.innerHTML = "";

    }

}


/* =========================================================
   Load All Components
========================================================= */

async function loadComponents() {

    const tasks = [];

    for (const [id, file] of Object.entries(components)) {

        tasks.push(
            loadComponent(id, file)
        );

    }

    await Promise.all(tasks);

    document.dispatchEvent(
        new CustomEvent("componentsLoaded")
    );

}


/* =========================================================
   Start Loading
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    loadComponents
);
