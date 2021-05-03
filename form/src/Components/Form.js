import React from 'react';
import './form.css';

function Form(props) {

    return (
        <div className="form">
            <form onSubmit={props.submit}>
                <div>
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" name="firstName" id="firstName" onChange={props.change} required></input>
                </div>
                <div>
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" name="lastName" onChange={props.change} required></input>
                </div>
                <div>
                    <label htmlFor="phone">Phone Number</label>
                    <input type="text" name="phone" onChange={props.change}></input>
                </div>
                <div>
                    <label htmlFor="role">Role</label>
                    <select name="role" value={props.role} onChange={props.change}>
                        <option value="student">Student</option>
                        <option value="teacher">Teacher</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="message">Message</label>
                    <textarea name="message" rows="4" cols="50" onChange={props.change} />
                </div>
                <input type="submit" value="send" />
            </form>
        </div>
    );
}

export default Form;