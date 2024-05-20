document.addEventListener("DOMContentLoaded", function() {
    // Retrieve the last visit date from localStorage
    var lastVisit = localStorage.getItem("lastVisit");

    // Get the current date
    var currentDate = new Date();

    // Check if it's the user's first visit
    if (!lastVisit) {
        // Display welcome message
        document.querySelector(".sidebar").innerHTML = "<p>Welcome! Let us know if you have any questions.</p>";

        // Store the current date as the last visit date
        localStorage.setItem("lastVisit", currentDate);
    } else {
        // Calculate the difference between the current date and the last visit date
        var diffInTime = currentDate.getTime() - new Date(lastVisit).getTime();
        var diffInDays = Math.floor(diffInTime / (1000 * 3600 * 24));

        // Display appropriate message based on the difference in days
        if (diffInDays === 0) {
            // Less than a day has passed
            document.querySelector(".sidebar").innerHTML = "<p>Back so soon! Awesome!</p>";
        } else {
            // More than a day has passed
            var message = "You last visited ";
            message += diffInDays + (diffInDays === 1 ? " day" : " days") + " ago.";
            document.querySelector(".sidebar").innerHTML = "<p>" + message + "</p>";
        }

        // Update the last visit date to the current date
        localStorage.setItem("lastVisit", currentDate);
    }
});

