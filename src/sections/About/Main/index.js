import React from 'react'
import { useTranslation } from 'react-i18next';
import "./index.css";

export default function Main() {
  const [t] = useTranslation();

  return (
    <section className='aboutmain'>
      <div data-aos="fade-right" className='aboutmain__content'>
        <h2 className='aboutmain__content-title-desktop'>{t("about.title")}</h2>
        <h2 className='aboutmain__content-title-mobile'>{t("about.title_2")}</h2>
        <p className='aboutmain__content-text'>
          {t("about.subtitle")}
        </p>
      </div>
      <img
        data-aos="fade-left"
        src="/assets/images/about-img.png"
        alt="About Pero"
        className='aboutmain__img'
      />
    </section>
  )
}
