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
        return <main className="flex column">
            <header>New Message</header>
            <input onChange={this.inputChange} type="text" placeholder="To" name="to" value={this.state.to}></input>
            <input onChange={this.inputChange} type="text" placeholder="Cc" name="cc" value={this.state.cc}></input>
            <input onChange={this.inputChange} type="text" placeholder="Subject" name="subject" value={this.state.subject}></input>
            <textarea onChange={this.inputChange} name="body" value={this.state.body}></textarea>
            <button onClick={this.onSend}>Send</button>
        </main>
    }
}