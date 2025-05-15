document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    const body = document.body;
    if (!menuToggle || !nav) return;
    const menuIcon = menuToggle.querySelector('i');
    const navLinks = nav.querySelectorAll('a');

    function setAriaExpanded(state) {
        menuToggle.setAttribute('aria-expanded', state);
    }

    function openMenu() {
        menuToggle.classList.add('active');
        nav.classList.add('active');
        body.classList.add('menu-open');
        menuIcon.classList.remove('fa-bars');
        menuIcon.classList.add('fa-times');
        setAriaExpanded('true');
        // Foco no primeiro link do menu
        if (navLinks.length) navLinks[0].focus();
    }

    function closeMenu() {
        menuToggle.classList.remove('active');
        nav.classList.remove('active');
        body.classList.remove('menu-open');
        menuIcon.classList.remove('fa-times');
        menuIcon.classList.add('fa-bars');
        setAriaExpanded('false');
    }

    function toggleMenu() {
        if (nav.classList.contains('active')) {
            closeMenu();
        } else {
            openMenu();
        }
    }

    menuToggle.addEventListener('click', toggleMenu);

    // Acessibilidade: abrir/fechar menu com Enter/Espaço
    menuToggle.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleMenu();
        }
    });

    // Fechar menu ao clicar em um link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                closeMenu();
            }
        });
    });

    // Fechar menu ao redimensionar a janela
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            closeMenu();
        }
    });

    // Fechar menu ao clicar fora
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 768 && 
            nav.classList.contains('active') && 
            !nav.contains(e.target) && 
            !menuToggle.contains(e.target)) {
            closeMenu();
        }
    });

    // Fechar menu com ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && nav.classList.contains('active')) {
            closeMenu();
            menuToggle.focus();
        }
    });
}); 