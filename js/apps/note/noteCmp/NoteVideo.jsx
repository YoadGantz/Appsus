import NoteEditControl from "./NoteEditControl.jsx"

export default class NoteVideo extends React.Component {
    render() {
        let vidUrl = this.props.note.info.txtInput
        let style = this.props.note.style || 'none';
        let bgc = style.backgroundColor || 'rgba(0,0,0,0)';
        let color = style.color || 'black';
        return <React.Fragment>
            <li style={{ backgroundColor: bgc, color: color }}><iframe type="text/html" id="player" width="200" height="150" src={vidUrl} frameBorder="0"></iframe></li>
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
