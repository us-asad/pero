import { main_section_pages } from 'data';
import React, { useMemo } from 'react'
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

  console.log(pages.length - activePageIdx2)

  return (
    <div className='main'>
      <div className="container">
        <div className='main__image'>
          <button disabled={disableBtn} className='main__click' onClick={changeActivePageIdx}>
            <img src="/assets/icons/click-icon.png" alt="Click Icon" />
            <span>O'zgartirish uchun bosing</span>
          </button>
          <img src="/assets/images/main-click.png" alt="Click" className='main__clicker' />
          <img src="/assets/images/paper.png" alt="Pero paper" />
        </div>
        <div className='main__overflow'>
          <div className='main__pages' style={{ transform: `translateX(${activePageIdx * pageRef.current?.clientWidth}px)` }}>
            {pages.map((page, i) => (
              <div ref={pageRef} key={i} className='main__page' style={pages.length - activePageIdx2 <= i ? { transform: "translateX(350px)", transition: addTr ? "1s" : "0", position: pages.length - activePageIdx2 === i ? "static" : "relative" } : {position: pages.length - activePageIdx2 === i ? "static" : "relative"}}>
                <div className="main__page-container">
                  <h1 className='main__page-title'>{page.title}</h1>
                  <p className='main__page-text'>
                    {page.text}
                  </p>
                </div>
                <Feather 
                  src="/assets/images/feathers/main/1.png"
                  style={{bottom: "-40px", left: "80px"}}
                />
                <Feather 
                  src="/assets/images/feathers/main/2.png"
                  style={{top: "70px", left: "200px"}}
                />
                <Feather 
                  src="/assets/images/feathers/main/3.png"
                  style={{top: "70px", right: "140px", transform: "rotate(249deg)"}}
                />
                <Feather 
                  src="/assets/images/feathers/main/4.png"
                  style={{bottom: "30px", right: "140px"}}
                />
              </div>
            ))}
          </div>
        </div>
        <SectionFooter text="Biz haqimizda batafsil" color="var(--green-normal)" />
      </div>
      <div className='main__hand' style={hand ? { right: "-113px" } : {}}>
        <img src='/assets/images/hand.png' alt="Pero Hand" />
      </div>
    </div>
  )
}
