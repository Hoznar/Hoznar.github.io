const projects = [
    {
        title: "The Lands Of Cardeon",
        image: "resources/projects/cardGame.png",
        description: "projects.cardGame.description",
        status: "indev",
        scope: "large",
        technologies: ["Unity", "C#", "Aseprite"],
        github: "https://github.com/Hoznar/Roguelike-Card-Game",
    },
    {
        title: "Hubelino Editor",
        image: "resources/projects/hubelino.png",
        description: "projects.hubelino.description",
        status: "completed",
        scope: "large",
        technologies: ["Unity", "C#", "Blender"],
        github: "https://github.com/Hoznar/Hubelino-Editor",
    },
    {
        title: "Mini Instagram",
        image: "resources/projects/instagram.png",
        description: "projects.instagram.description",
        status: "completed",
        scope: "small",
        technologies: ["ASP.NET", "C#", "Bootstrap"],
        github: "https://github.com/Hoznar/Mini-Instagram",
    },
    {
        title: "Art Sharing App",
        image: "resources/projects/wip.png",
        description: "projects.artapp.description",
        status: "indev",
        scope: "medium",
        technologies: ["ASP.NET", "Blazor", "C#", "Bootstrap"],
        github: "#",
    },
    {
        title: "Portfolio Website",
        image: "resources/projects/portfolio.png",
        description: "projects.portfolio.description",
        status: "completed",
        scope: "small",
        technologies: ["HTML", "CSS", "JavaScript"],
        github: "#",
    },
    {
        title: "Small Website",
        image: "resources/projects/website.png",
        description: "projects.website.description",
        status: "completed",
        scope: "small",
        technologies: ["HTML", "CSS"],
        github: "https://github.com/Hoznar/small-website",
    },
];

const statuses = {
    indev: {
        text: "status.indev",
        icon: "resources/projects/wrench-icon.png"
    },

    completed: {
        text: "status.completed",
        icon: "resources/projects/check-icon.png"
    }
};

const scopes = {
    small: {
        text: "Small",
        color: "#2ecc71"
    },

    medium: {
        text: "Medium",
        color: "#f1c40f"
    },

    large: {
        text: "Large",
        color: "#e74c3c"
    }
};

const technologies = {
    "C#": {
        color: "#9B5DE5"
    },
    "ASP.NET": {
        color: "#9B5DE5"
    },
    "Blazor": {
        color: "#9B5DE5"
    },
    "HTML": {
        color: "#E44D26"
    },
    "CSS": {
        color: "#2196F3"
    },
    "JavaScript": {
        color: "#F7DF1E"
    },
    "Bootstrap": {
        color: "#F7DF1E"
    },
    "Unity": {
        color: "#CCCCCC"
    },
    "Blender": {
        color: "#F5792A"
    },
    "Aseprite": {
        color: "#9B4DFF"
    },
};


function renderProjects() {
    const projectsContainer = document.querySelector("#project-list");
    projectsContainer.innerHTML = projects.map(project => {

        const status = statuses[project.status];
        const scope = scopes[project.scope];

        const technologyHTML = project.technologies.map(technology => {
            const data = technologies[technology];
            return `<span class="skills-item" style="--skill-color: ${data.color}">${technology}</span>`;
        }).join("");

        return `
        <div class="card project-card">
            <div class="project-content">

                <img class="project-image" src="${project.image}" alt="">

                <div class="project-info">
                    <span class="project-title text-primary">${project.title}</span>
                    <p class="project-desc text-comment">${translate(project.description)}</p>
                    <div class="skills">
                        ${technologyHTML}
                    </div>
                </div>

                <div class="project-details">
                    <div class="project-status">
                        <img class="status-icon" src="${status.icon}" alt="">
                        <span class="status-text text-primary">${translate(status.text)}</span>
                    </div>
                    <div class="project-scope">
                        <img class="status-icon" src="resources/projects/box-icon.png" alt="">
                        <div class="scope">
                            <span class="status-text text-comment">Scope</span>
                            <span class="status-text" style="color: ${scope.color}">${scope.text}</span>
                        </div>
                    </div>
                </div>

                <a href="${project.github}" class="project-button">
                    <img class="project-icon" src="resources/projects/arrow-icon.png" alt="Take me to project.">
                </a>

            </div>
        </div>
    `}).join("");

    document.querySelector("#projects-count").textContent = `${projects.length} project${projects.length !== 1 ? "s" : ""}`;
}

renderProjects();