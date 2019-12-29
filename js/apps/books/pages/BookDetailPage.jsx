import bookService from '../services/bookService.js'
import BookDetails from '../cmps/BookCmps/BookDetails.jsx'

export default class BookDetailPage extends React.Component {
    state = {
        book: null
    }

    componentDidMount() {
        this.loadBook();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.loadBook();
        }
    }

    loadBook() {
        const { id } = this.props.match.params;

        bookService.getBookById(id).then(book => {
            this.setState({ book })
        })
    }

    goBack = () => {
        this.props.history.push('/books')
    }

    onSaveReview = (review) => {
        bookService.saveReview(this.state.book.id, review).then(book => {
            this.setState({ book })
        })
    }

    render() {
        if (!this.state.book) return <div className="loading"> Loading...</div>
        return <BookDetails book={this.state.book} onSaveReview={this.onSaveReview} goBack={this.goBack}></BookDetails>
    }
}