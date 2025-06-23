const toggleButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('nav-links');

toggleButton.addEventListener('click', () => {
    toggleButton.classList.toggle('active');
    navLinks.classList.toggle('show');
}
);