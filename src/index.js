import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import CreatedJobPage from './page/CreatedJobPage/CreatedJobPage.jsx'
import CreateJobPage from './page/CreateJobPage/CreateJobPage.jsx'
import Router from './routes/Router.js';
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(<Router />
    , document.getElementById('root') );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
