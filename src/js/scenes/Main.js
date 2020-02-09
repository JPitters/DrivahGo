import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Base from '../layouts/Base';
import Login from '../scenes/Login';
import Dashboard from '../scenes/Dashboard';
import Emissions from '../scenes/Emissions';
import Affiliates from '../scenes/Affiliates';

class Main extends Component {
    constructor(props){
        super(props);

        this.state = {
            auth: true
        };
    }

    componentDidMount(){
        this.state.auth = false;
    }

    render() { 
        const { auth } = this.state;
        return auth 
            ?
            <Base>
                <Switch>
                    <Route component={Dashboard} exact path="/dashboard" />
                    <Route component={Emissions} path="/emissions" />
                    <Route component={Affiliates} path="/Affiliates" />
                </Switch>
            </Base>
            :
            <Switch>
                    <Route component={Login} exact path="/" />
            </Switch>;
    }
}
 
export default Main;