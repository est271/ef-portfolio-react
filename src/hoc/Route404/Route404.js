import React from 'react';

import route404 from '../../assets/images/route404.png';

const Route404 = () => {

    return (
        <div className="container page404">
            <div className="row">
                <div className="col text-center">
                    <img src={route404} alt="..."  />
                    <h1>404</h1>
                    <h2>Page Not Found</h2>
                </div>
            </div>
        </div>
    );
};

export default Route404;