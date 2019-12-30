export default class NoteTypeOptions extends React.Component {
    state = {
        active: 'NoteText'
    }
    updateActive = (ev) => {
        let currActive = ev.target.value
        this.setState({
            active: currActive
        })
    }

    render() {
        return <div className="types-container flex align-center">
            <label className={(this.state.active === "NoteText") ? 'totally-center type-active label-type' : 'totally-center label-type'} htmlFor="NoteText" onClick={this.updateActive}>
                <img className="btn btn-type" height="25px" src="./imgs/icons/txt.svg" />
                <input onChange={this.props.updateNoteType} name="inputType" type="radio" value="NoteText" id="NoteText" />
            </label>

            <label className={(this.state.active === "NoteTodos") ? 'totally-center type-active label-type' : 'totally-center label-type'} htmlFor="NoteTodos" onClick={this.updateActive}>
                <img className="btn btn-type" height="25px" src="./imgs/icons/todo.svg" />
                <input onChange={this.props.updateNoteType} name="inputType" type="radio" value="NoteTodos" id="NoteTodos" />
            </label>

            <label className={(this.state.active === "NoteImage") ? 'totally-center type-active label-type' : 'totally-center label-type'} htmlFor="NoteImage" onClick={this.updateActive}>
                <img className="btn btn-type" height="25px" src="./imgs/icons/img.svg" />
                <input onChange={this.props.updateNoteType} name="inputType" type="radio" value="NoteImage" id="NoteImage" />
            </label>

            <label className={(this.state.active === "NoteVideo") ? 'totally-center type-active label-type' : 'totally-center label-type'} htmlFor="NoteVideo" onClick={this.updateActive}>
                <img className="btn btn-type" height="25px" src="./imgs/icons/vid.svg" />
                <input onChange={this.props.updateNoteType} name="inputType" type="radio" value="NoteVideo" id="NoteVideo" />
            </label>
        </div>
    }
}