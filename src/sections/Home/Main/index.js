import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Feather2, SectionFooter } from 'subcomponents'
import { request } from 'utils/request';
import "./index.css"

export default function Main() {
  const [activePageIdx, setActivePageIdx] = useState(0);
  const [activePageIdx2, setActivePageIdx2] = useState(0);
  const [pages, setPages] = useState([]);
  const [addTr, setAddTr] = useState(false);
  const [hand, setHand] = useState(false);
  const [disableBtn, setDisableBtn] = useState(false);
  const [allPages, setAllPages] = useState([]);
  const pageRef = useRef();
  const navigate = useNavigate();
  const [t, i18next] = useTranslation();
  const [clicked, setClicked] = useState(false);
  const [, setFeathersCount] = useState(2);
  const btnRef = useRef();

  const changeActivePageIdx = () => {
    setFeathersCount(prev => prev + 1);
    setClicked(true)
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
          data.unshift(data[allPages.length - 1]);
          return data;
        })

        return prevIdx + 1;
      });

      setClicked(false)
    }, 1000);
  }

  useEffect(() => {
    request("/sliders", (data) => {
      setAllPages(data)
      setPages(data?.reverse());
    }, () => navigate("/404"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!disableBtn) {
        btnRef.current?.click();
      }
    }, 7000);

    return () => {
      clearInterval(interval);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='homemain'>
      <div className="container">
        <div className='homemain__image'>
          <button ref={btnRef} disabled={disableBtn} className='homemain__click' onClick={changeActivePageIdx}>
            <img src="/assets/icons/click-icon.png" alt="Click Icon" />
            <span>{t("slider_click")}</span>
          </button>
          <img src="/assets/images/main-click.png" alt="Click" className='homemain__clicker' />
          <img src="/assets/images/paper.png" alt="Pero paper" />
        </div>
        <div className='homemain__overflow'>
          <div className='homemain__pages' style={{ transform: `translateX(${activePageIdx * pageRef.current?.clientWidth}px)` }}>
            {pages.map((page, i) => (
              <div ref={pageRef} key={i} data-index={i} className={`homemain__page ${pages.length - activePageIdx - 1 === i ? "active" : ""}`} style={pages.length - activePageIdx2 <= i ? { transform: "translateX(350px)", transition: addTr ? "1s" : "0", position: pages.length - activePageIdx2 === i ? "relative" : "relative" } : { position: pages.length - activePageIdx2 === i ? "static" : "relative" }}>
                <div className="homemain__page-container">
                  <h1 className='homemain__page-title'>{page && page[`name_${i18next.language}`]}</h1>
                  <p className='homemain__page-text'>
                    {page && page[`description_${i18next.language}`]}
                  </p>
                  {/* <Link to="/" className="homemain__page-link">More</Link> */}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="homemain__overflow" style={{
          height: "172%",
          top: "-8%",
          overscrollBehavior: "auto",
          overflow: "hidden"
        }}>
          <div className={`homemain__feathers ${activePageIdx % 2 !== 0 ? "active" : ""} ${clicked ? "speedUp" : ""}`}>
            <Feather2
              src="/assets/images/feathers/main/2.png"
              style={{ top: "70px", left: "300px" }}
              extra={{ top: "-100%", left: "-100%" }}
              clicked={clicked}
              active={activePageIdx % 2 !== 0}
              animate={activePageIdx % 2 !== 0 ? { top: "-1000%", left: "-600%", transition: "15s" } : { top: "70px", left: "300px", transition: "0s" }}
            />
            <Feather2
              className="mobile"
              src="/assets/images/feathers/main/2.png"
              style={{ top: "70px", left: "198px" }}
              extra={{ top: "-100%", left: "-100%" }}
              clicked={clicked}
              active={activePageIdx % 2 !== 0}
              animate={activePageIdx % 2 !== 0 ? { top: "-1000%", left: "-600%", transition: "15s" } : { top: "70px", left: "198px", transition: "0s" }}
            />
            <Feather2
              src="/assets/images/feathers/main/3.png"
              style={{ top: "70px", right: "340px", transform: "rotate(249deg)" }}
              extra={{ top: "-100%", right: "-100%" }}
              clicked={clicked}
              active={activePageIdx % 2 !== 0}
              animate={activePageIdx % 2 !== 0 ? { top: "-1000%", right: "-600%", transition: "15s" } : { top: "70px", right: "350px", transition: "0s" }}
            />
            <Feather2
              className="mobile"
              src="/assets/images/feathers/main/3.png"
              style={{ bottom: "315px", right: "250px", transform: "rotate(249deg)" }}
              extra={{ bottom: "100%", right: "-100%" }}
              clicked={clicked}
              active={activePageIdx % 2 !== 0}
              animate={activePageIdx % 2 !== 0 ? { bottom: "1000%", right: "-600%", transition: "15s" } : { bottom: "315px", right: "250px", transition: "0s" }}
            />
            <Feather2
              src="/assets/images/feathers/main/4.png"
              style={{ bottom: "700px", right: "350px" }}
              extra={{ bottom: "-100%", right: "-100%" }}
              clicked={clicked}
              active={activePageIdx % 2 !== 0}
              animate={activePageIdx % 2 !== 0 ? { bottom: "-1000%", right: "-600%", transition: "15s" } : { bottom: "700px", right: "350px", transition: "0s" }}
            />
            <Feather2
              className="mobile"
              src="/assets/images/feathers/main/4.png"
              style={{ bottom: "64px", right: "254px" }}
              extra={{ bottom: "-100%", right: "-100%" }}
              clicked={clicked}
              active={activePageIdx % 2 !== 0}
              animate={activePageIdx % 2 !== 0 ? { bottom: "-1000%", right: "-600%", transition: "15s" } : { bottom: "64px", right: "254px", transition: "0s" }}
            />
            <Feather2
              src="/assets/images/feathers/main/1.png"
              style={{ bottom: "600px", left: "300px" }}
              extra={{ bottom: "-100%", left: "-100%" }}
              clicked={clicked}
              active={activePageIdx % 2 !== 0}
              animate={activePageIdx % 2 !== 0 ? { bottom: "-1000%", left: "-600%", transition: "15s" } : { bottom: "600px", left: "300px", transition: "0s" }}
            />
            <Feather2
              className="mobile"
              src="/assets/images/feathers/main/1.png"
              style={{ top: "350px", left: "200px" }}
              extra={{ top: "100%", left: "-100%" }}
              clicked={clicked}
              active={activePageIdx % 2 !== 0}
              animate={activePageIdx % 2 !== 0 ? { top: "1000%", left: "-600%", transition: "15s" } : { top: "350px", left: "200px", transition: "0s" }}
            />
          </div>
          <div className={`homemain__feathers ${activePageIdx % 2 === 0 ? "active" : ""} ${clicked ? "speedUp" : ""}`}>
            <Feather2
              src="/assets/images/feathers/main/1.png"
              style={{ bottom: "600px", left: "300px" }}
              extra={{ bottom: "-100%", left: "-100%" }}
              clicked={clicked}
              active={activePageIdx % 2 === 0}
              animate={activePageIdx % 2 === 0 ? { bottom: "-1000%", left: "-600%", transition: "15s" } : { bottom: "600px", left: "300px", transition: "0s" }}
              className="feather__img-1"
            />
            <Feather2
              src="/assets/images/feathers/main/1.png"
              style={{ top: "350px", left: "200px" }}
              extra={{ top: "100%", left: "-100%" }}
              clicked={clicked}
              active={activePageIdx % 2 === 0}
              animate={activePageIdx % 2 === 0 ? { top: "1000%", left: "-600%", transition: "15s" } : { top: "350px", left: "200px", transition: "0s" }}
              className="feather__img-1 mobile"
            />
            <Feather2
              src="/assets/images/feathers/main/2.png"
              style={{ top: "70px", left: "300px" }}
              extra={{ top: "-100%", left: "-100%" }}
              clicked={clicked}
              active={activePageIdx % 2 === 0}
              animate={activePageIdx % 2 === 0 ? { top: "-1000%", left: "-600%", transition: "15s" } : { top: "70px", left: "300px", transition: "0s" }}
            />
            <Feather2
              className="mobile"
              src="/assets/images/feathers/main/2.png"
              style={{ top: "70px", left: "198px" }}
              extra={{ top: "-100%", left: "-100%" }}
              clicked={clicked}
              active={activePageIdx % 2 === 0}
              animate={activePageIdx % 2 === 0 ? { top: "-1000%", left: "-600%", transition: "15s" } : { top: "70px", left: "198px", transition: "0s" }}
            />
            <Feather2
              src="/assets/images/feathers/main/3.png"
              style={{ top: "70px", right: "340px", transform: "rotate(249deg)" }}
              extra={{ top: "-100%", right: "-100%" }}
              clicked={clicked}
              active={activePageIdx % 2 === 0}
              animate={activePageIdx % 2 === 0 ? { top: "-1000%", right: "-600%", transition: "15s" } : { top: "70px", right: "350px", transition: "0s" }}
            />
            <Feather2
              className="mobile"
              src="/assets/images/feathers/main/3.png"
              style={{ bottom: "315px", right: "250px", transform: "rotate(249deg)" }}
              extra={{ bottom: "100%", right: "-100%" }}
              clicked={clicked}
              active={activePageIdx % 2 === 0}
              animate={activePageIdx % 2 === 0 ? { bottom: "1000%", right: "-600%", transition: "15s" } : { bottom: "315px", right: "350px", transition: "0s" }}
            />
            <Feather2
              className="mobile"
              src="/assets/images/feathers/main/4.png"
              style={{ bottom: "64px", right: "254px", }}
              extra={{ bottom: "-100%", right: "-100%" }}
              clicked={clicked}
              active={activePageIdx % 2 === 0}
              animate={activePageIdx % 2 === 0 ? { bottom: "-1000%", right: "-600%", transition: "15s" } : { bottom: "64px", right: "254px", transition: "0s" }}
            />
            <Feather2
              src="/assets/images/feathers/main/4.png"
              style={{ bottom: "700px", right: "350px" }}
              extra={{ bottom: "-100%", right: "-100%" }}
              clicked={clicked}
              active={activePageIdx % 2 === 0}
              animate={activePageIdx % 2 === 0 ? { bottom: "-1000%", right: "-600%", transition: "15s" } : { bottom: "700px", right: "350px", transition: "0s" }}
            />
          </div>
        </div>
      </div>
      <SectionFooter to="/about" className="homemain__footer-btn" text={t("about.main_btn")} color="var(--green-normal)" />
      <div className={`homemain__hand ${hand ? "active" : ""}`}>
        <img src='/assets/images/hand.png' alt="Pero Hand" />
      </div>
    </div>
  );
}
