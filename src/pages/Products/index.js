import { DefaultPageDecorations } from 'components';
import { all_products, product_categories } from 'data';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { AiOutlineEye } from 'react-icons/ai';
import { BiChevronDown, BiChevronRight } from 'react-icons/bi'
import { HiArrowRight } from "react-icons/hi";
import { BsArrowRight } from "react-icons/bs"
import ReactPaginate from 'react-paginate';
import "./index.css";
import { useNavigate } from 'react-router-dom';

const routes = ["Home page", ">", "our products", ">", "all products"];

export default function Products() {
  const [activeCategoryIdx, setActiveCategoryIdx] = useState(0);
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [modalDetails, setModalDetails] = useState(null);
  const navigate = useNavigate();
  const itemsPerPage = 9;

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % all_products.length;
    setItemOffset(newOffset);
  };

  const handleModalDetails = data => {
    setModalDetails(data);
    document.body.style.overflowY = data ? "hidden" : "auto"
  }

  const goToProduct = id => {
    setModalDetails(null);
    document.body.style.overflowY = "auto";
    navigate(`/products/${id}`);
  }

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(all_products.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(all_products.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

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
            <div className='products__categories-underline' style={{ transform: `translateX(${activeCategoryIdx * 210}px)` }} />
          </ul>
        </div>
        <div className='products__wrapper'>
          {currentItems?.map((prd, i) => (
            <div key={i} className='products__item'>
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
        <ReactPaginate
          breakLabel="..."
          nextLabel={<BiChevronRight />}
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={pageCount}
          previousLabel={<BiChevronRight />}
          renderOnZeroPageCount={null}
          className="blogs__pagination"
          pageClassName="blogs__pagination-item"
          previousLinkClassName="blogs__pagination-btn blogs__pagination-prev"
          nextLinkClassName="blogs__pagination-btn blogs__pagination-next"
          activeClassName="active"
        />
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
      <DefaultPageDecorations />
    </section>
  )
}
