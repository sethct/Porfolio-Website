function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    /* Whenever you click it, it will toggle open/closed */
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// Dark-Light Mode

const btn = document.getElementById("modeToggle");
const btn2 = document.getElementById("modeToggle2");
// Target all objects that use the class .icon
const themeIcons = document.querySelectorAll(".icon")
const currentTheme = localStorage.getItem("theme");

if (currentTheme === "dark") {
    setDarkMode();
}

btn.addEventListener("click", function (){
    setTheme();
});

btn2.addEventListener("click", function () {
    setTheme();
});

function setTheme() {
    // one = is setting something, three === is asking a question. 
    let currentTheme = document.body.getAttribute("theme");

    if (currentTheme === "dark") {
        setLightMode();
    } else {
        setDarkMode();
    }
}

function setDarkMode() {
    document.body.setAttribute("theme", "dark");
    localStorage.setItem("theme", "dark");

    themeIcons.forEach((icon) => {
        icon.src = icon.getAttribute("src-dark");
    });
}

function setLightMode() {
    document.body.removeAttribute("theme");
    localStorage.setItem("theme", "light");

    themeIcons.forEach((icon) => {
        icon.src = icon.getAttribute("src-light");
    });
}