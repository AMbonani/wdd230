// Define a function to fetch member data
async function fetchMemberData() {
    try {
        const response = await fetch('data/members.json'); // Assuming your member data is in JSON format
        const membersData = await response.json();

        // Loop through the member data and render it
        membersData.members.forEach(member => {
            // Create a member card element
            const memberCard = document.createElement('div');
            memberCard.classList.add('member-card');

            // Populate the member card with data
            memberCard.innerHTML = `
                <img src="${member.image}" alt="${member.name}">
                <h2>${member.name}</h2>
                <p>Address: ${member.address}</p>
                <p>Phone: ${member.phone}</p>
                <p>Website: <a href="${member.website}" target="_blank">${member.website}</a></p>
                <p>Membership Level: ${member.membership_level}</p>
                <p>Other Info: ${member.other_info}</p>
            `;

            // Append the member card to the appropriate container based on the current view
            if (isGridView) {
                document.getElementById('membersContainer').appendChild(memberCard);
            } else {
                document.getElementById('membersContainerList').appendChild(memberCard);
            }
        });
    } catch (error) {
        console.error('Error fetching member data:', error);
    }
}

// Define a variable to track the current view mode (grid or list)
let isGridView = true;

// Add an event listener to the toggle view button
document.getElementById('toggleViewButton').addEventListener('click', () => {
    // Toggle the view mode
    isGridView = !isGridView;

    // Clear existing member cards
    document.getElementById('membersContainer').innerHTML = '';
    document.getElementById('membersContainerList').innerHTML = '';

    // Fetch and render member data based on the new view mode
    fetchMemberData();
});

// Fetch and render member data when the page loads
fetchMemberData();
