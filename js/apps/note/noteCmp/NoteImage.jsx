import NoteEditControl from "./NoteEditControl.jsx"

export default function NoteImage(props) {
    let style = props.note.style || 'none';
    let bgc = style.backgroundColor || 'rgba(0,0,0,0)';
    let color = style.color || 'black';
    return <React.Fragment>
        <li class-name="note-container column totally-center" style={{ backgroundColor: bgc, color: color }}>
            <div className="note-content flex justify-center full img">
                <img className="note-img" src={props.note.info.txtInput} />
            </div>
            <p className="note-title"> {props.note.info.title}</p>
            <div className="controls-container">
                <NoteEditControl
                    togglePin={props.togglePin}
                    delete={props.delete}
                    note={props.note}
                    onChangeBGColor={props.onChangeBGColor}
                    onChangeColor={props.onChangeColor}>
                </NoteEditControl>
            </div>
        </li>
    </React.Fragment>
}