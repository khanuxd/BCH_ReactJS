import React from 'react';
import './popup.css';

const closeHandler = () => {
    window.location.reload();
}

const Popup = ({ firstName, lastName, phone, role, message, submit }) => {

    return (
        <div className="overlay">
            <div className="popUpBox">
                <h2>Your Note</h2>
                <div>
                    <p>
                        First Name : <span>{firstName}</span>
                    </p>
                    <p>
                        Last Name : <span>{lastName}</span>
                    </p>
                    <p>
                        Phone : <span>{phone}</span>
                    </p>
                    <p>
                        Role : <span>{role}</span>
                    </p>
                    <p>
                        Message : <span>{message}</span>
                    </p>
                    <button onClick={submit}>Yes, I am sure</button>
                    <button className="secondary" onClick={closeHandler}>
                        Nope, Don't want to post it
                        </button>
                </div>
            </div>
        </div>
    );
};

export default Popup;