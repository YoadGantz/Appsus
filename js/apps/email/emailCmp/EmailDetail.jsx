export default class EmailDetail extends React.Component {
    // create utils to show date and time nice format 
    //update to show the time if its today or date if not 

    showSentAtFormatted = (email) => {
        let date = new Date(email.sentAt)
        if (date.getDate() === new Date().getDate()) return `${date.getHours()}:${date.getMinutes()}`
        return `${date.getDate()}/${date.getMonth() + 1}`
    }


    render() {
        const email = this.props.email;
        const sentAt = this.showSentAtFormatted(email)
        return <div>
            <div className="details-control flex">
                <span className="btn" onClick={this.props.goBack}>BACK</span>
                <img className="btn" onClick={this.props.onCreateNote} title="Save to note" height="20px" src="./imgs/icons/send-note.svg" />
                <img className="btn" title="Delete" onClick={this.props.delete} height="20px" src="./imgs/icons/delete.svg" />
            </div>
            <div>
                <p><span>Sent At:</span>{sentAt}</p>
                <h3><span>Subject</span>: {email.subject}</h3>
                <p>{email.body}</p>
            </div>
        </div>
    }
}
