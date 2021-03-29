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

const Main = () => {
    return (
        <main>
            <div>
                <Box name="Khan" age="31" title="CEO" />
                <Box name="Matt" age="35" title="FullStack Developer" />
                <Box name="Smith" age="25" title="Manager" />
            </div>
        </main>
    );
};

export default Main;