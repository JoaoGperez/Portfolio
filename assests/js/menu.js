
export function setupMenu() {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
}

// smoothScroll.js
export function smoothScroll() {
    const links = document.querySelectorAll('.nav-links a');
    const logo = document.querySelector('.logo');

    function scrollToElement(targetId) {
        const targetElement = document.getElementById(targetId);
        const offset = 80; 
        const elementPosition = targetElement.offsetTop - offset;

        window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
        });
    }

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1); 
            scrollToElement(targetId);
        });
    });

    if (logo) {
        logo.addEventListener('click', function (e) {
            e.preventDefault(); 
            scrollToElement('inicio'); 
        });
    }
}
