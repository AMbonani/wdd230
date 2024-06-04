document.addEventListener("DOMContentLoaded", function () {
    const visitMessage = document.getElementById("visitMessage");
    const lastVisit = localStorage.getItem("lastVisit");

    if (!lastVisit) {
        visitMessage.textContent = "Welcome! Let us know if you have any questions.";
    } else {
        const lastVisitDate = new Date(lastVisit);
        const currentDate = new Date();
        const differenceInTime = currentDate.getTime() - lastVisitDate.getTime();
        const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));

        if (differenceInDays < 1) {
            visitMessage.textContent = "Back so soon! Awesome!";
        } else if (differenceInDays === 1) {
            visitMessage.textContent = `You last visited 1 day ago.`;
        } else {
            visitMessage.textContent = `You last visited ${differenceInDays} days ago.`;
        }
    }

    localStorage.setItem("lastVisit", new Date());
});

document.getElementById("menuToggle").addEventListener("click", function () {
    document.querySelector("nav ul").classList.toggle("show");
});
