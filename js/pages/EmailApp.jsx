import InboxPage from "../apps/email/pages/InboxPage.jsx";
import SentPage from "../apps/email/pages/SentPage.jsx";
import EmailDetailPage from "../apps/email/pages/EmailDetailPage.jsx";
import EmailNavBar from "../apps/email/emailCmp/EmailNavBar.jsx"

const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM
const { createBrowserHistory } = History
const history = createBrowserHistory()

export default class EmailApp extends React.Component {
    render() {
        return (<content className="flex">
            <Router history={history}>
                <EmailNavBar></EmailNavBar>
                <Switch>
                    <Route component={InboxPage} path="/email/inbox"></Route>
                    <Route component={SentPage} path="/email/sent"></Route>
                    <Route component={EmailDetailPage} path="/email/:id"></Route>
                </Switch>
            </Router>
        </content>
        )
    }
}