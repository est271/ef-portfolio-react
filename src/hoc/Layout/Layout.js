import React from 'react';

import TopNavbar from '../../components/TopNavbar/TopNavbar';
import BotNavbar from '../../components/BotNavbar/BotNavbar';

const layout = props => (
    <div>
        <TopNavbar />
        <main>
            {props.children}
        </main>
        <BotNavbar />
    </div>
);

export default layout;