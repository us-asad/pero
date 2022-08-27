import { Footer, Header } from 'components';
import { Blogs, Home, Products, TermsOfUse, TopProducts } from 'pages'
import About from 'pages/About';
import React from 'react'
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className='font-rubik'>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/top-products" element={<TopProducts />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  )
}
