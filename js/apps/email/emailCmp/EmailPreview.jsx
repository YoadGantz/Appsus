'use strict'

export default class EmailPreview extends React.Component {
    render() {
        const email = this.props.email;

    return <li className={(email.isRead) ? 'read' : 'not-read'}>{email.subject}{email.body}{email.sentAt}</li>
    }

}