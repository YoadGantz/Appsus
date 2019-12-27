import emailService from "../services/emailService.js";
import EmailList from "../emailCmp/EmailList.jsx";
import Search from "../../apps cmps/Search.jsx";
import FilterEmail from "../emailCmp/FilterEmail.jsx";

export default class InboxPage extends React.Component {
    state = {
        emails: [],
        filterBy: '',
        filterStatus: 'isAll',
    }

    componentDidMount() {
        this.getUnReadCount()
        this.loadEmails();
    }

    handleChange = (changeFilter) => {
        console.log(changeFilter);

        this.setState({ filterBy: changeFilter }, this.loadEmails)
    }

    handleStatusChange = (changeFilter) => {
        console.log(changeFilter);

        this.setState({ filterStatus: changeFilter }, this.loadEmails)
    }

    getUnReadCount = () => {
        emailService.getUnReadCount().then(count => { this.props.setUnReadCount(count) })
    }

    loadEmails = () => {
        emailService.query(this.state.filterBy, this.state.filterStatus).then(emails => { this.setState({ emails }) })
    }
    render() {
        return <React.Fragment>
            <Search filterBy={this.state.filterBy} handleChange={this.handleChange}></Search>
            <FilterEmail filterStatus={this.state.filterStatus} handleChange={this.handleStatusChange}></FilterEmail>
            <EmailList emails={this.state.emails}></EmailList>
        </React.Fragment>
    }
}