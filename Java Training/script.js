// Sample notes data (you can use local storage for persistence)
let notes = [];

// Function to render notes
function renderNotes() {
    const notesContainer = document.getElementById('notes-container');
    notesContainer.innerHTML = '';

    notes.forEach((note, index) => {
        const noteDiv = document.createElement('div');
        noteDiv.className = 'note';
        noteDiv.innerHTML = `
            <p>${note}</p>
            <button onclick="editNote(${index})">Edit</button>
            <button onclick="deleteNote(${index})">Delete</button>
        `;
        notesContainer.appendChild(noteDiv);
    });
}

// Function to add a new note
function addNote() {
    const noteInput = document.getElementById('note-input');
    const noteText = noteInput.value.trim();

    if (noteText !== '') {
        notes.push(noteText);
        noteInput.value = '';
        renderNotes();
    }
}

// Function to edit a note
function editNote(index) {
    const newNote = prompt('Edit your note:', notes[index]);
    if (newNote !== null) {
        notes[index] = newNote.trim();
        renderNotes();
    }
}

// Function to delete a note
function deleteNote(index) {
    const confirmDelete = confirm('Are you sure you want to delete this note?');
    if (confirmDelete) {
        notes.splice(index, 1);
        renderNotes();
    }
}

// Initial rendering
renderNotes();
