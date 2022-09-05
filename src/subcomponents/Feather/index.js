import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import "./index.css";

export default function Feather({ src, width, style, animate, className }) {
  const [animateStyles, setAnimateStyles] = useState({});
  const [back, setBack] = useState(false);

  useEffect(() => {
    setAnimateStyles(animate);

    const interval = setInterval(() => {
      setBack(prev => !prev);
    }, 50000);

    return () => {
      clearInterval(interval);
    }
  }, [animate]);

  useEffect(() => {
      setAnimateStyles(back ? {} : animate)
  }, [back, animate]);

  return (
    <img
      src={src}
      alt="Feather"
      style={{ width, ...style, ...animateStyles }}
      className={`feather__img ${className}`}
    />
  )
}
