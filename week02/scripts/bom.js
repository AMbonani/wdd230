document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('favchap');
    const button = document.getElementById('addChapterButton'); // Changed to select by ID
    const list = document.getElementById('list');

    button.addEventListener('click', function() { // Changed to listen for button click event
        const chapter = input.value.trim();
        
        if (chapter !== '') {
            addChapter(chapter);
            input.value = ''; // Clear input
            input.focus(); // Set focus back to input
        } else {
            alert('Please enter a chapter before adding.'); // Display message if input is empty
            input.focus(); // Set focus back to input
        }
    });

    function addChapter(chapter) {
        const listItem = document.createElement('li');
        listItem.textContent = chapter;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';
        deleteButton.addEventListener('click', function() {
            listItem.remove();
        });

        listItem.appendChild(deleteButton);
        list.appendChild(listItem);
    }
});
