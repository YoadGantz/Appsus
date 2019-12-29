import NoteEditControl from "./NoteEditControl.jsx";
import LongTxt from "../../apps cmps/LongTxt.jsx"

export default class NoteText extends React.Component {
    onCreateEmail = () => {
        let emailBody = this.props.note.info.txtInput
        this.props.onCreateEmail(emailBody)
    }

    onExpand = () => {
        this.props.goToDetails(this.props.note.id)
    }

    render() {
        let style = this.props.note.style || 'none';
        let bgc = style.backgroundColor || 'rgba(0,0,0,0)';
        let color = style.color || 'black';
        return <li className="note-container flex column totally-center" style={{ backgroundColor: bgc, color: color }}><div className="note-content txt full">
            <p className="note-title"> {this.props.note.info.title}</p>
            <LongTxt onExpand={this.onExpand} text={this.props.note.info.txtInput} shortLength={50}>
            </LongTxt>
        </div>
            <div className="controls-container flex">
                <NoteEditControl
                    togglePin={this.props.togglePin}
                    delete={this.props.delete}
                    note={this.props.note}
                    onChangeBGColor={this.props.onChangeBGColor}
                    onChangeColor={this.props.onChangeColor}
                    onCreateEmail={this.props.onCreateEmail}
                >
                </NoteEditControl>
                <img className="btn" title="Create an Email" onClick={this.onCreateEmail} height="25px" src="../imgs/icons/email.svg" />
            </div>
        </li>
    }
}