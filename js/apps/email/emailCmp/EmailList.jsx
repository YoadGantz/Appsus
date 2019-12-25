'use strict'

import emailService from "../services/emailService.js"

export default class EmailList extends React.Component {
    state = {
        emails = [],
        filterBy = ''
    }

    componentDidMount() {
        this.loadEmails();
    }

    loadEmails = () => {
        emailService.getEmails(this.state.filterBy).then(books => { this.setState({ books }) })
    }

    render() {

    }

}