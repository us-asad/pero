import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';
import { Loader, PageRoutes } from 'subcomponents';
import { getImgUrl, request } from 'utils/request';
import "./index.css";

export default function Blog() {
  const [data, setData] = useState({});
  const params = useParams();
  const [t, i18next] = useTranslation();
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
          <h2 className="app__title">{data[`name_${i18next.language}`]}</h2>
          <span className='app__span'>
            <FaRegCalendarAlt className="blog__span-icon" />
            <span className='blog__span-text'>05.09.2022</span>
          </span>
        </div>
        <PageRoutes
          routes={[
            {
              name: t("home.title"),
              link: "/"
            },
            {
              name: t("blog.title"),
              link: "/blog"
            },
            { name: data[`name_${i18next.language}`] }
          ]}
        />
        <div className='blog__img-wrapper'>
          {data.image ? (
            <img
              src={getImgUrl(data.image)}
              alt="Blog img"
              className='blog__img'
              data-aos="zoom-in"
            />
          ) : null}
          {/* {data.video ? (
            <video
              src={getImgUrl(data.video)}
              controls
              className='blog__img'
              data-aos="zoom-in"
            />
          ) : null} */}
        </div>
        {/* <h1 data-aos="fade-up" className='blog__post-title'>{data[`name_${i18next.language}`]}</h1> */}
        <p data-aos="fade-up" className='blog__post-text'>
          {data[`description_${i18next.language}`]}
        </p>
        {data[`text_${i18next.language}`] ? <p style={{marginTop: "20px"}} data-aos="fade-up" className='blog__post-text'>
          {data[`text_${i18next.language}`]}
        </p> : ""}
      </div>
    </section>
  )
}
