import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import FindJobPage from './page/FindJobPage.jsx'
import CreateJobPage from './page/CreateJobPage/CreateJobPage.jsx'
import MatchJobPage from './page/MatchJobPage.jsx';
import UserPage from './page/UserPage.jsx';
import MainPage from './page/MainPage.jsx'
import CompanyPage from './page/CompanyPage/CompanyPage'
import CreatedJobPage from './page/CreatedJobPage/CreatedJobPage.jsx'
import Router from './routes/Router.js';
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(<Router />
    , document.getElementById('root') );


// ReactDOM.render( <MatchJobPage />, document.getElementById('root') );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
