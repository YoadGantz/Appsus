import EmailListPage from "../apps/email/pages/EmailListPage.jsx";
import emailService from "../apps/email/services/emailService.js"

export default class EmailApp extends React.Component {
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
        return <EmailListPage emails={this.state.emails}></EmailListPage>
    }
}