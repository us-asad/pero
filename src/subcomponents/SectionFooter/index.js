import React from 'react';
import "./index.css";

export default function SectionFooter({ text, color }) {
  return (
    <div className='section__footer'>
      <p className='section__footer-text' style={{color: color}}>{text}</p>
      <div className='section__footer-hr' style={{borderColor: color}} />
    </div>
  )
}
