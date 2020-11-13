import React, { useEffect } from 'react';

import Front from '../../containers/Front/Front';

const ProjLink = (props) => {

    useEffect( () => {
        document.querySelector("#projLink").scrollIntoView();
    });


    return (<Front />);
};

export default ProjLink;