import BookPage from '../apps/books/pages/BookPage.jsx'
import BookDetailPage from '../apps/books/pages/BookDetailPage.jsx'

const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM
const { createBrowserHistory } = History
const history = createBrowserHistory()


export default class BookApp extends React.Component {

    render() {
        return (
            <div className="book-app flex align-center column">
                <Router history={history}>
                    <Switch>
                        <Route component={BookPage} path="/book" exact></Route>
                        <Route component={BookDetailPage} path="/book/:id" exact></Route>
                    </Switch>
                </Router>
                </div>
        )
    }
}