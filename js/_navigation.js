const body = document.querySelector("body");
const main = document.getElementById("main");
const footer = document.getElementById("footer");
const navMenu = document.querySelector(".navigation-menu");
const menuOpenBtn = document.getElementById("menu-open-btn");
const menuCloseBtn = document.getElementById("menu-close-btn");
const menuLinks = document.getElementsByClassName("navigation-link");

let menuLinksArray = Array.from(menuLinks);

menuOpenBtn.addEventListener("click", () => {
    toggleMenu();
    openMenuTasks();    
});


menuCloseBtn.addEventListener("click", () => {
    toggleMenu();
    closeMenuTasks();
});

function windowResize() {
    if (window.innerWidth > 768) {
        toggleMenu();

        main.removeAttribute("inert");
        footer.removeAttribute("inert");
        window.removeEventListener("resize", windowResize);
    }
}

function toggleMenu() {
    body.classList.toggle('overlay-visible');
    body.classList.toggle('u-overflow-y-hidden');
    navMenu.classList.toggle('is-open');
}

function openMenuTasks() {
    main.setAttribute("inert", "true");
    footer.setAttribute("inert", "true");
    window.addEventListener("resize", windowResize);

    menuLinksArray.forEach(e => {
        e.addEventListener("click", closeMenu);
    });
}

function closeMenuTasks() {
    main.removeAttribute("inert");
    footer.removeAttribute("inert");
    window.removeEventListener("resize", windowResize);
}

function closeMenu() {
    toggleMenu();
    closeMenuTasks()

    menuLinksArray.forEach(e => {
        e.removeEventListener("click", closeMenu);
    });
}














