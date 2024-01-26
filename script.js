function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    /* Whenever you click it, it will toggle open/closed */
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

document.addEventListener('DOMContentLoaded', function() {
    const toggleSwitch = document.getElementById('dark-mode-toggle');
    const body = document.body;

    // Check if a dark mode preference is stored
    if (localStorage.getItem('darkMode') == 'on') {
        body.classList.add('dark-mode');
        toggleSwitch.checked = true;
    }

    // Listen for a change on the toggle switch
    toggleSwitch.addEventListener('change', function () {
        if (this.checked) {
            body.classList.add('dark-mode');
            localStorage.setItem('darkMode', 'on');
        } else {
            body.classList.remove('dark-mode');
            localStorage.setItem('darkMode', 'off');
        }
    });
})