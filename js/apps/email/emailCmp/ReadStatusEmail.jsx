export default class ReadStatusSelection extends React.Component {

    updateSelected = () => {
        this.props.updateIsReadSelected()
    }

    render() {//closed envelope for mark as unread 
        return <div className="btn" onClick={this.updateSelected} >{this.props.selectedUnRead ? "Mark as read" : "Mark as unread"} </div >
    }
}