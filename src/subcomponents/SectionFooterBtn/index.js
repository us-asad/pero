import React from 'react';
import "./index.css";

export default function SectionFooterBtn({ text, bgColor, width }) {
  return (
    <button className='section__footer-btn' style={{backgroundColor: bgColor}}>
      <img src='/assets/icons/download-icon.png' alt="Pero download icon" className='section__footer-btn-icon' />
      <pre className='section__footer-btn-text font-rubik' style={width ? {  } : {}}>{text}</pre>
    </button>
  );
}
