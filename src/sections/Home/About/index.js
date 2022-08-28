import React from 'react';
import { Feather, SectionFooter, WhiteBg } from 'subcomponents';
import "./index.css";

export default function About() {
  return (
    <section className='homeabout'>
      <div className="container homeabout__container-desktop">
        <div className='homeabout__left-side'>
          <h3 className='homeabout__left-title'>Biz haqi- mizda</h3>
          <p className="homeabout__left-text">
            Pero ko’plab ishchilarni bir maqsad yo’lida jamlagan korxona bo'lib, u turli xildagi salfetkalar ishlab chiqarishga ixtisoslashgan. Biz o’z mijozlarimizga doim eng yaxshi va sifatlisini ulashamiz.
          </p>
        </div>
        <div className="homeabout__center">
          <img src='/assets/images/about-img.png' alt="Pero About" className='homeabout__center-img' />
        </div>
        <div className="homeabout__right-side">
          <h3 className="homeabout__right-title">Poklik siri</h3>
          <button className='homeabout__right-btn'>moree</button>
        </div>
      </div>
      <div className="container homeabout__container-mobile">
        <div className='homeabout__left-side'>
          <h3 className='homeabout__left-title'>Biz haqimizda</h3>
          <p className="homeabout__left-text">
            Pero ko’plab ishchilarni bir maqsad yo’lida jamlagan korxona bo'lib, u turli xildagi salfetkalar ishlab chiqarishga ixtisoslashgan. Biz o’z mijozlarimizga doim eng yaxshi va sifatlisini ulashamiz.
          </p>
        </div>
        <div className="homeabout__center">
          <img src='/assets/images/about-img.png' alt="Pero About" className='homeabout__center-img' />
        </div>
        <div className="homeabout__right-side">
          <button className='homeabout__right-btn'>moree</button>
        </div>
      </div>
      <SectionFooter className="homeabout__footer-btn" text="Biz haqimizda batafsil" color="var(--orange-normal)" />
      <WhiteBg long light style={{bottom: "30px", left: "50%", transform: "translateX(-50%)", opacity: 1}} />
      <WhiteBg long light style={{top: "-100px", left: "30px", transform: "rotate(90deg)"}} />
      <Feather
        src="/assets/images/feathers/about/1.png"
        style={{bottom: "2%", left: "15%"}}
        animate={{bottom: "120%", left: "100%"}}
      />
      <Feather
        src="/assets/images/feathers/about/2.png"
        style={{top: "2%", left: "1%"}}
        animate={{top: "-100%", left: "-100%"}}
      />
      <Feather
        src="/assets/images/feathers/about/1.png"
        style={{top: "10%", right: "5%"}}
        animate={{top: "-100%", right: "-100%"}}
      />
    </section>
  )
}
