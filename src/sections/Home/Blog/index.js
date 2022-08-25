import React from 'react'
import { SectionFooter, WhiteBg } from 'subcomponents';
import "./index.css";

export default function Blog() {
  return (
    <section className='blog'>
      <h3 className='blog__bg-text'>BLOG POSTS</h3>
      <div className="container blog__container">
        <div className="blog__main-img">
          <img src="/assets/images/blog-img.png" alt="Pero BLOG" />
          <button className='blog__main-btn'>All Blog Post</button>
        </div>
      </div>
      <SectionFooter text="Barcha blog postlarimiz" color="var(--orange-light)" />
      <WhiteBg light long style={{ bottom: "30px", left: "50%", transform: "translateX(-50%)" }} />
      <WhiteBg long style={{ top: "30px", left: "50%", transform: "translateX(-50%)" }} />
      <WhiteBg style={{ top: "10px", left: "0" }} />
      <WhiteBg style={{ top: "-100px", right: "100px", transform: "rotate(90deg)" }} />
    </section>
  )
}
