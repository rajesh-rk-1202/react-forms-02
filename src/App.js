import React, { useState, useEffect, useRef } from "react";

import "./App.css";
import FormInput from "./components/FormInput";

function App() {
  const [username, setUsername] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className="app">
      <form onSubmit={submitHandler}>
        <FormInput name="username" placeholder="Username"></FormInput>
        <FormInput name="email" placeholder="Email"></FormInput>
        <FormInput name="fullname" placeholder="Full Name"></FormInput>
        <FormInput name="sth" placeholder="Sth else"></FormInput>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
