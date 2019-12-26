export default function Search(props) {

    function inputChange(ev) {
        let input = ev.target.value
        props.handleChange(input)

    }
    return <input type="search" name="search" id="search" placeholder="Search" onChange={inputChange} />
}