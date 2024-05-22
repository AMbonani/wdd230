const baseURL = "https://AMbonani.github.io/wdd230/";
const linksURL = baseURL + "data/links.json";

async function getLinks() {
  try {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.weeks);
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
    const linkList = document.createElement('ul'); 

    week.links.forEach((activity, index) => {
      const linkItem = document.createElement('li'); 
      const link = document.createElement('a');
      link.href = baseURL + activity.url;
      link.textContent = activity.title;

      linkItem.appendChild(link);
      linkList.appendChild(linkItem);

      if (index < week.links.length - 1) {
        const separator = document.createElement('span');
        separator.textContent = ' | ';
        listItem.appendChild(separator);
      }
    });

    // Set the text content to include week information
    listItem.textContent = `${week.week}: `;
    listItem.appendChild(linkList); 

    // Append the modified list item to the container
    linksContainer.appendChild(listItem);
  });
}
