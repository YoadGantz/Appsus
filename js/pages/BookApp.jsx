import BookPage from '../apps/books/pages/BookPage.jsx'
import BookDetailPage from '../apps/books/pages/BookDetailPage.jsx'

const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM
const { createBrowserHistory } = History
const history = createBrowserHistory()


export default class BookApp extends React.Component {

    render() {
        return (
            <main>
                <Router history={history}>
                    <Switch>
                        <Route component={BookPage} path="/book" exact></Route>
                        <Route component={BookDetailPage} path="/book/:id" exact></Route>
                    </Switch>
                </Router>
            </main>
        )
    }
}