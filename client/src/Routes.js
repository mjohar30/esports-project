import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Landing from './views/Landing'
import Profile from './views/Profile'
import Register from './views/Register'

const Routes = () => {
    return (
        <Switch>
            <Route exact path ="/" component={Landing} />
            <Route exact path ="/profile" component={Profile} />
            <Route exact path ="/register" component={Register} />
        </Switch>
    )
}

export default Routes;