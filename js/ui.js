/* =========================================================
   PYQ Quiz Master
   UI Renderer
========================================================= */

document.addEventListener(
    "componentsLoaded",
    initializeUI
);

async function initializeUI(){

    await renderLatestJobs();

    await renderLatestResults();

}

/* =========================================================
   Latest Jobs
========================================================= */

async function renderLatestJobs(){

    const container =
        document.getElementById("latestJobsGrid");

    if(!container) return;

    const jobs = await getJobs();

    if(!jobs.length){

        container.innerHTML = `
            <p class="empty-state">
                No jobs available.
            </p>
        `;

        return;

    }

    container.innerHTML = jobs
        .slice(0,6)
        .map(createJobCard)
        .join("");

}

/* =========================================================
   Job Card
========================================================= */

function createJobCard(job){

return `

<article class="job-card">

    <span class="job-status">

        🟢 ${job.status}

    </span>

    <h3 class="job-title">

        ${job.title}

    </h3>

    <div class="job-meta">

        <span>

            🏢 ${job.department}

        </span>

        <span>

            📋 ${job.posts} Posts

        </span>

        <span>

            🎓 ${job.qualification}

        </span>

    </div>

    <div class="job-footer">

        <span class="job-date">

            📅 ${job.lastDate}

        </span>

        <a
            href="${job.link}"
            class="apply-btn">

            View Details →

        </a>

    </div>

</article>

`;

}

/* =========================================================
Latest Results
========================================================= */

async function renderLatestResults(){

    const container =
        document.getElementById("latestResultsGrid");

    if(!container) return;

    const results = await getResults();

    if(!results.length){

        container.innerHTML = `
            <p class="empty-state">
                No results available.
            </p>
        `;

        return;

    }

    container.innerHTML = results
        .slice(0,6)
        .map(createResultCard)
        .join("");

}

/* =========================================================
Result Card
========================================================= */

function createResultCard(result){

return `

<article class="result-card">

    <span class="result-status">

        🏆 ${result.status}

    </span>

    <h3 class="result-title">

        ${result.title}

    </h3>

    <div class="result-meta">

        <span>

            🏢 ${result.department}

        </span>

        <span>

            📅 ${result.resultDate}

        </span>

        <span>

            👥 ${result.candidates}

        </span>

    </div>

    <div class="result-footer">

        <span class="result-date">

            Published

        </span>

        <a
            href="${result.link}"
            class="result-btn">

            Check Result →

        </a>

    </div>

</article>

`;

}
