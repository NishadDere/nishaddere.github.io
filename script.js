// Dark Mode Toggle
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    themeToggle.querySelector('i').classList.toggle('fa-moon');
    themeToggle.querySelector('i').classList.toggle('fa-sun');
});

// Certificate Modal
document.querySelectorAll('.cert-img').forEach(img => {
    img.addEventListener('click', () => {
        // Create modal logic here
    });
});