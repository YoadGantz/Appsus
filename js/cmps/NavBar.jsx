const { NavLink } = ReactRouterDOM

export default function NavBar() {
    return <nav className="app-nav">
        <ul className="nav-ul flex clean-list justify-center">
            <li className="flex">
                <NavLink className="main-nav-link totally-center" activeClassName="active" to='/' exact>Home Page</NavLink>
            </li>
            <li className="flex">
                <NavLink className="main-nav-link totally-center" activeClassName="active" to='/email/inbox' exact>Emails</NavLink>
            </li>
            <li className="flex">
                <NavLink className="main-nav-link totally-center" activeClassName="active" to='/note'>Notes</NavLink>
            </li>
            <li className="flex"> 
                <NavLink className="main-nav-link totally-center" activeClassName="active" to='/book'>Books</NavLink>
            </li>
        </ul>
    </nav>
}