import React from 'react'
import "./index.css";

export default function Feather({ src, width, style }) {
  return (
    <img
      src={src}
      alt="Feather"
      style={{ width, ...style }}
      className="feather__img"
    />
  )
}
