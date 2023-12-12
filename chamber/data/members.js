document.addEventListener('DOMContentLoaded', function () {
    const membersContainer = document.getElementById('membersContainer');
    const toggleViewButton = document.getElementById('toggleViewButton');

    let isGridView = true;

    toggleViewButton.addEventListener('click', function () {
        isGridView = !isGridView;
        updateView();
    });

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

    function fetchMemberData() {
        fetch('data/members.json')
            .then(response => response.json())
            .then(data => {
                displayMembers(data.members);
                document.addEventListener('DOMContentLoaded', function () {
                    const membersContainer = document.getElementById('membersContainer');
                    const toggleViewButton = document.getElementById('toggleViewButton');
                
                    let isGridView = true;
                
                    toggleViewButton.addEventListener('click', function () {
                        isGridView = !isGridView;
                        updateView();
                    });
                
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
                
                    function fetchMemberData() {
                        fetch('data/members.json')
                            .then(response => response.json())
                            .then(data => {
                                displayMembers(data.members);
                            })
                            .catch(error => console.error('Error fetching JSON:', error));
                    }
                
                    async function fetchWeatherData() {
                        try {
                            const response = await fetch('https://api.weatherapi.com/v1/current.json?77bf00e20f235f8f556baa0e89701021=pretoria');
                            if (!response.ok) {
                                throw new Error('Weather data request failed');
                            }
                            const weatherData = await response.json();
                    
                            // Update weather information in the DOM
                            document.getElementById('temperature').textContent = `Temperature: ${weatherData.current.temp_c}°C`;
                            document.getElementById('condition').textContent = `Condition: ${weatherData.current.condition.text}`;
                            document.getElementById('weatherIcon').src = `https:${weatherData.current.condition.icon}`;
                        } catch (error) {
                            console.error('Error fetching weather data:', error);
                        }
                    }
                    
                
                    function displayMembers(members) {
                        membersContainer.innerHTML = ''; // Clear existing content
                
                        members.forEach(member => {
                            const memberCard = document.createElement('div');
                            memberCard.classList.add('member-card');
                
                            if (isGridView) {
                                // Grid view
                                memberCard.innerHTML = `
                                    <img src="images/${member.image}" alt="${member.name}">
                                    <h2>${member.name}</h2>
                                    <p>${member.address}</p>
                                    <p>${member.phone}</p>
                                    <p><a href="${member.website}" target="_blank">${member.website}</a></p>
                                    <p>Membership Level: ${member.membership_level}</p>
                                    <p>${member.other_info}</p>
                                `;
                            } else {
                                // List view
                                memberCard.innerHTML = `
                                    <img src="images/${member.image}" alt="${member.name}">
                                    <div class="member-details">
                                        <h2>${member.name}</h2>
                                        <p>${member.address}</p>
                                        <p>${member.phone}</p>
                                        <p><a href="${member.website}" target="_blank">${member.website}</a></p>
                                        <p>Membership Level: ${member.membership_level}</p>
                                        <p>${member.other_info}</p>
                                    </div>
                                `;
                            }
                
                            membersContainer.appendChild(memberCard);
                        });
                
                        // Fetch and update weather data
                        fetchWeatherData();
                    }
                
                    // Initial fetch and display
                    updateView();
                });
                
