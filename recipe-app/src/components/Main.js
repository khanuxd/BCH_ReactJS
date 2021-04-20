import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";

import Home from './Home';
import Recipes from './Recipes';
import About from './About';

class Main extends Component {

    render() {
        return (
            <div>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/recipes" component={Recipes} />
                    <Route path="/about" component={About} />
                </Switch>
            </div>
        );
    }
}

export default Main;