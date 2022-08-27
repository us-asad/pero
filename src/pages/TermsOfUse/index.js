import React from 'react'
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

          Freiberuflichkeit ist in diesem Zusammenhang also nicht wirtschaftlich zu verstehen.

          Es geht um die freie medizinische oder auch psychotherapeutische Entscheidung. Die Zuwendung zu Patientinnen und Patienten ist durch keine Interessen Dritter gestört. Erst dadurch ist die vertrauliche Arzt-Patienten-Beziehung möglich. Die Freiberuflichkeit ist somit auch ein besonderes Privileg für die Patientinnen und Patienten, das es zu schützen gilt.
        </p>
        <h2 className='termsofuse__title'>Sotib olish shartlari</h2>
        <p className='termsofuse__content'>
          Freiberuflichkeit ≠ Selbstständigkeit
          Freiberuflichkeit bedeutet, dass die Ärztin und der Arzt oder die Psychotherapeutin und der Psychotherapeut weisungsunabhängig ist.

          Freiberuflichkeit ist in diesem Zusammenhang also nicht wirtschaftlich zu verstehen.

          Es geht um die freie medizinische oder auch psychotherapeutische Entscheidung. Die Zuwendung zu Patientinnen und Patienten ist durch keine Interessen Dritter gestört. Erst dadurch ist die vertrauliche Arzt-Patienten-Beziehung möglich. Die Freiberuflichkeit ist somit auch ein besonderes Privileg für die Patientinnen und Patienten, das es zu schützen gilt.
        </p>
      </div>
    </section>
  )
}
