/* =========================================================
   PYQ Quiz Master
   Main Application
========================================================= */

document.addEventListener("componentsLoaded", init);

function init() {

    console.log("PYQ Quiz Master Initialized");

    hideLoader();

    initializeTheme();

    initializeSearch();

    initializeMobileMenu();

    initializeSideMenu();

    initializeActiveMenu();

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

function hideLoader() {

    const loader = document.getElementById("pageLoader");

    if (!loader) return;

    setTimeout(() => {

        loader.classList.add("hide");

        setTimeout(() => {
            loader.remove();
        }, 500);

    }, 3000);

}

/* =========================================================
   SIDE MENU
========================================================= */

function initializeSideMenu() {

    const menuBtn = document.getElementById("menuToggle");
    const sideMenu = document.getElementById("sideMenu");
    const overlay = document.getElementById("menuOverlay");
    const closeBtn = document.getElementById("closeMenu");

    if (!menuBtn || !sideMenu || !overlay || !closeBtn) return;

    function openMenu() {

        sideMenu.classList.add("active");
        overlay.classList.add("active");

        menuBtn.classList.add("active");

        document.body.style.overflow = "hidden";

    }

    function closeMenu() {

        sideMenu.classList.remove("active");
        overlay.classList.remove("active");

        menuBtn.classList.remove("active");

        document.body.style.overflow = "";

    }

    menuBtn.addEventListener("click", openMenu);

    closeBtn.addEventListener("click", closeMenu);

    overlay.addEventListener("click", closeMenu);

    document.addEventListener("keydown", (e) => {

        if (e.key === "Escape") {

            closeMenu();

        }

    });

    /* Auto Close After Click */

    document.querySelectorAll(".side-nav a").forEach(link => {

        link.addEventListener("click", closeMenu);

    });

}

/* =========================================================
ACTIVE MENU
========================================================= */

function initializeActiveMenu() {

    const currentPage =
        window.location.pathname.split("/").pop() || "index.html";

    document.querySelectorAll(".side-nav a").forEach(link => {

        const href = link.getAttribute("href");

        if (!href) return;

        if (
            href === currentPage ||
            href.endsWith(currentPage)
        ) {

            link.classList.add("active");

        }

    });

}
