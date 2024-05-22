const baseURL = 'https://AMbonani.github.io/wdd230';
const linksURL = `${baseURL}/links.json`;

async function getLinks() {
    try {
        const response = await fetch(linksURL);
        const data = await response.json();
        console.log(data); // Test the JSON result by logging it to the console

        // Call displayLinks to build out the available activity links from the data response
        displayLinks(data);
    } catch (error) {
        console.error('Error fetching links:', error);
    }
}

function displayLinks(weeks) {
    const learningActivitiesElement = document.getElementById('learning-activities');

    weeks.forEach(week => {
        const weekItem = document.createElement('li');
        weekItem.innerHTML = `<strong>${week.week}</strong>`;

        const linksList = document.createElement('ul');
        week.links.forEach(link => {
            const linkItem = document.createElement('li');
            linkItem.innerHTML = `<a href="${link.url}">${link.title}</a>`;
            linksList.appendChild(linkItem);
        });

        weekItem.appendChild(linksList);
        learningActivitiesElement.appendChild(weekItem);
    });
}

// Call the getLinks function to fetch and display the links
getLinks();

