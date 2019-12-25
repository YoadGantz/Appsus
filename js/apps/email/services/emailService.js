'use strict'

import storageService from '...../services/storageService.js'
import getRandomId from '...../services/utils.js'

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

function createEmails(subject, body, isRead, sentAt) {
    return email = {
        id: getRandomId(),
        subject,
        body,
        isRead,
        sentAt
    }
}

function createEmails() {
    let emails = []
    emails.push({ subject: 'Wassap?', body: 'Pick up!', isRead: false, sentAt: 1551133930594 })
    emails.push({ subject: 'Wassap?', body: 'Pick up!', isRead: false, sentAt: 1551133930594 })
    emails.push({ subject: 'Wassap?', body: 'Pick up!', isRead: false, sentAt: 1551133930594 })
    emails.push({ subject: 'Wassap?', body: 'Pick up!', isRead: false, sentAt: 1551133930594 })
    emails.push({ subject: 'Wassap?', body: 'Pick up!', isRead: false, sentAt: 1551133930594 })
    emails.push({ subject: 'Wassap?', body: 'Pick up!', isRead: false, sentAt: 1551133930594 })
    emails.push({ subject: 'Wassap?', body: 'Pick up!', isRead: false, sentAt: 1551133930594 })

    storageService.store('gEmails', emails)
    return emails
}