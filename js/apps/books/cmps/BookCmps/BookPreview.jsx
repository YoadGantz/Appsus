const { Link } = ReactRouterDOM
import BookPrice from './BookPrice.jsx'

export default class BookPreview extends React.Component {
    getClassName = () => {
        let bookPrice = this.props.book.listPrice.amount
        return bookPrice > 150 ? 'red-font' : bookPrice < 20 ? 'green-font' : '';
    }

    render() {
        const book = this.props.book;
        const price = book.listPrice.amount
        const isOnSale = book.listPrice.isOnSale
        const currency = book.listPrice.currencyCode

        return <Link to={`/book/${book.id}`}>
                <li className="book-preview">
                    <img src={book.thumbnail} height="120px"></img>
                    <h2>{book.title}</h2>
                    <p className={this.getClassName()}>
                        <BookPrice 
                        price={price} 
                        isOnSale={isOnSale} 
                        currency={currency}>
                        </BookPrice>
                    </p>
                </li>
                </Link>
    }
}