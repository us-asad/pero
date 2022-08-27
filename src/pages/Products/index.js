import { product_categories } from 'data';
import React from 'react'
import { useState } from 'react';
import { BiChevronDown } from 'react-icons/bi'
import "./index.css";

const routes = ["Home page", ">", "our products", ">", "all products"];

export default function Products() {
  const [activeCategoryIdx, setActiveCategoryIdx] = useState(0);

  return (
    <section className='products'>
      <div className="container px-normal">
        <div className='app__title-container'>
          <h1 className='app__title'>Бумажные продукции</h1>
          <div className='app__span'>
            <select className='topproducts__select'>
              <option>Исходная сортировка</option>
              <option>1</option>
              <option>1</option>
              <option>1</option>
            </select>
            <BiChevronDown className='topproducts__select-icon' />
          </div>
        </div>
        <ul className='app__routes'>
          {routes.map((route, i) => (
            <li key={i}>
              {route}
            </li>
          ))}
        </ul>
        <div className='products__categories-wrapper'>
          <ul className='products__categories'>
            {product_categories.map((category, i) => (
              <li
                key={i}
                className={`products__category ${activeCategoryIdx === i ? "active" : ""}`}
                onClick={() => setActiveCategoryIdx(i)}
              >
                <p className='products__category-text'>{category}</p>
              </li>
            ))}
          <div className='products__categories-underline' style={{transform: `translateX(${activeCategoryIdx * 210}px)`}} />
          </ul>
        </div>
        <div className='products__wrapper'>
          
        </div>
      </div>
    </section>
  )
}
