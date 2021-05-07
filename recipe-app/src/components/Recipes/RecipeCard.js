import React from 'react';

const RecipeCard = ({ name, category, about, src, url }) => {
    const descLimit = (str, no_of_words) => {
        return str.split(" ").splice(0, no_of_words).join(" ");
    };

    return (
        <div className="card">
            <img src={src} alt={name} />
            <div className="card-content">
                <h2>{name}</h2>
                <p className="category">{category}</p>
                <p className="desc">{descLimit(about, 20)}</p>
                <a href={url}>View Full Recipe</a>
            </div>
        </div>
    );
};

export default RecipeCard;