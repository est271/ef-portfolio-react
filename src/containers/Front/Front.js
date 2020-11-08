import React, {Component} from 'react';

import NameTitle from '../../components/NameTitle/NameTitle';
import Projects from './Projects';

class Front extends Component {

    render() {

        return (
            <div>
                <NameTitle />
                <Projects />
            </div>
        );
    }
};

export default Front;