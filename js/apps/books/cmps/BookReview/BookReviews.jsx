import BookReviewForm from './BookReviewForm.jsx'

export default class BookReviews extends React.Component{
    render(){

        let reviews = this.props.reviews
        return <div>
            <BookReviewForm onSaveReview={this.props.onSaveReview}></BookReviewForm>
            <ul>
                {reviews && reviews.map((review, i) => <li key={i}>{review.freeTxt}</li>  )}
            </ul>
        </div>
    }
}