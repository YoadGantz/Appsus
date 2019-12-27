'use strict'
const { Link } = ReactRouterDOM
export default class EmailPreview extends React.Component {
    onSelect = () => {
        this.props.addToSelected(this.props.email.id)
    }

    render() {
        const email = this.props.email;
        return <li className={(email.isRead) ? 'read' : 'not-read'}><input type="checkbox" onClick={this.onSelect} /><Link to={`/email/${email.id}`}><span>{email.subject}{email.body} {email.sentAt}</span></Link>
        </li>
    }
}