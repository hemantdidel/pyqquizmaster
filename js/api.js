/* =========================================================
   PYQ Quiz Master
   API / Data Manager
========================================================= */

const API = {

    jobs: "data/jobs.json",
    results: "data/results.json",
    admitCards: "data/admit-cards.json",
    notes: "data/notes.json",
    quizzes: "data/quizzes.json",
    currentAffairs: "data/current-affairs.json",
    news: "data/news.json",
    settings: "data/settings.json"

};

/* ==========================
   Fetch JSON
========================== */

async function fetchJSON(url){

    try{

        const response = await fetch(url,{
            cache:"no-cache"
        });

        if(!response.ok){

            throw new Error(
                `Failed to load ${url}`
            );

        }

        return await response.json();

    }

    catch(error){

        console.error(error);

        return [];

    }

}

/* ==========================
   Jobs
========================== */

async function getJobs(){

    return await fetchJSON(API.jobs);

}

/* ==========================
   Results
========================== */

async function getResults(){

    return await fetchJSON(API.results);

}

/* ==========================
   Admit Cards
========================== */

async function getAdmitCards(){

    return await fetchJSON(API.admitCards);

}

/* ==========================
   Notes
========================== */

async function getNotes(){

    return await fetchJSON(API.notes);

}

/* ==========================
   Current Affairs
========================== */

async function getCurrentAffairs(){

    return await fetchJSON(API.currentAffairs);

}

/* ==========================
   Quizzes
========================== */

async function getQuizzes(){

    return await fetchJSON(API.quizzes);

}

/* ==========================
   News
========================== */

async function getNews(){

    return await fetchJSON(API.news);

}

/* ==========================
   Settings
========================== */

async function getSettings(){

    return await fetchJSON(API.settings);

}
