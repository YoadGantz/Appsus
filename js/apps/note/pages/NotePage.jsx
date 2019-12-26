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
        noteService.deleteNote(note)
        this.loadNotes();
    }

    loadNotes = () => {
        noteService.getNotes(this.state.filterBy).then(notes => { this.setState({ notes }) })
    }
    render() {
        return <React.Fragment>
            <AddNote></AddNote>
            <NoteList delete={this.onDelete} notes={this.state.notes}></NoteList>
        </React.Fragment>
    }
}