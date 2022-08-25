import { Footer, Header } from 'components';
import React from 'react'
import { About, Blog, Contact, Main, Products, Videos } from 'sections/Home';

export default function Home() {
  return (
    <>
      <Header />
      <Main />
      <Products />
      <About />
      <Videos />
      <Blog />
      <Contact />
      <Footer />
    </>
  )
}
