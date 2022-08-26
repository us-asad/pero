import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

export default function MainSlide({ activePageIdx, i, title, text }) {

  useEffect(() => {
    // if (activePageIdx > i) {
    //   setTimeout(() => {
    //     setStyles({ left: "-577px", transition: "0s" })
    //   }, 2501);
    // } else {
    //   setStyles({ left: "1460px", transition: "4s" })
    // }
  }, [activePageIdx]);

  return (
    <div className='main__page'>
      <div className="main__page-container">
        <h1 className='main__page-title'>{title}</h1>
        <p className='main__page-text'>
          {text}
        </p>
      </div>
    </div>
  )
}
