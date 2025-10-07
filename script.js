const toggleButton = document.getElementById('toggle-dark-mode');

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        toggleButton.textContent = '☀️ Modo Claro';
    } else {
        toggleButton.textContent = '🌙 Modo Oscuro';
    }
});