'use strict'

export default class EmailListPage extends React.Component {
    render() {
        console.log(this.props.emails);
        return (
            <ul>
                {this.props.emails.map(email => 
                    <li key={email.id}>{email.subject}</li>
                )}
            </ul>
        )
    }
}