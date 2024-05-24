import React, { useState } from "react";
import "./register.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const RegistrationForm = () => {
    const [FName, setFName] = useState("");
    const [LName, setLName] = useState("");
    const [Emailid, setEmailid] = useState("");
    const [Password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3210/register', { FName, LName, Emailid, Password });
            if (response.status === 201) {
                toast.success("Account created successfully!");
                console.log(response.data);
            }
            
        } catch (error) {
            console.error('Signup error:', error);
            toast.error("Registration failed. An error occurred."); // Display error toast
        }
    }

    return (
        <section className="center-container">
                 <div className="wrap">
                     <form  onSubmit={handleSubmit}>
                         <h1>REGISTRATION</h1>
                         <div className="input-box">
                             <input 
                             type="text" 
                             placeholder="Enter your First Name" 
                             required
                             value={FName}
                             onChange={(e) => setFName(e.target.value)}
                             ></input>
                         </div>
                         <div className="input-box">
                             <input 
                             type="text" 
                             placeholder="Enter your Last Name" 
                             required
                             value={LName}
                             onChange={(e) => setLName(e.target.value)}
                             ></input>
                         </div>
                       <div className="input-box">
                             <input 
                             type="text" 
                             placeholder="Enter your Email Address" 
                             required
                             value={Emailid}
                             onChange={(e) => setEmailid(e.target.value)}
                             ></input>
                         </div>
                         <div className="input-box">
                             <input 
                             type="password" 
                             placeholder="Enter your Password" 
                             required
                             value={Password}
                             onChange={(e) => setPassword(e.target.value)}
                             ></input>
                         </div>
                         <div>
                             <button type="submit">Register</button>
                         </div>
                         <div className="register-link">
                             <p>Already have an Account? <a href="/login">Login</a></p>
                         </div>
                     </form>
                 </div>
                 <ToastContainer></ToastContainer>
         </section>
             )
 }
export default RegistrationForm;
