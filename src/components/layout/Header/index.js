import { langs, nav_items } from 'data';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { BiChevronDown } from "react-icons/bi";
import { FaTimes } from 'react-icons/fa';
import { GiHamburgerMenu } from "react-icons/gi"
import { Link } from 'react-router-dom';
import "./index.css";

export default function Header() {
  const [navbarOpened, setNavbarOpened] = useState(false);

  const toggleNav = state => {
    setNavbarOpened(state);
    document.body.style.overflowY = state ? "hidden" : "auto"
  }

  return (
    <nav className='container nav font-rubik'>
      <button onClick={() => toggleNav(true)} className='nav__opener'>
        <GiHamburgerMenu />
      </button>
      <Link to="/" className='nav__logo'>
        <img src="/assets/images/logo.png" alt="Pero Logo" />
      </Link>
      <ul className='nav__items-desktop'>
        {nav_items.map((item, i) => (
          <li key={i} className="nav__item">
            <Link to={item.link} className="nav__link">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      <ul className={`nav__items-mobile ${navbarOpened ? "active" : ""}`}>
        <div className='nav__items-mobile-header'>
          <Link onClick={() => toggleNav(false)} to="/">
            <img
              src="/assets/images/logo.png"
              alt="Pero Logo"
            />
          </Link>
          <button onClick={() => toggleNav(false)} className='nav__closer'>
            <FaTimes />
          </button>
        </div>
        {nav_items.map((item, i) => <MobileHeaderItem key={i} {...item} animateDelay={i * 200} navbarOpened={navbarOpened} toggleNav={toggleNav} />)}
      </ul>
      <div className='nav__details'>
        <div className='nav__langs'>
          <p className='nav__current-lang'>
            <span>UZ</span>
            <BiChevronDown />
          </p>
          <span className='nav__current-lang-path' />
          <ul className='nav__langs-container'>
            {langs.map(lang => (
              <li key={lang} className='nav__lang'>
                {lang}
              </li>
            ))}
          </ul>
        </div>
        <div className='nav__contact'>
          <a
            href="tel:+998990118934"
            target="_blank"
            className='nav__btn'
            rel="noreferrer"
          >
            <p className='nav__number'>+998 99 011 89 34</p>
            <span className='nav__contact-text'>aloqa uchun</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

function MobileHeaderItem({ link, name, animateDelay, navbarOpened, toggleNav }) {
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsReady(prev => !prev)
    }, animateDelay);
  }, [animateDelay, navbarOpened]);

  return (
    <li className={`nav__item ${isReady ? "active" : ""}`}>
      <Link onClick={() => toggleNav(false)} to={link} className="nav__link">
        {name}
      </Link>
    </li>
  );
}
