const { NavLink } = ReactRouterDOM

export default function NavBar(props) {
    return <aside className="email-nav-container">
        <ul className="email-nav-links clean-list flex column align-center">
            <li className="compose border">
                <NavLink activeClassName="active" to='/email/compose' exact>Compose</NavLink>
            </li>
            <li className="inbox border">
                <NavLink className="nav-link" activeClassName="active" to='/email/inbox' exact>Inbox<span>{props.unReadCount}</span></NavLink>
            </li>
            <li className="starred border">
                <NavLink className="nav-link" activeClassName="active" to='/email/starred' exact>Starred</NavLink>
            </li>
            <li className="sent border">
                <NavLink className="nav-link" activeClassName="active" to='/email/sent' exact>Sent</NavLink>
            </li>
        </ul>
    </aside>
}