import LongTxt from "../../../apps cmps/LongTxt.jsx"
import BookReviews from "../BookReview/BookReviews.jsx";
import BookPrice from "./BookPrice.jsx";


export default class BookDetails extends React.Component {
    get bookLengthDesc() {
        const book= this.props.book
        return book.pageCount > 500 ? 'Long reading'
            : book.pageCount > 200 ? 'Decent reading'
                : book.pageCount < 100 ? 'Light reading'
                    : ''
    }

    getLanguage = () => {
        const book= this.props.book
        return book.language === 'he' ? 'Hebrew'
            : book.language === 'en' ? 'English'
                : book.language === 'sp' ? 'Spanish'
                    : book.language
    }

    getClassName = () => {
        let bookPrice = this.props.book.listPrice.amount
        return bookPrice > 150 ? 'red-font' : bookPrice < 20 ? 'green-font' : '';
    }

    render() {
        const book = this.props.book;
        const price = book.listPrice.amount
        const isOnSale = book.listPrice.isOnSale
        const currency = book.listPrice.currencyCode
        return <div>
            <button onClick={this.props.goBack}>BACK</button>
            <div>
                <img src={book.thumbnail} height="120px"></img>
                <h2>{book.title}</h2>
                <p className={this.getClassName()}>
                    <BookPrice
                        price={price}
                        isOnSale={isOnSale}
                        currency={currency}>
                    </BookPrice>
                </p>
                <h3>
                    <span>Subtitle</span>: {book.subtitle}
                </h3>
                <div>
                    <span>Authors</span>: {book.authors.map((author, i) => <p key={i}>{author}</p>)}
                </div>
                <p>
                    <span>Published Date</span>: {book.publishedDate}
                    {book.publishedDate > 10 ? 'Veteran Book' : book.publishedDate < 1 ? 'New!' : ''}
                </p>
                <div>
                    <span>Description</span>:
                    <LongTxt text={book.description} shortLength={80}>
                    </LongTxt>
                </div>
                <p>
                    <span>Number of pages</span>: {book.pageCount} {this.bookLengthDesc}</p>
                <p>
                    <span>Language</span>: {this.getLanguage()}
                </p>
                <ul className="categories clean-list">Categories : {book.categories.map((category, i) => { return <li key={i}> {category}</li> })}
                </ul>
                <BookReviews reviews={book.reviews} onSaveReview={this.props.onSaveReview}></BookReviews>
            </div>
        </div>
    }
}