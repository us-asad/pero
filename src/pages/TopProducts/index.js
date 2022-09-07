import { DefaultPageDecorations } from 'components';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BiChevronRight } from 'react-icons/bi';
import { BsArrowRight } from 'react-icons/bs';
import ReactPaginate from 'react-paginate';
import { Link, useNavigate } from 'react-router-dom';
import { PageRoutes } from 'subcomponents';
import { getImgUrl, request } from 'utils/request';
import "./index.css";

export default function TopProducts() {
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [topProducts, setTopProducts] = useState([]);
  const navigate = useNavigate();
  const [t, i18next] = useTranslation();
  const itemsPerPage = 2;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(topProducts.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(topProducts.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, topProducts]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % topProducts.length;
    setItemOffset(newOffset);
    window?.scrollTo({ top: 100 })
  };

  useEffect(() => {
    request("/top_products", setTopProducts, () => navigate("/404"));
  }, [navigate]);

  return (
    <section className='topproducts'>
      <div className="container px-normal">
        <div data-aos="fade-up" className='app__title-container'>
          <h1 className='app__title'>{t("products.top_products")}</h1>
          <span className='app__span blogs__span'>{t("last_update")}: {t("about.time_name")}</span>
          {/* <div className='app__span'>
            <select className='topproducts__select'>
              <option disabled selected>Исходная сортировка</option>
              <option>1</option>
              <option>1</option>
              <option>1</option>
            </select>
            <BiChevronDown className='topproducts__select-icon' />
          </div> */}
        </div>
        <PageRoutes
          routes={[
            {
              name: t("home.title"),
              link: "/"
            },
            { name: t("products.top_products") }
          ]}
        />
        <div className='topproducts__wrapper'>
          {currentItems?.map((product, i) => (
            <div data-aos="fade-up" key={i} className='topproducts__product'>
              <div className='topproducts__product-details'>
                <h2 className='topproducts__product-title'>{product && product[`name_${i18next.language}`]}</h2>
                <p className='topproducts__product-text'>{product && product[`description_${i18next.language}`]}</p>
                {/* <div className='topproducts__comment'>
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
                </div> */}
                <Link to={`/products/${product.id}`} className='products__modal-btn'>
                  <span className='products__modal-btn-icon'>
                    <BsArrowRight />
                  </span>
                  <span className='products__modal-btn-text'>{t("products.view")}</span>
                </Link>
              </div>
              <div className='topproducts__product-img'>
                <img
                  src={getImgUrl(product?.image)}
                  alt={product && product[`name_${i18next.language}`]}
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
