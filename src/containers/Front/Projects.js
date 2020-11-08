import React, { useEffect } from 'react';
import $ from 'jquery';

import classes from './Projects.module.css';

import tictac from '../../assets/images/tictac.png';
import geomstats_example from '../../assets/images/geomstats_example.png';
import sugarizer_view from '../../assets/images/sugarizer_view.png';
import port_pic from '../../assets/images/port_pic.png';

const Projects = () => {

    useEffect( () => {
        $('[data-toggle="popover"]').popover();
    });

    const prepPopover = el => {
        let temp = '<p>&bull; '.concat(el);
        temp = temp.concat('</p>');
        return temp;
    };

    const popovr1 = ['HTML', 'CSS', 'JavaScript'].map( arr => prepPopover(arr)).join('');
    const popovr2 = ['Python', 'Python Debugger', 'UnitTest/Nose2', 'Python Logging Module'].map( arr => prepPopover(arr)).join('');
    const popovr3 = popovr1;
    const popovr4 = ['React', 'Bootstrap', 'jQuery'].map( arr => prepPopover(arr)).join('');


    return (
        <div className={classes.ProjectsContainer}>
            <div id="projLink"></div>
            <h2 className={classes.ProjectTitle}>Projects</h2>

            <div className="container">
                <div className="row">
                    <div className="col-5">
                        <h4 className={classes.ProjName}>Tic-Tac-Toe</h4>
                        <p>A tic-tac-toe game with drag and drop functionality</p>
                    </div>
                    <div className="col-7">
                        <img className={classes.ProjImg} src={tictac} alt="..."  />
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center btn-row">
                        <a href="https://est271.github.io/tic-tac-toe/" className="btn btn-primary">Play Demo</a> 
                        <a href="https://github.com/est271/Tic-Tac-Toe" className="btn btn-primary">GitHub Code</a> 
                        <button type="button" className="btn btn-info" data-placement="top"
                                data-container="#projLink" data-toggle="popover" data-html="true"
                                title="Skills Used on Tic-Tac-Toe" data-content={popovr1} >
                                Skills Used
                        </button>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-5">
                        <h4 className={classes.ProjName}>Geomstats</h4>
                        <p>Geomstats is an open-source Python package for computations and statistics on manifolds</p>
                    </div>
                    <div className="col-7">
                        <img className={classes.ProjImg} src={geomstats_example} alt="..."  />
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center btn-row">
                        <a href="https://github.com/geomstats/geomstats/issues/380" className="btn btn-primary">Testing issues</a>
                        <a href="https://github.com/geomstats/geomstats/issues/429" className="btn btn-primary">Uniformize messages</a>
                        <button type="button" className="btn btn-info" data-placement="top"
                                data-container="#projLink" data-toggle="popover" data-html="true"
                                title="Skills Used on Geomstats" data-content={popovr2} >
                                Skills Used
                        </button>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-5">
                        <h4 className={classes.ProjName}>Sugarizer</h4>
                        <p>Sugarizer is a free open-source learning platform. The Sugarizer UI uses ergonomic principles from The Sugar platform</p>
                    </div>
                    <div className="col-7">
                        <img className={classes.ProjImg} src={sugarizer_view} alt="..."  />
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center btn-row">
                        <a href="https://try.sugarizer.org" className="btn btn-primary">View App</a>
                        <a href="https://github.com/llaske/sugarizer/pull/420" className="btn btn-primary">GitHub Code</a>
                        <button type="button" className="btn btn-info" data-placement="top"
                                data-container="#projLink" data-toggle="popover" data-html="true"
                                title="Skills Used on Sugarizer" data-content={popovr3} >
                                Skills Used
                        </button>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-5">
                        <h4 className={classes.ProjName}>My Portfolio</h4>
                        <p>Source code for this portfolio</p>
                    </div>
                    <div className="col-7">
                        <img className={classes.ProjImg} src={port_pic} alt="..."  />
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center btn-row">
                        <a href="https://github.com/est271/est271.github.io" className="btn btn-primary">GitHub Code</a>
                        <button type="button" className="btn btn-info" data-placement="top"
                                data-container="#projLink" data-toggle="popover" data-html="true"
                                title="Skills Used on My Portfolio" data-content={popovr4} >
                                Skills Used
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Projects;