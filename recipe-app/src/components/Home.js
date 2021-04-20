import React, { Component } from 'react';
import Recipes from "./Recipes";

class Home extends Component {
    render() {
        return (
            <div>
            <div className="home">
                <h1>Welcome to Recipe Blog</h1>
            </div>
            <div className="cards">
            <Recipes />
            </div>
        </div>
        );
    }
}

export default Home;