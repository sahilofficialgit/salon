document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Navigation Scrolled Effect
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 2. Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    const closeMenu = document.querySelector('.close-menu');
    const menuLinks = document.querySelectorAll('.mobile-menu a');

    function toggleMenu() {
        mobileMenu.classList.toggle('active');
        document.body.classList.toggle('no-scroll'); // Optional: prevent body scrolling
    }

    hamburger.addEventListener('click', toggleMenu);
    closeMenu.addEventListener('click', toggleMenu);

    // Close menu when a link is clicked
    menuLinks.forEach(link => {
        link.addEventListener('click', toggleMenu);
    });

    // 3. Scroll Reveal Animation
    const revealElements = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 100;

        revealElements.forEach((reveal) => {
            const elementTop = reveal.getBoundingClientRect().top;

            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add('active');
            } else {
                // Optional: remove 'active' to re-animate on scroll up
                // reveal.classList.remove('active'); 
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    
    // Trigger once on load to show hero elements
    revealOnScroll();

    // 4. Simple Form Handling (Prevents default reload for demo)
    const form = document.querySelector('.booking-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you! Your appointment request has been received. We will contact you shortly.');
        form.reset();
    });
});