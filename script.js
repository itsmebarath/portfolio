document.addEventListener('DOMContentLoaded', () => {

    // --- Scroll Reveal Animation (Moved to top for safety) ---
    function reveal() {
        const reveals = document.querySelectorAll('.reveal');
        for (let i = 0; i < reveals.length; i++) {
            const windowHeight = window.innerHeight;
            const elementTop = reveals[i].getBoundingClientRect().top;
            const elementVisible = 50; 
            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add('active');
            }
        }
    }
    window.addEventListener('scroll', reveal);
    reveal();

    // --- Navbar Scroll Effect ---
    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) {
                navbar.classList.add('shadow');
                navbar.classList.remove('py-3');
                navbar.classList.add('py-2');
            } else {
                navbar.classList.remove('shadow');
                navbar.classList.remove('py-2');
                navbar.classList.add('py-3');
            }
        });
    }

    // --- Close Bootstrap mobile menu on link click ---
    try {
        if (typeof bootstrap !== 'undefined') {
            const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
            const menuToggle = document.getElementById('navbarNav');
            if (menuToggle) {
                const bsCollapse = new bootstrap.Collapse(menuToggle, {toggle: false});
                navLinks.forEach(link => {
                    link.addEventListener('click', () => {
                        if (menuToggle.classList.contains('show')) {
                            bsCollapse.hide();
                        }
                    });
                });
            }
        }
    } catch (error) {
        console.warn('Bootstrap JS not fully initialized. Mobile nav closing disabled.', error);
    }

});
