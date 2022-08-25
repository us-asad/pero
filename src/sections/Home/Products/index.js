import React from 'react'
import { SectionFooterBtn } from 'subcomponents';
import "./index.css";

export default function Products() {
  return (
    <section className='products font-rubik'>
      <div className='container'>
        <h2 className='products__title'>Our products</h2>
        <p className='products__text'>Bizda 80 dan kop mahsulotlarimiz bor ular lorem ipsum color</p>
        <div className='products__slider'>
          coming soon
        </div>
        <SectionFooterBtn text={`Barcha tovarlarimizni korish 
/ skachat katalog`} bgColor="var(--green-light)" width="0px" />
      </div>
    </section>
  )
}
