export default class EmailDetail extends React.Component {
    // create utils to show date and time nice format 
    //update to show the time if its today or date if not 

    render() {
        return <div>
            <button onClick={this.props.goBack}>BACK</button>
            <button onClick={this.props.delete}><img height="20px" src="../imgs/icons/delete.svg"/></button>
            <div>
                <p>{this.props.email.sentAt}</p>
                <h3><span>Subject</span>: {this.props.email.subject}</h3>
                <p>{this.props.email.body}</p>
            </div>
        </div>
    }
}
