import React, { useState } from "react";

import classes from "./FormInput.module.css";

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);

  const { label, errorMessage, onChange, id, ...inputProps } = props;
  // console.log(errorMessage);

  const handleFocus = () => {
    setFocused(true);
  };

  return (
    <div className={classes.formInput}>
      {/* <label>User Name</label> */}
      <label>{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
        }
        focused={focused.toString()}
      ></input>
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;
