import { langs, nav_items } from 'data';
import React from 'react'
import { BiChevronDown } from "react-icons/bi";
import { Link } from 'react-router-dom';
import "./index.css";

export default function Header() {
  return (
    <nav className='container nav font-rubik'>
      <Link to="/" className='nav__logo'>
        <img src="/assets/images/logo.png" alt="Logo" />
      </Link>
      <ul className='nav__items'>
        {nav_items.map((item, i) => (
          <li key={i} className="nav__item">
            <Link to={item.link} className="nav__link">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      <div className='nav__details'>
        <div className='nav__langs'>
          <p className='nav__current-lang'>
            <span>UZ</span>
            <BiChevronDown />
          </p>
          <ul className='nav__langs-container'>
            {langs.map(lang => (
              <li key={lang} className='nav__lang'>
                {lang}
              </li>
            ))}
          </ul>
        </div>
        <div className='nav__contact'>
          <button className='nav__btn'>
            <p className='nav__number'>+998 99 011 89 34</p>
            <span className='nav__contact-text'>aloqa uchun</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
