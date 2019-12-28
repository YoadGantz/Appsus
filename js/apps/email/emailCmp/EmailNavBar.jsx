const { NavLink } = ReactRouterDOM

export default function NavBar(props) {
    return <aside className="email-nav">
        <ul className="flex column">
            <li className="compose">
                <NavLink activeClassName="active" to='/email/compose' exact>Compose</NavLink>
            </li>
            <li className="inbox">
                <NavLink activeClassName="active" to='/email/inbox' exact>Inbox<span>{props.unReadCount}</span></NavLink>
            </li>
            <li className="starred">
                <NavLink activeClassName="active" to='/email/starred' exact>Starred</NavLink>
            </li>
            <li className="sent">
                <NavLink activeClassName="active" to='/email/sent' exact>Sent</NavLink>
            </li>
        </ul>
    </aside>
}