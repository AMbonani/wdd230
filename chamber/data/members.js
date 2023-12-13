document.addEventListener('DOMContentLoaded', function () {
    const membersContainer = document.getElementById('membersContainer');
    const toggleViewButton = document.getElementById('toggleViewButton');

    let isGridView = true;

    toggleViewButton.addEventListener('click', function () {
        isGridView = !isGridView;
        updateView();
    });

    async function fetchMemberData() {
        try {
            const response = await fetch('data/members.json');
            const data = await response.json();
            displayMembers(data.members);
        } catch (error) {
            console.error('Error fetching member data:', error);
        }
    }

    async function fetchWeatherData() {
        try {
            const response = await fetch('https://api.weatherapi.com/v1/current.json?77bf00e20f235f8f556baa0e89701021=pretoria');
            if (!response.ok) {
                throw new Error('Weather data request failed');
            }
            const weatherData = await response.json();

            document.getElementById('temperature').textContent = `Temperature: ${weatherData.current.temp_c}°C`;
            document.getElementById('condition').textContent = `Condition: ${weatherData.current.condition.text}`;
            document.getElementById('weatherIcon').src = `https:${weatherData.current.condition.icon}`;
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    }

    function displayMembers(members) {
        membersContainer.innerHTML = '';

        members.forEach(member => {
            const memberCard = document.createElement('div');
            memberCard.classList.add('member-card');

            const imagePath = `chamber/images/${member.image}`;

            memberCard.innerHTML = `
                <img src="${imagePath}" alt="${member.name}">
                <!-- ... rest of your grid or list view content ... -->
            `;

            membersContainer.appendChild(memberCard);
        });

        fetchWeatherData();
    }

    function updateView() {
        if (isGridView) {
            membersContainer.classList.add('grid-view');
            membersContainer.classList.remove('list-view');
        } else {
            membersContainer.classList.remove('grid-view');
            membersContainer.classList.add('list-view');
        }
        fetchMemberData();
    }

    
    updateView();
});

