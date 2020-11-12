import React from 'react';

const Form = props => {

    const {change, submit, disabled, values, errors} = props;

    const onChange = evt => {
        const { name, value, checked, type } = evt.target;
        const correctValue = type === "checkbox" ? checked : value;
        change(name, correctValue);
    }
    
    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }

    return(
        <div className="form-container">
            <form onSubmit={onSubmit} id="my_form">
                <label>
                    Name : 
                    <input
                    name = "name"
                    type = "text"
                    value = {values.name}
                    onChange ={onChange}
                    />
                </label>
                <div className="errors">{errors.name}</div>
                <label>
                    Email : 
                    <input
                    name = "email"
                    type = "email"
                    value = {values.email}
                    onChange ={onChange}
                    placeholder="my@email.com"
                    />
                </label>
                <div className="errors">{errors.email}</div>
                <label>
                    Password : 
                    <input
                    name = "password"
                    type = "text"
                    value = {values.password}
                    onChange ={onChange}
                    />
                </label>
                <div className="errors">{errors.password}</div>
                <label>Role :
                    <select name = "role" value = {values.role} onChange = {onChange}>
                        <option value = "">-----</option>
                        <option value = "instrutor">Instructor</option>
                        <option value = "student">Student</option>
                        <option value = "tl">Team Leader</option>
                    </select>
                </label>
                <div className="errors">{errors.role}</div>
                <label>
                    Date of Birth : 
                    <input
                    name = "dob"
                    type = "date"
                    value = {values.dob}
                    onChange ={onChange}
                    />
                </label>
                <div className="errors">{errors.dob}</div>
                <label>
                    Mobile number : 
                    <input
                    name = "tel"
                    type = "tel"
                    value = {values.tel}
                    onChange ={onChange}
                    placeholder="11 digits phone format"
                    />
                </label>
                <div className="errors">{errors.tel}</div>
                <label>
                    Github : 
                    <input
                    name = "git"
                    type = "url"
                    value = {values.url}
                    onChange ={onChange}
                    placeholder="Your's Github account url"
                    />
                </label>
                <div className="errors">{errors.url}</div>
                <label>
                    Terms of Service
                    <input
                    name = "terms"
                    type = "checkbox"
                    value = {values.terms}
                    onChange ={onChange}
                    />
                </label>
                <div className="errors">{errors.terms}</div>
                <button disabled={disabled}>submit</button>
            </form>
        </div>
    );
}

export default Form;