import { products } from 'data';
import React from 'react'
import { useRef } from 'react';
import { useState } from 'react';
import { SectionFooterBtn } from 'subcomponents';
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
  const slideRef = useRef();

  console.log(activeIdx)

  return (
    <section className='products font-rubik'>
      <div className='container'>
        <h2 className='products__title'>Our products</h2>
        <p className='products__text'>Bizda 80 dan kop mahsulotlarimiz bor ular lorem ipsum color</p>
        <div className='products__slider'>
          <div className='products__slider-container' style={{ transform: `translateX(-${(slideRef.current?.clientWidth * activeIdx) + (30 * activeIdx)}px)` }}>
            {products.map((prd, i) => (
              <div
                ref={slideRef}
                key={i}
                className='products__slide'
                style={activeIdx - 1 === i || activeIdx + 1 === i || activeIdx === i ? {} : { opacity: 0, pointerEvents: "none" }}
              >
                <h4 className='products__slide-title'>{prd.title}</h4>
                <img
                  src={prd.image_url}
                  alt={prd.title}
                  className="products__slide-img"
                />
              </div>
            ))}
          </div>
          <div className='products__pagination'>
            {products.map((_, i) => (
              <button
                key={i}
                className={`products__pagination-btn ${activeIdx === i ? "active" : ""}`}
                onClick={() => setActiveIdx(prev => i < 1 ? 1 : i > products.length - 2 ? products.length - 2 : i)}
              ></button>
            ))}
          </div>
          <SlideBtn
            onClick={() => setActiveIdx(prev => prev - 1 < 1 ? prev : prev - 1)}
            style={{ ...slide_btn_styles, left: "-100px" }}
          />
          <SlideBtn
            rightIcon
            onClick={() => setActiveIdx(prev => prev + 1 > products.length - 2 ? prev : prev + 1)}
            style={{ ...slide_btn_styles, right: "-100px" }}
          />
        </div>
        <SectionFooterBtn text={btnText} bgColor="var(--green-light)" width="0px" />
      </div>
    </section>
  )
}
