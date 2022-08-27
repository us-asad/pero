import React from 'react'
import { BiChevronDown } from 'react-icons/bi'
import { Icons, Main, Numbers, Production, Video } from 'sections/About';
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
    </div>
  )
}
