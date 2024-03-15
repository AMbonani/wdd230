// Get the current year
const currentYear = new Date().getFullYear();

// Get the last modified date/time
const lastModified = new Date(document.lastModified);

// Get the footer elements
const copyrightElement = document.querySelector('footer p:first-child');
const lastModifiedElement = document.querySelector('footer p:last-child');

// Update the copyright year
copyrightElement.innerHTML = `&copy; ${currentYear} Abigail Maimela, [State/Country]`;

// Update the last modified date/time
lastModifiedElement.textContent = `Last Modified: ${lastModified.toLocaleString()}`;