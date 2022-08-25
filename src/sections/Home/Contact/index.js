import React from 'react';
import { Feather, WhiteBg } from 'subcomponents';
import "./index.css";

export default function Contact() {
  const submit = e => {
    e.preventDefault();
  }

  return (
    <section className='contact'>
      <div className="container">
        <h1 className='contact__title'>Aloqa uchun</h1>
        <p className='contact__text'>
          malumoitlarizzi yozb qoldiring va bizani mutahasislarimiz sizga qongiroq qlwadi
        </p>
        <form onSubmit={submit} className='contact__form'>
        <input
            type="text"
            placeholder='Ismingiz'
            name='name'
            className='contact__feild'
          />
          <input
            type="number"
            placeholder='Telefon raqamingiz'
            name='number'
            className='contact__feild'
          />
          <textarea
            placeholder='Xabar'
            name='message'
            className='contact__feild font-rubik'
            rows={5}
          ></textarea>
          <button className='contact__btn'>
            <span className='contact__btn-text'>Yuborish</span>
            <img className='contact__btn-icon' src="/assets/icons/send.png" alt="Send" />
          </button>
        </form>
      </div>
      <Feather
        src="/assets/images/feathers/contact/1.png"
        width="280px"
        style={{ bottom: "30px", left: "40px" }}
      />
      <Feather
        src="/assets/images/feathers/contact/2.png"
        width="120px"
        style={{ top: "200px", left: "100px" }}
      />
      <Feather
        src="/assets/images/feathers/contact/3.png"
        width="120px"
        style={{ top: "50px", left: "450px" }}
      />
      <Feather
        src="/assets/images/feathers/contact/4.png"
        width="180px"
        style={{ top: "80px", right: "30px" }}
      />
      <Feather
        src="/assets/images/feathers/contact/5.png"
        width="80px"
        style={{ bottm: "80px", right: "240px" }}
      />
      <WhiteBg style={{ top: "20px", left: "-30px" }} />
      <WhiteBg style={{ bottom: "-100px", left: "80px", transform: "rotate(-90deg)" }} />
      <WhiteBg style={{ bottom: "-100px", right: "280px", transform: "rotate(-90deg)" }} />
      <WhiteBg style={{ bottom: "100px", right: "0", transform: "rotate(180deg)" }} />
      <WhiteBg style={{ top: "-100px", right: "190px", transform: "rotate(90deg)" }} />
      <WhiteBg style={{ top: "-100px", left: "190px", transform: "rotate(90deg)" }} />
    </section>
  )
}
