function notesTemplate(indexNotes){    
    return `
        <div class="notes">
            <div class="note">
                <p class="title">${titles[indexNotes]}</p>
                <p class="text">${notes[indexNotes]}</p>
            </div>
            <div class="btn">
                <button onclick="moveToArchiv(${indexNotes}, undefined)"><img src="./img/archiv.png" alt=""></button>
                <button onclick="moveToTrash(${indexNotes})"><img src="./img/trash.png" alt=""></button>
            </div>
        </div>
    `
}

function archivTemplate(indexArchiv){
    return `
    <div class="notes">
        <div class="note">
            <p class="title">${archivTitles[indexArchiv]}</p>
            <p class="text">${archivs[indexArchiv]}</p>
        </div>
        <div class="btn">
            <button onclick="moveToNotes(${indexArchiv})"><img src="./img/unarchiv.png" alt=""></button>
            <button onclick="moveToTrashFromArchiv(${indexArchiv})"><img src="./img/trash.png" alt=""></button>
        </div>
    </div>
    `
}

function trashTemplate(indexTrash){
    return `
    <div class="notes">
        <div class="note">
            <p class="title">${trashTitles[indexTrash]}</p>
            <p class="text">${trashes[indexTrash]}</p>
        </div>
        <div class="btn">
            <button onclick="moveToNotesFromTrash(${indexTrash})"><img src="./img/restore.png" alt=""></button>
            <button onclick="deleteNotes(${indexTrash})"><img src="./img/trash.png" alt=""></button>
        </div>
    </div>
    `
}

