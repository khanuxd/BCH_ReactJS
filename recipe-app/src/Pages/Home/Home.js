import React from 'react';
import { useHistory } from "react-router-dom";

const Home = () => {
    const history = useHistory();

    const pathToRecipes = () => {
        let path = '/recipes';
        history.push(path);
    }

    const pathToNewRecipe = () => {
        let path = '/add-new-recipe';
        history.push(path);
    }

    return (
        <div className="hero">
            <h1>In a cooking Mood?</h1>
            <div>
                <button onClick={pathToRecipes}>Check Recipes</button>
                <span>or</span>
                <button className="sec-btn" onClick={pathToNewRecipe}>Add New Recipes</button>
            </div>
        </div>
    );
};

export default Home;