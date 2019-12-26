import NoteEditControl from "./NoteEditControl.jsx"
export default class NoteTodos extends React.Component {
    state = { currTodo: null }

    todoDone = (todo) => {
        todo.isDone = !todo.isDone
        this.setState({ currTodo: todo })
    }

    render() {
        let todos = this.props.note.info.txtInput
        return <React.Fragment>
            <li>
                <ul>{todos.map((todo, i) => {

                    return <li className={(todo.isDone ? 'done' : '')} key={i}>{todo.txtInput}
                        <input type="checkbox" onClick={() => this.todoDone(todo)} />
                    </li>

                })}
                </ul>
            </li>
            <NoteEditControl
                delete={this.props.delete}
                note={this.props.note}
                onChangeBGColor={this.props.onChangeBGColor}
                onChangeColor={this.props.onChangeColor}
            ></NoteEditControl>

        </React.Fragment>
    }
}
