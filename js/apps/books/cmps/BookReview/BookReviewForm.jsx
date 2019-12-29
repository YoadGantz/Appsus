export default class ReviewForm extends React.Component {
    state = {
        review: {
            fullName: 'Book reader',
            readAt: new Date(),
            rate: 1,
            freeTxt: ''
        }
    }

    changeInput = (ev) => {
        const field = ev.target.name;
        const value = ev.target.value
        this.setState(prevState => ({ review: { ...prevState.review, [field]: value } }))
    }

    onSaveReview = (ev) => {
        ev.preventDefault()
        this.props.onSaveReview({...this.state.review});
    }

    render() {
        return <form>
            <input name="fullName" type="text" value={this.state.fullName} placeholder="Full Name" onChange={this.changeInput} />
            <select name="rate" value={this.state.rate} onChange={this.changeInput} >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <input name="readAt" type="date" value={this.state.readAt} placeholder="Read At" onChange={this.changeInput} />
            <input name="freeTxt" type="text" value={this.state.freeTxt} placeholder="More" onChange={this.changeInput} />
            <button onClick={this.onSaveReview}>Save</button>
        </form>
    }
}