/* =========================================================
   PYQ Quiz Master
   Search System
========================================================= */

/* =========================================================
   Search Data
========================================================= */

let searchData = [];

/* =========================================================
   Load Search Data
========================================================= */

async function loadSearchData(){

   await loadSearchData();

    searchData = [];

    const jobs = await getJobs();
    const results = await getResults();
    const notes = await getNotes();
    const quizzes = await getQuizzes();
    const news = await getNews();
    const currentAffairs = await getCurrentAffairs();

    jobs.forEach(item=>{

        searchData.push({
            title:item.title,
            url:item.link || "pages/jobs.html"
        });

    });

    results.forEach(item=>{

        searchData.push({
            title:item.title,
            url:item.link || "pages/results.html"
        });

    });

    notes.forEach(item=>{

        searchData.push({
            title:item.title,
            url:item.link || "pages/notes.html"
        });

    });

    quizzes.forEach(item=>{

        searchData.push({
            title:item.title,
            url:item.link || "pages/quizzes.html"
        });

    });

    news.forEach(item=>{

        searchData.push({
            title:item.title,
            url:item.link || "pages/news.html"
        });

    });

    currentAffairs.forEach(item=>{

        searchData.push({
            title:item.title,
            url:item.link || "pages/current-affairs.html"
        });

    });

}

function initSearch() {

    const forms = document.querySelectorAll(
        ".header-search,.hero-search"
    );

    forms.forEach(form => {

        const input = form.querySelector("input");

if(!input) return;

createSuggestionBox(input);

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

/* =========================================================
   Search Suggestions
========================================================= */

const searchSuggestions = [

    "SSC GD",

    "SSC CGL",

    "SSC CHSL",

    "Railway Group D",

    "RRB NTPC",

    "RPSC 2nd Grade",

    "REET",

    "Rajasthan CET",

    "Patwari",

    "Police Constable",

    "LDC",

    "Current Affairs",

    "Study Notes",

    "Previous Year Questions"

];

function createSuggestionBox(input){

    const box = document.createElement("div");

    box.className = "search-suggestions";

    input.parentNode.appendChild(box);

    input.addEventListener("input",()=>{

        const value=input.value.trim().toLowerCase();

        box.innerHTML="";

        if(!value){

            box.style.display="none";

            return;

        }

        const results = searchData.filter(item=>

    item.title
        .toLowerCase()
        .includes(value)

);

        if(!results.length){

            box.style.display="none";

            return;

        }

        results.forEach(item=>{

            const div=document.createElement("div");

            div.className="suggestion-item";

            div.textContent = item.title;

            div.onclick=()=>{

                input.value=item;

                box.style.display="none";

                window.location.href = item.url;

            };

            box.appendChild(div);

        });

        box.style.display="block";

    });

    document.addEventListener("click",e=>{

        if(!box.contains(e.target) && e.target!==input){

            box.style.display="none";

        }

    });

}

