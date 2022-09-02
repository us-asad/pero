import React from 'react'
import { useState } from 'react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Feather, SectionFooter, WhiteBg } from 'subcomponents';
import "./index.css";

export default function Blog({ scrollY }) {
  const [showPopUp1, setShowPopUp1] = useState(false);
  const [showPopUp2, setShowPopUp2] = useState(false);
  const [showPopUp3, setShowPopUp3] = useState(false);
  const blogRef = useRef();
  // const data = scrollY === window.pageYOffset + blogRef.current?.getBoundingClientRect().top ? true : ""

  if (!showPopUp1 && (blogRef.current?.offsetTop - blogRef.current?.scrollTop + blogRef.current?.clientTop) - blogRef.current?.clientHeight / 2 < scrollY) {
    setShowPopUp1(true);
    setTimeout(() => {
      setShowPopUp2(true);
      setTimeout(() => {
        setShowPopUp3(true);
      }, 500);
    }, 500);
  }



  return (
    <section ref={blogRef} className='homeblog'>
      <div className='container'>
        <h3 className='homeblog__bg-text'>BLOG POSTS</h3>
        <div className='homeblog__header'>
          <h2 className='videos__title'>Bizning videolar</h2>
          <p className="videos__text">bizning 20 dan ortiq video larimiz va vloglarimiz mavjud</p>
        </div>
        <div className="container homeblog__container">
          <div className="homeblog__main-container">
            <Link to="/blog/blog-page" className={`homeblog__pop-up-1 homeblog__pop-up-container ${showPopUp1 ? "active" : ""}`}>
              <img
                src="/assets/images/blog-pop-up-img.png"
                alt="Pero Blog"
                className='homeblog__pop-up-img'
              />
              <p className='homeblog__pop-up-text'>
                Pero nafislik nimadr brbalo text boladi
                kjhi Pero nafislik nimadr brbalo text boladiPero nafislik
              </p>
            </Link>
            <Link to="/blog/blog-page" className={`homeblog__pop-up-2 homeblog__pop-up-container ${showPopUp2 ? "active" : ""}`}>
              <img
                src="/assets/images/blog-pop-up-img.png"
                alt="Pero Blog"
                className='homeblog__pop-up-img'
              />
              <p className='homeblog__pop-up-text'>
                Pero nafislik nimadr brbalo text boladi
                kjhi Pero nafislik nimadr brbalo text boladiPero nafislik
              </p>
            </Link>
            <Link to="/blog/blog-page" className={`homeblog__pop-up-3 homeblog__pop-up-container ${showPopUp3 ? "active" : ""}`}>
              <img
                src="/assets/images/blog-pop-up-img.png"
                alt="Pero Blog"
                className='homeblog__pop-up-img'
              />
              <p className='homeblog__pop-up-text'>
                Pero nafislik nimadr brbalo text boladi
                kjhi Pero nafislik nimadr brbalo text boladiPero nafislik
              </p>
            </Link>
            <div className='homeblog__main-img'>
              <img src="/assets/images/blog-card.png" alt="Pero BLOG" />
            </div>
            <Link to="/blog" className='homeblog__main-btn'>All Blog Post</Link>
          </div>
        </div>
        <SectionFooter to="blog" text="Barcha blog postlarimiz" color="var(--orange-light)" />
      </div>
      <WhiteBg light long style={{ bottom: "30px", left: "50%", transform: "translateX(-50%)" }} />
      <WhiteBg long style={{ top: "30px", left: "50%", transform: "translateX(-50%)" }} />
      <WhiteBg style={{ top: "10px", left: "0" }} />
      <WhiteBg style={{ top: "-100px", right: "100px", transform: "rotate(90deg)" }} />
      <Feather
        src="/assets/images/feathers/blog/1.png"
        style={{ bottom: '80px', left: "0" }}
        animate={{ bottom: "-100%", left: "-100%" }}
      />
      <Feather
        src="/assets/images/feathers/blog/2.png"
        style={{ top: '100px', left: "120px" }}
        animate={{ top: "-100%", left: "-100%" }}
      />
      <Feather
        src="/assets/images/feathers/blog/3.png"
        style={{ top: '30%', right: "120px" }}
        animate={{ top: "-100%", right: "-100%" }}
      />
    </section>
  )
}
