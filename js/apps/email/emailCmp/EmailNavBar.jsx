const { NavLink } = ReactRouterDOM

export default function NavBar() {
    return <nav className="email-nav">
        <ul className="flex column">
            <li className="compose">
                <NavLink activeClassName="active" to='/email/compose' exact>Compose</NavLink>
            </li>
            <li className="inbox">
                <NavLink activeClassName="active" to='/email/inbox' exact>inbox</NavLink>
            </li>
            <li className="sent">
                <NavLink activeClassName="active" to='/email/sent' exact>sent</NavLink>
            </li>
        </ul>
    </nav>
}