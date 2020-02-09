import React, { Component } from 'react';
import auth from '../../resolvers/resolver'
import Header from './Header';


class Base extends Component {
    constructor(props) {
        super(props);
        this.state = {
            auth: false
        }
    }

    componentDidMount(){
        //this.state.auth = auth();
    }

    render() { 
        //const { auth } = this.state;
        return (
            <div className="app-base">
                <Header />
            </div>
        );
    }
}
 
export default Base
