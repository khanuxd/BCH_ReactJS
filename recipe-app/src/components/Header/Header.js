import React, { Component } from 'react';
import Nav from '../Main/Nav';

class Header extends Component {
    render() {
        return (
            <header className="nav-top">
                <div className="logo">
                    <a href="/">Logo</a>
                </div>
                <Nav />
            </header>
        );
    }
}

export default Header;