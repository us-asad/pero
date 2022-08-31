import { numbers } from 'data'
import React from 'react';
import "./index.css";
import CountUp from 'react-countup';

export default function Numbers() {
  return (
    <section className='aboutmain__numbers'>
      {numbers.map(item => (
        <div key={item.number} className='aboutmain__number'>
          <h4 className='aboutmain__number-title'>
          <CountUp end={item.number} delay={1} />
            <img
              src="/assets/images/numbers-feather.png"
              alt="Pero Feather"
              className='aboutmain__number-feather'
            />
          </h4>
          <p className='aboutmain__number-text'>{item.text}</p>
        </div>
      ))}
    </section>
  )
}
