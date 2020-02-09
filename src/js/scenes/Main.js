import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Base from '../layouts/Base';
import Login from '../scenes/Login';
import Dashboard from '../scenes/Dashboard';
import Emissions from '../scenes/Emissions';
import Affiliates from '../scenes/Affiliates';

class Main extends Component {
    render() { 
        return (
            <Base>
                <Switch>
                    <Route component={Login} exact path="/" />
                </Switch>
            </Base>
        );
    }
}
 
export default Main;