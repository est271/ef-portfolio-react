import React, { useEffect } from 'react';

import Front from '../../containers/Front/Front';

const ProjLink = () => {

    useEffect( () => {
        document.querySelector("#projLink").scrollIntoView();
    });

    return (
        <div>
            <Front />
        </div>
    );
};

export default ProjLink;