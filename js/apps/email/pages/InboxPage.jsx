import emailService from "../services/emailService.js";
import EmailList from "../emailCmp/EmailList.jsx";

export default class InboxPage extends React.Component {
    state = {
        emails: []
    }

    componentDidMount() {
        this.getUnReadCount()
        this.loadEmails();
    }

    getUnReadCount = () => {
        emailService.getUnReadCount().then(count => { this.props.setUnReadCount(count) })
    }

    loadEmails = () => {
        emailService.getEmails(this.state.filterBy).then(emails => { this.setState({ emails }) })
    }
    render() {
        return <EmailList emails={this.state.emails}></EmailList>
    }
}