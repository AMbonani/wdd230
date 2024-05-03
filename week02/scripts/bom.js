document.addEventListener('DOMContentLoaded', function() {
    console.log('DOMContentLoaded event fired');
    
    const input = document.getElementById('favchap');
    const button = document.querySelector('button[type="button"]');
    const list = document.getElementById('list');

    button.addEventListener('click', function() {
        console.log('Button clicked');
        
        const chapter = input.value.trim();
        
        if (chapter !== '') {
            console.log('Chapter:', chapter);
            addChapter(chapter);
            input.value = ''; // Clear input
            input.focus(); // Set focus back to input
        } else {
            alert('Please enter a chapter before adding.'); // Display message if input is empty
            input.focus(); // Set focus back to input
        }
    });

    function addChapter(chapter) {
        console.log('Adding chapter:', chapter);
        
        const listItem = document.createElement('li');
        listItem.textContent = chapter;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';
        deleteButton.classList.add('delete'); // Add a class for styling
        deleteButton.addEventListener('click', function() {
            listItem.remove();
        });

        listItem.appendChild(deleteButton);
        list.appendChild(listItem);
    }
});
