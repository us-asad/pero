import { videos } from 'data'
import React, { useState } from 'react'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { SectionFooterBtn, WhiteBg } from 'subcomponents';
import "./index.css"

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
          <button onClick={() => setActiveVideoIdx(prev => prev - 1 < 0 ? prev : prev - 1)} className="videos__control-btn videos__prev">
            <FaChevronLeft />
          </button>
          <button onClick={() => setActiveVideoIdx(prev => prev + 1 > videos.length - 1 ? prev : prev + 1)} className="videos__control-btn videos__next">
            <FaChevronRight />
          </button>
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
