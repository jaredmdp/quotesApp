import classes from './NavbarMain.module.css'
import { NavLink } from 'react-router-dom';

const NavbarMain = () => {
    return <header className={classes.header}>
        <div className={classes.logo}>Quotes</div>
        <nav className={classes.nav}>
            <ul>
                <li>
                    <NavLink to='/quotes' activeClassName={classes.active}>
                        All Quotes
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/quotes-new' activeClassName={classes.active}>
                        Add a quote
                    </NavLink>
                </li>
            </ul>
        </nav>
    </header>
};

export default NavbarMain;