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

    week.links.forEach((activity, index) => {
      const link = document.createElement('a');
      link.href = baseURL + activity.url;
      link.textContent = activity.title;

      listItem.appendChild(link);

      if (index < week.links.length - 1) {
        const separator = document.createElement('span');
        separator.textContent = ' | ';
        listItem.appendChild(separator);
      }
    });

    // Remove the last separator
    if (listItem.lastChild.nodeType === Node.ELEMENT_NODE) {
      listItem.lastChild.remove();
    }

    // Set the text content to include week information
    listItem.textContent = `${week.week}: ` + listItem.textContent;

    // Append the modified list item to the container
    linksContainer.appendChild(listItem);
  });
}
