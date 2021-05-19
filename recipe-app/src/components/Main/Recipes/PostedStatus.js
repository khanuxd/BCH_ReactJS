import React from 'react';
import { Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import '../../../Pages/Recipe/AddNewRecipe.css';

const closeHandler = () => {
    window.location.reload();
}

const PostedStatus = ({ name }) => {
    return (
        <div className="overlay">
            <div className="postedUpdate">
                <button onClick={closeHandler}>X</button>
                <p> Your recipe {name} posted successfully</p>
            </div>
        </div>
    );
};

export default PostedStatus;