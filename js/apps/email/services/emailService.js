'use strict'

import storageService from '../../services/storageService.js'
import utils from '../../services/utils.js'

export default { getEmails, getEmailById, deleteEmail, changeIsRead, getUnReadCount }

let gEmails = storageService.load('gEmails') || createEmails()

function getEmailById(emailId) {
    const email = gEmails.find(email => email.id === emailId)
    return Promise.resolve(email)
}

function deleteEmail(email) {
    gEmails = gEmails.filter((currEmail) => currEmail.id !== email.id)
    storageService.store('gEmails', gEmails)
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

function getUnReadCount() {
    let unReadCount = gEmails.reduce(function (count, email) {
        if (!email.isRead) count++
        return count
    },0);
    return Promise.resolve(unReadCount)
}

function createEmail(subject, body, isRead, sentAt) {
    const email = {
        id: utils.getRandomId(),
        subject,
        body,
        isRead,
        sentAt
    }
    return email
}

function changeIsRead(email) {//we can use get email by id instead.. no real use for this func... 
    gEmails = gEmails.map(currEmail => {
        if (email.id === currEmail.id) currEmail.isRead = true;
        return currEmail;
    })
    return Promise.resolve(true);
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
