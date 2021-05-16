import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


class Nav extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <li><NavLink activeClassName="active" to="/" exact={true}>Home</NavLink></li>
                    <li><NavLink activeClassName="active" to="/recipes">Recipes</NavLink></li>
                    <li><NavLink activeClassName="active" to="/about">About</NavLink></li>
                </ul>
            </nav>
        );
    }
}

export default Nav;