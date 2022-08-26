import React from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import "./index.css";

export default function SlideBtn({ rightIcon, onClick, style }) {
  return (
    <button style={style} onClick={onClick} className={`slide-btn ${rightIcon ? "slide__next" : "slide__prev"}`}>
      {rightIcon ? <FaChevronRight /> : <FaChevronLeft />}
    </button>
  )
}
