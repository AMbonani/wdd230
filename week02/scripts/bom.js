


const inputElement = document.getElementById('favchap');
const addButton = document.querySelector('button');
const listElement = document.getElementById('list');


addButton.addEventListener('click', () => {
    
    const chapterValue = inputElement.value;

    
    if (chapterValue.trim() !== '') {
        
        const listItem = document.createElement('li');

        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';

        
        listItem.textContent = chapterValue;

        
        listItem.appendChild(deleteButton);

        
        deleteButton.addEventListener('click', () => {
            
            listItem.remove();
            
            inputElement.focus();
        });

        
        listElement.appendChild(listItem);

    
        inputElement.value = '';
    } else {
        
        alert('Please enter a chapter before adding.');
        inputElement.focus();
    }
});

