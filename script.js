// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links and sections
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            sections.forEach(section => section.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Show corresponding section
            const target = this.getAttribute('href');
            document.querySelector(target).classList.add('active');
            
            // Smooth scroll to section
            document.querySelector(target).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Animate skill bars when they come into view
    const skillBars = document.querySelectorAll('.bar-fill');
    
    const animateSkillBars = () => {
        skillBars.forEach(bar => {
            const barPosition = bar.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if(barPosition < screenPosition) {
                const width = bar.getAttribute('data-level');
                bar.style.width = width;
            }
        });
    };
    
    window.addEventListener('scroll', animateSkillBars);
    animateSkillBars(); // Run once on page load
    
    // Form submission
    const contactForm = document.getElementById('messageForm');
    if(contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! I will get back to you soon.');
            this.reset();
        });
    }
    
    // Set first section as active if none is active
    if(!document.querySelector('.section.active')) {
        sections[0].classList.add('active');
        navLinks[0].classList.add('active');
    }
});
