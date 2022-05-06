import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles/SignupForm.css";
import qs from 'qs'

const initialForm = Object.freeze({
  username:"",
  password:""
});

const SignupForm = () => {
  const [formData, updateFormData] = useState(initialForm);
  //console.log(formData);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [signup, signupForm] = useState();
  const [signupMessage, setSignupMessage] = useState();
  const [user, setUser] = useState();
  
  useEffect(() => {
    const signedInUser = localStorage.getItem("user");
    if (signedInUser) {
      const foundUser = signedInUser;
      setUser(foundUser);
    }
  }, []);

  const handleChange = (e) => {

    updateFormData({
      ...formData, 
      [e.target.name]: e.target.value.trim()
    });
  };

  const handleSignout = () => {
    setUser({});
    setUsername("");
    setPassword("");
    localStorage.clear();
    window.location.reload();
  };

  const submitResponse = (e) => {
    e.preventDefault();
    

    axios
      .post("http://localhost:8000/api/auth/register/", qs.stringify(formData), {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        formData: qs.stringify(formData),
      })
      .then((resp) => {
        if (resp.status === 201) {
          console.log("Signed up successfully");
        }
        else if (resp.status === 401) {
          console.log("Signup failed");
        }
        setSignupMessage(resp.data.message);
        setUser(resp.data);
        // store the user in localStorage
        localStorage.setItem('user', resp.data);

      });

      
  }; 
 
  const validateForm = () => {
    return signup != null;
  };

  if (user) {
    const loggedIn = localStorage.getItem('user');
    return (
      <div className="SignupForm" style={{color: "white"}}>
        <p>Welcome!</p>
        <button onClick={handleSignout}>Sign Out</button>
      </div>
    );
}

return (
  <div className="SignupForm" style={{color: "white"}}>
    <form>
      Username: 
      <input name="username" required onChange={handleChange}></input> <br/><br/>
      Password:
      <input type="password" name="password" required onChange={handleChange}
      ></input>
      <br /> <br />
      <button onClick={submitResponse}>
        Signup
      </button>
    </form>
  </div>
);
};

export default SignupForm;
