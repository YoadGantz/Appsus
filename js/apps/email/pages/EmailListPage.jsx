'use strict'

import EmailPreview from "../emailCmp/EmailPreview.jsx";

export default class EmailListPage extends React.Component {
    render() {
        console.log(this.props.emails);
        return (
            <ul>
                {this.props.emails.map(email => 
                    <EmailPreview key={email.id} email={email}></EmailPreview>
                )}
            </ul>
        )
    }
}