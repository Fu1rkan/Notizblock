function showNotes(){
    document.getElementById('show_archiv').classList.add('d_none');
    document.getElementById('show_notes').classList.remove('d_none');
    document.getElementById('show_trash').classList.add('d_none');
}

function showArchiv(){
    document.getElementById('show_archiv').classList.remove('d_none');
    document.getElementById('show_notes').classList.add('d_none');
    document.getElementById('show_trash').classList.add('d_none');
}

function showTrash(){
    document.getElementById('show_archiv').classList.add('d_none');
    document.getElementById('show_notes').classList.add('d_none');
    document.getElementById('show_trash').classList.remove('d_none');
}