import React from 'react';
import './view.css'

const View = ({ firstName, lastName, phone, role, message }) => {
    return (
        <div className="view">
            <h1>This is your input</h1>
            <div className="notepad">
                <p>First Name : <span>{firstName}</span></p>
                <p>Last Name : <span>{lastName}</span></p>
                <p>Phone : <span>{phone}</span></p>
                <p>Role : <span>{role}</span></p>
                <p>Message : <span>{message}</span></p>
            </div>
        </div>
    );
};

export default View;