import React from 'react';

const SearchRecipes = ({searchInput}) => {
    return (
        <div className="searchRecipes">
            <form>
                <input type="text" placeholder="Search Recipes" onChange={searchInput} />
                <button>Search Recipes</button>
            </form>
        </div>
    );
};

export default SearchRecipes;