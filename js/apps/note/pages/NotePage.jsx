import noteService from "../services/noteService.js";
import NoteList from "../noteCmp/NoteList.jsx";

export default class InboxPage extends React.Component {
    state = {
        notes: []
    }

    componentDidMount() {
        this.loadNotes();
    }

    loadNotes = () => {
        noteService.getNotes(this.state.filterBy).then(note => { this.setState({ notes }) })
    }
    render() {
        return <NoteList emails={this.state.notes}></NoteList>
    }
}