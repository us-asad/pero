import React from 'react'
import "./index.css";

export default function Production() {
  return (
    <section className='aboutproduction'>
      <div className='aboutproduction__details'>
        <h3 className='about__title aboutproduction__details-title'>Производство</h3>
        <p className='about__text aboutproduction__details-text'>
          Наши производственные цеха очень интересные площадки для людей увлеченных. Мы с большой заботой и любовью относимся к каждому продукту, производимому нами. Почувствуйте и вы нашу заботу и любовь.
        </p>
        <button className='aboutproduction__details-btn'>Подробнее</button>
      </div>
      <img
        src="/assets/images/aboutproduction-img.png"
        alt="Pero Production"
        className='aboutproduction__img'
      />
    </section>
  )
}
