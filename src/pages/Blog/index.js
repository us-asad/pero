import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';
import { Loader } from 'subcomponents';
import { getImgUrl, request } from 'utils/request';
import "./index.css";

const routes = ["Home page", ">", "our blog", ">", "blog post"]

export default function Blog() {
  const [data, setData] = useState({});
  const params = useParams();
  const [, i18next] = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    request(`/blogs/${params.id}`, setData, () => navigate("/404"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.id]);

  if (!data) return <Loader />;

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
        {data.image ? (
          <img
            src={getImgUrl(data.image)}
            alt="Blog img"
            className='blog__img'
            data-aos="zoom-in"
          />
        ) : null}
        {data.video ? (
          <video
            src={getImgUrl(data.video)}
            controls
            className='blog__img'
            data-aos="zoom-in"
          />
        ) : null}
        <h1 data-aos="fade-up" className='blog__post-title'>{data[`name_${i18next.language}`]}</h1>
        <p data-aos="fade-up" className='blog__post-text'>
          {data.description_uz}
        </p>
      </div>
    </section>
  )
}
