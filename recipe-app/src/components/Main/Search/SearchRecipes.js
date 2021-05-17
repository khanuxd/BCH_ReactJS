import React from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';

import '../Main.css';

const SearchRecipes = ({ searchInput }) => {
    return (
        <Form className="d-flex">
            <FormControl
                type="search"
                placeholder="Search here"
                className="mr-2"
                aria-label="Search"
                onChange={searchInput}
            />
            {/* <Button type="submit" variant="warning">Search</Button> */}
        </Form>
    );
};

export default SearchRecipes;