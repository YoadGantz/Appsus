export default function SortEmail(props) {

    function inputChange(ev) {
        let input = ev.target.value
        props.handleChange(input)
    }
    return <select name="sortBy" id="sortBy" onChange={inputChange}>
        <option value="date">Date</option>
        <option value="subject">Subject</option>
    </select>
}