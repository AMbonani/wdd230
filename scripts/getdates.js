


function updateDates() {
  
    document.getElementById('currentYear').innerText = new Date().getFullYear();

   
    document.getElementById('lastModified').innerText = "Last Modified: " + document.lastModified;
}


document.addEventListener('DOMContentLoaded', updateDates);
