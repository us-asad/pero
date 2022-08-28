import React from 'react';
import "./index.css";

export default function SectionFooterBtn({ text, bgColor, style, className }) {
  return (
    <button className={`section__footer-btn ${className}`} style={{backgroundColor: bgColor, ...style}}>
      <img src='/assets/icons/download-icon.png' alt="Pero download icon" className='section__footer-btn-icon' />
      <pre className='section__footer-btn-text font-rubik'>{text}</pre>
    </button>
  );
}
