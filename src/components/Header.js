import React from 'react'
import './Header.css'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'
import Home from './Home'
import { IoIosContact } from "react-icons/io";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom"; 

const header = () => {
  return (
    <Router>
    <div className='Header-app'>
      <nav>
          <ul>
            <li>
              <Link to="/" >Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/" ><IoIosContact size={30}/></Link>
            </li>
          </ul>
          
        </nav>
        <Routes>
          <Route path="/login" element={<LoginForm/>}/>
          <Route path="/register" element={<RegisterForm/>}/>
          <Route path="/" element={<Home/>}/>
        </Routes>
    </div>
    </Router>
  )
}

export default header
