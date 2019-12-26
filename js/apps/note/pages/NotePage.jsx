import noteService from "../services/noteService.js";
import AddNote from "../noteCmp/AddNote.jsx";
import NoteList from "../noteCmp/NoteList.jsx";

export default class InboxPage extends React.Component {
    state = {
        notes: []
    }

    componentDidMount() {
        this.loadNotes();
    }

    onDelete = (note) => {
        noteService.deleteNote(note).then(this.loadNotes);
    }

    onChangeBGColor = (note, color) => {
        noteService.changeBGColor(note, color)
        this.loadNotes();
    }

    onChangeColor = (note, color) => {
        noteService.changeColor(note, color)
        this.loadNotes();
    }

    loadNotes = () => {
        noteService.getNotes(this.state.filterBy).then(notes => { this.setState({ notes }) })
    }

    onAddNote = (noteType, noteInfo) => {
        return noteService.addNote(noteType, noteInfo).then(newNote => { this.loadNotes() })

    }

    render() {
        return <React.Fragment>
            <AddNote onAddNote={this.onAddNote}></AddNote>
            <NoteList
                onChangeColor={this.onChangeColor}
                onChangeBGColor={this.onChangeBGColor}
                delete={this.onDelete}
                notes={this.state.notes}>
            </NoteList>

        </React.Fragment>
    }
}