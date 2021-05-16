import React from 'react';
import { Link } from 'react-router-dom';

const RecipeCard = ({ image, name, origin, cookTime, desc, url }) => {
    const descLimit = (str, no_of_words) => {
        return str.split(" ").splice(0, no_of_words).join(" ");
    };

    return (
        <div className="card">
            <img src={image} alt={name} />
            <div className="card-content">
                <h2>{name}</h2>
                <p className="origin">{origin}</p>
                <p className="cookTime">{cookTime}</p>
                <p className="desc">{descLimit(desc, 20)}</p>
                <Link to={`/recipes/${url}`}>View Full Recipe</Link>
            </div>
        </div>
    );
};

export default RecipeCard;