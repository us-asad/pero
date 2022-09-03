import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import "./index.css";

export default function Feather({ src, width, style, animate }) {
  const [animateStyles, setAnimateStyles] = useState({});

  useEffect(() => {
    setAnimateStyles(animate);
  }, [animate]);

  return (
    <img
      src={src}
      alt="Feather"
      style={{ width, ...style, ...animateStyles }}
      className="feather__img"
    />
  )
}
