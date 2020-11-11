import axios from 'axios';
import React, {useState} from 'react';
import * as yup from 'yup';

import './App.css';
import Form from './Form';
import schema from './validation/shema';

const initialFormValues = {
  name: "",
  email: "",
  password: "",
  terms: "",
}

const initialFormErrors ={
  name: "",
  email: "",
  password: "",
  terms: "",
}

function App() {

  const [formValues, setFormValues] = useState(initialFormValues); 
  const [formErrors, setFormErrors] = useState(initialFormErrors);

  const inputChange = (name, value) => {

    yup
    .reach(schema, name)
    .validate(value)
    .then(() => {
      setFormErrors({...formErrors, [name]: ""});
    })
    .catch(err => {
      setFormErrors({...formErrors, [name]: err.errors[0]})
    })

    setFormValues({...formValues, [name] : value});
  }


  return (
    <div className="App">
      <Form change={inputChange} values={formValues} errors={formErrors}/>
    </div>
  );
}

export default App;
