import React from 'react';
import { AiFillEye } from 'react-icons/ai';
import "./index.css";

export default function SectionFooterBtn({ text, bgColor, style, className, eye, onClick = Function.prototype, top }) {
  return (
    <button onClick={() => {
      onClick();
      if (top)
        window.scrollTo({ top });
    }} className={`section__footer-btn ${className}`} style={{backgroundColor: bgColor, ...style}}>
      {eye ? <AiFillEye style={{fontSize: "25px"}} /> : <img src='/assets/icons/download-icon.png' alt="Pero download icon" className='section__footer-btn-icon' />}
      <pre className='section__footer-btn-text font-rubik'>{text}</pre>
    </button>
  );
}
