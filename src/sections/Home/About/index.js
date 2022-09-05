import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Feather, SectionFooter, WhiteBg } from 'subcomponents';
import "./index.css";

export default function About() {
  const [t] = useTranslation();

  return (
    <section className='homeabout'>
      <div className="container homeabout__container-desktop">
        <div className='homeabout__left-side'>
          <h3 data-aos="fade-right" className='homeabout__left-title'>{t("about.title")}</h3>
          <p data-aos="fade-right" className="homeabout__left-text">
            {t("about.subtitle")}
          </p>
        </div>
        <div data-aos="fade-up" className="homeabout__center">
          <img src='/assets/images/about-img.png' alt="Pero About" className='homeabout__center-img' />
        </div>
        <div className="homeabout__right-side">
          <h3 data-aos="fade-left" className="homeabout__right-title">{t("about.title_2")}</h3>
          <Link data-aos="fade-left" to="/about" className='homeabout__right-btn'>{t("about.more")}</Link>
        </div>
      </div>
      <div className="container homeabout__container-mobile">
        <div className='homeabout__left-side'>
          <h3 className='homeabout__left-title'>{t("about.title")}</h3>
          <p className="homeabout__left-text">
            {t("about.subtitle")}
          </p>
        </div>
        <div className="homeabout__center">
          <img src='/assets/images/about-img.png' alt="Pero About" className='homeabout__center-img' />
        </div>
        <div className="homeabout__right-side">
          <Link to="/about" className='homeabout__right-btn'>{t("about.more")}</Link>
        </div>
      </div>
      <SectionFooter top={800} to="/about#numbers" className="homeabout__footer-btn" text={t("about.footer_text")} color="var(--orange-normal)" />
      <WhiteBg long light style={{ bottom: "30px", left: "50%", transform: "translateX(-50%)", opacity: 1 }} />
      <WhiteBg long light style={{ top: "-100px", left: "30px", transform: "rotate(90deg)" }} />
      <Feather
        src="/assets/images/feathers/about/1.png"
        style={{ bottom: "2%", left: "15%" }}
        animate={{ bottom: "120%", left: "100%" }}
      />
      <Feather
        src="/assets/images/feathers/about/2.png"
        style={{ top: "2%", left: "1%" }}
        animate={{ top: "-100%", left: "-100%" }}
      />
      <Feather
        src="/assets/images/feathers/about/1.png"
        style={{ top: "10%", right: "5%" }}
        animate={{ top: "-100%", right: "-100%" }}
      />
    </section>
  )
}
