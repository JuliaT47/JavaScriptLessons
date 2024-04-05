import React from "react";
import "./Home";

const RegistrationForm = ({
  name,
  city,
  email,
  password,
  handleChangePass,
  handleChangeEmail,
  handleChangeName,
  handleChangeCity,
  onSubmitForm,
}) => {
  const checkPass = (pass) => {
    return pass.length > 0;
  };

  const checkEmail = (email) => {
    const emailValidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailValidation.test(email);
  };

  const ValidForm = () => {
    return checkEmail(email) && checkPass(password);
  };

  return (
    <div className="block">
      <p> Registration Form </p>
      <form>
        <div className="formInput">
          <label>Name</label>
          <input
            value={name}
            onChange={(event) => handleChangeName(event)}
          ></input>
        </div>
        <div className="formInput">
          <label>City</label>
          <input
            value={city}
            onChange={(event) => handleChangeCity(event)}
          ></input>
        </div>
        <div className="formInput">
          <label>Email</label>
          <input
            value={email}
            onChange={(event) => handleChangeEmail(event)}
          ></input>
        </div>
        <div className="formInput">
          <label>Password</label>
          <input
            value={password}
            onChange={(event) => handleChangePass(event)}
          ></input>
        </div>
        {ValidForm() && <button>Save</button>}
      </form>
    </div>
  );
};
export default RegistrationForm;
