import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import FindJobPage from './page/FindJobPage.jsx'
import CreateJobPage from './page/CreateJobPage/CreateJobPage.jsx'
import MatchJobPage from './page/MatchJobPage.jsx';

ReactDOM.render( <FindJobPage />, document.getElementById('root') );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
