import NavBar from '../js/cmps/NavBar.jsx'
import HomePage from "./pages/Home.jsx/index.js"
import EmailPage from "./pages/EmailApp.jsx/index.js"
import NotePage from "./pages/NoteApp.jsx/index.js"

const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM
const { createBrowserHistory } = History
const history = createBrowserHistory()

class Appsus extends React.Component {

    render() {
        return (
            <main>
                <Router history={history}>
                    <NavBar></NavBar>
                    <Switch>
                        <Route component={HomePage} path="/" exact></Route>
                        <Route component={EmailPage} path="/email" exact></Route>
                        <Route component={NotePage} path="/note" exact></Route>
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