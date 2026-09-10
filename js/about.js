const interests = [
    {
        title: "interests.games.title",
        icon: "resources/gamepad-icon.png",
        description: "interests.games.description"
    },
    {
        title: "interests.pixelart.title",
        icon: "resources/brush-icon.png",
        description: "interests.pixelart.description"
    },
    {
        title: "interests.video.title",
        icon: "resources/video-icon.png",
        description: "interests.video.description"
    },
    {
        title: "interests.localisation.title",
        icon: "resources/book-icon.png",
        description: "interests.localisation.description"
    }
];

const education = [
    {
        degree: "Mgr.",
        title: "education.mgr.title",
        university: "education.mgr.university",
        specialization: "education.mgr.specialization",
        years: "2024–2026"
    },

    {
        degree: "Bc.",
        title: "education.bc.title",
        university: "education.bc.university",
        specialization: "education.bc.specialization",
        years: "2021–2024"
    }
];

const skills = [
    { name: "C#", color: "#9b5de5" },
    { name: ".NET", color: "#9b5de5" },
    { name: "ASP.NET", color: "#9b5de5" },
    { name: "Blazor", color: "#9b5de5" },
    { name: "HTML", color: "#f7df1e" },
    { name: "CSS", color: "#f7df1e" },
    { name: "JavaScript", color: "#f7df1e" },
    { name: "PHP", color: "#777bb4" },
    { name: "SQL", color: "#e87d0d" },
    { name: "C", color: "#e2306c" },
    { name: "Python", color: "#2380cc" },
    { name: "Unity", color: "#dddddd" },
    { name: "Unreal Engine", color: "#dddddd" },
    { name: "Blender", color: "#e6a42b" },
    { name: "Kotlin", color: "#52ff8c" },
    { name: "Git", color: "#f05032" }
];

function renderInterests() {
    const interestContainer = document.querySelector("#interests");
    interestContainer.innerHTML = interests.map(interest => `
        <div class="card interest-card">
            <div class="interest-content">
                <img class="interest-icon" src="${interest.icon}" alt="">
                <span class="interest-text text-primary">${translate(interest.title)}</span>
                <p class="interest-desc text-comment">${translate(interest.description)}</p>
            </div>
        </div>
    `).join("");
}

function renderEducation() {
    const educationContainer = document.querySelector("#education");
    educationContainer.innerHTML = education.map(education => `
        <div class="education-content">
            <span class="circle"></span>
            <div class="education-details">
                <h3 class="text-primary">${education.degree} ${translate(education.title)}</h3>
                <p class="text-secondary">${translate(education.university)}</p>
                <p class="text-comment">${translate(education.specialization)}</p>
            </div>
            <span class="education-year text-comment">${education.years}</span>
        </div>
    `).join("");
}

function renderSkills() {
    const skillsContainer = document.querySelector("#skills");
    skillsContainer.innerHTML = skills.map(skill => `
        <div class="skills-item" style="--skill-color: ${skill.color}">
            <span>${skill.name}</span>
        </div>
    `).join("");
}

renderInterests();
renderEducation();
renderSkills();