
document.addEventListener('DOMContentLoaded', function () {
    const toggleViewButton = document.getElementById('toggleViewButton');
    const membersContainer = document.getElementById('membersContainer');

    let isGridView = true;

    toggleViewButton.addEventListener('click', function () {
        isGridView = !isGridView;
        updateView();
    });

    function updateView() {
        membersContainer.className = isGridView ? 'grid-view' : 'list-view';
        loadMembers();
    }

    function loadMembers() {
        
        fetch('data/members.json')
            .then(response => response.json())
            .then(data => {
                const members = data.members;
                membersContainer.innerHTML = '';

                members.forEach(member => {
                    const memberElement = document.createElement(isGridView ? 'div' : 'li');
                    memberElement.className = 'member';

                   
                    memberElement.innerHTML = `
                        <img src="data/images/${member.image}" alt="${member.name}">
                        <h2>${member.name}</h2>
                        <p>${member.address}</p>
                        <p>Phone: ${member.phone}</p>
                        <p>Website: <a href="${member.website}" target="_blank">${member.website}</a></p>
                        <p>Membership Level: ${member.membership_level}</p>
                        <p>${member.other_info}</p>
                    `;

                    membersContainer.appendChild(memberElement);
                });
            })
            .catch(error => console.error('Error fetching members data:', error));
    }

    
    updateView();
});
