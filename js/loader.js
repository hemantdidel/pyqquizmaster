/* =========================================================
   PYQQuizMaster v4
   Component Loader
========================================================= */

async function loadComponent(targetId, filePath) {

    const target = document.getElementById(targetId);

    if (!target) {

        console.error(`Container not found: ${targetId}`);

        return;

    }

    try {

        const response = await fetch(filePath);

        if (!response.ok) {

            throw new Error(`Unable to load ${filePath}`);

        }

        const html = await response.text();

        target.innerHTML = html;

    }

    catch (error) {

        console.error(error);

        target.innerHTML = `
            <div class="component-error">
                Failed to load component.
            </div>
        `;

    }

}

async function loadHomeComponents() {

    await loadComponent(
        "header",
        "components/header.html"
    );

    await loadComponent(
        "hero",
        "components/home-hero.html"
    );

    await loadComponent(
        "home-latest-jobs",
        "components/home-latest-jobs.html"
    );

    await loadComponent(
        "home-latest-results",
        "components/home-latest-results.html"
    );

    await loadComponent(
        "home-latest-admit-cards",
        "components/home-latest-admit-cards.html"
    );

    await loadComponent(
        "home-current-affairs",
        "components/home-current-affairs.html"
    );

    await loadComponent(
        "home-study-notes",
        "components/home-study-notes.html"
    );

    await loadComponent(
        "home-popular-quizzes",
        "components/home-popular-quizzes.html"
    );

    await loadComponent(
        "home-news",
        "components/home-news.html"
    );

    await loadComponent(
        "footer",
        "components/footer.html"
    );

}
