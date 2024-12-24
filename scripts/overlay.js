function showNotes(){
    document.getElementById('show_archiv').classList.add('d_none');
    document.getElementById('show_notes').classList.remove('d_none');
    document.getElementById('show_trash').classList.add('d_none');

    removeActiveMenuStyle()
    
    document.getElementById('note_overlay').style.cssText = menuStyle();
}

function showArchiv(){
    document.getElementById('show_archiv').classList.remove('d_none');
    document.getElementById('show_notes').classList.add('d_none');
    document.getElementById('show_trash').classList.add('d_none');

    removeActiveMenuStyle()
    
    document.getElementById('archiv_overlay').style.cssText = menuStyle();
}

function showTrash(){
    document.getElementById('show_archiv').classList.add('d_none');
    document.getElementById('show_notes').classList.add('d_none');
    document.getElementById('show_trash').classList.remove('d_none');

    removeActiveMenuStyle()
    
    document.getElementById('trash_overlay').style.cssText = menuStyle();
}

function removeActiveMenuStyle(){
    document.getElementById('note_overlay').style.cssText = '';
    document.getElementById('archiv_overlay').style.cssText = '';
    document.getElementById('trash_overlay').style.cssText = '';
}