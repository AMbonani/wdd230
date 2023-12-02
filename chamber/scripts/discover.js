document.addEventListener("DOMContentLoaded", function () {
    const visitDate = localStorage.getItem("visitDate");
    const currentDate = new Date().toLocaleDateString();
    const sidebarContent = document.getElementById('sidebarContent');

    if (!visitDate) {
        sidebarContent.innerHTML = '<h2>Sidebar Content</h2><p>Welcome! Let us know if you have any questions.</p>';
    } else {
        const daysBetween = Math.floor((new Date(currentDate) - new Date(visitDate)) / (1000 * 60 * 60 * 24));

        if (daysBetween === 1) {
            sidebarContent.innerHTML = '<h2>Sidebar Content</h2><p>Back so soon! Awesome!</p>';
        } else {
            sidebarContent.innerHTML = `<h2>Sidebar Content</h2><p>You last visited ${daysBetween} day${daysBetween === 1 ? '' : 's'} ago.</p>`;
        }
    }

    localStorage.setItem("visitDate", currentDate);
});


