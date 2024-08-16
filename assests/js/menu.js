
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

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // Impede o comportamento padrão do link
            const targetId = this.getAttribute('href').substring(1); // Obtém o ID do alvo
            const targetElement = document.getElementById(targetId);
            
            // Defina a compensação com base na altura do seu menu ou header fixo
            const offset = 80; // Ajuste este valor conforme necessário

            const elementPosition = targetElement.offsetTop - offset;

            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
            });
        });
    });
}
