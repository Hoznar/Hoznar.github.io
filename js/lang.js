const languages = {
    en: {
        navigation: {
            home: "Home",
            about: "About me",
            projects: "Projects"
        },

        home: {
            subtitle: "Aspiring developer, with an interest in web development, design and games.",
            download: "Download CV",
            contact: "Contact me"
        },

        contact: {
            title: "Contact me",
            subtitle: "// Get in touch.",
            close: "Close"
        },

        about: {
            title: "About me",
            subtitle: "// A little bit about who I am.",
            intro1: "Hi! My name is ",
            intro2: "I'm a recent graduate specializing in software development, with an interest in building desktop, web and game applications. I enjoy both designing the frontend of an application and working on interesting systems on the backend.",
            intro3: "I'm currently looking for a job where I can put what I've learned into practice.",
            outside: "Outside of coding",
            education: "Education",
            skills: "Used during studies",
            exploring: "Currently exploring",
            exploringDesc: "Deepening my knowledge and working on personal projects with modern frontend tools.",
        },

        interests: {
            games: {
                title: "Games",
                description: "Getting lost in deep lore and making games of my own."
            },
            pixelart: {
                title: "Pixel Art",
                description: "Dabbling in pixel art and creating sprites for games and mods."
            },
            video: {
                title: "Video Editing",
                description: "Editing videos and adding my own touches to projects."
            },
            localisation: {
                title: "Localisation",
                description: "Translating games and videos into Czech."
            }
        },

        education: {
            mgr: {
                title: "Applied Informatics",
                university: "Palacký University Olomouc",
                specialization: "Software Developement",
            },
            bc: {
                title: "Informatics",
                university: "Palacký University Olomouc",
                specialization: "Coding & Software Developement",
            }
        },

        projects: {
            title: "Projects",
            subtitle: "// Things I've built.",
            
            cardGame: {
                description: "A roguelike card game focused on exploration, combat and card synergies. A personal project for learning game development and design in Unity.",
            },
            hubelino: {
                description: "A 3D editor for creating and designing Hubelino marble run tracks. Developed in Unity as my bachelor's thesis, with a focus on making track building and editing easier.",
            },
            instagram: {
                description: "A small social media app inspired by Instagram, built to learn ASP.NET Core, MVC, databases, authentication and authorization.",
            },
            artapp: {
                description: "A social media app for artists to share artwork and create commissions. An expansion of Mini Instagram, built to learn Blazor and work on a larger project.",
            },
            portfolio: {
                description: "My personal portfolio website, built to showcase my projects and skills. It also serves as a way to practice HTML and CSS while applying what I've learned in JavaScript.",
            },
            website: {
                description: "A small responsive website built with HTML and CSS as part of a web development course.",
            },
        },

        status: {
            indev: "In development",
            completed: "Completed",
        }
    },

    cs: {
        navigation: {
            home: "Domů",
            about: "O mně",
            projects: "Projekty"
        },

        home: {
            subtitle: "Začínající vývojář se zájmem o webový vývoj, design a hry.",
            download: "Stáhnout CV",
            contact: "Kontakt"
        },

        contact: {
            title: "Kontakt",
            subtitle: "// Ozvěte se mi.",
            close: "Zavřít"
        },

        about: {
            title: "O mně",
            subtitle: "// Něco málo o mně.",
            intro1: "Ahoj! Jmenuji se ",
            intro2: "Jsem čerstvý absolvent se zaměřením na vývoj softwaru a zajímám se o tvorbu desktopových, webových a herních aplikací. Baví mě jak navrhování frontendu aplikací, tak práce na zajímavých systémech na backendu.",
            intro3: "Momentálně hledám práci, kde bych mohl uplatnit to, co jsem se naučil, a získat další zkušenosti.",
            outside: "Mimo programování",
            education: "Vzdělání",
            skills: "Používané během studia",
            exploring: "Momentálně se učím",
            exploringDesc: "Prohlubuji své znalosti a pracuji na vlastních projektech s moderními frontendovými nástroji.",
        },

        interests: {
            games: {
                title: "Hry",
                description: "Rád se ztrácím v jiných světech a vytvářím vlastní hry."
            },
            pixelart: {
                title: "Pixel Art",
                description: "Občas se věnuji pixel artu a vytvářím sprity pro hry a mody."
            },
            video: {
                title: "Střih Videa",
                description: "Stříhám videa a přidávám do projektů vlastní nápady a úpravy."
            },
            localisation: {
                title: "Lokalizace",
                description: "Překládám hry a videa do češtiny."
            }
        },

        education: {
            mgr: {
                title: "Aplikovaná Informatika",
                university: "Univerzita Palackého v Olomouci",
                specialization: "Vývoj Software",
            },
            bc: {
                title: "Informatika",
                university: "Univerzita Palackého v Olomouci",
                specialization: "Programování a Vývoj Software",
            }
        },

        projects: {
            title: "Projekty",
            subtitle: "// Co jsem vytvořil.",

            cardGame: {
                description: "Roguelike karetní hra zaměřená na průzkum, souboje a kombinování karet. Osobní projekt vytvořený pro učení se vývoji a designu her v Unity.",
            },
            hubelino: {
                description: "3D editor pro vytváření a navrhování kuličkových drah Hubelino. Vyvinuto v Unity jako moje bakalářská práce se zaměřením na usnadnění tvorby a úprav drah.",
            },
            instagram: {
                description: "Malá sociální síť inspirovaná Instagramem, vytvořená pro osvojení základů ASP.NET Core, MVC, databází, autentizace a autorizace.",
            },
            artapp: {
                description: "Sociální síť pro umělce ke sdílení jejich tvorby a vytváření zakázek. Rozšíření projektu Mini Instagram, vytvořené pro učení se Blazoru a práci na větším projektu.",
            },
            portfolio: {
                description: "Moje osobní portfolio vytvořené pro prezentaci mých projektů a dovedností. Zároveň slouží k procvičení HTML a CSS a využití znalostí JavaScriptu.",
            },
            website: {
                description: "Malá responzivní webová stránka vytvořená pomocí HTML a CSS v rámci kurzu webového vývoje.",
            },
        },

        status: {
            indev: "Ve vývoji",
            completed: "Dokončeno",
        }
    }
};

let currentLanguage = localStorage.getItem("language") || "en";

function translate(key) {
    const keys = key.split(".");
    let value = languages[currentLanguage];

    for (const keyPart of keys) {
        value = value?.[keyPart];
    }

    return value ?? key;
}

function updateStaticTranslations() {
    document.querySelectorAll("[data-i18n]").forEach(element => {
        element.textContent = translate(element.dataset.i18n);
    });
}

function updateLanguageButton() {
    const flag = document.querySelector("#language-flag");
    flag.textContent = currentLanguage === "en" ? "🇨🇿" : "🇬🇧";
}

function setLanguage(language) {
    currentLanguage = language;

    localStorage.setItem("language", language);

    document.documentElement.lang = language;

    updateStaticTranslations();
    updateLanguageButton();

    renderInterests();
    renderEducation();
    renderProjects();
}

document.querySelector("#language-button").addEventListener("click", () => {
    const newLanguage = currentLanguage === "en" ? "cs" : "en";
    setLanguage(newLanguage);
});