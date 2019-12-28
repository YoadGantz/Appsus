import NoteEditControl from "./NoteEditControl.jsx"

export default function NoteImage(props) {
    let style = props.note.style || 'none';
    let bgc = style.backgroundColor || 'rgba(0,0,0,0)';
    let color = style.color || 'black';
    return <React.Fragment>
        <li class-name="image-note" style={{ backgroundColor: bgc, color: color }}><img src={props.note.info.txtInput} />
            <span className="note-controls">

                <NoteEditControl
                    togglePin={props.togglePin}
                    delete={props.delete}
                    note={props.note}
                    onChangeBGColor={props.onChangeBGColor}
                    onChangeColor={props.onChangeColor}>
                </NoteEditControl>
            </span>
        </li>
    </React.Fragment>
}