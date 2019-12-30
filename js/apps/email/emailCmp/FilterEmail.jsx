export default function FilterEmail(props) {

    function inputChange(ev) {
        let input = ev.target.value
        props.handleChange(input)

    }
    return <select className="btn" name="filterReadStatus" id="filterReadStatus" onChange={inputChange}>
        <option className="border" value="isAll">All</option>
        <option className="border" value="isRead">Read</option>
        <option className="border" value="isUnread">Unread</option>
    </select>
}