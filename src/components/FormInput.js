import React from "react";

import classes from "./FormInput.module.css";

const FormInput = (props) => {
  const inputChangeHandler = (event) => {
    console.log(props.placeholder);
  };

  return (
    <div className={classes.formInput}>
      {/* <label>User Name</label> */}
      <input
        name={props.name}
        placeholder={props.placeholder}
        onChange={inputChangeHandler}
      ></input>
    </div>
  );
};

export default FormInput;
