/* =========================================================
   PYQ Quiz Master
   Search System
========================================================= */

function initSearch() {

    const forms = document.querySelectorAll(
        ".header-search,.hero-search"
    );

    forms.forEach(form => {

        const input = form.querySelector("input");

        if (!input) return;

        form.addEventListener("submit", e => {

            e.preventDefault();

            performSearch(input.value);

        });

        input.addEventListener("keydown", e => {

            if (e.key === "Enter") {

                e.preventDefault();

                performSearch(input.value);

            }

        });

    });

}

/* ========================================================= */

function performSearch(keyword) {

    keyword = keyword.trim();

    if (!keyword) {

        showSearchMessage(
            "Please enter something to search."
        );

        return;

    }

    const url =
        `pages/search.html?q=${encodeURIComponent(keyword)}`;

    window.location.href = url;

}

/* ========================================================= */

function showSearchMessage(message) {

    alert(message);

}
