import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Main from './Main';

class Login extends Component {
    render() { 
        return (
            <div className="login-page">
                <Main />
            </div>
        );
    }
}
 
export default Login;