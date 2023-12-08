document.addEventListener("DOMContentLoaded", function () {
    
    const currentYear = new Date().getFullYear();
    document.getElementById("currentYear").textContent = currentYear;

    
    const lastModified = new Date(document.lastModified);
    document.getElementById("lastModified").textContent = "Last Modified: " + lastModified.toLocaleString();

    
    const timestampInput = document.getElementById("timestamp");
    timestampInput.value = new Date().toLocaleString();

    
    const membershipLevelSelect = document.getElementById("membershipLevel");
    const membershipBenefitsDiv = document.getElementById("membershipBenefits");

    membershipLevelSelect.addEventListener("change", function () {
        const selectedLevel = membershipLevelSelect.value;
        displayMembershipBenefits(selectedLevel);
    });

    function displayMembershipBenefits(level) {
       
        membershipBenefitsDiv.innerHTML = "";

        
        const benefits = {
            NP: "No Fee for non-profit organizations.",
            Bronze: "Bronze Membership Benefits...",
            Silver: "Silver Membership Benefits...",
            Gold: "Gold Membership Benefits...",
        };

        
        const benefitsText = benefits[level] || "Select a membership level to view benefits.";
        const benefitsParagraph = document.createElement("p");
        benefitsParagraph.textContent = benefitsText;
        membershipBenefitsDiv.appendChild(benefitsParagraph);
    }

    
    const darkModeToggle = document.getElementById("darkModeToggle");
    const mainElement = document.querySelector("main");

    darkModeToggle.addEventListener("click", function () {
        mainElement.classList.toggle("dark-mode");
    });


});
