import React, { useState } from "react";
import "./login.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const LoginForm = () => {
  const [Emailid, setEmailid] = useState("");
  const [Password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3210/register/signin', { Emailid, Password });
      if (response.status === 200) {
        toast.success("Login successful!");
        console.log(response.data); // You can also handle the token here if needed
      }
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code outside the range of 2xx
        const status = error.response.status;
        if (status === 401) {
          toast.error("Invalid username or password.");
        } else if (status === 404) {
          toast.error("User not found.");
        } else {
          toast.error("An error occurred. Please try again later.");
        }
      } else if (error.request) {
        // The request was made but no response was received
        toast.error("No response from the server. Please try again later.");
      } else {
        // Something happened in setting up the request that triggered an error
        toast.error("An error occurred. Please try again later.");
      }
      console.error('Login error:', error);
    }
  };

  return (
    <section className="center-container">
      <div className="wrap">
        <form onSubmit={handleSubmit}>
          <h1>LOGIN</h1>
          <div className="input-box">
            <input
              type="text"
              placeholder="Enter your Email Address"
              required
              value={Emailid}
              onChange={(e) => setEmailid(e.target.value)}
            />
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Enter your Password"
              required
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <button type="submit">Login</button>
          </div>
          <div className="register-link">
            <p>Don't have an Account? <a href="/register">Register</a></p>
          </div>
        </form>
      </div>
      <ToastContainer />
    </section>
  );
}

export default LoginForm;
