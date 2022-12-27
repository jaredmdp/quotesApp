import { Fragment } from 'react';
import classes from './Layout.module.css'
import NavbarMain from './NavbarMain';

//wrapper for App.js
const Layout = (props) => {
    return <Fragment>
        <NavbarMain />
        <main className={classes.main}>{props.children}</main>
    </Fragment>
};

export default Layout;