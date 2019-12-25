const { NavLink } = ReactRouterDOM

export default function NavBar() {
    return <nav className="email-nav">
        <ul className="flex column">
            <li>
                <NavLink activeClassName="active" to='/email/inbox' exact>inbox</NavLink>
            </li>
            <li>
                <NavLink activeClassName="active" to='/email/sent' exact>sent</NavLink>
            </li>
        </ul>
    </nav>
}