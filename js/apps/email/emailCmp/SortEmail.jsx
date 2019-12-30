export default function SortEmail(props) {

    function inputChange(ev) {
        let input = ev.target.value
        props.handleChange(input)
    }
    return <select className="btn" name="sortBy" id="sortBy" onChange={inputChange}>
        <option className="border" value="date">Date</option>
        <option className="border" value="subject">Subject</option>
    </select>
}