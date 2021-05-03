import React from 'react';
import './view.css'

const View = (props) => {
    return (
        <div className="view">
            <h1>This is your input</h1>
            <p>First Name : <span>{props.firstName}</span></p>
            <p>Last Name : <span>{props.lastName}</span></p>
            <p>Phone : <span>{props.phone}</span></p>
            <p>Role : <span>{props.role}</span></p>
            <p>Message : <span>{props.message}</span></p>
        </div>
    );
};

export default View;