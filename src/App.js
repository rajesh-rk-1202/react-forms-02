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
      label: "Username",
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      label: "Email",
    },
    {
      id: 3,
      name: "birthdate",
      type: "text",
      placeholder: "Birthdate",
      label: "Birthdate",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      label: "Password",
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      label: "Confirm Password",
    },
  ];

  const submitHandler = (event) => {
    event.preventDefault();
    setValues({
      username: "",
      email: "",
      birthDay: "",
      password: "",
      confirmPassword: "",
    });
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
          ></FormInput>
        ))}

        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
