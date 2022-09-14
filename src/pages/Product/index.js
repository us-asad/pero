import { DefaultPageDecorations } from 'components';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { AiOutlineEye } from 'react-icons/ai';
import { BsArrowRight } from 'react-icons/bs';
import { FaTimes } from 'react-icons/fa';
import { HiArrowRight } from 'react-icons/hi';
import { useNavigate, useParams } from 'react-router-dom';
import { NumberInput, PageRoutes } from 'subcomponents';
import { sendMessageToTG } from 'utils/functions';
import { getImgUrl, request } from 'utils/request';
import "./index.css";

export default function Product() {
  const [modalDetails, setModalDetails] = useState(null);
  const [showPrdModal, setShowPrdModal] = useState(false);
  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [ordered, setOrdered] = useState(false);
  const [orderLoading, setOrderLoading] = useState(false);
  const params = useParams();
  const navigate = useNavigate();
  const [t, i18next] = useTranslation();

  const handleModalDetails = data => {
    setModalDetails(data);
    document.body.style.overflowY = data ? "hidden" : "auto";
  }

  const handleShowPrdModal = state => {
    setShowPrdModal(state);
    document.body.style.overflowY = state ? "hidden" : "auto";
  }

  const goToProduct = id => {
    setModalDetails(null);
    document.body.style.overflowY = "auto";
    navigate(`/products/${id}`);
  }

  const submit = async e => {
    e.preventDefault();
    setOrderLoading(true)
    const message = `
      Yangi Buyurtma📦!
      %0A👤Ismi: ${e.target?.name?.value}
      %0A☎Raqam: ${e.target?.phone_number?.value}
      %0A🆔Mahsulot: ${product && product[`name_${i18next.language}`]}
    `;

    const ok = await sendMessageToTG(message, false);

    if (ok) {
      setShowPrdModal(false);
      setOrdered(true);

      e.target.name.value = "";
      e.target.phone_number.value = "";
    }

    setOrderLoading(false)
  }

  useEffect(() => {
    request(`/products/${params.id}`, data => setProduct(data), () => navigate("/404"));
    request("/top_products", data => setRelatedProducts(data.slice(0, 3)), () => navigate("/404"));
  }, [params.id, navigate]);

  return (
    <div className='hide-overflow hide-scrollbar'>
      <section className='product'>
        <div className="container px-normal">
          <h1 data-aos="fade-up" className='app__title product__title'>{product && product[`name_${i18next.language}`]}</h1>
          <PageRoutes
            routes={[
              {
                name: t("home.title"),
                link: "/"
              },
              {
                name: t("products.all_products"),
                link: "/products"
              },
              { name: product && product[`name_${i18next.language}`] }
            ]}
          />
          <div className='product__details'>
            <div data-aos="fade-right" className='product__content'>
              <p>{product && product[`description_${i18next.language}`]}</p>
              <button onClick={() => handleShowPrdModal(true)} className='product__btn'>{t("products.order")}</button>
            </div>
            <img
              data-aos="fade-left"
              src={getImgUrl(product?.image)}
              alt="Product Name"
              className='product__img'
            />
          </div>
          <div className="product__related">
            <h2 data-aos="zoom-in" className='product__related-title product__title app__title'>{t("products.related")}</h2>
            <div className='products__wrapper'>
              {relatedProducts.map((prd, i) => (
                <div data-aos={i === 0 ? "fade-right" : i === 1 ? "fade-up" : "fade-left"} key={i} className="products__item">
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
          </div>
        </div>
        <div className={`product__modal ${showPrdModal ? "active" : ""}`}>
          <div className='product__modal-content'>
            <h3 className='products__modal-title'>{product && product[`name_${i18next.language}`]}</h3>
            <form className='product__modal-form' onSubmit={submit}>
              <input
                type="text"
                name='name'
                placeholder={t("contact.name")}
                required
                minLength={2}
                maxLength={100}
                className='contact__feild product__'
              />
              <NumberInput className="product__modal-input contact__feild" />
              <button
                disabled={orderLoading}
                className='products__modal-btn product__modal-btn'
              >
                <span className='products__modal-btn-icon'>
                  {orderLoading ? <div className='spin'></div> : <BsArrowRight />}
                </span>
                <span className='products__modal-btn-text'>{t("contact.send")}</span>
              </button>
            </form>
          </div>
          <img
            src={getImgUrl(product?.image)}
            alt="Product Name"
            className='product__modal-img'
          />
          <button onClick={() => handleShowPrdModal(false)} className='product__modal-close'>
            <FaTimes />
          </button>
        </div>
        <div className={`products__modal ${modalDetails ? "active" : ""}`}>
          <div className='products__modal-content'>
            <h3 className='products__modal-title'>{modalDetails && modalDetails[`name_${i18next.language}`]}</h3>
            <p>{modalDetails && modalDetails[`description_${i18next.language}`]}</p>
            <button onClick={() => goToProduct(modalDetails?.id)} className='products__modal-btn'>
              <span className='products__modal-btn-icon'>
                <BsArrowRight />
              </span>
              <span className='products__modal-btn-text'>{t("products.view")}</span>
            </button>
          </div>
          <img
            src={getImgUrl(modalDetails?.image)}
            alt="product title"
            className='products__modal-img'
          />
        </div>
        <div className={`product__modal product__ordered-modal ${ordered ? "active" : ""}`}>
          <div className='product__modal-content product__ordered-content'>
            <h3 className='product__ordered-title'>{t("products.success_title")}</h3>
            <p className='product__ordered-text'>
              {t("products.success_subtitle")}
            </p>
          </div>
          <img
            src="/assets/images/order-done.png"
            alt="Product Name"
            className='product__modal-img product__ordered-img'
          />
          <button onClick={() => {
            setOrdered(false);
            document.body.style.overflowY = "auto";
          }} className='product__modal-close'>
            <FaTimes />
          </button>
        </div>
        <div
          className={`products__modal-bg ${modalDetails || showPrdModal || ordered ? "active" : ""}`}
          onClick={() => {
            handleShowPrdModal(false);
            handleModalDetails(null);
            setOrdered(false);
            document.body.style.overflowY = "auto";
          }}
        />
        <DefaultPageDecorations />
      </section>
    </div>
  )
}
