export default function NoteImage(props) {
    console.log(props.note.info.url);
    
    return <li><img src={props.note.info.url}/></li>
}