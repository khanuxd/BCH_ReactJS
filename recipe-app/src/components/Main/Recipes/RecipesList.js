import React, { Component } from 'react';
import RecipeCard from './RecipeCard';
import SearchRecipes from '../Search/SearchRecipes';
import { Button } from 'react-bootstrap';

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
                    origin={recipe.origin}
                    cookTime={recipe.cookTime}
                    image={recipe.image}
                    desc={recipe.desc}
                    url={recipe.id}
                />
            );
        });

        return (
            <>
                <div className="search-area">
                    <SearchRecipes searchInput={this.searchHandler} />
                </div>
                {filteredResult.length === 0 && (
                    <div>
                        <h1>Nothing Found</h1>
                        <Button variant="outline-warning"><a href="/recipes">View Full Recipe</a></Button>
                        <br />
                        <Button variant="outline-warning"><a href="/add-new-recipe">Add new Recipe</a></Button>
                    </div>
                )}
                <div className="cards">
                    {recipeList}
                </div>
            </>
        );
    }
}

export default RecipesList;