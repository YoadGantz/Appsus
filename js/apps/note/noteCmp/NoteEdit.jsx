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
            <div className="edit-container totally-center column border">
                <input className="title-edit border" type="text" placeholder="Title" name="title" value={this.state.title} onChange={this.inputChange} />
                <textarea className="note-edit border" type="text" placeholder="Body" name="text" value={this.state.text} onChange={this.inputChange} />
                <div className="edit-controls flex">
                    <img className= "btn" title="Delete note" height="25px" src="../../../imgs/icons/delete.svg" onClick={() => this.props.delete(this.props.note)} />
                    <Link to='/note'>
                        <img title="Save changes" height="25px" src="../../../imgs/icons/save-icon.svg" onClick={this.onEditNote} />
                    </Link>
                    <Link to='/note'>
                        <img title="Cancel" height="20px" src="../../../imgs/icons/x-icon.svg" />
                    </Link>
                </div>
            </div>
        )
    }
}