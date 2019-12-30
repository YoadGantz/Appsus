export default class ReadStatusSelection extends React.Component {

    updateSelected = () => {
        this.props.updateIsReadSelected()
    }

    render() {//closed envelope for mark as unread 
        return <div className="btn" onClick={this.updateSelected} >{this.props.selectedUnRead ? <img title="Mark as Read" height="20px" src="./imgs/icons/email-opened.svg"/> : <img title="Mark as Unread" height="20px" src="./imgs/icons/email-closed.svg"/>} </div >
    }
}