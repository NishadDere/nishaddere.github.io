// Enhanced Dark Mode Toggle
const themeToggle = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('theme');

if (savedTheme) {
    document.body.classList.add(savedTheme);
    themeToggle.querySelector('i').className = savedTheme === 'dark-mode' ? 'fas fa-sun' : 'fas fa-moon';
}

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const icon = themeToggle.querySelector('i');
    const theme = document.body.classList.contains('dark-mode') ? 'dark-mode' : 'light';
    
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');
    localStorage.setItem('theme', theme);
});

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
