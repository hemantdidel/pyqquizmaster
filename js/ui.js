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
