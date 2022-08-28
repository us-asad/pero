import { DefaultPageDecorations } from 'components';
import { blogs } from 'data';
import React, { useEffect, useState } from 'react';
import { BiChevronRight } from 'react-icons/bi';
import { CgArrowRightO, CgCalendarDates } from "react-icons/cg";
import ReactPaginate from 'react-paginate';
import "./index.css";

const routes = ["Home page", ">", "our products", ">", "blog"]

export default function Blogs() {
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 6;

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(blogs.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(blogs.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % blogs.length;
    setItemOffset(newOffset);
  };

  return (
    <section className='blogs'>
      <div className="container px-normal font-zonapro">
        <div className='app__title-container'>
          <h2 className='app__title'>Bizning Blog</h2>
          <span className='app__span'>последняя обновления : 21.05</span>
        </div>
        <ul className='app__routes'>
          {routes.map((route, i) => (
            <li key={i} className='app__route'>{route}</li>
          ))}
        </ul>
        <div className='blogs__wrapper'>
          {currentItems?.map((blog, i) => (
            <div key={i} className='blogs__blog'>
              <img
                src={blog.image_url}
                alt={blog.title}
                className="blogs__blog-img"
              />
              <div className='blogs__blog-content'>
                <h4 className='blogs__blog-title'>{blog.title}</h4>
                <div className='blogs__blog-details'>
                  <p className='blogs__blog-date'>
                    <CgCalendarDates />
                    <span>{blog.date}</span>
                  </p>
                  <button className='blogs__blog-btn'>
                    <span className='blogs__btn-text'>Read More</span>
                    <CgArrowRightO className='blogs__btn-icon' />
                  </button>
                </div>
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
