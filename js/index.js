// menu button js

const menu_button = document.querySelector(".menu-button-container");
const navbar = document.querySelector(".navbar");
menu_button.addEventListener('click', () => {navbar.classList.toggle("active-menu")});

// download resume js/

const resume_button = document.querySelector("#download-resume");
resume_button.addEventListener('click', () => {alert("The resume is not avilable yet...\nIt wiil be avilable soon...");});
