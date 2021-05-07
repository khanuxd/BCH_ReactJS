import React, { useState } from 'react';
import axios from "axios";

const NewRecipe = () => {

    const [recipeNew, setRecipeNew] = useState({
        name: "",
        category: "",
        src: "",
        about: "",
        url: "",
    });

    const valueChangeHandler = (e) => {
        setRecipeNew({ ...recipeNew, [e.target.name]: e.target.value })
    };

    const addRecipe = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:3001/recipes", recipeNew);
        e.target.reset();
    }

    return (
        <div className="add-recipe">
            <h1>Add Your Amazing Recipe</h1>
            <form onSubmit={addRecipe}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input id="name" name="name" type="text" onChange={valueChangeHandler} />
                </div>
                <div>
                    <label htmlFor="duration">Duration (in min)</label>
                    <input id="duration" type="number" name="duration" onChange={valueChangeHandler} />
                </div>
                <div>
                    <label htmlFor="category">Category</label>
                    <select id="category" name="category" onChange={valueChangeHandler}>
                        <option>Select</option>
                        <option value="indian">Indian</option>
                        <option value="mexican">Mexican</option>
                        <option value="chinese">Chinese</option>
                        <option value="italian">Italian</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="about">Description</label>
                    <textarea type="text" id="about" name="about" onChange={valueChangeHandler} />
                </div>
                <div>
                    <label htmlFor="src">Image url</label>
                    <input id="src" name="src" type="text" onChange={valueChangeHandler} />
                </div>
                <button type="submit" onSubmit={addRecipe}>Add Recipe</button>
            </form>
        </div>
    );
};

export default NewRecipe;