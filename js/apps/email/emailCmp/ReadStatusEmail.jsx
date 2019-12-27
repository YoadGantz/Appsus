export default class ReadStatusEmail extends React.Component {

    updateSelected = () => {
        this.props.updateIsReadSelected()
    }

    render() {//closed envelope for mark as unread 
        return <div onClick={this.updateSelected} >{this.props.selectedUnRead ? "Mark as read" : "Mark as unread"} </div >
    }
}