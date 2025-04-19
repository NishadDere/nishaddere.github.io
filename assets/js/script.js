document.getElementById('themeToggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    const icon = this.querySelector('i');
    
    // Toggle icon and save preference
    if (document.body.classList.contains('dark-mode')) {
        icon.classList.replace('fa-moon', 'fa-sun');
        document.documentElement.style.setProperty('--text-color', '#e0e0e0');
    } else {
        icon.classList.replace('fa-sun', 'fa-moon');
        document.documentElement.style.setProperty('--text-color', '#2d3436');
    }
    
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
});

// Initialize
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
    document.getElementById('themeToggle').querySelector('i').className = 'fas fa-sun';
    document.documentElement.style.setProperty('--text-color', '#e0e0e0');
}
