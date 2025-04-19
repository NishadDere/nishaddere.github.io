document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('themeToggle');
    const savedTheme = localStorage.getItem('theme');

    // Initialize theme
    if (savedTheme === 'dark-mode') {
        document.body.classList.add('dark-mode');
        themeToggle.querySelector('i').className = 'fas fa-sun';
    }

    // Toggle handler
    themeToggle.addEventListener('click', () => {
        const isDark = !document.body.classList.contains('dark-mode');
        
        document.body.classList.toggle('dark-mode', isDark);
        const icon = themeToggle.querySelector('i');
        icon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
        
        localStorage.setItem('theme', isDark ? 'dark-mode' : 'light');
    });

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
