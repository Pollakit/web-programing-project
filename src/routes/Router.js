import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import CompanyPage from '../page/CompanyPage/CompanyPage'
import CreatedJobPage from '../page/CreatedJobPage/CreatedJobPage'
import CreateJobPage from '../page/CreateJobPage/CreateJobPage'
import EditJobPage from '../page/EditJobPage/EditJobPage'
import FindJobPage from '../page/FindJobPage'
import MatchJobPage from '../page/MatchJobPage';
import UserPage from '../page/UserPage';
import MainPage from '../page/MainPage';
import SignUpPage from '../page/SignUp/SignUpPage';
import AfterSignUpPage from '../page/AfterSignUpPage/AfterSignUpPage'

export default function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={MainPage} />
                <Route exact path="/company" component={CompanyPage} />
                <Route exact path="/createdjob" component={CreatedJobPage} />
                <Route exact path="/createjob" component={CreateJobPage} />
                <Route exact path="/matchJobPage" component={MatchJobPage} />
                <Route exact path="/userPage" component={UserPage} />
                <Route exact path="/findJobPage" component={FindJobPage} />
                <Route exact path="/editjobPage" component={EditJobPage} />
                <Route exact path="/signUp" component={SignUpPage} />
                <Route exact path="/afterSignUp" component={AfterSignUpPage} />
            </Switch>
        </BrowserRouter>
    )
}