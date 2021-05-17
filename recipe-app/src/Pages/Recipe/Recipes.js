import React, { useState, useEffect } from 'react';
import RecipesList from '../../components/Main/Recipes/RecipesList';

import axios from "axios";


const Recipes = () => {

    const [recipes, setRecipes] = useState([]);

    useEffect(() => {

        const allRecipes = async () => {

            try {
                const recipeRes = await axios.get("http://localhost:3001/recipes")
                setRecipes(recipeRes.data);
            } catch (error) {
                console.log('error getting data:' + error);
            }
        };
        allRecipes();

    }, []);

    return (
        <div>
            <RecipesList recipes={recipes} />
        </div>
    );
};

export default Recipes;