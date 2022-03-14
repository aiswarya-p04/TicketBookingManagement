import React from 'react'
import './Header.css'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'
import Home from './Home'
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
              <Link to="/">Aiswarya Ticket Booking</Link>
            </li>
            <li className='Right'>
              <Link to="/login">Login</Link>
            </li>
            <li className='Right'>
              <Link to="/register">Register</Link>
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
