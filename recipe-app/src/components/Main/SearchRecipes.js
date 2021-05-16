import React from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';

const SearchRecipes = ({ searchInput }) => {
    return (
        <Form className="d-flex">
            <FormControl
                type="search"
                placeholder="Search"
                className="mr-2"
                aria-label="Search"
                onChange={searchInput}
            />
            <Button type="submit">Search</Button>
        </Form>
    );
};

export default SearchRecipes;

/*

<div className="searchRecipes">
<form>
    <input type="text" placeholder="Search Recipes" onChange={searchInput} />
    <button>Search Recipes</button>
</form>
</div>

*/