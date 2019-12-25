import emailService from "../services/emailService.js";
import EmailList from "../emailCmp/EmailList.jsx";

export default class SentPage extends React.Component {
    state = {
        emails: []
    }

    componentDidMount() {
        this.loadEmails();
    }

    loadEmails = () => {
        emailService.getEmails(this.state.filterBy).then(emails => { this.setState({ emails }) })
    }
    render() {
        return <EmailList emails={this.state.emails}></EmailList>
    }
}