import EmailListPage from "../apps/email/pages/EmailListPage";

export default class EmailPage extends React.Component {
    state = {
        emails = []
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