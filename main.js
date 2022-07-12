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