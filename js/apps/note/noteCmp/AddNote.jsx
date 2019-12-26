import AddForm from './AddForm.jsx'

export default class AddNote extends React.Component {
    state = {
        type: 'NoteText'
    }

    updateNoteType = (ev) => {
        let noteType = ev.target.value
        this.setState({ type: noteType })
    }

    render() {
        // console.log(this.state)
        return <div>
            {/* set type labels */}
            <AddForm noteType={this.state.type} onAddNote={this.props.onAddNote}></AddForm>
            {/* create another comp for the labels. */}
            
            <label htmlFor="NoteText">
                <img height="20px" src="../imgs/icons/txt.png"></img></label>
            <input onChange={this.updateNoteType} name="inputType" type="radio" value="NoteText" id="NoteText" />
            {/* 
            <label onChange={this.updateNoteType} htmlFor="toDo">
                <img height="20px" src="../imgs/icons/img.png"></img></label>
            <input name="inputType" type="radio" value="toDo" id="toDo"></input> */}

            <label htmlFor="NoteImage">
                <img height="20px" src="../imgs/icons/img.png"></img></label>
            <input onChange={this.updateNoteType} name="inputType" type="radio" value="NoteImage" id="NoteImage" />

            {/* <label onChange={this.updateNoteType} htmlFor="video">
                <img height="20px" src="../imgs/icons/toDo.png"></img></label>
            <input name="inputType" type="radio" value="video" id="video"></input> */}

        </div>
    }
}