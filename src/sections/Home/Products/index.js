import { products } from 'data';
import React from 'react'
import { useState } from 'react';
import { Feather, SectionFooterBtn, WhiteBg } from 'subcomponents';
import SlideBtn from 'subcomponents/SlideBtn';
import "./index.css";

const btnText = `Barcha tovarlarimizni korish 
/ skachat katalog`;
const slide_btn_styles = {
  color: "#5f9c95",
  borderColor: "#5f9c95"
}

export default function Products() {
  const [activeIdx, setActiveIdx] = useState(1);
  const [activeIdxMob, setActiveIdxMob] = useState(0);
  const cardWidth = 200

  return (
    <section className='homeproducts font-rubik'>
      <div className='container'>
        <h2 className='homeproducts__title'>Our products</h2>
        <p className='homeproducts__text'>Bizda 80 dan kop mahsulotlarimiz bor ular lorem ipsum color</p>
        <div className='homeproducts__slider homeproducts__slider-desktop'>
          <div className='homeproducts__slider-container' style={{ transform: `translateX(-${(cardWidth * activeIdx) + (30 * activeIdx)}px)` }}>
            {products.map((prd, i) => (
              <div
                key={i}
                className='homeproducts__slide'
                style={activeIdx - 1 === i || activeIdx + 1 === i || activeIdx === i ? {} : { opacity: 0, pointerEvents: "none" }}
              >
                <h4 className='homeproducts__slide-title'>{prd.title}</h4>
                <img
                  src={prd.image_url}
                  alt={prd.title}
                  className="homeproducts__slide-img"
                />
              </div>
            ))}
          </div>
          <div className='homeproducts__pagination'>
            {products.map((_, i) => (
              <button
                key={i}
                className={`homeproducts__pagination-btn ${activeIdx === i ? "active" : ""}`}
                onClick={() => setActiveIdx(prev => i < 1 ? 1 : i > prev.length - 2 ? prev.length - 2 : i)}
              ></button>
            ))}
          </div>
          <SlideBtn
            className="homeproducts__slide-prev"
            onClick={() => setActiveIdx(prev => prev - 1 < 1 ? prev : prev - 1)}
            style={{ ...slide_btn_styles, left: "-100px" }}
          />
          <SlideBtn
            rightIcon
            className="homeproducts__slide-next"
            onClick={() => setActiveIdx(prev => prev + 1 > products.length - 2 ? prev : prev + 1)}
            style={{ ...slide_btn_styles, right: "-100px" }}
          />
        </div>
        <div className='homeproducts__slider homeproducts__slider-tablet'>
          <div className='homeproducts__slider-container' style={{ transform: `translateX(-${(cardWidth * activeIdxMob) + (30 * activeIdxMob)}px)` }}>
            {products.map((prd, i) => (
              <div
                key={i}
                className='homeproducts__slide'
                style={(activeIdxMob === products.length - 1 && activeIdxMob - 1 === i) || activeIdxMob + 1 === i || activeIdxMob === i ? {} : { opacity: 0, pointerEvents: "none" }}
              >
                <h4 className='homeproducts__slide-title'>{prd.title}</h4>
                <img
                  src={prd.image_url}
                  alt={prd.title}
                  className="homeproducts__slide-img"
                />
              </div>
            ))}
          </div>
          <div className='homeproducts__pagination'>
            {products.map((_, i) => (
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
            onClick={() => setActiveIdxMob(prev => prev + 1 > products.length - 2 ? prev : prev + 1)}
            style={{ ...slide_btn_styles, right: "-100px" }}
          />
        </div>
        <div className='homeproducts__slider homeproducts__slider-mobile'>
          <div className='homeproducts__slider-container' style={{ transform: `translateX(-${(cardWidth * activeIdxMob) + (30 * activeIdxMob)}px)` }}>
            {products.map((prd, i) => (
              <div
                key={i}
                className='homeproducts__slide'
                style={activeIdxMob === i ? {} : { opacity: 0, pointerEvents: "none" }}
              >
                <h4 className='homeproducts__slide-title'>{prd.title}</h4>
                <img
                  src={prd.image_url}
                  alt={prd.title}
                  className="homeproducts__slide-img"
                />
              </div>
            ))}
          </div>
          <div className='homeproducts__pagination'>
            {products.map((_, i) => (
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
            onClick={() => setActiveIdxMob(prev => prev + 1 > products.length - 1 ? prev : prev + 1)}
            style={{ ...slide_btn_styles, right: "-100px" }}
          />
        </div>
        <SectionFooterBtn className="homeproducts__footer-btn-desktop" text={btnText} bgColor="var(--green-light)" width="0px" />
        <div className='homeproducts__footer-btns-mobile'>
          <SectionFooterBtn text="Skachat katalog" bgColor="var(--green-light)" />
          <SectionFooterBtn text="Top Products" bgColor="var(--green-light)" />
        </div>
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
