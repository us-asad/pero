import React, { useRef } from 'react';
import { Feather, NumberInput, WhiteBg } from 'subcomponents';
import SendBtn from 'subcomponents/SendBtn';
import { sendMessageToTG } from 'utils/functions';
import "./index.css";

export default function Contact() {
  const formRef = useRef();

  const submit = async e => {
    e.preventDefault();

    const message = `
      Yangi Xabar😊!
      %0A👤Ismi: ${formRef.current.children?.name?.value}
      %0A☎Raqam: ${formRef.current.children?.phone_number?.value}
      %0A📧Xabar: ${formRef.current.children?.message?.value}
    `;

    await sendMessageToTG(message);
  }

  return (
    <section className='contact'>
      <div className="container">
        <form ref={formRef} id="contact-form" data-aos="fade-right" onSubmit={submit} className='contact__form'>
          <h1 className='contact__title'>Aloqa uchun</h1>
          <p className='contact__text'>
            malumoitlarizzi yozb qoldiring va bizani mutahasislarimiz sizga qongiroq qlwadi
          </p>
          <input
            type="text"
            placeholder='Ismingiz'
            name='name'
            minLength={2}
            maxLength={100}
            required
            className='contact__feild'
          />
          <NumberInput className="contact__feild" />
          <textarea
            placeholder='Xabar'
            name='message'
            className='contact__feild font-rubik'
            rows={5}
            maxLength={10000}
            required
            minLength={3}
          ></textarea>
          <div className='contact__btn'>
            <SendBtn />
          </div>
        </form>
        <div data-aos="fade-left" className='contact__main-content'>
          <img
            src="/assets/images/contact-img.png"
            alt="Pero Contact"
            className='contact__main-img'
          />
          <h3 className='contact__main-title'>Pero - poklik siri</h3>
          <p className='contact__main-text'>OOO Pero holding company 2022</p>
        </div>
      </div>
      <Feather
        src="/assets/images/feathers/contact/1.png"
        width="280px"
        style={{ bottom: "30px", left: "40px" }}
        animate={{ bottom: "-100%", left: "-100%" }}
      />
      <Feather
        src="/assets/images/feathers/contact/2.png"
        width="120px"
        style={{ top: "200px", left: "100px" }}
        animate={{ top: "-100%", left: "100%" }}
      />
      <Feather
        src="/assets/images/feathers/contact/3.png"
        width="120px"
        style={{ top: "50px", left: "450px" }}
        animate={{ top: "-100%", left: "-100%" }}
      />
      <Feather
        src="/assets/images/feathers/contact/4.png"
        width="180px"
        style={{ top: "80px", right: "30px" }}
        animate={{ top: "-100%", right: "-100%" }}
      />
      <Feather
        src="/assets/images/feathers/contact/5.png"
        width="80px"
        style={{ bottom: "80px", right: "240px" }}
        animate={{ bottom: "-100%", right: "-100%" }}
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
