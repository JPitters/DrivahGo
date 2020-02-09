import React, { Component } from 'react';

class Main extends Component {
    render() { 
        return (
            <div className="emissions-base">
                <div className="graph-container">
                    <h2>Your Path</h2>
                    <div className="graph"></div>
                </div>
                <div className="current-emissions">
                    <p><span>5.43% up</span> since last month</p>
                </div>
            </div>
        );
    }
}
 
export default Main;