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
        noteService.getNotes(this.state.filterBy).then(notes => { this.setState({ notes }) })
    }
    render() {
        return <NoteList notes={this.state.notes}></NoteList>
    }
}