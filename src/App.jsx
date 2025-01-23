import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "/src/components/Header/Header.jsx"
import Products from "/src/components/Products/Products.jsx"
import About from '/src/components/About/About.jsx'
import Contact from "/src/components/Contact/Contact.jsx"
import Home from "/src/components/Home/Home.jsx"
import Footer from "/src/components/Footer/Footer.jsx";
import './App.css'

function App() {
  

  return (
    <Router>
      <Header/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      <Footer/>
    </Router>
  )
}

export default App
