const closeBtn = document.getElementById('side-menu-toggle');
const icon = document.getElementById('side-menu-toggle-icon');

closeBtn.addEventListener('click', (event) => {
    const nav = document.getElementById('side-menu');
    nav.classList.toggle("open");
    icon.classList.toggle("fa-chevron-left");
    icon.classList.toggle("fa-chevron-right");
});