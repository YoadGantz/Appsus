import emailService from "../services/emailService.js";
import EmailList from "../emailCmp/EmailList.jsx";
import Search from "../../apps cmps/Search.jsx";

export default class SentPage extends React.Component {
    state = {
        emails: []
    }

    componentDidMount() {
        this.loadEmails();
    }


    handleChange = (changeFilter) => {
        console.log(changeFilter);

        this.setState({ filterBy: changeFilter }, this.loadEmails)
    }


    loadEmails = () => {
        emailService.query(this.state.filterBy).then(emails => { this.setState({ emails }) })
    }
    render() {
        return <React.Fragment>
            <Search filterBy={this.state.filterBy} handleChange={this.handleChange}></Search>
            <EmailList emails={this.state.emails}></EmailList>
        </React.Fragment>
    }
}