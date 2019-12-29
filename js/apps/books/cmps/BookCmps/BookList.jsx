import BookPreview from "./BookPreview.jsx"

export default function BooksList(props) {
    return <ul className="flex clean-list">{props.books.map((book, i) => <BookPreview key={i} book={book}></BookPreview>)} </ul>
}

