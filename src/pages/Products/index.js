import { DefaultPageDecorations } from 'components';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { AiOutlineEye } from 'react-icons/ai';
import { BiChevronRight } from 'react-icons/bi'
import { HiArrowRight } from "react-icons/hi";
import { BsArrowRight } from "react-icons/bs"
import ReactPaginate from 'react-paginate';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { getImgUrl, request } from 'utils/request';
import { useTranslation } from 'react-i18next';
import { PageRoutes } from 'subcomponents';
import { useRef } from 'react';
import "./index.css";

export default function Products() {
  const [searchParams] = useSearchParams();
  const [activeCategoryIdx, setActiveCategoryIdx] = useState(0);
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [modalDetails, setModalDetails] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();
  const [t, i18next] = useTranslation();
  const categoryRef = useRef();
  const itemsPerPage = 9;
  const [showPagination] = useState(true);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % filteredProducts.length;
    setItemOffset(newOffset);
    window.scrollTo({ top: 10 })
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
    setCurrentItems(filteredProducts.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(filteredProducts.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, filteredProducts]);

  useEffect(() => {
    request(`/categories?format=json`, categoriesData => {
      const idx = categoriesData.findIndex(ctg => +ctg.id === +searchParams.get("category"));
      setActiveCategoryIdx(idx !== -1 ? idx : 0);
      setCategories(categoriesData);
      request("/products", prdsData => {
        setAllProducts(prdsData);
        setFilteredProducts(prdsData.filter(prd => prd.category_id === categoriesData[0].id));
      }, () => navigate("/404"));
    }, () => navigate("/404"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setFilteredProducts(allProducts.filter(prd => prd.category_id === categories[activeCategoryIdx].id));
  }, [activeCategoryIdx, categories, allProducts]);


  useEffect(() => {
    if (typeof window !== "undefined") {
      const prevBtn = document?.querySelector(".blogs__pagination-prev");
      prevBtn?.click();
      prevBtn?.click();
      prevBtn?.click();
      prevBtn?.click();
      prevBtn?.click();
      prevBtn?.click();
      prevBtn?.click();
      prevBtn?.click();
      prevBtn?.click();
    }
  }, [activeCategoryIdx]);

  return (
    <section className='products'>
      <div className="container px-normal">
        <div data-aos="fade-up" className='app__title-container'>
          <h1 className='app__title'>{t("products.all_products")}</h1>
          <span className='app__span blogs__span'>{t("last_update")}: {t("about.time_name")}</span>
          {/* <div className='app__span'>
            <select className='topproducts__select'>
              <option>Исходная сортировка</option>
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
            { name: t("products.all_products") }
          ]}
        />
        <div data-aos="zoom-in" className='products__categories-wrapper'>
          <ul ref={categoryRef} className='products__categories'>
            {categories.map((category, i) => (
              <>
                <li
                  key={i}
                  id={`category_${i}`}
                  className={`products__category ${activeCategoryIdx === i ? "active" : ""}`}
                  onClick={() => setActiveCategoryIdx(i)}
                >
                  <p className='products__category-text'>{category[`name_${i18next.language}`]}</p>
                  <div className='products__categories-underline' style={{ opacity: activeCategoryIdx === i ? "1" : "0" }} />
                </li>
              </>
            ))}
          </ul>
        </div>
        <div className='products__wrapper'>
          {currentItems?.map((prd, i) => (
            <div data-aos="fade-up" key={i} className='products__item'>
              <img
                src={getImgUrl(prd.image)}
                alt={prd[`name_${i18next.language}`]}
                className="products__item-img"
              />
              <h5 className='products__item-title'>{prd[`name_${i18next.language}`]}</h5>
              <div className='products__item-btns'>
                <button
                  className='products__item-btn'
                  onClick={() => handleModalDetails(prd)}
                >
                  <AiOutlineEye />
                </button>
                <button onClick={() => goToProduct(prd.id)} className='products__item-btn'>
                  <HiArrowRight />
                </button>
              </div>
            </div>
          ))}
        </div>
        {showPagination ? <ReactPaginate
          breakLabel="..."
          nextLabel={<BiChevronRight />}
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={pageCount}
          previousLabel={<BiChevronRight />}
          renderOnZeroPageCount={(data) => console.log(data)}
          className="blogs__pagination"
          pageClassName="blogs__pagination-item"
          previousLinkClassName="blogs__pagination-btn blogs__pagination-prev"
          nextLinkClassName="blogs__pagination-btn blogs__pagination-next"
          activeClassName="active"
        /> : null}
      </div>
      <div className={`products__modal ${modalDetails ? "active" : ""}`}>
        <div className='products__modal-content'>
          <h3 className='products__modal-title'>{modalDetails && modalDetails[`name_${i18next.language}`]}</h3>
          <p>{modalDetails && modalDetails[`description_${i18next.language}`]}</p>
          <button onClick={() => goToProduct(modalDetails.id)} className='products__modal-btn'>
            <span className='products__modal-btn-icon'>
              <BsArrowRight />
            </span>
            <span className='products__modal-btn-text'>{t("products.view")}</span>
          </button>
        </div>
        <img
          src={getImgUrl(modalDetails?.image)}
          alt={modalDetails && modalDetails[`name_${i18next.language}`]}
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
