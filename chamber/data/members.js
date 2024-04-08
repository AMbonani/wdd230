let isGridView = true; 

async function fetchMemberData() {
    try {
        const response = await fetch('data/members.json');
        const membersData = await response.json();
        const membersContainer = document.getElementById('membersContainer');
        const membersContainerList = document.getElementById('membersContainerList');

        membersContainer.innerHTML = '';
        membersContainerList.innerHTML = '';

        membersData.members.forEach(member => {
            const memberCard = document.createElement('div');
            memberCard.classList.add('member-card');

            if (isGridView) {
                memberCard.innerHTML = `
                    <img src="chamber/images/${member.image}" alt="${member.name}">
                    <h2>${member.name}</h2>
                    <p>Address: ${member.address}</p>
                    <p>Phone: ${member.phone}</p>
                    <p>Website: <a href="${member.website}" target="_blank">${member.website}</a></p>
                    <p>Membership Level: ${member.membership_level}</p>
                    <p>Other Info: ${member.other_info}</p>
                `;
                membersContainer.appendChild(memberCard);
            } else {
                memberCard.innerHTML = `
                    <img src="chamber/images/${member.image}" alt="${member.name}">
                    <h2>${member.name}</h2>
                    <p>Address: ${member.address}</p>
                    <p>Phone: ${member.phone}</p>
                    <p>Website: <a href="${member.website}" target="_blank">${member.website}</a></p>
                    <p>Membership Level: ${member.membership_level}</p>
                    <p>Other Info: ${member.other_info}</p>
                `;
                membersContainerList.appendChild(memberCard);
            }
        });
    } catch (error) {
        console.error('Error fetching member data:', error);
    }
}

document.getElementById('toggleViewButton').addEventListener('click', () => {
    const membersContainer = document.getElementById('membersContainer');
    const membersContainerList = document.getElementById('membersContainerList');

    membersContainer.classList.toggle('grid-view');
    membersContainer.classList.toggle('list-view');
    membersContainerList.classList.toggle('grid-view');
    membersContainerList.classList.toggle('list-view');

    isGridView = !isGridView;
    fetchMemberData();
});

fetchMemberData();
