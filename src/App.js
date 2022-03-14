import './App.css';
import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import image from './train.jpg'
// import LoginForm from './components/LoginForm';
// import RegisterForm from './components/RegisterForm';
// import Home from './components/Home';

function App() {
  return (
    <div className='App'>
      <Header/>
      <img src={image} alt="" />
      <Footer/>
    </div>
  );
}

export default App;
