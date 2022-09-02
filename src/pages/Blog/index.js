import React from 'react'
import { FaRegCalendarAlt } from 'react-icons/fa';
import "./index.css";

const routes = ["Home page", ">", "our blog", ">", "blog post"]

export default function Blog() {
  return (
    <section className='blog'>
      <div className="container px-normal">
        <div className="app__title-container">
          <h2 className="app__title">Blog posts</h2>
          <span className='app__span'>
            <FaRegCalendarAlt className="blog__span-icon" />
            <span className='blog__span-text'>24 Oct,2021</span>
          </span>
        </div>
        <ul className="app__routes">
          {routes.map((route, i) => (
            <li key={i} className="app_route">
              {route}
            </li>
          ))}
        </ul>
        <img
          src="/assets/images/blog-img.png"
          alt="Blog img"
          className='blog__img'
          data-aos="zoom-in"
        />
        <h1 data-aos="fade-up" className='blog__post-title'>What is the most fun thing to become a designer?</h1>
        <p data-aos="fade-up" className='blog__post-text'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 

          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        </p>
      </div>
    </section>
  )
}
