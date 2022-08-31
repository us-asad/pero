import { main_section_pages } from 'data';
import React from 'react'
import { useRef } from 'react';
import { useState } from 'react'
import { Feather, SectionFooter } from 'subcomponents'
import "./index.css"

export default function Main() {
  const [activePageIdx, setActivePageIdx] = useState(0);
  const [activePageIdx2, setActivePageIdx2] = useState(0);
  const [pages, setPages] = useState([...main_section_pages]);
  const [addTr, setAddTr] = useState(false);
  const [hand, setHand] = useState(false);
  const [disableBtn, setDisableBtn] = useState(false);
  const pageRef = useRef();

  const changeActivePageIdx = () => {
    setDisableBtn(true);
    setAddTr(false)
    setHand(true);

    setTimeout(() => {
      setHand(false);
      setTimeout(() => {
        setAddTr(true)
        setActivePageIdx2(prev => prev + 1);
        setDisableBtn(false);
      }, 900);

      setActivePageIdx(prevIdx => {
        setPages(prev => {
          const data = [...prev];
          data.unshift(data[main_section_pages.length - 1]);
          return data;
        })

        return prevIdx + 1;
      });
    }, 1000);
  }

  return (
    <div className='homemain'>
      <div className="container">
        <div className='homemain__image'>
          <button disabled={disableBtn} className='homemain__click' onClick={changeActivePageIdx}>
            <img src="/assets/icons/click-icon.png" alt="Click Icon" />
            <span>O'zgartirish uchun bosing</span>
          </button>
          <img src="/assets/images/main-click.png" alt="Click" className='homemain__clicker' />
          <img src="/assets/images/paper.png" alt="Pero paper" />
        </div>
        <div className='homemain__overflow'>
          <div className='homemain__pages' style={{ transform: `translateX(${activePageIdx * pageRef.current?.clientWidth}px)` }}>
            {pages.map((page, i) => (
              <div ref={pageRef} key={i} className={`homemain__page ${pages.length - activePageIdx - 1 === i ? "active" : ""}`} style={pages.length - activePageIdx2 <= i ? { transform: "translateX(350px)", transition: addTr ? "1s" : "0", position: pages.length - activePageIdx2 === i ? "relative" : "relative" } : { position: pages.length - activePageIdx2 === i ? "static" : "relative" }}>
                <div className="homemain__page-container">
                  <h1 className='homemain__page-title'>{page.title}</h1>
                  <p className='homemain__page-text'>
                    {page.text}
                  </p>
                </div>
                {/* {console.log(pages.length - activePageIdx - 1 === i ? pages.length - activePageIdx - 1 === i : "")} */}
                <Feather
                  src="/assets/images/feathers/main/1.png"
                  style={{ bottom: "-40px", left: "80px" }}
                  animate={pages.length - activePageIdx === i ? { bottom: "-200%", left: "-200%", transition: "5s" } : pages.length - activePageIdx - 1 === i ? { bottom: "-100%", left: "-100%" } : { bottom: "-40px", left: "80px" }}
                />
                <Feather
                  src="/assets/images/feathers/main/2.png"
                  style={{ top: "70px", left: "200px" }}
                />
                <Feather
                  src="/assets/images/feathers/main/3.png"
                  style={{ top: "70px", right: "140px", transform: "rotate(249deg)" }}
                />
                <Feather
                  src="/assets/images/feathers/main/4.png"
                  style={{ bottom: "30px", right: "140px" }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <SectionFooter className="homemain__footer-btn" text="Biz haqimizda batafsil" color="var(--green-normal)" />
      <div className={`homemain__hand ${hand ? "active" : ""}`}>
        <img src='/assets/images/hand.png' alt="Pero Hand" />
      </div>
    </div>
  )
}


/*
  animate={pages.length - activePageIdx2 - 1 < i && !disableBtn ? { bottom: "-400px", right: "-500px", transition: "10s" } : pages.length - activePageIdx2 - 1 === i && !disableBtn ? { bottom: "-400px", right: "-500px" } : {}}
*/