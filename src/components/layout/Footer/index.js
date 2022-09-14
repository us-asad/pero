import React from 'react'
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
              <a href="https://www.instagram.com/pero_uz" target="_blank" rel="noreferrer" className='footer__social-item'>
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
                  ) : linkItem.startsWith("#") ?  (
                    <a href={`/${linkItem}`} className='footer__item-link' key={idx}>{t(`footer.links.${i}.links.${idx}`)}</a>
                  ) : !linkItem ? (
                    <p key={idx} className='footer__item-link disactive'>{t(`footer.links.${i}.links.${idx}`)}</p>
                  ) : (
                    <a href={linkItem} target="_blank" rel="noreferrer" className='footer__item-link' key={idx}>{t(`footer.links.${i}.links.${idx}`)}</a>
                  )
                ))}
              </div>
            </div>
          ))}
        </div>
      </footer>
      <div className='footer__copyright'>
        <p className='footer__copyright-text'>{t("footer.copyright")} <span>Abba Media</span>, <span>Abba Coding</span></p>
      </div>
    </>
  )
}
