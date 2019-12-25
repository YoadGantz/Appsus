'use strict'

import storageService from '...../services/storageService.js'
import utils from '...../services/utils.js'

export default { getEmails, getEmailById, deleteEmail }

let gEmails = storageService.load('gEmails') || createEmails()

function getEmailById(emailId) {
    const email = gEmails.find(email => email.id === emailId)
    return Promise.resolve(email)
}

function deleteEmail(email) {
    console.log(email);
    console.log('before',gEmails)
    gEmails = gEmails.filter((currEmail) => currEmail.id !== email.id)
    storageService.store('gEmails', gEmails)
    console.log('after',gEmails)
    return Promise.resolve(true)
}

function getEmails(query) {
    const emails = [...gEmails]
    // const emails = !query ? [...gEmails]
    //     : gEmails.filter(email => {
    //         return (book.title.includes(query.name) &&
    //             (book.listPrice.amount > query.priceFrom) && (book.listPrice.amount < query.priceTo))
    //     });
    return Promise.resolve(emails)
}

function createEmail(subject, body, isRead, sentAt) {
    const email = {
        id: utils.getRandomId(),
        subject,
        body,
        isRead,
        sentAt
    }
    console.log(email);
    return email

}

function createEmails() {
    let emails = []
    emails.push(createEmail('Wassap?', 'Pick up!', false, Date.now()))
    emails.push(createEmail('Wassap?', 'Pick up!', false, Date.now()))
    emails.push(createEmail('Wassap?', 'Pick up!', false, Date.now()))
    emails.push(createEmail('Wassap?', 'Pick up!', false, Date.now()))
    emails.push(createEmail('Wassap?', 'Pick up!', false, Date.now()))
    emails.push(createEmail('Wassap?', 'Pick up!', false, Date.now()))
    emails.push(createEmail('Wassap?', 'Pick up!', false, Date.now()))

    storageService.store('gEmails', emails)
    return emails
}