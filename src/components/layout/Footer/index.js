import React from 'react'
import { FaFacebookF } from 'react-icons/fa';
import { BsTwitter } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import { footer_links } from 'data';
import "./index.css"
import { useLocation } from 'react-router-dom';

export default function Footer() {
  const location = useLocation();

  const notHomePage = location?.pathname !== "/";

  return (
    <>
      <footer className='footer' style={notHomePage ? {background: "var(--pink-normal)", color: "#136A61"} : {}}>
        <div className="container footer__items">
          <div className='footer__item'>
            <img src={`/assets/images/logo${notHomePage ? "" : "-white"}.png`} alt="PERO Logo" className='footer__logo' />
            <p className='footer__text' style={notHomePage ? {opacity: 1} : {}}>
              Quo is the most easier way for transaction
              with your friends and family, No matter where are you.
              An exceptional way for make your life one step easier.
            </p>
            <ul className='footer__social-items'>
              <li className='footer__social-item'>
                <FaFacebookF />
              </li>
              <li className='footer__social-item'>
                <BsTwitter />
              </li>
              <li className='footer__social-item'>
                <AiOutlineInstagram />
              </li>
            </ul>
          </div>
          {footer_links.map((link, i) => (
            <div key={i} className='footer__item'>
              <h4 className='footer__item-title'>{link.title}</h4>
              <ul className='footer__item-links'>
                {link.links.map((linkItem, idx) => (
                  <li className='footer__item-link' key={idx}>{linkItem}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
      <div className='footer__copyright'>
        <p className='footer__copyright-text'>Copyright © PERO | Designed by</p>
        <a className='footer__copyright-link' href='#'>abba marketing</a>
        <p className='footer__copyright-text'>- Powered by</p>
        <a className='footer__copyright-link' href='#'>ABBA</a>
      </div>
    </>
  )
}
