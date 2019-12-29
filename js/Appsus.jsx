import AppsusHome from "./pages/AppsusHome.jsx"
import NavBar from '../js/cmps/NavBar.jsx'
import EmailApp from "./pages/EmailApp.jsx"
import NoteApp from "./pages/NoteApp.jsx"
import BookApp from "./pages/BookApp.jsx"

const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM
const { createBrowserHistory } = History
const history = createBrowserHistory()

class Appsus extends React.Component {

    render() {
        return (
            <div className="content-container flex column">
                <Router history={history}>
                    <NavBar></NavBar>
                    <Switch>
                        <Route component={AppsusHome} path="/" exact></Route>
                        <Route component={EmailApp} path="/email"></Route>
                        <Route component={NoteApp} path="/note"></Route>
                        <Route component={BookApp} path="/book"></Route>
                    </Switch>
                </Router>
            </div>
        )
    }
}


ReactDOM.render(
    <Appsus />,
    document.getElementById('root')
)