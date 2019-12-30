'use strict'
import LongTxt from "../../apps cmps/LongTxt.jsx"
export default class EmailPreview extends React.Component {
    onSelect = () => {
        this.props.toggleSelection(this.props.email)
    }

    onStar = () => {
        this.props.toggleStarred(this.props.email)
    }

    onExpand = () => {
        this.props.goToDetails(this.props.email.id)
    }

    showSentAtFormatted = (email) => {
        let date = new Date(email.sentAt)
        if (date.getDate() === new Date().getDate()) return `${date.getHours()}:${date.getMinutes()}`
        return `${date.getDate()}/${date.getMonth() + 1}`
    }

    render() {
        const email = this.props.email;
        const sentAt = this.showSentAtFormatted(email)
        return (
            <tr className={(email.isRead) ? 'read' : 'not-read'}>
                <td>
                    <input className="btn" type="checkbox" onClick={this.onSelect} />
                </td>
                <td>
                    <img className={(email.isStarred) ? 'star btn' : 'un-star btn'} height="16px" src="./imgs/icons/star.svg" onClick={this.onStar} />
                </td>
                <td className="sent-by">
                    {email.sentBy}
                </td>
                <td className="email-subject">
                    {email.subject}
                </td>
                <td>
                    <LongTxt onExpand={this.onExpand} text={email.body} shortLength={30}></LongTxt>
                </td>
                <td>
                    <img title="Expand" className="open-mail btn" onClick={this.onExpand} height="20px" src="./imgs/icons/expand.svg" />
                </td>
                <td>
                    {sentAt}
                </td>
            </tr>)
    }
}