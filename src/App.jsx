import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "/src/components/Header/Header.jsx"
import ProductsPage from "/src/components/Products/ProductsPage"
import About from '/src/components/About/About.jsx'
import Contact from "/src/components/Contact/Contact.jsx"
import Home from "/src/components/Home/Home.jsx"
import Footer from "/src/components/Footer/Footer.jsx";
import { products, categories } from "./components/Products/products";
import ProductDetail from "./components/ProductDetail/ProductDetail"
import './App.css'


function App() {
  

  return (
    <Router>
      <Header/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductsPage products={products} categories={categories} />} />
          <Route
            path="/product/:id"
            element={<ProductDetail products={products} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      <Footer/>
    </Router>
  )
}

export default App
