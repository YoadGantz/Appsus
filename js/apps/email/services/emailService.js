'use strict'
import storageService from '.../services/storageService.js'

let gEmails;

function createEmails(subject, body, isRead, sentAt) {
    return email = {
        subject,
        body,
        isRead,
        sentAt
    }
}

function createEmails() {
gEmails = []
gEmails.push({ subject: 'Wassap?', body: 'Pick up!', isRead: false, sentAt : 1551133930594 })
gEmails.push({ subject: 'Wassap?', body: 'Pick up!', isRead: false, sentAt : 1551133930594 })
gEmails.push({ subject: 'Wassap?', body: 'Pick up!', isRead: false, sentAt : 1551133930594 })
gEmails.push({ subject: 'Wassap?', body: 'Pick up!', isRead: false, sentAt : 1551133930594 })
gEmails.push({ subject: 'Wassap?', body: 'Pick up!', isRead: false, sentAt : 1551133930594 })
gEmails.push({ subject: 'Wassap?', body: 'Pick up!', isRead: false, sentAt : 1551133930594 })
gEmails.push({ subject: 'Wassap?', body: 'Pick up!', isRead: false, sentAt : 1551133930594 })

storageService.store('gEmails', gEmails)
return gEmails
}