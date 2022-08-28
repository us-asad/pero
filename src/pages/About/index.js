import React from 'react'
import { BiChevronDown } from 'react-icons/bi'
import { Icons, Main, Numbers, Production, Video } from 'sections/About';
import { Feather, WhiteBg } from 'subcomponents';
import "./index.css";

const routes = ["Home page", ">", "About us"];

export default function About() {
  return (
    <div className='about'>
      <div className="container px-normal">
        <div className='app__title-container'>
          <h1 className='app__title'>Топ товары</h1>
          <div className='app__span'>
            <select className='products__select'>
              <option>Исходная сортировка</option>
              <option>1</option>
              <option>1</option>
              <option>1</option>
            </select>
            <BiChevronDown className='products__select-icon' />
          </div>
        </div>
        <ul className='app__routes'>
          {routes.map((route, i) => (
            <li key={i}>
              {route}
            </li>
          ))}
        </ul>
        <Main />
        <Numbers />
        <Video />
        <Production />
        <Icons />
      </div>
      <Feather
        src="/assets/images/feathers/about-page/1.png"
        style={{ bottom: "4%", left: "8%" }}
        animate={{ bottom: "-100%", left: "-100%" }}
      />
      <Feather
        src="/assets/images/feathers/about-page/2.png"
        style={{ bottom: "40%", left: "5%" }}
        animate={{ bottom: "-100%", left: "-100%" }}
      />
      <Feather
        src="/assets/images/feathers/about-page/3.png"
        style={{ top: "25%", left: "3%" }}
        animate={{ top: "-100%", left: "-100%" }}
      />
      <Feather
        src="/assets/images/feathers/about-page/4.png"
        style={{ top: "7%", left: "10%" }}
        animate={{ top: "-100%", left: "-100%" }}
      />
      <Feather
        src="/assets/images/feathers/about-page/5.png"
        style={{ top: "10%", right: "8%" }}
        animate={{ top: "-100%", right: "-100%" }}
      />
      <Feather
        src="/assets/images/feathers/about-page/6.png"
        style={{ top: "50%", right: "3%" }}
        animate={{ top: "-100%", right: "-100%" }}
      />
      <Feather
        src="/assets/images/feathers/about-page/7.png"
        style={{ bottom: "13%", left: "55%" }}
        animate={{ bottom: "100%", left: "150%" }}
      />
      <WhiteBg
        long
        style={{ top: "5%", left: "0", height: "500px" }}
      />
      <WhiteBg
        long
        light
        style={{ top: "20%", left: "0", height: "500px" }}
      />
      <WhiteBg
        long
        style={{ top: "35%", left: "-20%", transform: "rotate(45deg)", height: "800px" }}
      />
      <WhiteBg
        style={{ top: "50%", left: "0" }}
      />
      <WhiteBg
        style={{ top: "80%", left: "0" }}
      />
      <WhiteBg
        style={{ top: "80%", right: "0", transform: "rotate(180deg)" }}
      />
      <WhiteBg
        style={{ top: "20%", right: "0", transform: "rotate(180deg)" }}
      />
      <WhiteBg
        style={{ top: "5%", right: "0", transform: "rotate(180deg)" }}
      />
      <WhiteBg
        style={{ top: "30%", right: "0", transform: "rotate(180deg)" }}
      />
      <WhiteBg
        long
        style={{ bottom: "0%", right: "0"}}
      />

    </div>
  )
}
