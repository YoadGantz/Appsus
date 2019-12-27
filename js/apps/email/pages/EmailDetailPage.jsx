import emailService from '../services/emailService.js'
import EmailDetail from '../emailCmp/EmailDetail.jsx'
import eventBusService from '../../services/eventBusService.js';

const { Link } = ReactRouterDOM

export default class EmailDetailPage extends React.Component {
    state = {
        email: null
    }

    componentDidMount() {
        this.loadEmail();
    }

    loadEmail() {
        const { id } = this.props.match.params;

        emailService.getEmailById(id).then(email => {
            emailService.changeIsRead(email).then(() => {
                this.setState({ email })
                this.getUnReadCount()
            });

        })
    }


    goBack = () => {
        this.props.history.goBack()
    }

    getUnReadCount = () => {
        emailService.getUnReadCount().then(count => { this.props.setUnReadCount(count) })
    }

    onDelete = (email) => {
        emailService.deleteEmail(email).then(() => {
            eventBusService.emit('delete')
            this.props.history.push('/email/inbox')
        });
    }

    onCreateNote = () => {
        let email = this.state.email
        this.props.history.push(`/note?body=${email.body}`)
    }

    render() {
        if (!this.state.email) return <div className="loading"> Loading...</div>
        return <React.Fragment>
            <EmailDetail onCreateNote={this.onCreateNote} email={this.state.email} delete={() => this.onDelete(this.state.email)} goBack={this.goBack}></EmailDetail>
            <Link to={{ pathname: "/email/compose", state: this.state.email }}>Reply</Link>
        </React.Fragment>
    }
}