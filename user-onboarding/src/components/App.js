import axios from 'axios';
import React, {useEffect, useState} from 'react';
import * as yup from 'yup';

import './App.css';
import Form from './Form';
import Users from './Users';
import schema from '../validation/shema';

const initialFormValues = {
  name: "",
  email: "",
  password: "",
  role: "",
  dob: "",
  tel: "",
  git: "",
  terms: false,
}

const initialFormErrors ={
  name: "",
  email: "",
  password: "",
  role: "",
  dob: "",
  tel: "",
  git: "",
  terms: "",
}

const initialUsers =[];

const initialDisabled = true;

const post_URL = "https://reqres.in/api/users";

function App() {

  const [formValues, setFormValues] = useState(initialFormValues); 
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);
  const [users, setUsers] =useState(initialUsers);

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

  const formSubmit = () => {

    axios
    .post(post_URL, formValues)
    .then(res => {
      console.log("Response:",res.status);
      setUsers([...users, res.data]);
    })
    .catch(err => {
      console.log("Error:",err);
    })

    setFormValues(initialFormValues);
  }

  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  },[formValues])

  return (
    <div className="App">
      <Users users={users}/>
      <Form change={inputChange} submit={formSubmit} disabled={disabled} values={formValues} errors={formErrors}/>
    </div>
  );
}

export default App;
