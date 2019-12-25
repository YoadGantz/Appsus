'use strict'

import storageService from '...../services/storageService.js'
import utils from '...../services/utils.js'

export default { getEmails, getEmailById, changeIsRead }

let gEmails = storageService.load('gEmails') || createEmails()

function getEmailById(emailId) {
    const email = gEmails.find(email => email.id === emailId)
    return Promise.resolve(email)
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

function changeIsRead(email) {
    gEmails = gEmails.map(currEmail => {
        if (email.id === currEmail.id) currEmail.isRead = true;
        return currEmail;
    })
}

function createEmails() {
    let emails = []
    emails.push(createEmail('Wassap?', 'Pick up!', true, Date.now()))
    emails.push(createEmail('Wassap?', 'Pick up!', false, Date.now()))
    emails.push(createEmail('Wassap?', 'Pick up!', false, Date.now()))
    emails.push(createEmail('Wassap?', 'Pick up!', true, Date.now()))
    emails.push(createEmail('Wassap?', 'Pick up!', true, Date.now()))
    emails.push(createEmail('Wassap?', 'Pick up!', false, Date.now()))
    emails.push(createEmail('Wassap?', 'Pick up!', false, Date.now()))

    storageService.store('gEmails', emails)
    return emails
}