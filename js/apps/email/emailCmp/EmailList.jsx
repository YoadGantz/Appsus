'use strict'

import EmailPreview from "./EmailPreview.jsx";


export default class EmailList extends React.Component {
 
    render() {
        return (
            <ul className="email-container">
                {this.props.emails.map(email => 
                    <EmailPreview addToSelected={this.props.addToSelected} key={email.id} email={email}></EmailPreview>
                )}
            </ul>
        )
    }
}