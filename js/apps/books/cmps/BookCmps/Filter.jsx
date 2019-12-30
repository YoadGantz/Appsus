export default class Filter extends React.Component {
    changeInput = (ev) => {
        const field = ev.target.name;
        let value = (ev.target.type === 'number') ? +ev.target.value : ev.target.value

        if (field=== 'priceFrom' && ev.target.value === '')  value = ''
        if (field=== 'priceTo' && ev.target.value === '')  value = Infinity
        this.props.onSetFilter({[field] : value})
    }

    render() {
       return <div className="flex align-center book-controls">
            <input type="text" name="name" placeholder="Search Book Name" value={this.props.filterBy.name} onChange={this.changeInput} />
            <input type="number" name="priceFrom" placeholder="From Price" value={this.props.filterBy.priceFrom} onChange={this.changeInput} />
            <input type="number" name="priceTo" placeholder="To Price" value={this.props.filterBy.priceTo} onChange={this.changeInput} />
        </div>
    }
}