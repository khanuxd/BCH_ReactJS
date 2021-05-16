import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const Navigation = () => {
    const [expanded, setExpanded] = useState(false);
    return (
        <Navbar expanded={expanded} collapseOnSelect expand="lg" bg="light" variant="light" fixed="top">
            <Navbar.Brand as={NavLink} to="/">Recipe-App</Navbar.Brand>
            <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={NavLink} to="/" exact={true} onClick={() => setExpanded(false)}>Home</Nav.Link>
                    <Nav.Link as={NavLink} to="/recipes" onClick={() => setExpanded(false)}>Recipes</Nav.Link>
                    <Nav.Link as={NavLink} to="/add-new-recipe" onClick={() => setExpanded(false)}>Add New Recipe</Nav.Link>
                    <Nav.Link as={NavLink} to="/about" onClick={() => setExpanded(false)}>About</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Navigation;