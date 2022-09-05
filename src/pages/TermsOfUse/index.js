import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Feather, PageRoutes, WhiteBg } from 'subcomponents';
import { request } from 'utils/request';
import "./index.css";

export default function TermsOfUse() {
  const [data, setData] = useState([]);
  const [t, i18next] = useTranslation();

  useEffect(() => {
    request("/terms", setData, () => { });
  }, []);

  return (
    <section className='termsofuse'>
      <div className="container px-normal">
        <div data-aos="fade-up" className='app__title-container'>
          <h2 className='app__title'>{t("terms.title")}</h2>
          <span className='app__span termsofuse__span'>{t("last_update")}: {t("about.time_name")}</span>
        </div>
        <PageRoutes
          routes={[
            {
              name: t("home.title"),
              link: "/"
            },
            { name: t("terms.title") }
          ]}
        />
        {data.map(term => (
          <div key={term.id} data-aos="fade-up">
            {/* <h2 data-aos="fade-up" className='termsofuse__title app__title'>{term && term[`name_${i18next.language}`]}</h2> */}
            <p data-aos="fade-up" className='termsofuse__content'>
              {term && term[`description_${i18next.language}`]}
            </p>
          </div>
        ))}
      </div>
      <Feather
        src="/assets/images/feathers/terms-of-use/1.png"
        alt="Feather"
        style={{ bottom: "5%", left: "5%" }}
        animate={{ bottom: "-100%", left: "-100%" }}
      />
      <Feather
        src="/assets/images/feathers/terms-of-use/2.png"
        alt="Feather"
        style={{ top: "50%", left: "3%", transform: "translateY(-50%)" }}
        animate={{ top: "-100%", left: "100%" }}
      />
      <Feather
        src="/assets/images/feathers/terms-of-use/3.png"
        alt="Feather"
        style={{ top: "7%", left: "6%" }}
        animate={{ top: "-100%", left: "-100%" }}
      />
      <Feather
        src="/assets/images/feathers/terms-of-use/4.png"
        alt="Feather"
        style={{ top: "8%", right: "2%" }}
        animate={{ top: "-100%", right: "-100%" }}
      />
      <Feather
        src="/assets/images/feathers/terms-of-use/5.png"
        alt="Feather"
        style={{ top: "50%", right: "10%", transform: "translate(-50%" }}
        animate={{ top: "150%", right: "-100%" }}
      />
      <Feather
        src="/assets/images/feathers/terms-of-use/6.png"
        alt="Feather"
        style={{ bottom: "20%", right: "15%" }}
        animate={{ bottom: "100%", right: "-100%" }}
      />
      <WhiteBg
        long
        style={{ top: "10%", left: "10%" }}
      />
      <WhiteBg
        long
        style={{ top: "30%", left: "10%" }}
      />
      <WhiteBg
        long
        style={{ top: "50%", left: "10%" }}
      />
      <WhiteBg
        style={{ top: "10%", left: "0" }}
      />
      <WhiteBg
        style={{ bottom: "0", left: "0" }}
      />
      <WhiteBg
        style={{ bottom: "0", right: "0", transform: "rotate(180deg)" }}
      />
      <WhiteBg
        style={{ top: "0", right: "0", transform: "rotate(180deg)" }}
      />
      <WhiteBg
        style={{ bottom: "-15%", left: "10%", transform: "rotate(-90deg)" }}
      />
      <WhiteBg
        style={{ bottom: "-15%", right: "0%", transform: "rotate(-90deg)" }}
      />
      <WhiteBg
        style={{ top: "-15%", right: "0", transform: "rotate(90deg)" }}
      />
      <WhiteBg
        style={{ top: "-15%", left: "10%", transform: "rotate(90deg)" }}
      />
    </section>
  )
}
