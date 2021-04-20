import React, { Component } from 'react';
import Nav from './Nav';

class Header extends Component {
    render() {
        return (
            <div className="nav-top">
                <div className="logo">
                    <a href="/">Logo</a>
                </div>
                <Nav />
            </div>
        );
    }
}

export default Header;