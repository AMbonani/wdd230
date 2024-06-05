document.addEventListener('DOMContentLoaded', () => {
    const toggleGridViewButton = document.getElementById('toggleGridView');
    const toggleListViewButton = document.getElementById('toggleListView');
    const memberCardsContainer = document.getElementById('memberCards');

    toggleGridViewButton.addEventListener('click', () => {
        memberCardsContainer.classList.add('grid-view');
        memberCardsContainer.classList.remove('list-view');
    });

    toggleListViewButton.addEventListener('click', () => {
        memberCardsContainer.classList.add('list-view');
        memberCardsContainer.classList.remove('grid-view');
    });

    // Example member cards
    const members = [
        { name: 'Member 1', description: 'Description 1' },
        { name: 'Member 2', description: 'Description 2' },
        { name: 'Member 3', description: 'Description 3' }
    ];

    members.forEach(member => {
        const card = document.createElement('div');
        card.classList.add('member-card');
        card.innerHTML = `<h3>${member.name}</h3><p>${member.description}</p>`;
        memberCardsContainer.appendChild(card);
    });
});

