import React from 'react'

export default function WhiteBg({ long, light, style }) {
  return (
    <img
      src={!long ? "/assets/images/white-bg.png" : "/assets/images/long-white-bg.png"}
      alt="Ellipse"
      style={{
        position: "absolute",
        zIndex: 0,
        opacity: light ? ".7" : ".2",
        width: long ? "100%" : "auto" ,
        ...style
      }}
    />
  )
}
