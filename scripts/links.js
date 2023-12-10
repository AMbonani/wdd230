
const baseURL = "https://AMbonani.github.io/wdd230/";
const linksURL = baseURL + "data/links.json";


async function getLinks() {
  try {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data);
  } catch (error) {
    console.error("Error fetching links:", error);
  }
}

getLinks();


function displayLinks(weeks) {
  
  const linksContainer = document.getElementById('learning-activities');

 
  linksContainer.innerHTML = '';

 
  weeks.forEach(week => {
    
    const listItem = document.createElement('li');

    
    week.links.forEach(activity => {
      const link = document.createElement('a');
      link.href = baseURL + activity.url;
      link.textContent = activity.title;

     
      listItem.appendChild(link);

      
      const separator = document.createTextNode(' | ');
      listItem.appendChild(separator);
    });

    
    listItem.lastChild.remove();

    listItem.textContent = `${week.week}: ` + listItem.textContent;

   
    linksContainer.appendChild(listItem);
  });
}
