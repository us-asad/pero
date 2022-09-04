import React from 'react'
import { useTranslation } from 'react-i18next';
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
        <button className='aboutproduction__details-btn'>{t("about.production.more")}</button>
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
