import React, { useState, useEffect } from 'react';

import classes from './NameTitle.module.css';
import background from '../../assets/images/background.jpg';

const NameTitle = () => {
    const titles = ['Web Developer', 'Mechanical Engineer', 'Software Engineer', 'Problem Solver'];
    const [counter, setCounter] = useState(0);

    useEffect( () => {
        const interval = setInterval( () => {
            setCounter(counter + 1);
            if ( counter >= titles.length - 1 ) {
                setCounter(0);
            }
        }, 3000);
        return () => clearInterval(interval);
    }, [counter, titles.length]);

    return (
        <div className={classes.NameTitle}>
            <img className={classes.ImgBackground} src={background} alt="..." />
            <div className={classes.Name} >
                <h1 className={classes.Name2}>Esteban</h1>
                <p className={classes.Title} >{titles[counter]}</p>
            </div>
        </div>
    );
};

export default NameTitle;