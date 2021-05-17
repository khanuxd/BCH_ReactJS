import React from 'react';
import Navigation from './Navigation';
import { Navbar } from 'react-bootstrap';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';

import './Header.css';

const Header = () => {

    return (
        <header className="nav-top bg-light fixed-top">
            {/* <div className="logo">
                <a href="/">Recipe</a>
            </div> */}
            <IndexLinkContainer to="/" exact>
                <Navbar.Brand>Recipe-App</Navbar.Brand>
            </IndexLinkContainer>
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