const contactButton = document.querySelector("#contact-button");
const contactModal = document.querySelector("#contact-modal");
const contactClose = document.querySelector("#contact-close");
const contactOverlay = document.querySelector(".contact-overlay");

function openContact() {
    contactModal.hidden = false;
}

function closeContact() {
    contactModal.hidden = true;
}

contactButton.addEventListener("click", event => {
    event.preventDefault();
    openContact();
});

document.addEventListener("keydown", event => {
    if (event.key === "Escape" && !contactModal.hidden) {
        closeContact();
    }
});

contactClose.addEventListener("click", closeContact);
contactOverlay.addEventListener("click", closeContact);