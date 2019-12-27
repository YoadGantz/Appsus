import DynamicNotePrev from "./DynamicNotePrev.jsx";

export default class PinnedNoteList extends React.Component {
    render() {
        return <React.Fragment>
            <h2>Pinned</h2>
            <ul className="notes-container">
                {this.props.notes.map(note =>
                    <DynamicNotePrev
                        key={note.id}
                        onChangeBGColor={this.props.onChangeBGColor}
                        delete={this.props.delete}
                        togglePin={this.props.togglePin}
                        note={note}
                        onChangeColor={this.props.onChangeColor}>
                    </DynamicNotePrev>
                )}
            </ul>
        </React.Fragment>
    }
}