import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class Main extends Component {
    render() { 
        return (
            <div className="login-base">
                <div className="logo-container">
                    <span>DrivahGo</span>
                </div>
                <div className="content-container">
                    <form>
                        <h2>Log In</h2>
                        <input type="email" name="email" placeholder="GCKey Email"/>
                        <input type="text" name="SIN" placeholder="Social Insurance Number"/>
                        <input type="password" name="password" placeholder="password"/>
                        <Button type="Submit" className="btn-secondary">Confirm Log In</Button>
                    </form>
                </div>
            </div>
        );
    }
}
 
export default Main;