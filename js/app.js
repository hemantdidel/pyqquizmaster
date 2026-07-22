/* =========================================================
   PYQ Quiz Master
   Main Application
========================================================= */

document.addEventListener("componentsLoaded", init);

function init() {

    console.log("PYQ Quiz Master Initialized");

    initializeTheme();

    initializeSearch();

    initializeMobileMenu();

}

/* ==========================
   Theme
========================== */

function initializeTheme() {

    if (typeof initTheme === "function") {
        initTheme();
    }

}

/* ==========================
   Search
========================== */

function initializeSearch() {

    if (typeof initSearch === "function") {
        initSearch();
    }

}

/* ==========================
   Mobile Menu
========================== */

function initializeMobileMenu() {

    const button = document.getElementById("mobileMenuBtn");
    const nav = document.querySelector(".desktop-nav");

    if (!button || !nav) return;

    button.addEventListener("click", () => {

        nav.classList.toggle("show");

    });

}
