import React, { useState, useEffect } from 'react';
import RecipesList from '../Recipes/RecipesList';

import axios from "axios";

const Recipes = () => {

    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:3001/recipes")
            .then((res) => {
                setRecipes(res.data);
            })
            .catch(error => {
                console.log('error getting fake data:' + error);
            })
    }, []);

    return (
        <div>
            <RecipesList recipes={recipes} />
        </div>
    );
};

export default Recipes;