const { NavLink } = ReactRouterDOM

export default function NavBar() {
    return <nav className="app-nav">
        <ul className="flex clean-list">
            <li>
                <NavLink activeClassName="active" to='/' exact>Home Page</NavLink>
            </li>
            <li>
                <NavLink activeClassName="active" to='/email/inbox' exact>Emails</NavLink>
            </li>
            <li>
                <NavLink activeClassName="active" to='/note'>Notes</NavLink>
            </li>
            <li>
                <NavLink activeClassName="active" to='/book'>Books</NavLink>
            </li>
        </ul>
    </nav>
}