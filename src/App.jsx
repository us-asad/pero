import { Home } from 'pages'
import React from 'react'
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className='font-rubik'>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}
