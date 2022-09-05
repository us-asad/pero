import React, { useEffect } from 'react';
import "./index.css";
import CountUp from 'react-countup';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { request } from 'utils/request';

export default function Numbers() {
  const [numbers, setNumbers] = useState([]);
  const [, i18next] = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    request("/info", data => setNumbers(data.slice(0,3)), err => navigate("/404"));
  }, [navigate]);

  return (
    <section id="numbers" data-aos="zoom-in" className='aboutmain__numbers'>
      {numbers.map((item, i) => (
        <div key={item.id} className='aboutmain__number'>
          <h4 data-aos={i === 0 ? "fade-right" : i === 1 ? "fade-up" : "fade-left"} className='aboutmain__number-title'>
          <CountUp end={item.count} delay={1} />
            <img
              src="/assets/images/numbers-feather.png"
              alt="Pero Feather"
              className='aboutmain__number-feather'
            />
          </h4>
          <p data-aos={i === 0 ? "fade-right" : i === 1 ? "fade-up" : "fade-left"} className='aboutmain__number-text'>{item && item[`name_${i18next.language}`]}</p>
        </div>
      ))}
    </section>
  );
}
