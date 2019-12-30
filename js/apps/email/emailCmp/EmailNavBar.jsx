const { NavLink } = ReactRouterDOM

export default function NavBar(props) {
    return <aside className="email-nav-container">
        <ul className="email-nav-links clean-list flex column align-center">
            <li className="flex">
                <NavLink className="email-nav-link totally-center" activeClassName="email-link-active" to='/email/compose' exact>Compose</NavLink>
            </li>
            <li className="flex">
                <NavLink className="email-nav-link totally-center" activeClassName="email-link-active" to='/email/inbox' exact>
                    Inbox
                    <span title ="Unread Emails" className="unread-count">
                        {props.unReadCount}
                    </span>
                </NavLink>
            </li>
            <li className="flex">
                <NavLink className="email-nav-link totally-center" activeClassName="email-link-active" to='/email/starred' exact>Starred</NavLink>
            </li>
            <li className="flex">
                <NavLink className="email-nav-link totally-center" activeClassName="email-link-active" to='/email/sent' exact>Sent</NavLink>
            </li>
        </ul>
    </aside>
}