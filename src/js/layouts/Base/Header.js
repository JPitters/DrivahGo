import React, { Component } from 'react';
import { Nav, NavItem } from 'react-bootstrap';

class Header extends Component {
    render() { 
        return (
            <section className="site-head">
                <div className="nav-container d-flex w-100 h-100 p-3 mx-auto flex-column">
                    <div className="masthead mb-auto">
                        <div className="inner">
                            <h3 className="masthead-brand">DrivahGo</h3>
                            <Nav className="nav nav-masthead justify-content-center">
                                <NavItem>
                                    <Nav.Link className="nav-link active" href="/">Home</Nav.Link>
                                </NavItem>
                            </Nav>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default Header;