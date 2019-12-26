export default class NoteVideo extends React.Component {
    render() {
        let vidUrl = this.props.note.info.txtInput
        return <li><iframe type="text/html" id="player" width = "200" height="150" src={vidUrl} frameBorder="0"></iframe></li>
    }
}//add iframe 
