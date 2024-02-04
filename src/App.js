import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import AboutUs from './components/AboutUs';
import Container from './components/Container';
import Login from './components/Login';
import Signup from './components/Signup';
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
        <Route exact path="/" element={<Container />} />
        <Route exact path="/Home" element={<Container />} />
        <Route exact path="/Bsfillpersonfill" element={<Login/>} />
          <Route exact path="/AboutUs" element={<AboutUs />} />
          <Route exact path="/Signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
