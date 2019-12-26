export default class NoteText extends React.Component {    
    render() {
        return <li onClick={() => this.props.delete(this.props.note)}>{this.props.note.info.txtInput}</li>

    }
}