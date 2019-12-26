'use strict'

import DynamicNotePrev from './DynamicNotePrev.jsx'

export default class NoteList extends React.Component { //switch to function maybe 
    render() {
        return (
            <ul>
                {this.props.notes.map(note =>
                    <DynamicNotePrev delete={this.props.delete} key={note.id} note={note}></DynamicNotePrev>
                )}
            </ul>
        )
    }
}