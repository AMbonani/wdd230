
const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';


const cards = document.querySelector('#cards');


const getProphetData = async () => {
    try {
        
        const response = await fetch(url);

        
        const data = await response.json();

        
        console.table(data);

    
        displayProphets(data.prophets);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};


getProphetData();


const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
      
        let card = document.createElement('section');
        let fullName = document.createElement('h2');
        let birthDate = document.createElement('p');
        let deathDate = document.createElement('p');
        let birthPlace = document.createElement('p');
        let numOfChildren = document.createElement('p');
        let portrait = document.createElement('img');

       
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;

       
        birthDate.textContent = `Birthdate: ${prophet.birthdate}`;
        deathDate.textContent = `Death: ${prophet.death}`;
        birthPlace.textContent = `Birthplace: ${prophet.birthplace}`;
        numOfChildren.textContent = `Number of Children: ${prophet.numofchildren}`;

        
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

       
        card.appendChild(fullName);
        card.appendChild(birthDate);
        card.appendChild(deathDate);
        card.appendChild(birthPlace);
        card.appendChild(numOfChildren);
        card.appendChild(portrait);

        cards.appendChild(card);
    });
};
