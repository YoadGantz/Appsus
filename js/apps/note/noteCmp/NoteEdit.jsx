import noteService from "../services/noteService.js";

const { Link } = ReactRouterDOM
export default class NoteEdit extends React.Component {
    state = {
        title: '',
        text: ''
    }
    componentDidMount() {
        this.loadNote();
    }

    loadNote() {
        let title = this.props.note.info.title || ''
        let text = this.props.note.info.txtInput
        this.setState({ title, text })
    }

    inputChange = (ev) => { //make generic field update
        let fieldName = ev.target.name
        this.setState({ [fieldName]: ev.target.value })
    }

    onEditNote = () => {
        noteService.editNote(this.props.note.id, this.state.title, this.state.text)
    }

    render() {
        return (
            <React.Fragment>
                <input type="text" placeholder="Title" name="title" value={this.state.title} onChange={this.inputChange} />
                <input type="text" placeholder="Body" name="text" value={this.state.text} onChange={this.inputChange} />
                <button onClick={() => this.props.delete(this.props.note)}>X</button>
                <Link to='/note'>
                    <button onClick={this.onEditNote}>Save Changes</button>
                </Link>
                <Link to='/note'>Cancel</Link>
            </React.Fragment>
        )
    }
}