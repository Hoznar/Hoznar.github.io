const pages = document.querySelectorAll(".page");
const navigationLinks = document.querySelectorAll(".nav-link");

function showPage(pageId) {
    const pageExists = [...pages].some(page => page.id === pageId);
    if (!pageExists) {
        pageId = "home";
    }

    pages.forEach(page => {
        page.hidden = page.id !== pageId;
    });

    navigationLinks.forEach(link => {
        link.classList.toggle(
            "active",
            link.getAttribute("href") === `#${pageId}`
        );
    });
}

function navigate(pageId) {
    showPage(pageId);
    history.pushState(null, "", `#${pageId}`);
    window.scrollTo(0, 0);
}

navigationLinks.forEach(link => {
    link.addEventListener("click", event => {
        event.preventDefault();
        const pageId = link.getAttribute("href").substring(1);
        navigate(pageId);
    });
});

const initialPage = window.location.hash.substring(1) || "home";
showPage(initialPage);