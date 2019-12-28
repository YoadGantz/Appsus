import NoteTypeOptions from './NoteTypeOptions.jsx'

export default class AddNote extends React.Component {
    state = {
        type: 'NoteText',
        infoTxt: ''
    }

    updateNoteType = (ev) => {
        let noteType = ev.target.value
        this.setState({ type: noteType })
    }

    onSave = () => {
        this.props.onAddNote(this.state.type, this.state.infoTxt)
        this.setState({ infoTxt: '' })
    }

    inputChange = (ev) => {
        this.setState({ infoTxt: ev.target.value })
    }

    render() {
        return <div>
            <div className="add-note-container flex align-center">
                <input className="add-input full" type="text" placeholder="Take a note..." name="info"
                    onChange={this.inputChange} 
                    value={this.state.infoTxt}>
                </input>
                <NoteTypeOptions updateNoteType={this.updateNoteType}></NoteTypeOptions>
                <button className="save-btn" onClick={this.onSave}>Save</button>
            </div>
        </div>
    }
}