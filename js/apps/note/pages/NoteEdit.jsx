import noteService from "../services/noteService.js";
import DynamicNotePrev from "../noteCmp/DynamicNotePrev.jsx";

export default class NoteEdit extends React.Component {
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
        noteService.deleteNote(note)
        this.props.history.push('/note')
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
        console.log('hey', this.state.note);

        if (!this.state.note) return <div className="loading"> Loading...</div>
        return <ul>
            <DynamicNotePrev
                onChangeBGColor={this.onChangeBGColor}
                delete={this.onDelete}
                onChangeColor={this.onChangeColor}
                note={this.state.note}>
            </DynamicNotePrev>
        </ul>
    }
}