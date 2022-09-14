import { DefaultPageDecorations } from 'components';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BiChevronRight } from 'react-icons/bi';
import { CgArrowRightO, CgCalendarDates } from "react-icons/cg";
import ReactPaginate from 'react-paginate';
import { Link, useNavigate } from 'react-router-dom';
import { PageRoutes } from 'subcomponents';
import { getImgUrl, request } from 'utils/request';
import "./index.css";

export default function Blogs() {
  const [data, setData] = useState([]);
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const navigate = useNavigate();
  const [t, i18next] = useTranslation();
  const itemsPerPage = 6;

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
    window.scrollTo({ top: 100 })
  };

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, data]);

  useEffect(() => {
    request("/blogs", data => setData(data.reverse()), () => navigate("/404"));
    /* eslint-disable react-hooks/exhaustive-deps */
  }, []);

  return (
    <section className='blogs'>
      <div className="container px-normal font-zonapro">
        <div data-aos="fade-up" className='app__title-container'>
          <h2 className='app__title'>{t("blog.title")}</h2>
          <span className='app__span blogs__span'>{t("last_update")}: {t("about.time_name")}</span>
        </div>
        <PageRoutes
          routes={[
            {
              name: t("home.title"),
              link: "/"
            },
            { name: t("blog.title") }
          ]}
        />
        <div className='blogs__wrapper'>
          {currentItems?.map((blog, i) => (
            <div data-aos="fade-up" key={i} className='blogs__blog'>
              <img
                src={blog.image ? getImgUrl(blog.image) : blog.video ? "/assets/images/default-video.png" : "/assets/images/default-img.png"}
                alt={blog[`name_${i18next.language}`]}
                className="blogs__blog-img"
              />
              <div className='blogs__blog-content'>
                <h4 className='blogs__blog-title'>{blog[`name_${i18next.language}`]}</h4>
                <div className='blogs__blog-details'>
                  <p className='blogs__blog-date'>
                    <CgCalendarDates />
                    <span>{blog.date || "05.09.2022"}</span>
                  </p>
                  <Link to={`/blog/${blog.id}`} className='blogs__blog-btn'>
                    <span className='blogs__btn-text'>{t("blog.read")}</span>
                    <CgArrowRightO className='blogs__btn-icon' />
                  </Link>
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
