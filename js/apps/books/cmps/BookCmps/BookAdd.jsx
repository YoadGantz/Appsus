import bookApiService from '../../services/bookApiService.js'
import bookService from '../../services/bookService.js'


export default class BookAdd extends React.Component {
    state = {
        googleBooks: []
    }

    loadBooksResults = (ev) => {
        bookApiService.getBooksForSearch(ev.target.value)
            .then((googleBooks) => {
                this.setState({ googleBooks })
            }).catch(console.log);
    }

    onAddGoogleBook = (book) => {
        bookService.addGoogleBook(book)
    }

    render() {
        return <div>
                    <div className="search-container flex align-center">
                        <img height="20px" className="search-icon" src="../../../imgs/icons/search-icon.svg" />
                        <input className="search-input" type="search" onInput={this.loadBooksResults} placeholder="Add a book" />
                        <img className="search-x" src="../../../imgs/icons/x-icon.svg" />
                    </div>
                    <ul>
                        {this.state.googleBooks.map((googleBook, i) => {
                            return <li key={i}>{googleBook.title}
                                        <button onClick={() => this.onAddGoogleBook(googleBook)} title="Add this book">+</button>
                                    </li>})}
                    </ul>
                </div>
    }
}