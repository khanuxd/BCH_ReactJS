import React from 'react';
// import { Link } from 'react-router-dom';
import { Card, Button, Badge } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import './RecipeCard.css'

const RecipeCard = ({ image, name, origin, cookTime, desc, url }) => {
    const descLimit = (str, no_of_words) => {
        return `${str.split(" ").splice(0, no_of_words).join(" ")}...`;
    };

    return (
        <Card>
            <Card.Img variant="top" src={image} alt={name} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <div className="card-tag">
                    <Card.Text className="recipe-origin">{origin}</Card.Text>
                    <Card.Text>{cookTime} Min</Card.Text>
                </div>
                <Card.Text>{descLimit(desc, 15)}</Card.Text>
                <LinkContainer to={`/recipes/${url}`}>
                    <Button variant="outline-warning" className="card-button">View Full Recipe</Button>
                </LinkContainer>
            </Card.Body>
        </Card>
    );
};

export default RecipeCard;


/*

<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>


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

*/