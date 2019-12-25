const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM
const { createBrowserHistory } = History
const history = createBrowserHistory()

class Appsus extends React.Component {

    render() {
        return (
            <main>
                <h1>Appsus</h1>
            </main>
        )
    }
}


ReactDOM.render(
    <Appsus />,
    document.getElementById('root')
)