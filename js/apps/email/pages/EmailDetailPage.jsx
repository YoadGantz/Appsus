import emailService from '../services/emailService.js'
import EmailDetail from '../emailCmp/EmailDetail.jsx'

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
            emailService.changeReadStatus(email);
            this.setState({ email })
            this.getUnReadCount()
        })
    }

    goBack = () => { //if sent go back to sent, get it from match.. 
        this.props.history.push('/email/inbox')
    }

    getUnReadCount = () => {
        emailService.getUnReadCount().then(count => { this.props.setUnReadCount(count) })
    }

    onDelete = (email) => {
        emailService.deleteEmail(email).then(() => {
            this.props.history.push('/email/inbox')
        });
    }

    render() {
        if (!this.state.email) return <div className="loading"> Loading...</div>
        return <React.Fragment>
            <EmailDetail email={this.state.email} delete={() => this.onDelete(this.state.email)} goBack={this.goBack}></EmailDetail>
            <Link to={{pathname:"/email/compose", state:this.state.email}}>Reply</Link>
        </React.Fragment>
    }
}