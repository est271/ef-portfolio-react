import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './TopNavbar.module.css';

import favicon from '../../assets/images/favicon.png';

const topnavbar = props => {
    let topClasses = ['navbar', 'navbar-expand', 'fixed-top', 'top-nav'];

    return (
        <header>
            <nav className={topClasses.join(' ')}>
                <a className="navbar-brand" href="https://github.com/est271">
                    <img className={classes.TopnavImg} src={favicon} alt="..." />
                </a>
                <div className="navbar-nav flex-row ml-auto">
                    <NavLink className="nav-link" to="/" exact >Home</NavLink>
                    <NavLink className="nav-link" to="/projects" >Projects</NavLink>
                    <NavLink className="nav-link" to="/contact" exact >Contact</NavLink>
                </div>
            </nav>
        </header>
    );
};

export default topnavbar;