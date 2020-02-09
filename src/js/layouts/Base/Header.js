import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';

class Header extends Component {
    render() { 
        return (
            <section className="site-head">
                <div className="header-container">
                    <Nav className="nav-bar">
                        <div className="logo-container">
                            DrivahGo
                        </div>
                        <div className="nav-opener">
                        []
                        </div>
                    </Nav>
                </div>
            </section>
        );
    }
}
 
export default Header;