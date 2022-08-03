const navToggle = document.getElementById('navToggler');
const nav = document.getElementById('navbar');

function mobile() {
    if (nav.classList.contains('active')) {
        nav.classList.remove('active');
    } else {
        nav.classList.add('active');
    }
}
navToggle.addEventListener('click', mobile);

const dropdown = document.querySelectorAll('.dropdown-content')[0];
const dropdownBtn = document.querySelectorAll('#projects-dropdown-btn')[0];

function dropdownBtnProject() {
    if (dropdown.classList.contains('dropdown-active')) {
        dropdown.classList.remove('dropdown-active')
    } else {
        dropdown.classList.add('dropdown-active')
    }
}
dropdownBtn.addEventListener('click', dropdownBtnProject);