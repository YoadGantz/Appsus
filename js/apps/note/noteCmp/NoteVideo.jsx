import NoteEditControl from "./NoteEditControl.jsx"

export default class NoteVideo extends React.Component {
    render() {
        let vidUrl = this.props.note.info.txtInput
        return <React.Fragment>
            <li><iframe type="text/html" id="player" width="200" height="150" src={vidUrl} frameBorder="0"></iframe></li>
            <NoteEditControl
                togglePin={this.props.togglePin}
                delete={this.props.delete}
                note={this.props.note}
                onChangeBGColor={this.props.onChangeBGColor}
                onChangeColor={this.props.onChangeColor}
            ></NoteEditControl>
        </React.Fragment>
    }
}//add iframe 
