const themeToggle = document.getElementById("theme-toggle");
const htmlEl = document.querySelector("html");

themeToggle.addEventListener("click", e => {
    if(themeToggle.checked) {
        htmlEl.classList.add("theme-dark");
    } else {
        htmlEl.classList.remove("theme-dark");
    }
})