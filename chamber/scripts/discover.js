document.addEventListener('DOMContentLoaded', function() {
    // Retrieve the last visit date from localStorage
    var lastVisit = localStorage.getItem('lastVisit');

    // Get the current date
    var currentDate = new Date();

    // If this is the first visit, display the welcome message
    if (!lastVisit) {
        document.getElementById('visitMessage').textContent = "Welcome! Let us know if you have any questions.";
    } else {
        // Calculate the time difference between the last visit date and the current date
        var timeDiff = currentDate - new Date(lastVisit);
        var daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

        // Display the appropriate message based on the time difference
        if (daysDiff === 0) {
            document.getElementById('visitMessage').textContent = "Back so soon! Awesome!";
        } else {
            var message = "You last visited " + daysDiff + " day" + (daysDiff === 1 ? "" : "s") + " ago.";
            document.getElementById('visitMessage').textContent = message;
        }
    }

    // Update localStorage with the current visit date
    localStorage.setItem('lastVisit', currentDate.toISOString().split('T')[0]);

    // Display the last modified date in the footer
    document.getElementById('lastModified').textContent = document.lastModified;
});
