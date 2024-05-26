const primaryColor = '#333';
const secondaryColor = '#fff';
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('nav-toggle');
    const navbar = document.getElementById('navbar');

    navToggle.addEventListener('click', function() {
        navbar.classList.toggle('active');
        if (navbar.classList.contains('active')) {
            navToggle.innerHTML = '<i class="bi bi-caret-right-fill"></i>'; // Right arrow
            navToggle.style.color = primaryColor;
        } else {
            navToggle.innerHTML = '<i class="bi bi-caret-left-fill"></i>'; // Left arrow
            navToggle.style.color = secondaryColor;
        }
    });

    document.querySelector('.nav-toggle').addEventListener('click', function() {
        document.querySelector('nav').classList.toggle('nav-open');
    });   
    
    setTimeout()
});

function goToSection(section, isFromArrow) {
    document.getElementById(section).scrollIntoView({
        behavior:'smooth',
        block:'start'
    });
    if (!isFromArrow && window.innerWidth <= 768) {
        document.getElementById('nav-toggle').click();
    }
}
