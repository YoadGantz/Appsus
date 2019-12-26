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
        console.log("info txt ",this.state.infoTxt)
        this.setState({ infoTxt: '' })
    }

    inputChange = (ev) => {
        this.setState({ infoTxt: ev.target.value })
    }

    render() {
        return <div>
            <div>
                <input type="text" placeholder="info"
                    name="info"
                    onChange={this.inputChange} value={this.state.infoTxt}></input>
                <button onClick={this.onSave}>Save</button>
            </div>

            {/* set type labels */}
            {/* create another comp for the labels. */}

            <label htmlFor="NoteText">
                <img height="20px" src="../imgs/icons/txt.png"/>
            </label>
            <input onChange={this.updateNoteType} name="inputType" type="radio" value="NoteText" id="NoteText"/>

            <label htmlFor="NoteTodos">
                <img height="20px" src="../imgs/icons/toDo.png"/>
            </label>
            <input onChange={this.updateNoteType} name="inputType" type="radio" value="NoteTodos" id="NoteTodos"/>

            <label htmlFor="NoteImage">
                <img height="20px" src="../imgs/icons/img.png"/>
            </label>
            <input onChange={this.updateNoteType} name="inputType" type="radio" value="NoteImage" id="NoteImage"/>

            <label htmlFor="NoteVideo">
                    <img height="20px" src="../imgs/icons/vid.png"/>
            </label>
            <input onChange={this.updateNoteType} name="inputType" type="radio" value="NoteVideo" id="NoteVideo"/>
        </div>
    }
}