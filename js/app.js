document.addEventListener("DOMContentLoaded", init);

async function init(){

    document.getElementById("site-header").innerHTML =

        UI.header();

    document.getElementById("hero-section").innerHTML =

        UI.hero();

}
