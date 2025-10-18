document.addEventListener('DOMContentLoaded', function() {
    // Form submission handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        });
    }



    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add active class to navigation items on scroll
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.navbar a');

    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href').slice(1) === current) {
                item.classList.add('active');
            }
        });
    });

    // Add scroll reveal animations
    const revealElements = document.querySelectorAll('.hero-content, .about-content, .timeline-item, .skill-category, .contact-info');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal');
            }
        });
    });

    revealElements.forEach((element) => {
        observer.observe(element);
    });

    // Name card flip: support click/tap and keyboard (Enter/Space)
    const flipCard = document.querySelector('.flip-card');
    if (flipCard) {
        const inner = flipCard.querySelector('.flip-card-inner');
        const front = flipCard.querySelector('.flip-card-front');
        const back = flipCard.querySelector('.flip-card-back');

        function setAriaFlipped(isFlipped) {
            flipCard.setAttribute('aria-pressed', isFlipped ? 'true' : 'false');
            if (front) front.setAttribute('aria-hidden', isFlipped ? 'true' : 'false');
            if (back) back.setAttribute('aria-hidden', isFlipped ? 'false' : 'true');
        }

        function toggleFlip() {
            const isFlipped = flipCard.classList.toggle('flipped');
            setAriaFlipped(isFlipped);
        }

        // Click / tap
        flipCard.addEventListener('click', function (e) {
            // Prevent triggering when clicking links inside the card
            if (e.target.closest('a')) return;
            toggleFlip();
        });

        // Keyboard: Enter (13) or Space (32)
        flipCard.addEventListener('keydown', function (e) {
            if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') {
                e.preventDefault();
                toggleFlip();
            }
        });

        // Initialize aria states
        setAriaFlipped(false);
    }
});