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
        return `${date.getDate()}/${date.getMonth()+1}`
    }

    render() {
        const email = this.props.email;
        const sentAt = this.showSentAtFormatted(email)
        return <li className={(email.isRead) ? 'read' : 'not-read'}>
                    <input type="checkbox" onClick={this.onSelect} />
                    <img className={(email.isStarred) ? 'star' : 'un-star'} height="10px" src="../../../../imgs/icons/star.svg" onClick={this.onStar} />
                    <span>
                        <LongTxt onExpand={this.onExpand} text={email.subject + email.body} shortLength={80}>
                        </LongTxt>
                        <img onClick={this.onExpand} height="20px" src="../../imgs/icons/expand.svg" />
                        {sentAt}
                    </span>
        </li>
    }
}