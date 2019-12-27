import emailService from "../services/emailService.js";
import EmailList from "../emailCmp/EmailList.jsx";
import Search from "../../apps cmps/Search.jsx";
import FilterEmail from "../emailCmp/FilterEmail.jsx";
import SortEmail from "../emailCmp/SortEmail.jsx";
import ReadStatusEmail from "../emailCmp/ReadStatusEmail.jsx";


export default class InboxPage extends React.Component {
    state = {
        emails: [],
        filterBy: '',
        filterStatus: 'isAll',
        sortBy: 'date',
        hasSelectedUnRead:false
    }

    componentDidMount() {
        emailService.unSelectAll()
        this.getUnReadCount()
        this.loadEmails();
    }

    componentWillUnMount() {
    }

    loadEmails = () => {
        emailService.query(this.state.filterBy, this.state.filterStatus, this.state.sortBy).then(emails => { this.setState({ emails }) })
    }

    handleSearchChange = (changeFilter) => {//think about how to do it more efficient 
        this.setState({ filterBy: changeFilter }, this.loadEmails)
    }

    handleStatusChange = (changeFilter) => {
        this.setState({ filterStatus: changeFilter }, this.loadEmails)
    }

    handleSortChange = (changeSort) => {
        this.setState({ sortBy: changeSort }, this.loadEmails)
    }

    getUnReadCount = () => {
        emailService.getUnReadCount().then(count => { this.props.setUnReadCount(count) })
    }

    toggleSelection = (email) => {
        emailService.toggleSelection(email)
            .then((hasSelectedUnRead) => {
                this.setState({hasSelectedUnRead})
                this.loadEmails()
            }
            )
    }

    updateIsReadSelected = () => {
        emailService.updateIsReadSelected()
            .then(this.loadEmails())
    }

    render() {
        return <React.Fragment>
            <Search filterBy={this.state.filterBy} handleChange={this.handleSearchChange}></Search>
            <FilterEmail filterStatus={this.state.filterStatus} handleChange={this.handleStatusChange}></FilterEmail>
            <SortEmail sortBy={this.state.sortBy} handleChange={this.handleSortChange}></SortEmail>
            <ReadStatusEmail hasSelectedUnRead = {this.state.hasSelectedUnRead} updateIsReadSelected={this.updateIsReadSelected}></ReadStatusEmail>
            <EmailList addToSelected={this.toggleSelection} emails={this.state.emails}></EmailList>
        </React.Fragment>
    }
}