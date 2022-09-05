import React, { useState } from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Feather, SectionFooterBtn, WhiteBg } from 'subcomponents';
import SlideBtn from 'subcomponents/SlideBtn';
import { getImgUrl, request } from 'utils/request';
import "./index.css"

const slide_btn_styles = {
  color: "#a13838",
  borderColor: "rgb(161 56 56 / 76%)"
}

export default function Videos() {
  const [activeVideoIdx, setActiveVideoIdx] = useState(1);
  const [videos, setVideos] = useState([]);
  const slideRef = useRef();
  const navigate = useNavigate();
  const [t] = useTranslation();

  useEffect(() => {
    request("/videos", data => setVideos(data.slice(0, 3)), () => navigate("/404"));
  }, [navigate]);

  return (
    <section id="videos" className='videos'>
      <div className="container">
        <h2 data-aos="fade-up" className='videos__title'>{t("videos.title")}</h2>
        <p data-aos="fade-up" className="videos__text">{t("videos.subtitle")}</p>
        <ul data-aos="zoom-in" className='videos__slider videos__slider-desktop'>
          {videos.map((item, i) => (
            <li onClick={() => setActiveVideoIdx(i)} key={i} className={`videos__slide ${activeVideoIdx === i ? "active" : ""}`}>
              <video
                src={getImgUrl(item.video)}
                controls={i === activeVideoIdx}
                style={{opacity: activeVideoIdx !== i ? ".6" : 1}}
                className='videos__slide-video'
              />
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
                {videos.map((item, i) => (
                  <li onClick={() => setActiveVideoIdx(i)} ref={slideRef} key={i} className={`videos__slide `}>
                    <video
                      src={getImgUrl(item.video)}
                      controls
                      className='videos__slide-video'
                    />
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
        <SectionFooterBtn top={1300} onClick={() => navigate("/about#video")} text={t("videos.download")} bgColor="#DC4848" width="" />
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
