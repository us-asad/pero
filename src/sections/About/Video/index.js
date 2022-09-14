import React from 'react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BsFillPlayFill } from 'react-icons/bs';
// import { YTVideoBtn } from 'subcomponents';
import "./index.css";

export default function Video() {
  const [showVideo, setShowVideo] = useState(false);
  const [t] = useTranslation();

  const handleShowVideo = state => {
    setShowVideo(state);
    document.body.style.overflowY = state ? "hidden" : "auto";
  }

  return (
    <section id="video" className='aboutvideo'>
      <div className='aboutvideo__title-container'>
        <h3 data-aos="fade-right" className='about__title aboutvideo__title'>{t("about.video.title")}</h3>
        <button onClick={() => handleShowVideo(true)} className='aboutvideo__button'>
          <BsFillPlayFill />
        </button>
      </div>
      <p data-aos="fade-up" className='about__text aboutvideo__text'>
        {t("about.video.text")} 
      </p>
      <div className={`aboutvideo__video ${showVideo ? "active" : ""}`}>
        <video
          src="/assets/videos/about-video.mp4"
          width={560}
          height={315}
          controls
        ></video>
      </div>
      <div
        className={`aboutvideo__bg ${showVideo ? "active" : ""}`}
        onClick={() => handleShowVideo(false)}
      />
    </section>
  )
}
