import React from 'react';
import Navbar from './components/Navbar'
import {Routes,Route} from "react-router-dom"
import Home from './components/Home';
import Contact from './components/Contact';
import Signup from './components/Signup';
import Login from './components/Login';
import About from './components/About';
import {BrowserRouter} from 'react-router-dom';
import ErrorPage from './components/Error';
// import ErrorPage from './components/Error';

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path ="/" element= {<Home/>} />
      <Route path ="/contact" element= {<Contact/>} />
      <Route path ="/signup" element= {<Signup/>} />
      <Route path ="/login" element= {<Login/>} />
      <Route path ="/about" element= {<About/>} />
      <Route path ="*" element= {<ErrorPage/>} />
        
      
      </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;