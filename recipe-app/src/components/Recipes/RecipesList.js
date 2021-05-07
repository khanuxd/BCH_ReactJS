import React, { Component } from 'react';
import RecipeCard from './RecipeCard';
import SearchRecipes from '../SearchRecipes';

class RecipesList extends Component {
    state = {
        recipes: [],
        isLoading: false,
        searchInput: "",
    }

    componentDidMount() {
        this.setState({ isLoading: true });

        fetch("http://localhost:3001/recipes")
            .then(res => res.json())
            .then(res => this.setState({ recipes: res, isLoading: false }));
    }

    searchHandler = (e) => {
        this.setState({
            searchInput: e.target.value
        });
        console.log(this.state.searchInput);
    }

    render() {
        const filteredResult = this.state.recipes.filter(recipe => {
            return recipe.name.toLowerCase().includes(this.state.searchInput.toLowerCase())
        });

        const recipeList = filteredResult.map(recipe => {
            return (
                <RecipeCard
                    key={recipe.id}
                    name={recipe.name}
                    category={recipe.category}
                    src={recipe.src}
                    about={recipe.about}
                    url={recipe.url}
                />
            );
        });

        return (
            <div>
                <div className="search-area">
                    <SearchRecipes searchInput={this.searchHandler} />
                </div>
                <div className="cards">
                    {recipeList}
                </div>
            </div>
        );
    }
}

export default RecipesList;