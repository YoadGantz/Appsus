'use strict'
const { Link } = ReactRouterDOM
export default class EmailPreview extends React.Component {
    render() {
        const email = this.props.email;
        return <Link to={`/email/${email.id}`}>
            <li className={(email.isRead) ? 'read' : 'not-read'}><div>{email.subject}</div> {email.body}{email.sentAt}</li>
        </Link>
    }
}