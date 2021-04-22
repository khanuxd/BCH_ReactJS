import React from 'react';
import { Switch, Route, Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1>This is the Hope Page</h1>
        </div>
    )
}

const Gallery = () => {
    return (
        <div>
            <h1>
                This is the Gallery Page
            </h1>
        </div>
    )
}

const Nav = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/gallery">Gallery</Link></li>
                </ul>
            </nav>
        </div>
    )
}

const Main_router = () => {
    return (
        <div>
            <Nav />
            <Switch>
                <Route Path="/" exact component={Home} />
                <Route Path="/gallery" component={Gallery} />
            </Switch>
        </div>
    );
};

export default Main_router;