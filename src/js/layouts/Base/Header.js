import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';

class Header extends Component {
    render() { 
        return (
            <section className="site-head">
                <div className="header-container">
                    <Nav className="row">
                        <div className="logo-container col-md-auto">
                        </div>
                        <div className="nav-opener col-1">
                        </div>
                    </Nav>
                </div>
            </section>
        );
    }
}
 
export default Header;