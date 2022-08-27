import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { About, Blog, Contact, Main, Products, Videos } from 'sections/Home';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => { setScrollY(window.scrollY) }
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <>
      <Main />
      <Products />
      <About />
      <Videos />
      <Blog scrollY={scrollY} />
      <Contact />
    </>
  )
}
