import React from "react";

const BoxCard = (props) => {

    return (
        <div className="box">
            <h1>{props.name}</h1>
            <p>Age: {props.age}</p>
            <p>Title: {props.title}</p>
            <button onClick={clickMe}>Contact</button>
        </div>
    );
};

const clickMe = () => {
    console.log("Clicked")
};

export default BoxCard;