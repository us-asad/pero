import React from 'react';
import { SectionFooter, WhiteBg } from 'subcomponents';
import "./index.css";

export default function About() {
  return (
    <section className='about'>
      <div className="container about__container">
        <div className='about__left-side'>
          <h3 className='about__left-title'>Biz haqi- mizda</h3>
          <p className="about__left-text">
            Pero ko’plab ishchilarni bir maqsad yo’lida jamlagan korxona bo'lib, u turli xildagi salfetkalar ishlab chiqarishga ixtisoslashgan. Biz o’z mijozlarimizga doim eng yaxshi va sifatlisini ulashamiz.
          </p>
        </div>
        <div className="about__center">
          <img src='/assets/images/about-img.png' alt="Pero About" className='about__center-img' />
        </div>
        <div className="about__right-side">
          <h3 className="about__right-title">Poklik siri</h3>
          <button className='about__right-btn'>moree</button>
        </div>
      </div>
      <SectionFooter text="Biz haqimizda batafsil" color="var(--orange-normal)" />
      <WhiteBg long light style={{bottom: "30px", left: "50%", transform: "translateX(-50%)", opacity: 1}} />
      <WhiteBg long light style={{top: "-100px", left: "30px", transform: "rotate(90deg)"}} />
    </section>
  )
}
