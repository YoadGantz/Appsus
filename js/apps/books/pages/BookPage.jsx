import bookService from '../services/bookService.js'
import BookList from '../cmps/BookCmps/BookList.jsx'
import BookAdd from '../cmps/BookCmps/BookAdd.jsx'
import Filter from '../cmps/BookCmps/Filter.jsx'

export default class BooksApp extends React.Component {
    state = {
        books: [],
        filterBy: {
            priceFrom: '',
            priceTo: Infinity,
            name: ''
        }
    }

    componentDidMount() {
        this.loadBooks();
    }

    loadBooks = () => {
        bookService.getBooks
            (this.state.filterBy).then(books => {
                this.setState({ books })
            })
    }

    onSetFilter = (newFilterByField) => {
        this.setState(prevState => ({ filterBy: { ...prevState.filterBy, ...newFilterByField } }), this.loadBooks);
    }

    render() {
        return (
            <section>
                <h1>Books</h1>
                <BookAdd></BookAdd>
                <Filter filterBy={this.state.filterBy} onSetFilter={this.onSetFilter}></Filter>
                <BookList books={this.state.books}></BookList>
            </section>
        )
    }
}