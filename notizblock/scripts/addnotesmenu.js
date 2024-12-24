function showAddNotesMenu(){
    document.getElementById('addNotesMenu').classList.remove('d_none');
    document.getElementById('input_field').classList.remove('d_none'); 
}

function closeAddNotesMenu(){
    document.getElementById('addNotesMenu').classList.add('d_none');
    document.getElementById('input_field').classList.add('d_none'); 
}

function closeAddNotesMenuButton(){
    let inputTitle = document.getElementById('input_title');
    let inputText = document.getElementById('the_input');
    if (inputTitle.value.length <= 0) {
        inputTitle.placeholder = 'Deine Notiz braucht einen Titel!';
        inputTitle.classList.add('error_input');
    }else if(inputText.value.length <= 0) {
        inputText.placeholder = 'Deine Notiz braucht einen Text!';
        inputText.classList.add('error_input');
    }else{
        document.getElementById('addNotesMenu').classList.add('d_none');
        document.getElementById('input_field').classList.add('d_none'); 
        inputTitle.placeholder = 'Titel';
        inputText.placeholder = '';
        inputTitle.classList.remove('error_input');
        inputText.classList.remove('error_input');
    }
}