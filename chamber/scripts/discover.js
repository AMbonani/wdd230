// scripts/discover.js

document.addEventListener('DOMContentLoaded', () => {
    // Handle last visit message
    const visitMessageElement = document.getElementById('visitMessage');
    const lastVisit = localStorage.getItem('lastVisit');
    const now = Date.now();
    const oneDay = 24 * 60 * 60 * 1000;
    
    if (lastVisit) {
        const lastVisitDate = new Date(parseInt(lastVisit));
        const diffTime = now - lastVisitDate;
        const diffDays = Math.floor(diffTime / oneDay);

        if (diffDays < 1) {
            visitMessageElement.textContent = 'Back so soon! Awesome!';
        } else if (diffDays === 1) {
            visitMessageElement.textContent = 'You last visited 1 day ago.';
        } else {
            visitMessageElement.textContent = `You last visited ${diffDays} days ago.`;
        }
    } else {
        visitMessageElement.textContent = 'Welcome! Let us know if you have any questions.';
    }

    localStorage.setItem('lastVisit', now);
});
