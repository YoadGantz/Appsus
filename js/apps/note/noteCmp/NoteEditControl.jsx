export default class NoteEditControl extends React.Component {

    render() {
        return <React.Fragment>
            <label htmlFor="bgc">bgc</label>
            <input onChange={(ev) => this.props.onChangeBGColor(this.props.note, ev.target.value)} type="color" name="bgc" id="bgc" />
            <label htmlFor="font-color">bgc</label>
            <input onChange={(ev) => this.props.onChangeColor(this.props.note, ev.target.value)} type="color" name="font-color" id="font-color" />
            <button onClick={() => this.props.delete(this.props.note)}></button>
        </React.Fragment>
    }
}