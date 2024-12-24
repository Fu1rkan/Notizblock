function notesTemplate(indexNotes){    
    return `
        <div class="notes" onclick="openNotesOverlay(${indexNotes})">
            <div class="note"">
                <p class="title">${titles[indexNotes]}</p>
                <p class="text">${notes[indexNotes]}</p>
            </div>
            <div class="btn">
                <button onclick="moveToArchiv(${indexNotes}, event)"><img src="./img/archiv.png" alt=""></button>
                <button onclick="moveToTrash(${indexNotes}, event)"><img src="./img/trash.png" alt=""></button>
            </div>
        </div>
    `
}

function archivTemplate(indexArchiv){
    return `
        <div class="notes" onclick="openArchivNotesOverlay(${indexArchiv})">
            <div class="note"">
                <p class="title">${archivTitles[indexArchiv]}</p>
                <p class="text">${archivs[indexArchiv]}</p>
            </div>
            <div class="btn">
                <button onclick="moveToNotes(${indexArchiv}, event)"><img src="./img/unarchiv.png" alt=""></button>
                <button onclick="moveToTrashFromArchiv(${indexArchiv}, event)"><img src="./img/trash.png" alt=""></button>
            </div>
        </div>
    `
}

function trashTemplate(indexTrash){
    return `
        <div class="notes" onclick="openTrashNotesOverlay(${indexTrash})">
            <div class="note"">
                <p class="title">${trashTitles[indexTrash]}</p>
                <p class="text">${trashes[indexTrash]}</p>
            </div>
            <div class="btn">
                <button onclick="moveToNotesFromTrash(${indexTrash}, event)"><img src="./img/restore.png" alt=""></button>
                <button onclick="deleteNotes(${indexTrash}, event)"><img src="./img/trash.png" alt=""></button>
            </div>
        </div>
    `
}

function noteOverlayTemplate(indexNotes){
    return `
        <img src="./img/left-arrow.png" onclick="moveBack(${indexNotes})" alt="">
        <div class="notes_overlay_box">
            <div class="p_section">
                <p class="notes_overlay_title">${titles[indexNotes]}</p>
                <p class="notes_overlay_text">${notes[indexNotes]}</p>
            </div>
            <div class="btn">
                <button onclick="moveToArchiv(${indexNotes}, event)"><img src="./img/archiv.png" alt=""></button>
                <button onclick="moveToTrash(${indexNotes}, event)"><img src="./img/trash.png" alt=""></button>
            </div>
        </div>
        <img src="./img/right-arrow.png" onclick="moveForward(${indexNotes})" alt="">
    `
}

function archivNoteOverlayTemplate(indexArchiv){
    return `
        <img src="./img/left-arrow.png" onclick="moveBackArchiv(${indexArchiv})" alt="">
        <div class="notes_overlay_box">
            <div class="p_section">
                <p class="notes_overlay_title">${archivTitles[indexArchiv]}</p>
                <p class="notes_overlay_text">${archivs[indexArchiv]}</p>
            </div>
            <div class="btn">
                <button onclick="moveToNotes(${indexArchiv}, event)"><img src="./img/unarchiv.png" alt=""></button>
                <button onclick="moveToTrashFromArchiv(${indexArchiv}, event)"><img src="./img/trash.png" alt=""></button>
            </div>
        </div>
        <img src="./img/right-arrow.png" onclick="moveForwardArchiv(${indexArchiv})" alt="">
    `
}

function trashNoteOverlayTemplate(indexTrash){
    return `
        <img src="./img/left-arrow.png" onclick="moveBackTrash(${indexTrash})" alt=""> 
        <div class="notes_overlay_box">
            <div class="p_section">
                <p class="notes_overlay_title">${trashTitles[indexTrash]}</p>
                <p class="notes_overlay_text">${trashes[indexTrash]}</p>
            </div>
            <div class="btn">
                <button onclick="moveToNotesFromTrash(${indexTrash}, event)"><img src="./img/restore.png" alt=""></button>
                <button onclick="deleteNotes(${indexTrash}, event)"><img src="./img/trash.png" alt=""></button>
            </div>
        </div>
        <img src="./img/right-arrow.png" onclick="moveForwardTrash(${indexTrash})" alt="">
    `
}

function menuStyle(){
    return `
        background-color: rgba(255, 255, 255, 0.631);
    `
}