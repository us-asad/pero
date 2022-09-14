import React from 'react'
import { Feather, WhiteBg } from 'subcomponents'

export default function DefaultPageDecorations() {
  return (
    <>
      <Feather
        src="/assets/images/feathers/blog-page/1.png"
        style={{ top: "50%", left: "1%" }}
        animate={{ top: "150%", left: "-100%" }}
      />
      <Feather
        src="/assets/images/feathers/blog-page/2.png"
        style={{ top: "30%", left: "5%" }}
        animate={{ top: "-100%", left: "100%" }}
      />
      <Feather
        src="/assets/images/feathers/blog-page/3.png"
        style={{ top: "2%", left: "8%" }}
        animate={{ top: "-100%", left: "-100%" }}
      />
      <Feather
        src="/assets/images/feathers/blog-page/4.png"
        style={{ top: "20%", right: "4%" }}
        animate={{ top: "-100%", right: "-100%" }}
      />
      <Feather
        src="/assets/images/feathers/blog-page/5.png"
        style={{ top: "70%", right: "10%" }}
        animate={{ top: "170%", right: "-100%" }}
      />
      <WhiteBg
        long
        style={{ top: "10%", left: "10%" }}
      />
      <WhiteBg
        long
        style={{ top: "30%", left: "10%" }}
      />
      <WhiteBg
        long
        style={{ top: "50%", left: "10%" }}
      />
      <WhiteBg
        style={{ top: "10%", left: "0" }}
      />
      <WhiteBg
        style={{ bottom: "0", left: "0" }}
      />
      <WhiteBg
        style={{ bottom: "0", right: "0", transform: "rotate(180deg)" }}
      />
      <WhiteBg
        style={{ top: "0", right: "0", transform: "rotate(180deg)" }}
      />
      <WhiteBg
        style={{ bottom: "-15%", left: "10%", transform: "rotate(-90deg)" }}
      />
      <WhiteBg
        style={{ bottom: "-15%", right: "0%", transform: "rotate(-90deg)" }}
      />
      <WhiteBg
        style={{ top: "-15%", right: "0", transform: "rotate(90deg)" }}
      />
      <WhiteBg
        style={{ top: "-15%", left: "10%", transform: "rotate(90deg)" }}
      />
    </>
  )
}
