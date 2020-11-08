import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import ContForm from './containers/ContForm/ContForm';
import Front from './containers/Front/Front';

import ScrollToTop from './hoc/ScrollToTop/ScrollToTop';
import Layout from './hoc/Layout/Layout';
import ProjLink from './hoc/ProjLink/ProjLink';
import Route404 from './hoc/Route404/Route404';

class App extends Component {

    render() {

        let routes = (
            <Switch>
                <Route path="/contact" component={ContForm} />
                <Route path="/projects" component={ProjLink}  />
                <Route path="/" exact component={Front}  />
                <Route component={Route404} />
            </Switch>
        );

        return (
            <div>
                <ScrollToTop />
                <Layout>
                    {routes} 
                </Layout>
            </div>
        );
    }
}

export default App;
