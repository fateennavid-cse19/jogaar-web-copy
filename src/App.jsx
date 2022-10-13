import React from 'react';
import Nav from './Components/Navbar/Nav';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import home_pic from "./Images/home.png";
import Home from "./Components/Home/Home";


import './App.css';
import Footer from './Components/Footer/Footer';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='page-container'>
        <Nav />
        <div className='content-wrap'>
          <Routes>
            <Route path='/' element={<Home imageSrc={home_pic} />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Routes>
          

        </div>
    
      <Footer />
      </div>
    </Router>
    
  );
}

export default App;
