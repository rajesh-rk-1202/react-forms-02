import React from "react";

import classes from "./FormInput.module.css";

const FormInput = (props) => {
  const { label, onChange, id, ...inputProps } = props;

  return (
    <div className={classes.formInput}>
      {/* <label>User Name</label> */}
      <label>{label}</label>
      <input {...inputProps} onChange={onChange}></input>
    </div>
  );
};

export default FormInput;
