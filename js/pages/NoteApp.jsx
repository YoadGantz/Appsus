import NotePage from "../apps/note/pages/NotePage.jsx";
import NoteEditPage from "../apps/note/pages/NoteEditPage.jsx";

const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM
const { createBrowserHistory } = History
const history = createBrowserHistory()

export default class EmailApp extends React.Component {
    render() {
        return (<content>
            <Router history={history}>
                <Switch>
                    <Route component={NotePage} path="/note" exact></Route>
                    <Route component={NoteEditPage} path="/note/edit/:id" exact></Route>
                </Switch>
            </Router>
        </content>
        )
    }
}