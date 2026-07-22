/* ===========================================
   PYQQuizMaster API Module
   Version : 1.0
=========================================== */

const API = {

    jobs: "data/jobs.json",

    results: "data/results.json",

    admitCards: "data/admit-cards.json",

    notes: "data/notes.json",

    currentAffairs: "data/current-affairs.json",

    quizzes: "data/quizzes.json",

    news: "data/news.json"

};

async function getData(file){

    try{

        const response = await fetch(file);

        if(!response.ok){

            throw new Error(`Unable to load ${file}`);

        }

        return await response.json();

    }

    catch(error){

        console.error(error);

        return [];

    }

}

async function getJobs(){

    return await getData(API.jobs);

}

async function getResults(){

    return await getData(API.results);

}

async function getAdmitCards(){

    return await getData(API.admitCards);

}

async function getNotes(){

    return await getData(API.notes);

}

async function getCurrentAffairs(){

    return await getData(API.currentAffairs);

}

async function getQuizzes(){

    return await getData(API.quizzes);

}

async function getNews(){

    return await getData(API.news);

}
