import React from "react";

import classes from "./FormInput.module.css";

const FormInput = (props) => {
  const { label, errorMessage, onChange, id, ...inputProps } = props;
  console.log(errorMessage);

  return (
    <div className={classes.formInput}>
      {/* <label>User Name</label> */}
      <label>{label}</label>
      <input {...inputProps} onChange={onChange}></input>
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;
