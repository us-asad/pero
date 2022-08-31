import { DefaultPageDecorations } from 'components';
import { products_page } from 'data';
import React, { useEffect, useState } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { BiChevronDown, BiChevronRight } from 'react-icons/bi';
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';
import "./index.css";

const routes = ["Home page", ">", "our products", ">", "top products"];

export default function TopProducts() {
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 2;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(products_page.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(products_page.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products_page.length;
    setItemOffset(newOffset);
  };


  return (
    <section className='topproducts'>
      <div className="container px-normal">
        <div data-aos="fade-up" className='app__title-container'>
          <h1 className='app__title'>Топ товары</h1>
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
        <ul data-aos="fade-right" className='app__routes'>
          {routes.map((route, i) => (
            <li key={i}>
              {route}
            </li>
          ))}
        </ul>
        <div className='topproducts__wrapper'>
          {currentItems?.map((product, i) => (
            <div data-aos="fade-up" key={i} className='topproducts__product'>
              <div className='topproducts__product-details'>
                <h2 className='topproducts__product-title'>{product.title}</h2>
                <p className='topproducts__product-text'>{product.text}</p>
                <div className='topproducts__comment'>
                  <img
                    src={product.comment.picture}
                    alt={product.comment.user_name}
                    className="topproducts__comment-img"
                  />
                  <div className='topproducts__comment-details'>
                    <h4 className='topproducts__comment-username'>{product.comment.user_name}</h4>
                    <span className='topproducts__comment-who'>{product.comment.who}</span>
                    <ul className='topproducts__comment-stars'>
                      {[...new Array(5)].map((_, i) => (
                        <li className={`topproducts__comment-star ${product.comment.rate > i ? "active" : ""}`}>
                          <AiFillStar />
                        </li>
                      ))}
                      <li className='topproducts__comment-link'>
                        <Link to="#">Izohni o'qish</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='topproducts__product-img'>
                <img
                  src={product.image_url}
                  alt={product.title}
                />
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
      <DefaultPageDecorations />
    </section>
  )
}
