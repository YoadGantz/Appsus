import emailService from "../services/emailService.js";
import eventBusService from "../../services/eventBusService.js"

export default class ComposeEmail extends React.Component {
    state = {
        to: '',
        cc: '',
        subject: '',
        body: ''
    }
    componentDidMount() {
        let email = this.props.location.state || {}
        this.setState({ to: email.to || '', cc: email.cc || '', subject: (email.subject) ? (`Re: ` + email.subject) : '', body: (email.body) ? (`\n\nReplying about:\n` + email.body) : '' })
        this.getEmailFromUrl();
    }

    getEmailFromUrl = () => {
        let emailBody = this.props.history.location.search
        emailBody = decodeURI(emailBody)
        emailBody = emailBody.substring(emailBody.indexOf('=') + 1)
        if (emailBody) this.setState({ body: emailBody })
    }

    inputChange = (ev) => {
        let fieldName = ev.target.name;
        this.setState({ [fieldName]: ev.target.value })
    }

    onSend = () => {
        emailService.sendEmail(this.state.subject, this.state.body, false, Date.now())
            .then((email) => {
                eventBusService.emit('emailSent', email)
                this.props.history.push('/email/inbox')
            })
    }

    render() {
        return <main className="compose-container flex column border">
            <h4 className="compose-header">New Message</h4>
            <input className="compose-to border" onChange={this.inputChange} type="text" placeholder="To:" name="to" value={this.state.to} />
            <input className="compose-cc border" onChange={this.inputChange} type="text" placeholder="Cc:" name="cc" value={this.state.cc} />
            <input className="compose-subject border" onChange={this.inputChange} type="text" placeholder="Subject:" name="subject" value={this.state.subject} />
            <textarea className="compose-body border" onChange={this.inputChange} name="body" placeholder="Email Body:" value={this.state.body}></textarea>
            <button className="send-mail border" onClick={this.onSend}>Send</button>
        </main>
    }
}