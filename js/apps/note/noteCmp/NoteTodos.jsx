export default class NoteTodos extends React.Component {
    state = { currTodo: null }

    todoDone = (todo) => {
        todo.isDone = !todo.isDone
        this.setState({ currTodo: todo })
    }

    render() {
        let todos = this.props.note.info.txtInput
        console.log(todos)
        return <li>
            <ul>{todos.map((todo, i) => {
                console.log("todoisDone inside render", todo.isDone)
                return <li className={(todo.isDone ? 'done' : '')} key={i}>{todo.txtInput}<input type="checkbox" onClick={() => this.todoDone(todo)} /></li>
            })}
            </ul>
        </li>
    }
}

// onClick={() => this.props.delete(this.props.note)}