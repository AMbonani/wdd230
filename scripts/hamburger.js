// Get the primary navigation and the hamburger button
const primaryNav = document.getElementById('primaryNav');
const hamburgerButton = document.getElementById('hamburgerButton');

// Add an event listener to the hamburger button
hamburgerButton.addEventListener('click', () => {
    // Toggle the 'open' class on the primary navigation
    primaryNav.classList.toggle('open');

    // Change the hamburger button icon based on whether the navigation is open or closed
    hamburgerButton.innerHTML = primaryNav.classList.contains('open') ? '&#10005;' : '&#9776;';
});

