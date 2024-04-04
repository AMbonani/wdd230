document.addEventListener("DOMContentLoaded", function () {
    
    const currentYear = new Date().getFullYear();
    document.getElementById("currentYear").textContent = currentYear;

   
    const lastModified = new Date(document.lastModified);
    document.getElementById("lastModified").textContent = "Last Modified: " + lastModified.toLocaleString();

   s
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirmPassword");
    const emailInput = document.getElementById("email");
    const form = document.querySelector("form");

   
    function checkPasswordMatch() {
        if (passwordInput.value !== confirmPasswordInput.value) {
            confirmPasswordInput.setCustomValidity("Passwords do not match");
        } else {
            confirmPasswordInput.setCustomValidity("");
        }
    }

  
    confirmPasswordInput.addEventListener("input", checkPasswordMatch);

    
    const formFields = [passwordInput, confirmPasswordInput, emailInput];
    formFields.forEach(field => {
        field.setAttribute("required", "true");
    });

 
    const header = document.querySelector("header");
    const nav = document.querySelector("nav");
    const footer = document.querySelector("footer");

    const courseHeader = document.querySelector("header");
    const courseNav = document.querySelector("nav");
    const courseFooter = document.querySelector("footer");

    header.innerHTML = courseHeader.innerHTML;
    nav.innerHTML = courseNav.innerHTML;
    footer.innerHTML = courseFooter.innerHTML;
});
