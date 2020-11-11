import React from 'react';

const Form = props => {

    const onChange = evt => {

    }
    
    return(
        <div className="form">
            <form>
                <label>
                    Name : 
                    <input
                    name = "name"
                    type = "text"
                    value = "name"
                    onChange ={onChange}
                    />
                </label>
                <label>
                    Email : 
                    <input
                    name = "email"
                    type = "email"
                    value = "email"
                    onChange ={onChange}
                    />
                </label>
                <label>
                    Password : 
                    <input
                    name = "password"
                    type = "text"
                    value = "password"
                    onChange ={onChange}
                    />
                </label>
                <label>
                    Terms of Service
                    <input
                    name = "terms"
                    type = "checkbox"
                    value = "on"
                    onChange ={onChange}
                    />
                </label>
                <button>submit</button>
            </form>
        </div>
    );
}

export default Form;