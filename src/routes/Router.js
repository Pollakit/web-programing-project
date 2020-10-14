import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import CompanyPage from '../page/CompanyPage/CompanyPage'
import CreatedJobPage from '../page/CreatedJobPage/CreatedJobPage'
import CreateJobPage from '../page/CreateJobPage/CreateJobPage'
import EditJobPage from '../page/EditJobPage/EditJobPage'
import FindJobPage from '../page/FindJobPage'

export default function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={FindJobPage} />
                <Route exact path="/company" component={CompanyPage} />
                <Route exact path="/createdjob" component={CreatedJobPage} />
                <Route exact path="/createjob" component={CreateJobPage} />
                <Route exact path="/editjob" component={EditJobPage} />
            </Switch>
        </BrowserRouter>
    )
}