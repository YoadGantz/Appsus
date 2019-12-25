import NavBar from '../js/cmps/NavBar.jsx'
import Home from "./pages/Home.jsx"
import EmailApp from "./pages/EmailApp.jsx"
import NoteApp from "./pages/NoteApp.jsx"

const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM
const { createBrowserHistory } = History
const history = createBrowserHistory()

class Appsus extends React.Component {

    render() {
        return (
            <main className="flex column">
                <Router history={history}>
                    <NavBar></NavBar>
                    <Switch>
                        <Route component={Home} path="/" exact></Route>
                        <Route component={EmailApp} path="/email"></Route>
                        <Route component={NoteApp} path="/note" exact></Route>
                    </Switch>
                </Router>
            </main>
        )
    }
}


ReactDOM.render(
    <Appsus />,
    document.getElementById('root')
)