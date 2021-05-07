import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";

import Home from './Pages/Home';
import Recipes from './Pages/Recipes';
import About from './Pages/About';
import NewRecipe from './Pages/NewRecipe';

class Main extends Component {

    render() {
        return (
            <div>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/recipes" component={Recipes} />
                    <Route path="/add-new-recipe" component={NewRecipe} />
                    <Route path="/about" component={About} />
                </Switch>
            </div>
        );
    }
}

export default Main;