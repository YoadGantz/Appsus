'use strict'

import storageService from '...../services/storageService.js'
import utils from '...../services/utils.js'

export default { getNotes, getNoteById, addNote, deleteNote }

let gNotes = storageService.load('gNotes') || createNotes()

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
    let newNote = createNote(noteType, noteInfo)
    gNotes = [...gNotes, newNote]
    storageService.store('gNotes', gNotes)
    return Promise.resolve(newNote)
}

function deleteNote(note) {
    gNotes = gNotes.filter((currNote) => currNote.id !== note.id)
    storageService.store('gNotes', gNotes)
    return Promise.resolve(gNotes)
}

function createNote(type, info) {
    const note = {
        id: utils.getRandomId(),
        type,
        isPinned: false,
        info: {
            txtInput: info
        }
    }
    return note
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