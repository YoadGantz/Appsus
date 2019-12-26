const { Link } = ReactRouterDOM

export default class NoteEditControl extends React.Component {

    render() {
        const note = this.props.note
        return <React.Fragment>
            <label>bgc
            <input onChange={(ev) => {
                    this.props.onChangeBGColor(note, ev.target.value)
                }} type="color" name="bgc" id="bgc" />
            </label>
            <label>color
                <input onChange={(ev) => this.props.onChangeColor(note, ev.target.value)} type="color" name="font-color" id="font-color" />
            </label>
            <button onClick={() => this.props.delete(note)}>X</button>
            <Link to={`/note/edit/${note.id}`}><img height="20px"src="../../../../imgs/icons/edit.svg" /></Link>
        </React.Fragment>
    }
}