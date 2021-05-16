/* import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Nav extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <li><Link to="/" >Home</Link></li>
                    <li><Link to="/recipes">Recipes</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </nav>
        );
    }
}

export default Nav; */

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