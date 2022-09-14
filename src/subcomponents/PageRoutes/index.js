import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

export default function PageRoutes({ routes }) {
  return (
    <ul data-aos="fade-right" className='app__routes'>
      {routes.map((route, i) => (
        <Fragment key={i}>
          <li className='app__route'>
            {route.link ? (
              <Link to={route.link}>
                {route.name}
              </Link>
            ) : route.name}
          </li>
          {routes.length - 1 !== i ? <li>&#62;</li> : null}
        </Fragment>
      ))}
    </ul>
  )
}
