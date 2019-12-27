import emailService from "../services/emailService.js";
import EmailList from "../emailCmp/EmailList.jsx";
import Search from "../../apps cmps/Search.jsx";
import FilterEmail from "../emailCmp/FilterEmail.jsx";
import SortEmail from "../emailCmp/SortEmail.jsx";
import ReadStatusEmail from "../emailCmp/ReadStatusEmail.jsx";
import AddStarEmail from "../emailCmp/AddStarEmail.jsx";
import DeleteSelection from "../emailCmp/DeleteSelection.jsx";

export default class InboxPage extends React.Component {
    state = {
        emails: [],
        filterBy: '',
        filterStatus: 'isAll',
        sortBy: 'date',
        selectedUnRead: false,
        selectedUnStar: false
    }

    componentDidMount() {
        emailService.unSelectAll().then(() => {
            this.getUnReadCount()
            this.loadEmails()
        })
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
            .then((selected) => {
                this.setState({
                    selectedUnRead: selected.selectedUnRead,
                    selectedUnStar: selected.selectedUnStar
                }
                )
                this.loadEmails()
            })
    }

    updateIsReadSelected = () => {
        emailService.updateIsReadSelected()
            .then((selectedUnRead) => {
                this.setState({ selectedUnRead })
                this.loadEmails()
            })
    }

    toggleStarred = (email) => {
        emailService.toggleStarred(email)
            .then((selectedUnStar) => {
                this.setState({ selectedUnStar })
                this.loadEmails()
            }
            )
    }

    updateIsStarredSelected = () => {
        emailService.updateIsStarredSelected()
            .then((selectedUnStar) => {
                this.setState({ selectedUnStar })
                this.loadEmails()
            }
            )
    }

    render() {
        return <main>
            <div className="settings-container">
                <Search filterBy={this.state.filterBy} handleChange={this.handleSearchChange}></Search>
                <FilterEmail filterStatus={this.state.filterStatus} handleChange={this.handleStatusChange}></FilterEmail>
                <SortEmail sortBy={this.state.sortBy} handleChange={this.handleSortChange}></SortEmail>
                <ReadStatusEmail selectedUnRead={this.state.selectedUnRead} updateIsReadSelected={this.updateIsReadSelected}></ReadStatusEmail>
            </div>
            <DeleteSelection></DeleteSelection>
            <AddStarEmail
                selectedUnStar={this.state.selectedUnStar} updateIsStarredSelected={this.updateIsStarredSelected}></AddStarEmail>
            <EmailList toggleStarred={this.toggleStarred}
                toggleSelection={this.toggleSelection} emails={this.state.emails}></EmailList>
        </main>
    }
}