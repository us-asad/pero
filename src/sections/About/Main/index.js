import React from 'react'
import "./index.css";

export default function Main() {
  return (
    <section className='aboutmain'>
      <div className='aboutmain__content'>
        <h2 className='aboutmain__content-title'>Biz haqi- mizda</h2>
        <p className='aboutmain__content-text'>
          Pero ko’plab ishchilarni bir maqsad yo’lida jamlagan korxona bo'lib, u turli xildagi salfetkalar ishlab chiqarishga ixtisoslashgan. Biz o’z mijozlarimizga doim eng yaxshi va sifatlisini ulashamiz.
        </p>
      </div>
      <img
        src="/assets/images/about-img.png"
        alt="About Pero"
        className='aboutmain__img'
      />
    </section>
  )
}
