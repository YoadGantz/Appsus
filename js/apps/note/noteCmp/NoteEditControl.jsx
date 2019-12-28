const { Link } = ReactRouterDOM

export default class NoteEditControl extends React.Component {
    render() {
        const note = this.props.note
        return <div className="note-controls flex totally-center">
            <img className="btn" height="20px" width="20px" src={note.isPinned ? "../../../../imgs/icons/unpin.svg" : "../../../../imgs/icons/pin.svg"} onClick={() => this.props.togglePin(note)} />
            <label>
                <img className="btn" height="25px" src="../../../../imgs/icons/paint.svg" />
                <input onChange={(ev) => {
                    this.props.onChangeBGColor(note, ev.target.value)
                }} type="color" name="bgc" id="bgc" />
            </label>
            <label>
                <img className="btn" height="25px" src="../../../../imgs/icons/paint-bucket.svg" />
                <input onChange={(ev) => this.props.onChangeColor(note, ev.target.value)} type="color" name="font-color" id="font-color" />
            </label>
            <img className="btn" onClick={() => this.props.delete(note)} height="25px" src="../../../imgs/icons/delete.svg" />
            
            <Link to={`/note/edit/${note.id}`}><img height="25px" src="../../../../imgs/icons/edit.svg" /></Link>
        </div>
    }
}