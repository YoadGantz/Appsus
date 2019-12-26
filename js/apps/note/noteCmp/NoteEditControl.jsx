const { Link } = ReactRouterDOM

export default class NoteEditControl extends React.Component {

    render() {
        console.log(this.props.note.info.txtInput)
        return <React.Fragment>
            <label>bgc
            <input onChange={(ev) => {
                    this.props.onChangeBGColor(note, ev.target.value)
                }} type="color" name="bgc" id="bgc" />
            </label>
            <label>color
                <input onChange={(ev) => this.props.onChangeColor(note, ev.target.value)} type="color" name="font-color" id="font-color" />
            </label>
            <button onClick={() => this.props.delete(this.props.note)}>X</button>
            <Link to={`/note/edit/${this.props.note.id}`}><img height="20px"src="../../../../imgs/icons/edit.svg" /></Link>
        </React.Fragment>
    }
}