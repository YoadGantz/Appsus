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

    loadNotes = () => {
        noteService.getNotes(this.state.filterBy).then(notes => { this.setState({ notes }) })
    }

    onAddNote = (note) => {
        console.log('final note before adding', note) // this is where the problem is.. arrives empty 
       return noteService.addNote(note).then(newNote => { this.loadNotes()}) 
    }

    render() {
        return <React.Fragment>
            <AddNote onAddNote={this.onAddNote}></AddNote>
            <NoteList notes={this.state.notes}></NoteList>
        </React.Fragment>
    }
}