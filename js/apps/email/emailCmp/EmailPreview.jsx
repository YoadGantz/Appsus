'use strict'
const { Link } = ReactRouterDOM
export default class EmailPreview extends React.Component {
    onSelect = () => {
        this.props.toggleSelection(this.props.email)
    }

    onStar = () => {
        this.props.toggleStarred(this.props.email)
    }

    render() {
        const email = this.props.email;
        return <li className={(email.isRead) ? 'read' : 'not-read'}>
            <input type="checkbox" onClick={this.onSelect} />
            <img className={(email.isStarred) ? 'star' : 'un-star'} height="10px" src="../../../../imgs/icons/star.svg" onClick={this.onStar} />
            <Link to={`/email/${email.id}`}>
                <span>{email.subject}{email.body} {email.sentAt}</span>
            </Link>
        </li>
    }
}