import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SignupForm from "./SignupForm.jsx"

const Signup = () => {

  return (
    <div style={{color: "white"}}>
      <center>
        <h1>Sign Up</h1>
      </center>
      
      <SignupForm />
    </div>
  );
};

export default Signup;
