import React from "react";
import Form from "../Reused/Forms";
import banner from '../../Images/loginbanner.jpg'

const Login = () => {
  return (
    <>
        <div className="row g-0">
          <div className="col-md-8 form-banner">
            <img src={banner} alt="loginImage" />
          </div>
          <div className="col-md-4 form-container">
            <Form
              formTitle={"Login Page"}
              submitBtn={"Login"}
              formType={"login"}
            />
          </div>
        </div>
    </>
  );
};

export default Login;