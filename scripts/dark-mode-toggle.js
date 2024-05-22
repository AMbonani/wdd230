// Get the dark mode toggle button and the main element
const darkModeToggle = document.getElementById('darkModeToggle');
const mainElement = document.querySelector('main');

// Add an event listener to the dark mode toggle button
darkModeToggle.addEventListener('click', () => {
    // Toggle the 'dark-mode' class on the main element
    mainElement.classList.toggle('dark-mode');
});

