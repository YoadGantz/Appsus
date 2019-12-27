import InboxPage from "../apps/email/pages/InboxPage.jsx";
import SentPage from "../apps/email/pages/SentPage.jsx";
import EmailDetailPage from "../apps/email/pages/EmailDetailPage.jsx";
import EmailNavBar from "../apps/email/emailCmp/EmailNavBar.jsx"
import ComposeEmail from "../apps/email/pages/ComposeEmail.jsx";
import UserMsg from "../cmps/UserMsg.jsx";

const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM
const { createBrowserHistory } = History
const history = createBrowserHistory()

export default class EmailApp extends React.Component {
    state = {
        unReadCount: 0
    }

    setUnReadCount = (unReadCount) => {
        this.setState({ unReadCount: unReadCount })
    }

    render() {
        return (<section className="flex">
            <UserMsg></UserMsg>
            <Router history={history}>
                <EmailNavBar unReadCount={this.state.unReadCount}></EmailNavBar>
                <Switch>
                    <Route component={ComposeEmail} path="/email/compose"></Route>
                    <Route render={(props) => <InboxPage {...props} setUnReadCount={this.setUnReadCount} />} path="/email/inbox" exact></Route>
                    <Route component={SentPage} path="/email/sent"></Route>
                    <Route render={(props) => <EmailDetailPage {...props} setUnReadCount={this.setUnReadCount} />} path="/email/:id" exact></Route>
                </Switch>
            </Router>
        </section>)
    }
}