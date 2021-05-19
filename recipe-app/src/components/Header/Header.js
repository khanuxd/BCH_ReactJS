import React from 'react';
import Navigation from './Navigation';

import './Header.css';

const Header = () => {

    return (
        <header className="nav-top bg-light fixed-top">
            <Navigation />
        </header>
    );
};

export default Header;










/*
const Header = () => {
    return (
        <header className="nav-top bg-light fixed-top">
            <div className="logo">
                <a href="/">Recipe</a>
            </div>
            <LinkContainer to="/" exact>
                <Navbar.Brand>Recipe-App</Navbar.Brand>
            </LinkContainer>
            <Navigation />
        </header>
    );
};
*/