import logo from './logo.svg';
import './App.css';
import Homepage from "./components/homepage/homepage.js";
import LoginForm from './components/login/login.js';
import RegistrationForm from "./components/register/register.js"
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import bootstrap from "bootstrap";

function App() {
  return (
    <div className='body'>
     
      <BrowserRouter>
        <Homepage></Homepage>
        <Routes>
          <Route path="/login" element={<LoginForm />}></Route>
          <Route path="/register" element={<RegistrationForm />}></Route>
        </Routes>
        <div className='butt'>
          
          <button className='butt1'><Link to="/login" >Login</Link></button>
          <button className='butt1'><Link to="/register" >Registration</Link></button>
        </div>
      </BrowserRouter> 
    </div>
  );
}

export default App;