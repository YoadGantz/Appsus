import noteService from "../services/noteService.js";
import NoteEdit from "../noteCmp/NoteEdit.jsx"
import eventBusService from "../../services/eventBusService.js";
export default class NoteEditPage extends React.Component {
    state = {
        note: ''
    }

    componentDidMount() {
        this.loadNote();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.loadNote();
        }
    }

    loadNote() {
        const { id } = this.props.match.params;
        noteService.getNoteById(id).then(note => {
            this.setState({ note })
        })
    }

    goBack = () => { //if sent go back to sent, get it from match.. 
        this.props.history.push('/note')
    }

    onDelete = (note) => {
        noteService.deleteNote(note).then(() => {
            eventBusService.emit('delete')
            this.props.history.push('/note')
        })
    }

    onChangeBGColor = (note, color) => {
        noteService.changeBGColor(note, color)
        this.loadNote();
    }

    onChangeColor = (note, color) => {
        noteService.changeColor(note, color)
        this.loadNote();
    }

    render() {
        if (!this.state.note) return <div className="loading"> Loading...</div>
        return <ul>
            <NoteEdit
                onChangeBGColor={this.onChangeBGColor}
                delete={this.onDelete}
                onChangeColor={this.onChangeColor}
                note={this.state.note}>

            </NoteEdit>
        </ul>
    }
}