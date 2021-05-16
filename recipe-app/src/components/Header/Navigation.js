import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';


// basic-navbar-nav

const Navigation = () => {
    return (
        <Navbar collapseOnSelect bg="light" expand="lg">
            {/* <LinkContainer to="/">
                <Navbar.Brand>Recipe-App</Navbar.Brand>
            </LinkContainer> */}
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav className="mr-auto">
                    <LinkContainer to="/" exact={true}>
                        <Nav.Link>Home</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/recipes">
                        <Nav.Link>Recipes</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/add-new-recipe">
                        <Nav.Link>Add New Recipe</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/about">
                        <Nav.Link>About</Nav.Link>
                    </LinkContainer>
                </Nav >
            </Navbar.Collapse >
        </Navbar >
    );
};

export default Navigation;