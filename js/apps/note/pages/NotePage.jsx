import noteService from "../services/noteService.js";
import AddNote from "../noteCmp/AddNote.jsx";
import NoteList from "../noteCmp/NoteList.jsx";
import Search from "../../apps cmps/Search.jsx";
import eventBusService from "../../services/eventBusService.js";

export default class InboxPage extends React.Component {
    state = {
        notes: [],
        filterBy: ''
    }

    componentDidMount() {
        this.loadNotes();
        this.getNoteFromUrl();
    }

    onTodoDone = (todoId, noteId) => {
        noteService.toggleIsDone(todoId, noteId).then(this.loadNotes)
    }

    getNoteFromUrl = () => {
        let noteType = 'NoteText'
        let noteInfo = this.props.history.location.search
        noteInfo = decodeURI(noteInfo)
        noteInfo = noteInfo.substring(noteInfo.indexOf('=') + 1)
        if (noteInfo) this.onAddNote(noteType, noteInfo)
        this.props.history.push(`/note`)
    }

    onDelete = (note) => {
        noteService.deleteNote(note).then(() => {
            eventBusService.emit('delete')
            this.loadNotes()
        });
    }

    onTogglePin = (note) => {
        noteService.togglePin(note).then(this.loadNotes)
    }

    onChangeBGColor = (note, color) => {
        noteService.changeBGColor(note, color).then(this.loadNotes)
    }

    onChangeColor = (note, color) => {
        noteService.changeColor(note, color).then(this.loadNotes)
    }

    loadNotes = () => {
        noteService.query(this.state.filterBy).then(notes => { this.setState({ notes }) })
    }

    onAddNote = (noteType, noteInfo) => {
        return noteService.addNote(noteType, noteInfo).then(newNote => {
            eventBusService.emit('addNote')
            this.loadNotes()
        })
    }

    handleChange = (changeFilter) => {
        this.setState({ filterBy: changeFilter }, this.loadNotes)
    }

    onCreateEmail = (emailBody) => {
        this.props.history.push(`/email/compose?note=${emailBody}`)
    }

    render() {
        return <div className="app-container">
            <AddNote onAddNote={this.onAddNote}></AddNote>
            <Search filterBy={this.state.filterBy} handleChange={this.handleChange}></Search>
            <NoteList
                onTodoDone={this.onTodoDone}
                togglePin={this.onTogglePin}
                onChangeColor={this.onChangeColor}
                onChangeBGColor={this.onChangeBGColor}
                delete={this.onDelete}
                notes={this.state.notes}
                onCreateEmail={this.onCreateEmail}>
            </NoteList>
        </div>
    }
}