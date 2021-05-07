import React from 'react';

const NewRecipe = ({ change, submit }) => {
    return (
        <div>
            <h1>Add Your Amazing Recipe</h1>
            <form onSubmit={submit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input id="name" name="name" type="text" onChange={change} />
                </div>
                <div>
                    <label htmlFor="duration">Duration (in min)</label>
                    <input id="duration" type="text" name="duration" onChange={change} />
                </div>
                <div>
                    <label htmlFor="category">Category</label>
                    <select id="category" name="category" onChange={change}>
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
                    <textarea type="text" id="about" name="about" onChange={change} />
                </div>
                <div>
                    <label htmlFor="src">Image url</label>
                    <input id="src" name="src" type="text" onChange={change} />
                </div>
                <button type="submit">Add Recipe</button>
            </form>
        </div>
    );
};

export default NewRecipe;