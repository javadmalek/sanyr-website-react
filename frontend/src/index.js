import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';

import Routes from './routes';
import './index.css';

require('dotenv').config();

ReactDOM.render(
    <Routes history={browserHistory} />,
    document.getElementById('root')
);
