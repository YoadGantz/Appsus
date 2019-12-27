import NoteEditControl from "./NoteEditControl.jsx"

export default function NoteImage(props) {
    return <React.Fragment>
        <li><img src={props.note.info.txtInput} /></li>
        <NoteEditControl
            togglePin={props.togglePin}
            delete={props.delete}
            note={props.note}
            onChangeBGColor={props.onChangeBGColor}
            onChangeColor={props.onChangeColor}
        ></NoteEditControl>
    </React.Fragment>
}