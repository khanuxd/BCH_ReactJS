import React, { Component } from 'react';

const Myrecipe = (props) => {
    return (
        <div>
            <img src={props.src} alt="Recipe Image" />
            <div className="card-body">
                <h1>{props.title}</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                <h5>Read More</h5>
            </div>
        </div>
    )
}

class Recipes extends Component {
    render() {
        return (
            <div className="cards">
                <div className="card">
                    <Myrecipe src="https://source.unsplash.com/1600x900/?cooking" title="Title of the Recipe" />
                </div>
                <div className="card">
                    <Myrecipe src="https://source.unsplash.com/1600x900/?indian-food" title="Title of the Recipe" />
                </div>
                <div className="card">
                    <Myrecipe src="https://source.unsplash.com/1600x900/?curry" title="Title of the Recipe" />
                </div>
                <div className="card">
                    <Myrecipe src="https://source.unsplash.com/1600x900/?biryani" title="Title of the Recipe" />
                </div>
            </div>
            
        );
    }
}

export default Recipes;