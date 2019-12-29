import NoteEditControl from "./NoteEditControl.jsx"
export default class NoteTodos extends React.Component {
    state = { currTodo: null }

    onTodoDone = (todo, todoId, noteId) => {
        this.setState({ currTodo: todo })
        this.props.onTodoDone(todoId, noteId)
    }

    render() {
        let todos = this.props.note.info.txtInput
        let style = this.props.note.style || 'none';
        let bgc = style.backgroundColor || 'rgba(0,0,0,0)';
        let color = style.color || 'black';
        return <React.Fragment>
            <li class-name="note-container flex column totally-center"
                style={{ backgroundColor: bgc, color: color }}>
                <p className="note-title"> {this.props.note.info.title}</p>
                <ul className="note-content full">{todos.map((todo, i) => {

                    return <li className={(todo.isDone ? 'done' : '')} key={i}>{todo.txtInput}
                        <input type="checkbox" checked={todo.isDone} onClick={() => this.props.onTodoDone(todo.id, this.props.note.id)}></input>
                    </li>

                })}
                </ul>
                <NoteEditControl
                    togglePin={this.props.togglePin}
                    delete={this.props.delete}
                    note={this.props.note}
                    onChangeBGColor={this.props.onChangeBGColor}
                    onChangeColor={this.props.onChangeColor}
                ></NoteEditControl>
            </li>
        </React.Fragment>
    }
}
