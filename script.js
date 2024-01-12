function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    /* Whenever you click it, it will toggle open/closed */
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}