document.addEventListener('DOMContentLoaded', () => {
    // Dark Mode Logic (Same as before)
    
    // Intersection Observer for animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('animate-visible');
            }
        });
    }, { threshold: 0.1 });

    // Animate elements on scroll
    document.querySelectorAll('.animate-slide-down, .animate-scale-up').forEach(el => {
        observer.observe(el);
    });
});
