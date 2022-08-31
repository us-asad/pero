import { videos } from 'data'
import React, { useState } from 'react'
import { useRef } from 'react';
import { Feather, SectionFooterBtn, WhiteBg } from 'subcomponents';
import SlideBtn from 'subcomponents/SlideBtn';
import "./index.css"

const slide_btn_styles = {
  color: "#a13838",
  borderColor: "rgb(161 56 56 / 76%)"
}

export default function Videos() {
  const [activeVideoIdx, setActiveVideoIdx] = useState(1);
  const slideRef = useRef();

  return (
    <section className='videos'>
      <div className="container">
        <h2 className='videos__title'>Bizning videolar</h2>
        <p className="videos__text">bizning 20 dan ortiq video larimiz va vloglarimiz mavjud</p>
        <ul className='videos__slider videos__slider-desktop'>
          {videos.map((video, i) => (
            <li key={i} className={`videos__slide ${activeVideoIdx === i ? "active" : ""}`}>
              {/* <video
                src={video}
                controls
                className='videos__slide-video'
              /> */}
            </li>
          ))}
          <SlideBtn
            onClick={() => setActiveVideoIdx(prev => prev - 1 < 0 ? prev : prev - 1)}
            style={{ ...slide_btn_styles, left: "-30px" }}
          />
          <SlideBtn
            rightIcon
            onClick={() => setActiveVideoIdx(prev => prev + 1 > videos.length - 1 ? prev : prev + 1)}
            style={{ ...slide_btn_styles, right: "-30px" }}
          />
        </ul>
        <div className='videos__slider-container'>
          <ul className='videos__slider videos__slider-mobile'>
            <div className='videos__slider-overflow'>
              <div className='videos__slides-wrapper' style={{ transform: `translateX(-${(activeVideoIdx * 200) + (activeVideoIdx * slideRef.current?.clientWidth)}px)` }}>
                {videos.map((video, i) => (
                  <li ref={slideRef} key={i} className={`videos__slide `}>
                    {/* <video
                src={video}
                controls
                className='videos__slide-video'
              /> */}
                  </li>
                ))}
              </div>
            </div>
            <SlideBtn
              onClick={() => setActiveVideoIdx(prev => prev - 1 < 0 ? prev : prev - 1)}
              style={{ ...slide_btn_styles, left: "-30px" }}
            />
            <SlideBtn
              rightIcon
              onClick={() => setActiveVideoIdx(prev => prev + 1 > videos.length - 1 ? prev : prev + 1)}
              style={{ ...slide_btn_styles, right: "-30px" }}
            />
          </ul>
        </div>
        <SectionFooterBtn text="Videolarni yuklab olsh" bgColor="#DC4848" width="" />
      </div>
      <WhiteBg long style={{ top: "40px", left: "50%", transform: "translate(-50%)" }} />
      <WhiteBg style={{ bottom: "5px", left: "0" }} />
      <WhiteBg style={{ bottom: "5px", right: "0", transform: "rotate(180deg)" }} />
      <WhiteBg style={{ bottom: "-100px", right: "180px", transform: "rotate(-90deg)" }} />
      <WhiteBg style={{ top: "-100px", right: "180px", transform: "rotate(90deg)" }} />
      <WhiteBg light style={{ top: "-100px", left: "180px", transform: "rotate(90deg)" }} />
      <Feather
        src="/assets/images/feathers/videos/1.png"
        style={{ bottom: "5px", left: "10px" }}
        animate={{ bottom: "-100%", left: "-100%" }}
      />
      <Feather
        src="/assets/images/feathers/videos/2.png"
        style={{ top: "150px", left: "50px" }}
        animate={{ top: "-100%", left: "100%" }}
      />
      <Feather
        src="/assets/images/feathers/videos/3.png"
        style={{ top: "40px", left: "25%" }}
        animate={{ top: "-100%", left: "-100%" }}
      />
      <Feather
        src="/assets/images/feathers/videos/4.png"
        style={{ top: "70px", right: "40px" }}
        animate={{ top: "-100%", right: "-100%" }}
      />
      <Feather
        src="/assets/images/feathers/videos/5.png"
        style={{ bottom: "100px", right: "20%" }}
        animate={{ bottom: "-100%", right: "-100%" }}
      />
    </section>
  )
}
