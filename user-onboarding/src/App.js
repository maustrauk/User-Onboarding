import axios from 'axios';
import React, {useState} from 'react';
import * as yup from 'yup';

import './App.css';
import Form from './Form';

const initialFormValues = {
  name: "",
  email: "",
  password: "",
  terms: "",
}


function App() {

  const [formValues, setFormValues] = useState(initialFormValues); 


  return (
    <div className="App">
      <Form />
    </div>
  );
}

export default App;
