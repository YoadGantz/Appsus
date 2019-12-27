export default function FilterEmail(props) {

    function inputChange(ev) {
        let input = ev.target.value
        props.handleChange(input)

    }
    return <select name="filterReadStatus" id="filterReadStatus" onChange={inputChange}>
        <option value="isAll">All</option>
        <option value="isRead">Read</option>
        <option value="isUnread">Unread</option>
    </select>
}