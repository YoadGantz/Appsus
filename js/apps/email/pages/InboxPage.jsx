import emailService from "../services/emailService.js";
import EmailList from "../emailCmp/EmailList.jsx";
import Search from "../../apps cmps/Search.jsx";
import FilterEmail from "../emailCmp/FilterEmail.jsx";
import SortEmail from "../emailCmp/SortEmail.jsx";

export default class InboxPage extends React.Component {
    state = {
        emails: [],
        filterBy: '',
        filterStatus: 'isAll',
        sortBy: 'date'
    }

    componentDidMount() {
        this.getUnReadCount()
        this.loadEmails();
    }

    handleChange = (changeFilter) => {
        this.setState({ filterBy: changeFilter }, this.loadEmails)
    }

    handleStatusChange = (changeFilter) => {
        this.setState({ filterStatus: changeFilter }, this.loadEmails)
    }

    handleSortChange = (changeSort) => {
        this.setState({ sortBy: changeSort}, this.loadEmails)
    }

    getUnReadCount = () => {
        emailService.getUnReadCount().then(count => { this.props.setUnReadCount(count) })
    }

    loadEmails = () => {
        emailService.query(this.state.filterBy, this.state.filterStatus, this.state.sortBy).then(emails => { this.setState({ emails }) })
    }

    addToSelected = (emailId) => {
        emailService.addToSelected(emailId)
    }

    render() {
        return <React.Fragment>
            <Search filterBy={this.state.filterBy} handleChange={this.handleChange}></Search>
            <FilterEmail filterStatus={this.state.filterStatus} handleChange={this.handleStatusChange}></FilterEmail>
            <SortEmail sortBy={this.state.sortBy} handleChange={this.handleSortChange}></SortEmail>
            <EmailList addToSelected={this.addToSelected} emails={this.state.emails}></EmailList>
        </React.Fragment>
    }
}