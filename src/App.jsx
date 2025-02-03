import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from "/src/components/Header/Header.jsx";
import ProductsPage from "/src/components/Products/ProductsPage";
import About from '/src/components/About/About.jsx';
import Contact from "/src/components/Contact/Contact.jsx";
import Home from "/src/components/Home/Home.jsx";
import Footer from "/src/components/Footer/Footer.jsx";
import { products, categories } from "./components/Products/products";
import ProductDetails from "./components/ProductDetail/ProductDetails";
import ArticlePage from '/src/components/Articles/ArticlesPage';
import './App.css';

function ScrollToTop() {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Add this component to scroll to top */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsPage products={products} categories={categories} />} />
        <Route path="/product/:id" element={<ProductDetails products={products} />} />
        <Route path="/article" element={<ArticlePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
