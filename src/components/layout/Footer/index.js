import React from 'react'
import { FaFacebookF } from 'react-icons/fa';
import { BsTwitter } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import { footer_links } from 'data';
import "./index.css"
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const location = useLocation();
  const [t] = useTranslation();

  const notHomePage = location?.pathname !== "/";

  return (
    <>
      <footer className='footer' style={notHomePage ? { background: "var(--pink-normal)", color: "#136A61" } : {}}>
        <div className="container footer__items">
          <div className='footer__item'>
            <Link to="/">
              <img src={`/assets/images/logo${notHomePage ? "" : "-white"}.png`} alt="PERO Logo" className='footer__logo' />
            </Link>
            <p className='footer__text' style={notHomePage ? { opacity: 1 } : {}}>
              {t("footer.text")}
            </p>
            <div className='footer__social-items'>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className='footer__social-item'>
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className='footer__social-item'>
                <BsTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className='footer__social-item'>
                <AiOutlineInstagram />
              </a>
            </div>
          </div>
          {footer_links.map((link, i) => (
            <div key={i} className='footer__item'>
              <h4 className='footer__item-title'>{t(`footer.links.${i}.title`)}</h4>
              <div className='footer__item-links'>
                {link.links.map((linkItem, idx) => (
                  linkItem.startsWith("/") ? (
                    <Link to={linkItem} className='footer__item-link' key={idx}>{t(`footer.links.${i}.links.${idx}`)}</Link>
                  ) : (
                    <a href={linkItem} target={linkItem.startsWith("#") ? "" : "_blank"} rel="noreferrer" className='footer__item-link' key={idx}>{t(`footer.links.${i}.links.${idx}`)}</a>
                  )
                ))}
              </div>
            </div>
          ))}
        </div>
      </footer>
      <div className='footer__copyright'>
        <p className='footer__copyright-text'>{t("footer.copyright")}</p>
        <a className='footer__copyright-link' href='https://google.com'>abba marketing</a>
        <p className='footer__copyright-text'>{t("footer.powered")}</p>
        <a className='footer__copyright-link' href='https://google.com'>ABBA</a>
      </div>
    </>
  )
}
