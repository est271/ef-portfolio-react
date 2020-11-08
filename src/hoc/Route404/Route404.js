import React from 'react';

const Route404 = () => {

    return (
        <div className="container page404">
            <div className="row">
                <div className="col text-center">
                    <img src={require("../../assets/images/route404.png")} alt="..."  />
                    <h1>404</h1>
                    <h2>Page Not Found</h2>
                </div>
            </div>
        </div>
    );
};

export default Route404;