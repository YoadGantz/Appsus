'use strict'

import storageService from '../../services/storageService.js'
import utils from '../../services/utils.js'

export default { query, getEmailById, deleteEmail, changeIsRead, getUnReadCount, sendEmail, toggleSelection, updateIsReadSelected, unSelectAll, toggleStarred, updateIsStarredSelected }

let gEmails = storageService.load('gEmails') || createEmails()

function getEmailById(emailId) {
    const email = gEmails.find(email => email.id === emailId)
    return Promise.resolve(email)
}

function sendEmail(subject, body, isRead, sentAt) {
    const email = createEmail(subject, body, isRead, sentAt);
    gEmails.push(email)
    saveEmails()
    return Promise.resolve(email)
}

function deleteEmail(email) {
    gEmails = gEmails.filter((currEmail) => currEmail.id !== email.id)
    saveEmails()
    return Promise.resolve(true)
}

function query(filterBy, filterStatus, sortBy) {
    const emails = (!filterBy && filterStatus === 'isAll') ? [...gEmails]
        : gEmails.filter(email => {
            if (filterStatus === 'isAll') {
                return (email.subject.includes(filterBy) || email.body.includes(filterBy))
            }
            else if (filterStatus === 'isRead') {
                return (email.isRead && (email.subject.includes(filterBy) || email.body.includes(filterBy)))
            } else {
                return (!email.isRead && (email.subject.includes(filterBy) || email.body.includes(filterBy)))
            }
        });
    if (sortBy === 'subject') emails.sort(sortBySubject)
    else emails.sort(sortByDate)
    return Promise.resolve(emails)
}

function sortByDate(email1, email2) {
    return email1.sentAt - email2.sentAt
}

function sortBySubject(email1, email2) {
    const subject1 = email1.subject.toUpperCase();
    const subject2 = email2.subject.toUpperCase();
    if (subject1 < subject2) {
        return -1;
    }
    if (subject1 > subject2) {
        return 1;
    }
    return 0;
}

function getUnReadCount() {
    let unReadCount = gEmails.reduce(function (count, email) {
        if (!email.isRead) count++
        return count
    }, 0);
    return Promise.resolve(unReadCount)
}

function saveEmails() {
    storageService.store('gEmails', gEmails)
}

function createEmail(subject, body, isRead, sentAt) {
    const email = {
        id: utils.getRandomId(),
        subject,
        body,
        isRead,
        isSelected: false,
        isStarred: false,
        sentAt
    }
    return email
}

function changeIsRead(email) {
    gEmails = gEmails.map(currEmail => {
        if (email.id === currEmail.id) currEmail.isRead = true;
        return currEmail;
    })
    saveEmails()
    return Promise.resolve(true);
}

function toggleSelection(email) {
    email.isSelected = !email.isSelected
    let selected = {
        selectedUnRead: checkSelectedUnRead(),
        selectedUnStar: checkSelectedUnStar()
    }
    return Promise.resolve(selected)
}

function checkSelectedUnRead() {
    return gEmails.some((email) => { return email.isSelected && !email.isRead })
}

function updateIsReadSelected() {
    if (checkSelectedUnRead()) {
        gEmails = gEmails.map((email) => {
            if (email.isSelected) email.isRead = true
            return email
        })
    } else {
        gEmails = gEmails.map((email) => {
            if (email.isSelected && email.isRead) email.isRead = false
            return email
        })
    }
    saveEmails()
    return Promise.resolve(checkSelectedUnRead())
}

function unSelectAll() {
    gEmails = gEmails.map((email) => {
        email.isSelected = false
        return email
    })
    saveEmails()
    return Promise.resolve(true)
}
// starred 

function toggleStarred(email) {
    email.isStarred = !email.isStarred
    let selectedUnStar = checkSelectedUnStar()
    return Promise.resolve(selectedUnStar)
}

function checkSelectedUnStar() {
    return gEmails.some((email) => { return email.isSelected && !email.isStarred })
}

function updateIsStarredSelected() {
    if (checkSelectedUnStar()) {
        gEmails = gEmails.map((email) => {
            if (email.isSelected) email.isStarred = true
            return email
        })
    } else {
        gEmails = gEmails.map((email) => {
            if (email.isSelected && email.isStarred) email.isStarred = false
            return email
        })
    }
    saveEmails()
    return Promise.resolve(checkSelectedUnStar())
}

function createEmails() {
    let emails = []
    emails.push(createEmail('Culpa eos quae consectetur est blanditiis.', "Alphametics is a type of cryptarithm in which a set of words is written down in the form of a long addition sum or some other mathematical problem. The objective is to replace the letters of the alphabet with decimal digits to make a valid arithmetic sum.For this kata, your objective is to write a function that accepts an alphametic equation in the form of a single-line string and returns a valid arithmetic equation in the form of a single-line string.",
        true,
        Date.now()))
    emails.push(createEmail('How are you?',
        'Occaecati ducimus autem voluptates ut vel suscipit consequatur aut quod. Repellendus et quia dolores atque tempora explicabo omnis. At enim culpa soluta autem quo ratione. Aut quia minima earum enim.',
        false,
        Date.now()))
    emails.push(createEmail("Here's what you missed from Google Photos",
        'Nemo autem ipsam rerum natus vel a libero saepe est. Aspernatur quia ut quos dolorum dolor. Nostrum autem assumenda minus dolores modi molestiae ad rerum.',
        false,
        Date.now()))
    emails.push(createEmail('More related to "How can I be a good developer?"', 'Sequi rerum et eos minus rerum labore. Vitae deleniti tempore natus nulla dolor. Et aut autem pariatur officiis.',
        true,
        Date.now()))
    emails.push(createEmail('The Most Clever Life-Hack I’ve Ever Learned',
        'Et est consequatur fugit deserunt similique velit.',
        true,
        Date.now()))
    emails.push(createEmail('Weekly Coding Challenges',
        "Help the bookseller!    A bookseller has lots of books classified in 26 categories labeled A, B, ... Z. Each book has a code c of 3, 4, 5 or more capitals letters. The 1st letter of a code is the capital letter of the book category. In the bookseller's stocklist each code c is followed by a space and by a positive integer n (int n >= 0) which indicates the quantity of books of this code in stock. Your task is to find all the books of L with codes belonging to each category of M and to sum their quantity according to each category.",
        false,
        Date.now()))
    emails.push(createEmail('Wassap?',
        'Non nobis explicabo voluptas ad occaecati voluptas atque et. Harum praesentium enim dolore odit delectus ea et. Dolor aut ratione quia temporibus. Possimus quo eum dolor debitis accusamus dolore earum sint. Ab minus commodi aliquam blanditiis.',
        false,
        Date.now()))

    storageService.store('gEmails', emails)
    return emails
}


// from: Tiara Schumm
// Erik Raynor
// Delaney Moore
// Millie Funk
// Eleazar Swift
// Tre Heaney
// Vanessa Ondricka
// Wilber Hane
// Evelyn Marks
// Medium Daily
// Google photos
