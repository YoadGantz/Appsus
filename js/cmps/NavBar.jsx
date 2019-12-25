const { NavLink } = ReactRouterDOM

export default function NavBar() {
    return <nav>
        <ul>
            <li>
                <NavLink activeClassName="active" to='/' exact>Home Page</NavLink>
            </li>
            <li>
                <NavLink activeClassName="active" to='/email' exact>Emails</NavLink>
            </li>
            <li>
                <NavLink activeClassName="active" to='/note'>Notes</NavLink>
            </li>
        </ul>
    </nav>
}