import { videos } from 'data'
import React, { useState } from 'react'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { SectionFooterBtn, WhiteBg } from 'subcomponents';
import SlideBtn from 'subcomponents/SlideBtn';
import "./index.css"

const slide_btn_styles = {
  color: "#a13838",
  borderColor: "rgb(161 56 56 / 76%)"
}

export default function Videos() {
  const [activeVideoIdx, setActiveVideoIdx] = useState(1);

  return (
    <section className='videos'>
      <div className="container">
        <h2 className='videos__title'>Bizning videolar</h2>
        <p className="videos__text">bizning 20 dan ortiq video larimiz va vloglarimiz mavjud</p>
        <ul className='videos__slider'>
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
            style={{...slide_btn_styles, left: "-30px"}}
          />
          <SlideBtn
            rightIcon
            onClick={() => setActiveVideoIdx(prev => prev + 1 > videos.length - 1 ? prev : prev + 1)}
            style={{...slide_btn_styles, right: "-30px"}}
          />
        </ul>
        <SectionFooterBtn text="Videolarni yuklab olsh" bgColor="#DC4848" width="" />
      </div>
      <WhiteBg long style={{ top: "40px", left: "50%", transform: "translate(-50%)" }} />
      <WhiteBg style={{ bottom: "5px", left: "0" }} />
      <WhiteBg style={{ bottom: "5px", right: "0", transform: "rotate(180deg)" }} />
      <WhiteBg style={{ bottom: "-100px", right: "180px", transform: "rotate(-90deg)" }} />
      <WhiteBg style={{ top: "-100px", right: "180px", transform: "rotate(90deg)" }} />
      <WhiteBg light style={{ top: "-100px", left: "180px", transform: "rotate(90deg)" }} />
    </section>
  )
}
