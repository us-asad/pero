import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import { Feather, SectionFooterBtn, WhiteBg } from 'subcomponents';
import SlideBtn from 'subcomponents/SlideBtn';
import { getImgUrl, request } from 'utils/request';
import "./index.css";

const slide_btn_styles = {
  color: "#5f9c95",
  borderColor: "#5f9c95"
}

export default function Products() {
  const [activeIdx, setActiveIdx] = useState(1);
  const [activeIdxMob, setActiveIdxMob] = useState(0);
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [t, i18next] = useTranslation();
  const cardWidth = 200;

  // const changeActiveIdx = state => {
  //   setActiveIdx(state);
  //   s
  // }

  useEffect(() => {
    request(`/categories`, setData, () => navigate("/404"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section id="products" className='homeproducts font-rubik'>
      <div className='container'>
        <h2 data-aos="fade-up" className='homeproducts__title'>{t(`products.title`)}</h2>
        <p data-aos="fade-up" className='homeproducts__text'>{t(`products.subtitle`)}</p>
        <div data-aos="fade-up" className='homeproducts__slider homeproducts__slider-desktop'>
          <div className='homeproducts__slider-container' style={{ transform: `translateX(-${(cardWidth * activeIdx) + (30 * activeIdx)}px)` }}>
            {data.map((prd, i) => (
              <Link
                to={`/products?category=${prd.id}`}
                key={i}
                className='homeproducts__slide'
                style={activeIdx - 1 === i || activeIdx + 1 === i || activeIdx === i ? {} : { opacity: 0, pointerEvents: "none" }}
              >
                <h4 className='homeproducts__slide-title'>{prd[`name_${i18next.language}`]}</h4>
                <div className='homeproducts__slide-img-wrapper'>
                  <img
                    src={getImgUrl(prd.image)}
                    alt={prd[`name_${i18next.language}`]}
                    className="homeproducts__slide-img"
                  />
                </div>
              </Link>
            ))}
          </div>
          <div className='homeproducts__pagination'>
            {data.map((_, i) => (
              <button
                key={i}
                className={`homeproducts__pagination-btn ${activeIdx === i ? "active" : ""}`}
                onClick={() => setActiveIdx(prev => {
                  return i < 1 ? 1 : i > data.length - 2 ? data.length - 2 : i
                })}
              ></button>
            ))}
          </div>
          <SlideBtn
            className="homeproducts__slide-prev"
            onClick={() => setActiveIdx(prev => prev - 1 < 1 ? data.length - 2 : prev - 1)}
            style={{ ...slide_btn_styles, left: "-100px" }}
          />
          <SlideBtn
            rightIcon
            className="homeproducts__slide-next"
            onClick={() => setActiveIdx(prev => prev + 1 > data.length - 2 ? 1 : prev + 1)}
            style={{ ...slide_btn_styles, right: "-100px" }}
          />
        </div>
        <div className='homeproducts__slider homeproducts__slider-tablet'>
          <div className='homeproducts__slider-container' style={{ transform: `translateX(-${(cardWidth * activeIdxMob) + (30 * activeIdxMob)}px)` }}>
            {data.map((prd, i) => (
              <Link
                to={`/products?category=${prd.id}`}
                key={i}
                className='homeproducts__slide'
                style={(activeIdxMob === data.length - 1 && activeIdxMob - 1 === i) || activeIdxMob + 1 === i || activeIdxMob === i ? {} : { opacity: 0, pointerEvents: "none" }}
              >
                <h4 className='homeproducts__slide-title'>{prd[`name_${i18next.language}`]}</h4>
                <div className='homeproducts__slide-img-wrapper'>
                  <img
                    src={getImgUrl(prd.image)}
                    alt={prd[`name_${i18next.language}`]}
                    className="homeproducts__slide-img"
                  />
                </div>
              </Link>
            ))}
          </div>
          <div className='homeproducts__pagination'>
            {data.map((_, i) => (
              <button
                key={i}
                className={`homeproducts__pagination-btn ${activeIdxMob === i ? "active" : ""}`}
                onClick={() => setActiveIdxMob(i)}
              ></button>
            ))}
          </div>
          <SlideBtn
            className="homeproducts__slide-prev"
            onClick={() => setActiveIdxMob(prev => prev < 1 ? prev : prev - 1)}
            style={{ ...slide_btn_styles, left: "-100px" }}
          />
          <SlideBtn
            rightIcon
            className="homeproducts__slide-next"
            onClick={() => setActiveIdxMob(prev => prev + 1 > data.length - 2 ? prev : prev + 1)}
            style={{ ...slide_btn_styles, right: "-100px" }}
          />
        </div>
        <div className='homeproducts__slider homeproducts__slider-mobile'>
          <div className='homeproducts__slider-container' style={{ transform: `translateX(-${(cardWidth * activeIdxMob) + (30 * activeIdxMob)}px)` }}>
            {data.map((prd, i) => (
              <Link
                to={`/products?category=${prd.id}`}
                key={i}
                className='homeproducts__slide'
                style={activeIdxMob === i ? {} : { opacity: 0, pointerEvents: "none" }}
              >
                <h4 className='homeproducts__slide-title'>{prd[`name_${i18next.language}`]}</h4>
                <div className='homeproducts__slide-img-wrapper'>
                  <img
                    src={getImgUrl(prd.image)}
                    alt={prd[`name_${i18next.language}`]}
                    className="homeproducts__slide-img"
                  />
                </div>
              </Link>
            ))}
          </div>
          <div className='homeproducts__pagination'>
            {data.map((_, i) => (
              <button
                key={i}
                className={`homeproducts__pagination-btn ${activeIdxMob === i ? "active" : ""}`}
                onClick={() => setActiveIdxMob(i)}
              ></button>
            ))}
          </div>
          <SlideBtn
            className="homeproducts__slide-prev"
            onClick={() => setActiveIdxMob(prev => prev < 1 ? prev : prev - 1)}
            style={{ ...slide_btn_styles, left: "-100px" }}
          />
          <SlideBtn
            className="homeproducts__slide-next"
            rightIcon
            onClick={() => setActiveIdxMob(prev => prev + 1 > data.length - 1 ? prev : prev + 1)}
            style={{ ...slide_btn_styles, right: "-100px" }}
          />
        </div>
        <SectionFooterBtn onClick={() => navigate("/top-products")} eye className="homeproducts__footer-btn-desktop" text={t("products.download")} bgColor="var(--green-light)" width="0px" />
        {/* <div className='homeproducts__footer-btns-mobile'>
          <SectionFooterBtn text={t("products.download")} bgColor="var(--green-light)" />
          <SectionFooterBtn text={t("products.download")} bgColor="var(--green-light)" />
        </div> */}
      </div>
      <WhiteBg
        style={{ top: ".5%", left: "0" }}
      />
      <WhiteBg
        style={{ bottom: ".5%", right: "0", transform: "rotate(180deg)" }}
      />
      <WhiteBg
        style={{ top: "-15%", left: "10%", transform: "rotate(90deg)" }}
      />
      <WhiteBg
        style={{ top: "-15%", right: "10%", transform: "rotate(90deg)" }}
      />
      <Feather
        src="/assets/images/feathers/products/1.png"
        style={{ left: "1%", bottom: "2%" }}
        animate={{ left: "-100%", bottom: "-100%" }}
      />
      <Feather
        src="/assets/images/feathers/products/2.png"
        style={{ left: "5%", top: "20%" }}
        animate={{ left: "100%", top: "-100%" }}
      />
      <Feather
        src="/assets/images/feathers/products/3.png"
        style={{ left: "33%", top: "10%" }}
        animate={{ left: "-100%", top: "-100%" }}
      />
      <Feather
        src="/assets/images/feathers/products/4.png"
        style={{ right: "1%", top: "10%" }}
        animate={{ right: "-100%", top: "-100%" }}
      />
      <Feather
        src="/assets/images/feathers/products/5.png"
        style={{ right: "15%", bottom: "10%" }}
        animate={{ right: "-100%", bottom: "-100%" }}
      />
    </section>
  )
}
