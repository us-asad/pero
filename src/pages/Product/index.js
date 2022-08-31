import { all_products } from 'data';
import React, { useState } from 'react'
import { AiOutlineEye } from 'react-icons/ai';
import { BsArrowRight } from 'react-icons/bs';
import { HiArrowRight } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import "./index.css";

const routes = ["Home page", ">", "product"]

export default function Product() {
  const [modalDetails, setModalDetails] = useState(null);
  const navigate = useNavigate();

  const handleModalDetails = data => {
    setModalDetails(data);
    document.body.style.overflowY = data ? "hidden" : "auto"
  }

  const goToProduct = id => {
    setModalDetails(null);
    document.body.style.overflowY = "auto";
    navigate(`/products/${id}`);
  }

  return (
    <section className='product'>
      <div className="container px-normal">
        <h1 className='app__title product__title'>ВЛАЖНЫЕ CАЛФЕТКИ BABY LUX 509</h1>
        <ul className='app__routes'>
          {routes.map(route => (
            <li className='app__route'>{route}</li>
          ))}
        </ul>
        <div className='product__details'>
          <div className='product__content'>
            <ul className='product__features'>
              <li className='product__feature'>Артикул: <b>509</b></li>
              <li className='product__feature'>Размер: <b>20x15</b></li>
            </ul>
            <button className='product__btn'>Заказать</button>
          </div>
          <img
            src="/assets/images/about-img.png"
            alt="Product Name"
            className='product__img'
          />
        </div>
        <div className="product__related">
          <h2 className='product__related-title'>Похожие продукты</h2>
          <div className='products__wrapper'>
            {all_products.slice(0, 3).map((prd, i) => (
              <div key={i} className="products__item">
                <img
                  src={prd.image_url}
                  alt={prd.title}
                  className="products__item-img"
                />
                <h5 className='products__item-title'>{prd.title}</h5>
                <div className='products__item-btns'>
                  <button
                    className='products__item-btn'
                    onClick={() => handleModalDetails(prd)}
                  >
                    <AiOutlineEye />
                  </button>
                  <button onClick={() => goToProduct("product-page")} className='products__item-btn'>
                    <HiArrowRight />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={`products__modal ${modalDetails ? "active" : ""}`}>
        <div className='products__modal-content'>
          <h3 className='products__modal-title'>ВЛАЖНЫЕ CАЛФЕТКИ BABY LUX 509</h3>
          <ul className='products__modal-detail'>
            <li className='products__modal-detail'>
              Артикул: <b>509</b>
            </li>
            <li className='products__modal-detail'>
              Размер: <b>20x15</b>
            </li>
          </ul>
          <button onClick={() => goToProduct("product-page")} className='products__modal-btn'>
            <span className='products__modal-btn-icon'>
              <BsArrowRight />
            </span>
            <span className='products__modal-btn-text'>Перейти в каталог</span>
          </button>
        </div>
        <img
          src="/assets/images/product-demo.png"
          alt="product title"
          className='products__modal-img'
        />
      </div>
      <div
        className={`products__modal-bg ${modalDetails ? "active" : ""}`}
        onClick={() => handleModalDetails(null)}
      />
    </section>
  )
}
