let notes = ['Eier, Mehl, Vanille, Apfel, Banane, Mango, Wassermelone', 'Aufräumen, Sport, Lernen, Instrument spielen', 'yhshchsg7s7, icuh773UUN897bbb', 'schleizersttraße 647, Theresienstein 872', 'https://google.com', 'Casual, Vintage, Only Black'];
let titles = ['Einkaufsliste', 'To Do', 'Meine Passwörter', 'Adressdaten von Kunden', 'Links', 'Outfit ideen'];
let archivs = ['hallo'];
let archivTitles = ['wie gehts'];
let trashes = ['schlechte Notiz'];
let trashTitles = ['was?'];

function init(){
    getFromLocalStorage();
    renderNotes();
    renderArchivNotes();
    renderTrashNotes();
}

function renderNotes(){
    let overlay = document.getElementById('section_notes');
    overlay.innerHTML = "";
    for (let indexNotes = 0; indexNotes < notes.length; indexNotes++) {
        overlay.innerHTML += notesTemplate(indexNotes);
    }
    
    document.getElementById('note_overlay').style.cssText = menuStyle();
    saveToLocalStorage();
}

function renderArchivNotes(){
    let overlay = document.getElementById('section_archiv');
    overlay.innerHTML = "";
    for (let indexArchiv = 0; indexArchiv < archivs.length; indexArchiv++) {
        overlay.innerHTML += archivTemplate(indexArchiv);
    }
    saveToLocalStorage();
}

function renderTrashNotes(){
    let overlay = document.getElementById('section_trash');
    overlay.innerHTML = ""; 
    for (let indexTrash = 0; indexTrash < trashes.length; indexTrash++) {
        overlay.innerHTML += trashTemplate(indexTrash);
    }
    saveToLocalStorage();
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

    event.stopPropagation();

    renderNotes();
    renderArchivNotes();
    closeAddNotesMenu();
}

function moveToTrash(indexNotes){
    let itemNote = notes.splice(indexNotes, 1);
    trashes.push(itemNote);
    let itemTitle = titles.splice(indexNotes, 1);
    trashTitles.push(itemTitle);

    event.stopPropagation();

    renderNotes();
    renderTrashNotes();
    closeAddNotesMenu();
}

function moveToNotes(indexArchiv){
    let itemNote = archivs.splice(indexArchiv, 1);
    notes.push(itemNote);
    let itemTitle = archivTitles.splice(indexArchiv, 1);
    titles.push(itemTitle);    

    event.stopPropagation();

    renderNotes();
    renderArchivNotes();
    closeAddNotesMenu();
    showArchiv();
}

function moveToTrashFromArchiv(indexArchiv){
    let itemNote = archivs.splice(indexArchiv, 1);
    trashes.push(itemNote);
    let itemTitle = archivTitles.splice(indexArchiv, 1);
    trashTitles.push(itemTitle); 

    event.stopPropagation();

    renderTrashNotes();
    renderArchivNotes();
    closeAddNotesMenu();
}

function moveToNotesFromTrash(indexTrash){
    let itemNote = trashes.splice(indexTrash, 1);
    notes.push(itemNote);
    let itemTitle = trashTitles.splice(indexTrash, 1);
    titles.push(itemTitle); 

    event.stopPropagation();

    renderTrashNotes();
    renderNotes();
    closeAddNotesMenu();
    showTrash();
}

function deleteNotes(indexTrash){
    trashes.splice(indexTrash, 1);
    trashTitles.splice(indexTrash, 1);

    renderTrashNotes();
    event.stopPropagation();
}

function moveForward(indexNotes){
    let i = indexNotes;
    i +++ 1;
    if (i >= notes.length) {
        i = 0;
    }
    openNotesOverlay(i);
}

function moveForwardArchiv(indexArchiv){
    console.log('Hallo');
    let i = indexArchiv;
    i +++ 1;
    if (i >= archivs.length) {
        i = 0;
    }
    openArchivNotesOverlay(i);
}

function moveForwardTrash(indexTrash){
    let i = indexTrash;
    i +++ 1;
    if (i >= trashes.length) {
        i = 0;
    }
    openTrashNotesOverlay(i);
}

function moveBack(indexNotes){
    let i = indexNotes;
    i --- 1;
    if (i <= -1) {
        i = notes.length - 1;
    }
    openNotesOverlay(i);
}

function moveBackArchiv(indexArchiv){
    let i = indexArchiv;
    i --- 1;
    if (i <= -1) {
        i = archivs.length - 1;
    }
    openArchivNotesOverlay(i);
}

function moveBackTrash(indexTrash){
    let i = indexTrash;
    i --- 1;
    if (i <= -1) {
        i = trashes.length - 1;
    }
    openTrashNotesOverlay(i);
}

function saveToLocalStorage(){
    localStorage.setItem("notes", JSON.stringify(notes));
    localStorage.setItem("titles", JSON.stringify(titles));
    localStorage.setItem("archivs", JSON.stringify(archivs));
    localStorage.setItem("archivTitles", JSON.stringify(archivTitles));
    localStorage.setItem("trashes", JSON.stringify(trashes));
    localStorage.setItem("trashTitles", JSON.stringify(trashTitles));
}


function getFromLocalStorage(){
    let localNotes = JSON.parse(localStorage.getItem("notes"));
    let localTitles = JSON.parse(localStorage.getItem("titles"));
    let localArchivs = JSON.parse(localStorage.getItem("archivs"));
    let localArchivTitles = JSON.parse(localStorage.getItem("archivTitles"));
    let localTrashes = JSON.parse(localStorage.getItem("trashes"));
    let localTrashTitles = JSON.parse(localStorage.getItem("trashTitles"));
    
    if (localNotes != null) {
        notes = localNotes;
    }
    if (localTitles != null) {
        titles = localTitles;
    }
    if (localArchivs != null) {
        archivs = localArchivs;
    }
    if (localArchivTitles != null) {
        archivTitles = localArchivTitles;
    }
    if (localTrashes != null) {
        trashes = localTrashes;
    }
    if (localTrashTitles != null) {
        trashTitles = localTrashTitles;
    }
}
