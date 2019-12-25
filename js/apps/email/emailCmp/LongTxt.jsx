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

    getButtonTxt(){
        return this.state.isLongTxtShown ? 'read less' : 'read more'
    }

    render() {
        return (
            <span className="read-more" onClick={this.handleReadMore}>{this.getText()}
            { this.props.text.length >= this.props.shortLength && <div className="read-more-button">{this.getButtonTxt()}</div>}
            </span>
        )
    }
}