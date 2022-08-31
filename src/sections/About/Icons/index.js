import { about_icons } from 'data'
import React from 'react'
import "./index.css";

export default function Icons() {
  return (
    <section className='abouticons'>
      {about_icons.map((icon, i) => (
        <div key={icon.icon_url} className={`abouticons__icon abouticons__icon-${i+1}`}>
          <img
            data-aos="zoom-in"
            src={icon.icon_url}
            alt={`Pero ${icon.title}`}
            className={`abouticons__icon-img ${i === 2 ? "mb-25" : ""}`}
          />
          <h4 data-aos={i === 0 ? "fade-right" : i === 1 ? "zoom-in" : "fade-left"} className='abouticons__icon-title'>{icon.title}</h4>
          <p data-aos={i === 0 ? "fade-right" : i === 1 ? "zoom-in" : "fade-left"} className='abouticons__icon-text'>{icon.text}</p>
        </div>
      ))}
    </section>
  )
}
