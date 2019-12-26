'use strict'

import DynamicNotePrev from './DynamicNotePrev.jsx'

export default class NoteList extends React.Component { //switch to function maybe 
    render() {
        return (
            <ul>
                {this.props.notes.map(note =>
                    <DynamicNotePrev
                    key={note.id} 
                    onChangeBGColor={this.props.onChangeBGColor} 
                    delete={this.props.delete} 
                    note={note} 
                    onChangeColor={this.props.onChangeColor}>
                    </DynamicNotePrev>
                )}
            </ul>
        )
    }
}