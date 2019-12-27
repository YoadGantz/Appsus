import NoteEditControl from "./NoteEditControl.jsx"
export default class NoteTodos extends React.Component {
    state = { currTodo: null }

    todoDone = (todo) => {
        todo.isDone = !todo.isDone
        this.setState({ currTodo: todo })
    }

    render() {
        let todos = this.props.note.info.txtInput
        let style = this.props.note.style || 'none';
        let bgc = style.backgroundColor || 'rgba(0,0,0,0)';
        let color = style.color || 'black';
        return <React.Fragment>
            <li style={{ backgroundColor: bgc, color: color }}>
                <ul>{todos.map((todo, i) => {

                    return <li className={(todo.isDone ? 'done' : '')} key={i}>{todo.txtInput}
                        <input type="checkbox" onClick={() => this.todoDone(todo)} />
                    </li>

                })}
                </ul>
            </li>
            <NoteEditControl
                togglePin={this.props.togglePin}
                delete={this.props.delete}
                note={this.props.note}
                onChangeBGColor={this.props.onChangeBGColor}
                onChangeColor={this.props.onChangeColor}
            ></NoteEditControl>

        </React.Fragment>
    }
}
