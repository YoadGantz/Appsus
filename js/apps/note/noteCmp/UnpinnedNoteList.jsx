import DynamicNotePrev from "./DynamicNotePrev.jsx";

export default class UnpinnedNoteList extends React.Component {
    render() {
        return <React.Fragment>
            <h2>Unpinned</h2>
            <ul className="notes-container">
                {this.props.notes.map(note =>
                    <DynamicNotePrev
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