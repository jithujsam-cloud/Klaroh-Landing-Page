// Main Javascript for animations and interactions

document.addEventListener('DOMContentLoaded', () => {
    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all items
            faqItems.forEach(faq => {
                faq.classList.remove('active');
                faq.querySelector('.faq-answer').style.display = 'none';
            });
            
            // Open clicked if it wasn't active
            if (!isActive) {
                item.classList.add('active');
                item.querySelector('.faq-answer').style.display = 'block';
            }
        });
    });

    // Form submission
    const waitlistForm = document.getElementById('waitlist-form');
    if (waitlistForm) {
        waitlistForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = waitlistForm.querySelector('button');
            const originalText = btn.innerText;
            btn.innerText = 'SPOT SECURED!';
            btn.style.backgroundColor = 'var(--primary-light)';
            btn.style.color = 'var(--white)';
            
            setTimeout(() => {
                btn.innerText = originalText;
                btn.style.backgroundColor = 'var(--white)';
                btn.style.color = 'var(--primary)';
                waitlistForm.reset();
            }, 3000);
        });
    }

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.borderBottomColor = 'var(--border-color)';
            navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.05)';
        } else {
            navbar.style.borderBottomColor = 'transparent';
            navbar.style.boxShadow = 'none';
        }
    });

    // Intersection Observer for fade-in animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Add animation styles to sections
    const animateElements = document.querySelectorAll('section, .hero-title, .hero-desc, .hero-stats');
    animateElements.forEach(el => {
        el.style.opacity = 0;
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
});
