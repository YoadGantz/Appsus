'use strict'

import storageService from '...../services/storageService.js'
import utils from '...../services/utils.js'

export default { getNotes, getNoteById, deleteNote }

let gNotes = storageService.load('gNotes') || createNotes()

function getNoteById(noteId) {
    const note = gNotes.find(note => note.id === noteId)
    return Promise.resolve(note)
}

function deleteNote(note) {
    console.log(note);
    gNotes = gEmails.filter((currNote) => currNote.id !== note.id)
    storageService.store('gNotes', gNotes)
    return Promise.resolve(true)
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

function createNote(type, isPinned, info) {
    const note = {
        id: utils.getRandomId(),
        type,
        isPinned,
        info,
    }
    return note

}

function createNotes() {
    let notes = []
    notes.push(createNote('NoteText', true, {txt:"This is AWESOME"}))
    notes.push(createNote('NoteText', true, {txt:"This is AWESOME"}))
    notes.push(createNote('NoteText', true, {txt:"This is AWESOME"}))
    
    storageService.store('gNotes', notes)
    return notes
}