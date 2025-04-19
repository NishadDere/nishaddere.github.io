document.addEventListener('DOMContentLoaded', () => {
    // =====================
    // Dark Mode Functionality
    // =====================
    const themeToggle = document.getElementById('themeToggle');
    const savedTheme = localStorage.getItem('theme');

    // Initialize theme from localStorage
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeToggle.querySelector('i').className = 'fas fa-sun';
    }

    // Toggle dark mode
    themeToggle.addEventListener('click', () => {
        const isDark = !document.body.classList.contains('dark-mode');
        
        document.body.classList.toggle('dark-mode', isDark);
        const icon = themeToggle.querySelector('i');
        icon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
        
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });

    // =====================
    // Scroll Animations
    // =====================
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

    // =====================
    // Additional initializations
    // =====================
    // Add other initialization code here if needed
});
