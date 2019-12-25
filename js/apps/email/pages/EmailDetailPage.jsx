import emailService from '../services/emailService.js'
import EmailDetail from '../emailCmp/EmailDetail.jsx'

export default class EmailDetailPage extends React.Component {
    state = {
        email: null
    }

    componentDidMount() {
        this.loadEmail();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.loadEmail();
        }
    }

    loadEmail() {
        const { id } = this.props.match.params;

        emailService.getEmailById(id).then(email => {
            this.setState({ email })
        })
    }

    goBack = () => { //if sent go back to sent, get it from match.. 
        this.props.history.push('/inbox')
    }

    render() {
        if (!this.state.email) return <div className="loading"> Loading...</div>
        return <EmailDetail email={this.state.email} goBack={this.goBack}></EmailDetail>
    }
}