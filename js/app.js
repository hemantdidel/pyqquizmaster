/* ==================================================
   PART 14 : Load JSON Files
================================================== */

const API = {
    jobs: "data/jobs.json",
    results: "data/results.json",
    admitCards: "data/admit-cards.json",
    notes: "data/notes.json",
    currentAffairs: "data/current-affairs.json",
    quizzes: "data/quizzes.json"
};

async function loadJSON(url){

    try{

        const response = await fetch(url);

        if(!response.ok){
            throw new Error("Unable to load " + url);
        }

        return await response.json();

    }catch(error){

        console.error(error);

        return [];

    }

}

async function initWebsite(){

    const jobs = await loadJSON(API.jobs);

    const results = await loadJSON(API.results);

    const admitCards = await loadJSON(API.admitCards);

    const notes = await loadJSON(API.notes);

    const currentAffairs = await loadJSON(API.currentAffairs);

    const quizzes = await loadJSON(API.quizzes);

    console.log("Jobs :", jobs);

    console.log("Results :", results);

    console.log("Admit Cards :", admitCards);

    console.log("Notes :", notes);

    console.log("Current Affairs :", currentAffairs);

    console.log("Quizzes :", quizzes);

}

document.addEventListener("DOMContentLoaded", initWebsite);
