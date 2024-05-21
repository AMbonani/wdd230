document.addEventListener("DOMContentLoaded", function () {
    // Set the current year
    const currentYear = new Date().getFullYear();
    document.getElementById("currentYear").textContent = currentYear;

    // Set the last modified date and time
    const lastModified = new Date(document.lastModified);
    document.getElementById("lastModified").textContent = "Last Modified: " + lastModified.toLocaleString();

    // Password and confirm password fields
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirmPassword");

    // Check if passwords match
    function checkPasswordMatch() {
        if (passwordInput.value !== confirmPasswordInput.value) {
            confirmPasswordInput.setCustomValidity("Passwords do not match");
        } else {
            confirmPasswordInput.setCustomValidity("");
        }
    }

    // Event listener for password confirmation
    confirmPasswordInput.addEventListener("input", checkPasswordMatch);

    // Set required attributes
    const formFields = [passwordInput, confirmPasswordInput, document.getElementById("email")];
    formFields.forEach(field => {
        field.setAttribute("required", "true");
    });
});
