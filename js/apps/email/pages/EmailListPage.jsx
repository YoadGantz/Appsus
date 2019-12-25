'use strict'

export default class EmailListPage extends React.Component {
    render() {
        return (
            <ul>
                {this.props.emails.map(email => {
                    return <li>{email.subject}</li>
                })}
            </ul>
        )
    }
}