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
        } else {
            membersContainer.classList.remove('grid-view');
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

    function displayMembers(members) {
        membersContainer.innerHTML = ''; // Clear existing content

        members.forEach(member => {
            const memberCard = document.createElement('div');
            memberCard.classList.add('member-card');

            memberCard.innerHTML = `
                <img src="images/${member.image}" alt="${member.name}">
                <h2>${member.name}</h2>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <p><a href="${member.website}" target="_blank">${member.website}</a></p>
                <p>Membership Level: ${member.membership_level}</p>
                <p>${member.other_info}</p>
            `;

            membersContainer.appendChild(memberCard);
        });
    }

    // Initial fetch and display
    updateView();
});
