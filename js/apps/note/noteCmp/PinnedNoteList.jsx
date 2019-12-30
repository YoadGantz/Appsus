import DynamicNotePrev from "./DynamicNotePrev.jsx";

export default class PinnedNoteList extends React.Component {
    render() {
        return <React.Fragment>
            <h2>Pinned</h2>
            <ul className="notes-container clean-list pinned">
                {this.props.notes.map(note =>
                    <DynamicNotePrev
                        onTodoDone={this.props.onTodoDone}
                        key={note.id}
                        onChangeBGColor={this.props.onChangeBGColor}
                        delete={this.props.delete}
                        togglePin={this.props.togglePin}
                        note={note}
                        onChangeColor={this.props.onChangeColor}
                        onCreateEmail={this.props.onCreateEmail}>
                    </DynamicNotePrev>
                )}
            </ul>
        </React.Fragment>
    }
}