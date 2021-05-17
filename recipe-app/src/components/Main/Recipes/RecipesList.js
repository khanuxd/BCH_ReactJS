import React, { Component } from 'react';
import RecipeCard from './RecipeCard';
import SearchRecipes from '../Search/SearchRecipes';
import { Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
// import SearchRecipes from '../'

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

    searchInputHandler = (e) => {
        e.preventDefault();
        this.setState({
            searchInput: "",
        });
        console.log(this.state.searchInput.length);
        // e.target.reset();
        // this.state.searchInput.length = 0;
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

                    <h3>Find Your Recipe</h3>
                    <SearchRecipes searchInput={this.searchHandler} />
                </div>

                {filteredResult.length === 0 && (
                    <div>
                        <h1>Nothing Found</h1>
                        <LinkContainer to="/recipes">
                            <Button type="reset" onClick={this.searchInputHandler} variant="outline-warning">View All Recipes</Button>
                        </LinkContainer>
                        <LinkContainer to="/add-new-recipe">
                            <Button variant="outline-warning">Add New Recipe</Button>
                        </LinkContainer>
                        <br />
                        {/* <Button variant="outline-warning"><a href="/add-new-recipe">Add new Recipe</a></Button> */}
                        {/* <Button variant="outline-warning" onClick={()=><Recipes />}><a href="/add-new-recipe">Add new Recipe</a></Button> */}
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