let notes = ['banana', 'apple', 'mango' ];
let titles = ['Fruit', 'Another Fruit', 'And another Fruit'];
let archivs = [];
let archivTitles = [];
let trashes = [];
let trashTitles = [];

function renderNotes(){
    let overlay = document.getElementById('section_notes');
    overlay.innerHTML = "";
    for (let indexNotes = 0; indexNotes < notes.length; indexNotes++) {
        overlay.innerHTML += notesTemplate(indexNotes);
    }
    
}

function renderArchivNotes(){
    let overlay = document.getElementById('section_archiv');
    overlay.innerHTML = "";
    for (let indexArchiv = 0; indexArchiv < archivs.length; indexArchiv++) {
        overlay.innerHTML += archivTemplate(indexArchiv);
    }
}

function renderTrashNotes(){
    let overlay = document.getElementById('section_trash');
    overlay.innerHTML = ""; 
    for (let indexTrash = 0; indexTrash < trashes.length; indexTrash++) {
        overlay.innerHTML += trashTemplate(indexTrash);
    }
}

function addNote(){ 
    closeAddNotesMenuButton();

    let contentTitle = document.getElementById('input_title');
    let contentText = document.getElementById('the_input');

    if (contentTitle.value <= 0) {
    }
    else if(contentText.value <= 0){
    }
    else{
        titles.push(contentTitle.value);
        notes.push(contentText.value);
        contentTitle.value = "";
        contentText.value = "";
        renderNotes();
    }
}

function moveToArchiv(indexNotes){
    let itemNote = notes.splice(indexNotes, 1);
    archivs.push(itemNote);
    let itemTitle = titles.splice(indexNotes, 1);
    archivTitles.push(itemTitle);

    renderNotes();
    renderArchivNotes();
}

function moveToTrash(indexNotes){
    let itemNote = notes.splice(indexNotes, 1);
    trashes.push(itemNote);
    let itemTitle = titles.splice(indexNotes, 1);
    trashTitles.push(itemTitle);

    renderNotes();
    renderTrashNotes();
}

function moveToNotes(indexArchiv){
    let itemNote = archivs.splice(indexArchiv, 1);
    notes.push(itemNote);
    let itemTitle = archivTitles.splice(indexArchiv, 1);
    titles.push(itemTitle);    

    renderNotes();
    renderArchivNotes();
}

function moveToTrashFromArchiv(indexArchiv){
    let itemNote = archivs.splice(indexArchiv, 1);
    trashes.push(itemNote);
    let itemTitle = archivTitles.splice(indexArchiv, 1);
    trashTitles.push(itemTitle); 

    renderTrashNotes();
    renderArchivNotes();
}

function moveToNotesFromTrash(indexTrash){
    let itemNote = trashes.splice(indexTrash, 1);
    notes.push(itemNote);
    let itemTitle = trashTitles.splice(indexTrash, 1);
    titles.push(itemTitle); 

    renderTrashNotes();
    renderNotes();
}

function deleteNotes(indexTrash){
    trashes.splice(indexTrash, 1);
    trashTitles.splice(indexTrash, 1);
    renderTrashNotes();
}

