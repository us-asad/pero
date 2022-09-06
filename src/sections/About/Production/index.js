import React from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import "./index.css";

export default function Production() {
  const [t] = useTranslation();

  return (
    <section className='aboutproduction'>
      <div data-aos="fade-right" className='aboutproduction__details'>
        <h3 className='about__title aboutproduction__details-title'>{t("about.production.title")}</h3>
        <p className='about__text aboutproduction__details-text'>
          {t("about.production.text")}
        </p>
        <Link to="/#contact" onClick={() => window.scrollTo({ top: 400000000 })} className='aboutproduction__details-btn'>{t("contact.contact_btn")}</Link>
      </div>
      <img
        data-aos="fade-left"
        src="/assets/images/aboutproduction-img.png"
        alt="Pero Production"
        className='aboutproduction__img'
      />
    </section>
  )
}
