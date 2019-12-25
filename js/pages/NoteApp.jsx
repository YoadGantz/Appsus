import NotePage from "../apps/note/pages/NotePage.jsx";

const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM
const { createBrowserHistory } = History
const history = createBrowserHistory()

export default class EmailApp extends React.Component {
    render() {
        return (<content>
            <Router history={history}>
                <Switch>
                    <Route component={NotePage} path="/note"></Route>
                    <Route component={NotePage} path="/note/:id"></Route>
                </Switch>
            </Router>
        </content>
        )
    }
}