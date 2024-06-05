<script>
    document.addEventListener('DOMContentLoaded', function() {
        // Set the current date and time to the hidden input field
        const timestampInput = document.getElementById('timestamp');
        const currentDate = new Date();
        timestampInput.value = currentDate.toISOString();

        // Your existing visit counter logic
        const visitCounter = document.getElementById('visitCounter');
        let visits = localStorage.getItem('visits') || 0;
        visits = parseInt(visits);
        visits++;
        localStorage.setItem('visits', visits.toString());
        visitCounter.textContent = visits;

        // Display the last modified date
        document.getElementById('lastModified').textContent = document.lastModified;
    });
</script>

