import React from 'react';
import './form.css';

function Form({ submit, change }) {

    return (
        <div className="form">
            <form onSubmit={submit}>
                <div>
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" name="firstName" id="firstName" onChange={change} required></input>
                </div>
                <div>
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" name="lastName" onChange={change} required></input>
                </div>
                <div>
                    <label htmlFor="phone">Phone Number</label>
                    <input type="text" name="phone" onChange={change}></input>
                </div>
                <div>
                    <label htmlFor="role">Role</label>
                    <select name="role" value={role} onChange={change}>
                        <option value="student">Student</option>
                        <option value="teacher">Teacher</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="message">Message</label>
                    <textarea name="message" rows="4" cols="50" onChange={change} />
                </div>
                <input type="submit" value="send" />
            </form>
        </div>
    );
}

export default Form;