import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';

import {Button} from 'react-bootstrap';

import './SingleRecipe.css';

const SingleRecipe = () => {
    const [recipe, setRecipe] = useState();
    let { id } = useParams();
    let history = useHistory();

    useEffect(() => {
        if (!recipe) {
            axios
                .get("http://localhost:3001/recipes/" + id)
                .then(res => setRecipe(res.data));
            console.log('hello recipe inside if');
        }
        console.log('hello recipe');
    });

    console.log('hello recipe outside useEffect');

    let recipeData = undefined;

    if (!recipe) {
        recipeData = <h1>Loading...</h1>
    }

    if (recipe) {

        recipeData = (
            <>
                <div className="recipe">
                    <h1>{recipe.name}</h1>
                    <img src={recipe.image} alt={recipe.name} />
                    <p>{recipe.origin}</p>
                    <p>{recipe.cookTime} Min</p>
                    <p>{recipe.desc}</p>
                    <h3>Ingredients</h3>
                    <ul>
                        {recipe.recipeIngredient.map((recipeIng) => {
                            return (
                                <div>
                                    <li>
                                        {recipeIng.ingquantity}
                                        {" "}
                                        {recipeIng.ingName}
                                    </li>

                                </div>)
                        })}
                    </ul>
                    <h3>Steps</h3>
                    <ul>
                        {recipe.recipeInstructions.map((recipeInd) => {
                            return (
                                <div>
                                    <li>
                                        {recipeInd.recipeStep}
                                    </li>
                                </div>)
                        })}
                    </ul>
                </div>
                <Button variant="warning" onClick={() => history.goBack()}>Back to All Recipe</Button>
            </>
        )
    }

    return (
        <div>
            {recipeData}
        </div>
    );
};

export default SingleRecipe;