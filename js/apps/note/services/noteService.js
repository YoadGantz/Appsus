'use strict'
import storageService from '../../services/storageService.js'
import utils from '../../services/utils.js'

export default { query, getNoteById, addNote, deleteNote, changeBGColor, changeColor, editNote, togglePin }

let gNotes = storageService.load('gNotes') || createNotes()

function saveNotes() {
    storageService.store('gNotes', gNotes)
}

function getNoteById(noteId) {
    const note = gNotes.find(note => note.id === noteId)
    return Promise.resolve(note)
}

function query(query) {
    const notes = !query ? [...gNotes] :
        gNotes.filter(note => {
            return (note.info.txtInput.includes(query))
        });
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

function editNote(id, title, input) {
    let note = gNotes.find(note => note.id === id)
    note = { ...note }
    note.info.title = title
    note.info.txtInput = input
    gNotes = gNotes.map(currNote => currNote.id === note.id ? note : currNote)
    saveNotes()

    return Promise.resolve(note);
}

function togglePin(note) {
    let editNote = gNotes.find(currNote => {
        return currNote.id === note.id
    })
    editNote = { ...editNote }
    editNote.isPinned = !editNote.isPinned
    gNotes = gNotes.map(note => note.id === editNote.id ? editNote : note)
    saveNotes()
    return Promise.resolve(true)
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
    notes.push(createNote('NoteImage', "http://tripjaunt.com/wp-content/uploads/2016/11/magicalplaces-featured.jpg"))
    notes.push(createNote('NoteText', "Can't wait for 17/2/20"))
    notes.push(createNote('NoteText', "If opportunity doesn't knock, build a door. \"Milton Berle\""))
    notes.push(createNote('NoteImage', "https://i.redd.it/u7vzzy7puzr11.jpg"))
    notes.push(createNote('NoteImage', "http://tripjaunt.com/wp-content/uploads/2016/11/magicalplaces-featured.jpg"))
    notes.push(createNote('NoteText', "Can't wait for 17/2/20"))
    notes.push(createNote('NoteText', "If opportunity doesn't knock, build a door. \"Milton Berle\""))
    notes.push(createNote('NoteImage', "https://i.redd.it/u7vzzy7puzr11.jpg"))
    notes.push(createNote('NoteText', "This is AWESOME"))
    // notes.push(createNote('NoteTodos', "Rome, Tahiti, Milano, Iceland"))
    notes.push(createNote('NoteImage', "https://media.giphy.com/media/1d7F9xyq6j7C1ojbC5/giphy.gif"))
    notes.push(createNote('NoteVideo', "https://www.youtube.com/embed/ZW3rR9_E3Rw"))
    notes.push(createNote('NoteText', "What’s the best thing about Switzerland? I don’t know, but the flag is a big plus."))
    notes.push(createNote('NoteImage', "https://images.theconversation.com/files/296905/original/file-20191014-135529-xgmui3.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip")) 
    notes.push(createNote('NoteImage', "https://media.giphy.com/media/1d7F9xyq6j7C1ojbC5/giphy.gif"))
    notes.push(createNote('NoteImage', "https://media.giphy.com/media/1d7F9xyq6j7C1ojbC5/giphy.gif"))
    notes.push(createNote('NoteVideo', "https://www.youtube.com/embed/ZW3rR9_E3Rw"))
    notes.push(createNote('NoteText', "What’s the best thing about Switzerland? I don’t know, but the flag is a big plus."))
    notes.push(createNote('NoteVideo', "https://www.youtube.com/embed/ZW3rR9_E3Rw"))
    notes.push(createNote('NoteText', "What’s the best thing about Switzerland? I don’t know, but the flag is a big plus."))
    notes.push(createNote('NoteImage', "https://images.theconversation.com/files/296905/original/file-20191014-135529-xgmui3.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip"))


    storageService.store('gNotes', notes)
    return notes
}