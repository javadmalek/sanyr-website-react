import React from 'react';
import {Router, Route} from 'react-router';

import App from './components/home/app';
import { Error404 } from './components/errors';
import SanyRed from './components/sanyr-red/app'

const Routes = (props) => (
    <Router {...props}>
        <Route path="/" component={App}/>
        <Route path="/index" component={App}/>
        <Route path="/sany-red" component={SanyRed}/>
        <Route path="*" component={Error404}/>
    </Router>
);

export default Routes;