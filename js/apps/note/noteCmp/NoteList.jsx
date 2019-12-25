'use strict'
export default class NoteList extends React.Component {
    render() {
        return (
            <ul>
                {this.props.notes.map(note =>
                    <h1 key={note.id}>{note.info.txt} </h1>
                )}
            </ul>
        )
    }
}