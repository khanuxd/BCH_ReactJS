import React from 'react';
import Nav from '../Main/Nav';

const Header = () => {
    return (
        <header className="nav-top">
            <div className="logo">
                <a href="/">Recipe</a>
            </div>
            <Nav />
        </header>
    );
};

export default Header;