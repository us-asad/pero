import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import "./index.css";

export default function FuckingFeather({ src, width, style, animate, className, extra, clicked, active }) {
  const [animateStyles, setAnimateStyles] = useState({});
  const [extraStyles, setExtraStyles] = useState({});
  const [transition, setTransition] = useState("a");

  useEffect(() => {
    if (clicked) {
      setAnimateStyles(animate);
    } else {
      setAnimateStyles({})
    }
  }, [animate, clicked]);

  useEffect(() => {
    if (active)
      setExtraStyles(extra)
    else {
      setTimeout(() => {
        setExtraStyles({transition: "0s"})
      }, 1000);
    }
  }, [extra, active]);

  return (
    <img
      src={src}
      alt="Feather"
      style={{ width, ...style, ...extraStyles, ...animateStyles }}
      className={`feather2__img ${className}`}
    />
  )
}
