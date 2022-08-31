import React from 'react';
import { Link } from 'react-router-dom';
import "./index.css";

export default function SectionFooter({ to = "/", text, color, className }) {
  return (
    <div data-aos="zoom-in" className={`section__footer ${className}`}>
      <Link to={to} className='section__footer-text' style={{color: color}}>{text}</Link>
      <div className='section__footer-hr' style={{borderColor: color}} />
    </div>
  )
}
