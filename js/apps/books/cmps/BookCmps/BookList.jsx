import BookPreview from "./BookPreview.jsx"

export default function BooksList(props) {
    return <ul className="clean-list books-container">{props.books.map((book, i) => <BookPreview key={i} book={book}></BookPreview>)} </ul>
}

