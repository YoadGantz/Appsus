'use strict'

import storageService from '...../services/storageService.js'
import utils from '...../services/utils.js'

export default { getEmails }

let gEmails = storageService.load('gEmails') || createEmails()


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