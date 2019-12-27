export default class LongTxt extends React.Component {

    state = { 
        isLongTxtShown: this.props.isLongTxtShown
    }

    componentDidMount() {
    }

    getText = () => {
        return (this.state.isLongTxtShown) ?  this.props.text :this.props.text.substring(0,this.props.shortLength);
    }

    handleReadMore = () => {
        this.setState(prevstate => ({ isLongTxtShown: !prevstate.isLongTxtShown }))
    }

    getExpandButton(){
        return <img onClick = {this.props.onExpand} height="20px" src="../../imgs/icons/expand.svg"/>
    }

    render() {
        return (
            <span className="read-more" onClick={this.handleReadMore}>{this.getText()}
            { this.props.text.length >= this.props.shortLength && <span className="read-more-button">{this.getExpandButton()}</span>}
            </span>
        )
    }
}