import React from "react";

const Box = (props) => {
        return (
            <div className="box">
                <h1>{props.name}</h1>
                <p>Age: {props.age}</p>
                <p>Title: {props.title}</p>
            </div>
        );
    };

    export default Box;