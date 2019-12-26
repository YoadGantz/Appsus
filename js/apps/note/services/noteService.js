'use strict'

// import storageService from '../../services/storageService.js'
import storageService from '...../services/storageService.js'
import utils from '...../services/utils.js'

export default { getNotes, getNoteById, addNote, deleteNote, changeBGColor, changeColor }

let gNotes = storageService.load('gNotes') || createNotes()

function saveNotes() {
    storageService.store('gNotes', gNotes)
}

function getNoteById(noteId) {
    const note = gNotes.find(note => note.id === noteId)
    return Promise.resolve(note)
}

function getNotes(query) {
    const notes = [...gNotes]
    // const emails = !query ? [...gEmails]
    //     : gEmails.filter(email => {
    //         return (book.title.includes(query.name) &&
    //             (book.listPrice.amount > query.priceFrom) && (book.listPrice.amount < query.priceTo))
    //     });
    return Promise.resolve(notes)
}

function addNote(noteType, noteInfo) {
    if (noteType === 'NoteTodos') {
        let todos = noteInfo.split(', ')
        noteInfo = todos.map((todo) => {
            return {
                txtInput: todo,
                isDone: false
            }
        })
    } else if (noteType === 'NoteVideo') {
        let vidUrl = noteInfo
        let findIdxOfId = vidUrl.indexOf('=') + 1
        let vidId = vidUrl.substring(findIdxOfId)
        vidUrl = `https://www.youtube.com/embed/${vidId}`
        noteInfo = vidUrl
    }

    let newNote = createNote(noteType, noteInfo)
    gNotes = [...gNotes, newNote]
    saveNotes()
    return Promise.resolve(newNote)
}

function deleteNote(note) {
    gNotes = gNotes.filter((currNote) => currNote.id !== note.id)
    saveNotes()
    return Promise.resolve(gNotes)
}

function changeBGColor(note, color) {
    let editNote = gNotes.find(currNote => currNote.id === note.id)
    editNote = { ...editNote }
    editNote.style = { ...editNote.style } || {};
    editNote.style.backgroundColor = color;
    gNotes = gNotes.map(note => editNote.id === note.id ? editNote : note);
    saveNotes()

    return Promise.resolve(editNote)
}

function changeColor(note, color) {
    let editNote = gNotes.find(currNote => currNote.id === note.id)
    editNote = { ...editNote }
    editNote.style = { ...editNote.style } || {};
    editNote.style.color = color;
    gNotes = gNotes.map(note => editNote.id === note.id ? editNote : note);
    storageService.store('gNotes', gNotes)

    return Promise.resolve(editNote)
}

function createNote(type, txt) {
    const note = {
        id: utils.getRandomId(),
        type,
        isPinned: false,
        info: {
            txtInput: txt
        }
    }
    return note;
}

function createNotes() { // consider creating a constructor for note 
    let notes = []
    notes.push(createNote('NoteText', "This is AWESOME"))
    notes.push(createNote('NoteText', "This is AWESOME"))
    notes.push(createNote('NoteText', "This is AWESOME"))
    notes.push(createNote('NoteImage', "https://image.shutterstock.com/image-photo/colorful-flower-on-dark-tropical-260nw-721703848.jpg"))

    storageService.store('gNotes', notes)
    return notes
}