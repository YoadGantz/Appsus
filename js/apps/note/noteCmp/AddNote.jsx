export default class AddNote extends React.Component {
    state = {
        type: '',
    }
    addNote = () => {
        this.props.addNote(this.state.name, this.state.imgUrl)
        this.setState({ name: '', imgUrl: '' })
    }
    inputChange = (ev) => {
        let fieldName = ev.target.name
        this.setState({ [fieldName]: ev.target.value })
    }


    render() {
        console.log(this.state)
        return <div>
            <input type="text" placeholder="title" name="name"
                value={this.state.name}></input>
            {/* in case of image */}

            <input type="text" placeholder="img Url" name="imgUrl" value={this.state.imgUrl}></input>


            <label onChange={this.updateNoteType} htmlFor="txt">
                <img height="20px" src="../imgs/icons/txt.png"></img></label>
            <input name="inputType" type="radio" value="txt" id="txt"></input>

            <label onChange={this.updateNoteType} htmlFor="img">
                <img height="20px" src="../imgs/icons/img.png"></img></label>
            <input name="inputType" type="radio" value="img" id="img"></input>

            <label htmlFor="toDo">
                <img height="20px" src="../imgs/icons/img.png"></img></label>
            <input name="inputType" type="radio" value="toDo" id="toDo"></input>

            <label htmlFor="video">
                <img height="20px" src="../imgs/icons/toDo.png"></img></label>
            <input name="inputType" type="radio" value="video" id="video"></input>

            <button onClick={this.addNote}>Add</button>
        </div>
    }
}