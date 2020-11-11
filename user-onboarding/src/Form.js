import React from 'react';

const Form = props => {

    const {change, values, errors} = props;

    const onChange = evt => {
        const { name, value, checked, type } = evt.target;
        const correctValue = type === "checkbox" ? checked : value;
        change(name, correctValue);
    }
    
    return(
        <div className="form">
            <form>
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
                <label>
                    Terms of Service
                    <input
                    name = "terms"
                    type = "checkbox"
                    value = {values.term}
                    onChange ={onChange}
                    />
                </label>
                <div className="errors">{errors.terms}</div>
                <button>submit</button>
            </form>
        </div>
    );
}

export default Form;