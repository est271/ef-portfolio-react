import React from 'react';

import classes from './BotNavbar.module.css';

import github from '../../assets/images/GH-Dark.png';
import linkedin from '../../assets/images/LInk.png';
import maillogo from '../../assets/images/envelope.png';

const botnavbar = props => {
    let botClasses = ['navbar', 'justify-content-center', 'bot-nav'];

    return (
        <footer>
            <nav className={botClasses.join(' ')}>
                <a className="navbar-brand" href="https://github.com/est271">
                    <img className={classes.BotnavImg} src={github} alt="..." />
                </a>
                <a className="navbar-brand" href="https://www.linkedin.com/in/esteban-f-est271">
                    <img className={classes.BotnavImg} src={linkedin} alt="..." />
                </a>
                <a className="navbar-brand" href="mailto:est271ca@gmail.com">
                    <img className={classes.BotnavImg} src={maillogo} alt="..." />
                </a>
                <div className={classes.CopyStyle}>&copy; 2020 est271</div>
            </nav>
        </footer>
    );
};

export default botnavbar;