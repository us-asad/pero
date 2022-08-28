import React from 'react';
import "./index.css";

export default function SectionFooter({ text, color, className }) {
  return (
    <div className={`section__footer ${className}`}>
      <p className='section__footer-text' style={{color: color}}>{text}</p>
      <div className='section__footer-hr' style={{borderColor: color}} />
    </div>
  )
}
