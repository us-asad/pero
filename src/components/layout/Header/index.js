import { langs, nav_items } from 'data';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BiChevronDown } from "react-icons/bi";
import { FaTimes } from 'react-icons/fa';
import { GiHamburgerMenu } from "react-icons/gi"
import { Link } from 'react-router-dom';
import "./index.css";

export default function Header() {
  const [navbarOpened, setNavbarOpened] = useState(false);
  const [t, i18next] = useTranslation();

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
              {t(`nav.${i}`)}
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
        {nav_items.map((item, i) => <MobileHeaderItem key={i} {...item} animateDelay={i * 200} navbarOpened={navbarOpened} toggleNav={toggleNav} name={t(`nav.${i}`)} />)}
      </ul>
      <div className='nav__details'>
        <div className='nav__langs'>
          <p className='nav__current-lang'>
            <span>{i18next.language.toUpperCase()}</span>
            <BiChevronDown />
          </p>
          <span className='nav__current-lang-path' />
          <ul className='nav__langs-container'>
            {langs.filter(item => item !== i18next.language).map(lang => (
              <li onClick={() => i18next.changeLanguage(lang)} key={lang} className='nav__lang'>
                {lang.toUpperCase()}
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
            <p className='nav__number'>+998 78 888 09 99</p>
            <span className='nav__contact-text'>{t("contact.contact_btn")}</span>
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
