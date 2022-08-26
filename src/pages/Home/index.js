import { Footer, Header } from 'components';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { About, Blog, Contact, Main, Products, Videos } from 'sections/Home';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollY(window.scrollY);
    });

    return () => {
      window.removeEventListener("scroll");
    }
  }, []);

  return (
    <>
      <Header />
      <Main />
      <Products />
      <About />
      <Videos />
      <Blog scrollY={scrollY} />
      <Contact />
      <Footer />
    </>
  )
}
