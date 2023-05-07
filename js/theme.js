const themeToggle = document.getElementById("theme-toggle");
const htmlEl = document.querySelector("html");

toggleThemes();

themeToggle.addEventListener("click", e => {
    toggleThemes();
})


function toggleThemes() {
    if(themeToggle.checked) {
        htmlEl.classList.add("theme-dark");
    } else {
        htmlEl.classList.remove("theme-dark");
    }
}