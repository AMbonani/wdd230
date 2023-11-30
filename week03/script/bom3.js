
let chaptersArray = getChapterList() || [];


chaptersArray.forEach(chapter => displayList(chapter));


button.addEventListener('click', () => {

    if (input.value.trim() !== '') {
      
        displayList(input.value);

      
        chaptersArray.push(input.value);

        
        setChapterList();

       
        input.value = '';

        
        input.focus();
    } else {
        alert('Please enter a chapter before adding.');
        input.focus();
    }
});


function displayList(item) {
    let listItem = document.createElement('li');
    let deleteButton = document.createElement('button');
    deleteButton.textContent = '❌';

    listItem.textContent = item;
    listItem.appendChild(deleteButton);

    deleteButton.addEventListener('click', () => deleteChapter(item));

    list.appendChild(listItem);
}


function deleteChapter(chapter) {
    
    chapter = chapter.slice(0, chapter.length - 1);

    
    chaptersArray = chaptersArray.filter(item => item !== chapter);

    
    setChapterList();

    
    const listItem = list.querySelector(`li:contains("${chapter}")`);
    listItem.remove();
}


function setChapterList() {
    localStorage.setItem('chapters', JSON.stringify(chaptersArray));
}


function getChapterList() {
    const storedChapters = localStorage.getItem('chapters');
    return storedChapters ? JSON.parse(storedChapters) : null;
}
