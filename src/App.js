import React, { useState, useEffect, useRef } from "react";

import "./App.css";
import FormInput from "./components/FormInput";
import { eventWrapper } from "@testing-library/user-event/dist/utils";

function App() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthdate: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "birthdate",
      type: "date",
      placeholder: "Birthdate",
      // errorMessage: "",
      label: "Birthdate",
      // required: true,
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include atleast 1 letter, 1 number and 1 special character",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords  don't match!",
      label: "Confirm Password",
      required: true,
      pattern: values.password,
    },
  ];

  const [formSubmitted, setFormSubmitted] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();
    // setValues({
    //   username: "",
    //   email: "",
    //   birthDay: "",
    //   password: "",
    //   confirmPassword: "",
    // });
    setFormSubmitted(true);
    console.log(values);
  };

  const onChangehandler = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  return (
    <div className="app">
      <form onSubmit={submitHandler}>
        <h1>Register</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChangehandler}
            formSubmitted={formSubmitted}
          ></FormInput>
        ))}

        <button>Submit</button>
        {formSubmitted && <p>Form Submitted Successfully</p>}
      </form>
    </div>
  );
}

export default App;
