import emailService from "../services/emailService.js";

export default class ComposeEmail extends React.Component {
    state = {
        to: '',
        cc: '',
        subject: '',
        body: ''
    }

    inputChange = (ev) => {
        let fieldName = ev.target.name;
        console.log(fieldName);

        this.setState({ [fieldName]: ev.target.value })
    }

    onSend = () => {
        emailService.sendEmail(this.state.subject, this.state.body, false, Date.now())
            .then(this.props.history.push('/email/inbox'))
    }

    render() {
        console.log(this.state);

        return <section className="flex column">
            <header>New Message</header>
            <input onChange={this.inputChange} type="text" placeholder="To" name="to"></input>
            <input onChange={this.inputChange} type="text" placeholder="Cc" name="cc"></input>
            <input onChange={this.inputChange} type="text" placeholder="Subject" name="subject"></input>
            <textarea onChange={this.inputChange} name="body"></textarea>
            <button onClick={this.onSend}>Send</button>
        </section>
    }
}