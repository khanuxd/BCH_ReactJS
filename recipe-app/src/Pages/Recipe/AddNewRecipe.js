import React, { useState } from "react";
import axios from "axios";
import PostedStatus from '../Recipes/PostedStatus';

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const RecipeForm = () => {
    const [data, setData] = useState({
        name: "",
        desc: "",
        image: "",
        origin: "",
        cookTime: "",
        recipeIngredient: [],
        recipeInstructions: []
    });

    const [change, setChange] = useState(false);

    const [ingredients, setIngredients] = useState([
        { id: 1, ingName: "", ingquantity: "" },
    ]);

    const [step, setStep] = useState([
        { id: 1, recipeStep: "" },
    ]);

    const changeData = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const changeIngData = (e, i) => {
        const { name, value } = e.target;
        const list = [...ingredients];
        list[i][name] = value;
        setIngredients(list);
        setData({ ...data, recipeIngredient: ingredients });
    };

    const changeStepData = (e, i) => {
        const { name, value } = e.target;
        const list = [...step];
        list[i][name] = value;
        setStep(list);
        setData({ ...data, recipeInstructions: step });
    };

    console.log(`1st change ${change}`);

    const addMore = (e, i) => {
        e.preventDefault();
        const newRecipeIngredient = { id: ingredients.length + 1, ingName: "", ingquantity: "" };
        setIngredients([...ingredients, newRecipeIngredient]);
    };

    const addMoreStep = (e, i) => {
        e.preventDefault();
        const newRecipeStep = { id: step.length + 1, recipeStep: "" };
        setStep([...step, newRecipeStep]);
    };

    const submitData = (e) => {
        e.preventDefault();

        axios
            .post("http://localhost:3001/recipes", data);
        e.target.reset();
        setChange(true);
    };

    return (

        <div>
            {change && <PostedStatus name={data.name} />}

            <Form onSubmit={submitData}>
                <Form.Group>
                    <Form.Label htmlFor="name">Name</Form.Label>
                    <Form.Control id="name" type="text" name="name" onChange={changeData} placeholder="eg: Chicken Biriyani" required />
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor="desc">Description</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        type="text"
                        id="desc"
                        name="desc"
                        onChange={changeData} placeholder="About the recipe" required
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor="image">Image URL</Form.Label>
                    <Form.Control id="image" type="text" name="image" onChange={changeData} placeholder="Image url" required />
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor="origin">Cuisine Origin</Form.Label>
                    <Form.Control id="origin" type="text" name="origin" onChange={changeData} placeholder="ex: Italian" required />
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor="cookTime">Cooking Time (in Minutes)</Form.Label>
                    <Form.Control id="cookTime" type="number" name="cookTime" onChange={changeData} placeholder="ex: 30" required />
                </Form.Group>
                <div>
                    <p>Recipe Ingredients</p>
                    {ingredients.map((_, i) => {
                        return (
                            <div key={i}>
                                <Form.Group>
                                    <Row>
                                        <Col>
                                            <Form.Label htmlFor="ingquantity">Quantity</Form.Label>
                                            <Form.Control
                                                type="text"
                                                id="ingquantity"
                                                name="ingquantity" required
                                                onChange={(e) => changeIngData(e, i)}
                                            />
                                        </Col>
                                        <Col>
                                            <Form.Label htmlFor="ingName">Ingredient</Form.Label>
                                            <Form.Control
                                                type="text"
                                                id="ingName"
                                                name="ingName" required
                                                onChange={(e) => changeIngData(e, i)}
                                            />
                                        </Col>
                                    </Row>
                                </Form.Group>
                            </div>
                        );
                    })}

                    <Button variant="outline-success" onClick={addMore}>
                        add more
        </Button>
                </div>
                <div>
                    <p>Recipe Instructions</p>
                    {step.map((_, i) => {
                        return (
                            <div key={i}>
                                <Form.Group>

                                    <Form.Label htmlFor="recipeStep">Step</Form.Label>
                                    <Form.Control
                                        type="text"
                                        id="recipeStep"
                                        name="recipeStep" required
                                        onChange={(e) => changeStepData(e, i)}
                                    />
                                </Form.Group>
                            </div>
                        );
                    })}

                    <Button variant="outline-success" onClick={addMoreStep}>
                        Add step
        </Button>
                    {console.log(`2nd change ${change}`)}
                </div>
                <Button type="submit" variant="success" value="Send data" >
                    Post recipe
            </Button>
            </Form>
        </div>
    );
};

export default RecipeForm;