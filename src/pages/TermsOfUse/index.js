import React from 'react'
import { Feather, WhiteBg } from 'subcomponents';
import "./index.css";

const routes = ["Home page", ">", "our products", ">", "foydalanish shartlari"]

export default function TermsOfUse() {
  return (
    <section className='termsofuse'>
      <div className="container px-normal">
        <div className='app__title-container'>
          <h2 className='app__title'>Foydalanish shartlari</h2>
          <span className='app__span'>последняя обновления : 21.05</span>
        </div>
        <ul className='app__routes'>
          {routes.map((route, i) => (
            <li key={i} className="app__route">
              {route}
            </li>
          ))}
        </ul>
        <p className='termsofuse__content'>
          Freiberuflichkeit ≠ Selbstständigkeit
          Freiberuflichkeit bedeutet, dass die Ärztin und der Arzt oder die Psychotherapeutin und der Psychotherapeut weisungsunabhängig ist.
        </p>
        <p className='termsofuse__content'>
          Freiberuflichkeit ist in diesem Zusammenhang also nicht wirtschaftlich zu verstehen.
        </p>
        <p className='termsofuse__content'>
          Es geht um die freie medizinische oder auch psychotherapeutische Entscheidung. Die Zuwendung zu Patientinnen und Patienten ist durch keine Interessen Dritter gestört. Erst dadurch ist die vertrauliche Arzt-Patienten-Beziehung möglich. Die Freiberuflichkeit ist somit auch ein besonderes Privileg für die Patientinnen und Patienten, das es zu schützen gilt.
        </p>
        <h2 className='termsofuse__title app__title'>Sotib olish shartlari</h2>
        <p className='termsofuse__content' style={{marginTop: "40px"}}>
          Freiberuflichkeit ≠ Selbstständigkeit
          Freiberuflichkeit bedeutet, dass die Ärztin und der Arzt oder die Psychotherapeutin und der Psychotherapeut weisungsunabhängig ist.
        </p>
        <p className='termsofuse__content'>
          Freiberuflichkeit ist in diesem Zusammenhang also nicht wirtschaftlich zu verstehen.
        </p>
        <p className='termsofuse__content'>
          Es geht um die freie medizinische oder auch psychotherapeutische Entscheidung. Die Zuwendung zu Patientinnen und Patienten ist durch keine Interessen Dritter gestört. Erst dadurch ist die vertrauliche Arzt-Patienten-Beziehung möglich. Die Freiberuflichkeit ist somit auch ein besonderes Privileg für die Patientinnen und Patienten, das es zu schützen gilt.
        </p>
      </div>
      <Feather
        src="/assets/images/feathers/terms-of-use/1.png"
        alt="Feather"
        style={{bottom: "5%", left: "5%"}}
        animate={{bottom: "-100%", left: "-100%"}}
      />
      <Feather
        src="/assets/images/feathers/terms-of-use/2.png"
        alt="Feather"
        style={{top: "50%", left: "3%", transform: "translateY(-50%)"}}
        animate={{top: "-100%", left: "100%"}}
      />
      <Feather
        src="/assets/images/feathers/terms-of-use/3.png"
        alt="Feather"
        style={{top: "7%", left: "6%"}}
        animate={{top: "-100%", left: "-100%"}}
      />
      <Feather
        src="/assets/images/feathers/terms-of-use/4.png"
        alt="Feather"
        style={{top: "8%", right: "2%"}}
        animate={{top: "-100%", right: "-100%"}}
      />
      <Feather
        src="/assets/images/feathers/terms-of-use/5.png"
        alt="Feather"
        style={{top: "50%", right: "10%", transform: "translate(-50%"}}
        animate={{top: "150%", right: "-100%"}}
      />
      <Feather
        src="/assets/images/feathers/terms-of-use/6.png"
        alt="Feather"
        style={{bottom: "20%", right: "15%"}}
        animate={{bottom: "100%", right: "-100%"}}
      />
      <WhiteBg
        long
        style={{top: "10%", left: "10%"}}
      />
      <WhiteBg
        long
        style={{top: "30%", left: "10%"}}
      />
      <WhiteBg
        long
        style={{top: "50%", left: "10%"}}
      />
      <WhiteBg
        style={{top: "10%", left: "0"}}
      />
      <WhiteBg
        style={{bottom: "0", left: "0"}}
      />
      <WhiteBg
        style={{bottom: "0", right: "0", transform: "rotate(180deg)"}}
      />
      <WhiteBg
        style={{top: "0", right: "0", transform: "rotate(180deg)"}}
      />
      <WhiteBg
        style={{bottom: "-15%", left: "10%", transform: "rotate(-90deg)"}}
      />
      <WhiteBg
        style={{bottom: "-15%", right: "0%", transform: "rotate(-90deg)"}}
      />
      <WhiteBg
        style={{top: "-15%", right: "0", transform: "rotate(90deg)"}}
      />
      <WhiteBg
        style={{top: "-15%", left: "10%", transform: "rotate(90deg)"}}
      />
    </section>
  )
}
