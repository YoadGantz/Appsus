export default class AddForm extends React.Component {
    state={
        info:'',
    }

    onGetNewNote = () => {
        let note = '';
        switch (this.props.type) {
            case 'NoteText':
                note = {
                    type: this.props.noteType,
                    isPinned: false,
                    info: {
                        txtInput: this.state.info
                    }
                }
                break;
        }
        console.log("note on getNote", note)
        this.props.onAddNote(note) //not sure what catch does
    }

    inputChange = (ev)=>{
        let fieldName = ev.target.name
        this.setState({[fieldName] : ev.target.value})
    }

    render() {
        console.log(this.state)
        return <div>
            <input type="text" placeholder="info" 
                    name="info" 
                    onChange={this.inputChange} value={this.state.info}></input>

            <input type="text" placeholder="image url"                   name="imgUrl"  
                    onChange={this.inputChange} value={this.state.imgUrl}></input>

            <button onClick={this.onGetNewNote}>Save</button>
        </div>
    }
}