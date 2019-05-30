import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './containers/Routes';
import './index.css';
import 'font-awesome/css/font-awesome.min.css';
import * as serviceWorker from './serviceWorker';

import GlobalStyles from "./globalStyles";

ReactDOM.render(
    <React.Fragment>
        <GlobalStyles />
        <Routes />
    </React.Fragment>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
