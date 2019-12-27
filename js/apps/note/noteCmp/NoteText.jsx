import NoteEditControl from "./NoteEditControl.jsx";

export default class NoteText extends React.Component {
    onCreateEmail = () => {
        let emailBody = this.props.note.info.txtInput
        this.props.onCreateEmail(emailBody)
    }

    render() {
        let style = this.props.note.style || 'none';
        let bgc = style.backgroundColor || 'rgba(0,0,0,0)';
        let color = style.color || 'black';
        return <li style={{ backgroundColor: bgc, color: color }}>
            {this.props.note.info.txtInput}
            <NoteEditControl
                togglePin={this.props.togglePin}
                delete={this.props.delete}
                note={this.props.note}
                onChangeBGColor={this.props.onChangeBGColor}
                onChangeColor={this.props.onChangeColor}
            ></NoteEditControl>
            <img onClick={this.onCreateEmail} height="25px" src="../imgs/icons/email.svg" />
        </li>
    }
}