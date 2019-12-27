const { Link } = ReactRouterDOM

export default class NoteEditControl extends React.Component {
    render() {
        return <React.Fragment>
            <label><img height="25px" src="../../../../imgs/icons/paint.svg" />
                <input onChange={(ev) => {
                    this.props.onChangeBGColor(note, ev.target.value)
                }} type="color" name="bgc" id="bgc" />
            </label>
            <label><img height="25px" src="../../../../imgs/icons/paint-bucket.svg" />
                <input onChange={(ev) => this.props.onChangeColor(note, ev.target.value)} type="color" name="font-color" id="font-color" />
            </label>
            <span onClick={() => this.props.delete(this.props.note)}><img height="25px" src="../../../imgs/icons/delete.svg" /></span>
            <Link to={`/note/edit/${this.props.note.id}`}><img height="25px" src="../../../../imgs/icons/edit.svg" /></Link>
        </React.Fragment>
    }
}