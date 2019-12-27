'use strict'

import PinnedNoteList from './PinnedNoteList.jsx';
import UnpinnedNoteList from './UnpinnedNoteList.jsx';

export default class NoteList extends React.Component { //switch to function maybe 
    render() {
        let pinnedNotes = this.props.notes.filter(note => {
            return note.isPinned;
        })

        let unpinnedNotes = this.props.notes.filter(note => {
            return !note.isPinned;
        })
        return (
            <React.Fragment>
                <PinnedNoteList
                    onChangeBGColor={this.props.onChangeBGColor}
                    delete={this.props.delete}
                    togglePin={this.props.togglePin}
                    notes={pinnedNotes}
                    onChangeColor={this.props.onChangeColor}>
                </PinnedNoteList>
                <UnpinnedNoteList
                    onChangeBGColor={this.props.onChangeBGColor}
                    delete={this.props.delete}
                    togglePin={this.props.togglePin}
                    notes={unpinnedNotes}
                    onChangeColor={this.props.onChangeColor}>
                </UnpinnedNoteList>
            </React.Fragment>
        )
    }
}