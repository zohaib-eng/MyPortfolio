import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import logo from './logo.svg';
import Navbar from './Navbar/navbar'
import NavbarHook from './NavbarHook/NavbarHook'
import ImageBar from './Image/ImageBar'
import './App.css';

const App =()=> {
  return (
    <Router>
       {/* <Navbar/> */}
       <NavbarHook/>
       {/* <ImageBar/> */}

    </Router>
  );
}
 
export default App;
