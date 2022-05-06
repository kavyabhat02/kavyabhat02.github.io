import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles/LoginForm.css";
import qs from 'qs'

const initialForm = Object.freeze({
  username:"",
  password:""
});

const LoginForm = () => {
  const [formData, updateFormData] = useState(initialForm);
  //console.log(formData);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [login, loginForm] = useState();
  const [loginMessage, setLoginMessage] = useState();
  const [user, setUser] = useState();

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = loggedInUser;
      setUser(foundUser);
    }
  }, []);
  
  const handleChange = (e) => {

    updateFormData({
      ...formData, 
      [e.target.name]: e.target.value.trim()
    });
  };

  // logout the user
  const handleLogout = () => {
    setUser({});
    setUsername("");
    setPassword("");
    localStorage.clear();
    window.location.reload();
  };

  const submitResponse = (e) => {
    e.preventDefault();
    //const user = {username, password};
    axios
      .post("http://localhost:8000/api/auth/login/", qs.stringify(formData), {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        formData: qs.stringify(formData),
      })
      .then((resp) => {
        if (resp.status === 200) {
          console.log("Logged in");
        }
        else if (resp.status === 401) {
          console.log("Login failed");
        }
        setLoginMessage(resp.data.message);
        setUser(resp.data)
        // store the user in localStorage
        localStorage.setItem('user', JSON.stringify(resp.data))
      });
  }; 
 
  const validateForm = () => {
    return login != null;
  };

  if (user) {
      const loggedIn = localStorage.getItem('user');
      return (
        <div className="LoginForm"  style={{color: "white"}}>
          <p>Welcome!</p> 
          <button onClick={handleLogout}>Logout</button>
        </div>
      );
  }

  return (
    <div className="LoginForm" style={{color: "white"}}>
      <form>
        Username: 
        <input name="username" required onChange={handleChange}></input> <br/><br/>
        Password:
        <input type="password" name="password" required onChange={handleChange}
        ></input>
        <br /> <br />
        <button onClick={submitResponse}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
