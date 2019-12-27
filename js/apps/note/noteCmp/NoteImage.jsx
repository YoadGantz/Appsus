import NoteEditControl from "./NoteEditControl.jsx"

export default function NoteImage(props) {
    let style = props.note.style || 'none';
    let bgc = style.backgroundColor || 'rgba(0,0,0,0)';
    let color = style.color || 'black';
    return <React.Fragment>
        <li style={{ backgroundColor: bgc, color: color }}><img src={props.note.info.txtInput} /></li>
        <NoteEditControl
            togglePin={props.togglePin}
            delete={props.delete}
            note={props.note}
            onChangeBGColor={props.onChangeBGColor}
            onChangeColor={props.onChangeColor}
        ></NoteEditControl>
    </React.Fragment>
}