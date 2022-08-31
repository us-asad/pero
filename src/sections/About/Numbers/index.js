import { numbers } from 'data'
import React from 'react';
import "./index.css";
import CountUp from 'react-countup';

export default function Numbers() {
  return (
    <section data-aos="zoom-in" className='aboutmain__numbers'>
      {numbers.map((item, i) => (
        <div key={item.number} className='aboutmain__number'>
          <h4 data-aos={i === 0 ? "fade-right" : i === 1 ? "fade-up" : "fade-left"} className='aboutmain__number-title'>
          <CountUp end={item.number} delay={1} />
            <img
              src="/assets/images/numbers-feather.png"
              alt="Pero Feather"
              className='aboutmain__number-feather'
            />
          </h4>
          <p data-aos={i === 0 ? "fade-right" : i === 1 ? "fade-up" : "fade-left"} className='aboutmain__number-text'>{item.text}</p>
        </div>
      ))}
    </section>
  )
}
