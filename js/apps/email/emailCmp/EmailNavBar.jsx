const { NavLink } = ReactRouterDOM

export default function NavBar() {
    return <nav>
        <ul>
            <li>
                <NavLink activeClassName="active" to='/email/inbox' exact>inbox</NavLink>
            </li>
            <li>
                <NavLink activeClassName="active" to='/email/sent' exact>sent</NavLink>
            </li>
        </ul>
    </nav>
}