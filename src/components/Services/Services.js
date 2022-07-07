import React from 'react'
import './Service.scss'

function Services() {
  const serviceData = [
    {
      icon: 'bx bxs-plane-alt ',
      title: 'Free Shipping',
      text: 'Free Shipping for all US order',
    },
    {
      icon: 'bx bx-headphone',
      title: 'Support 24/7',
      text: 'We support 24h a day',
    },
    {
      icon: 'bx bx-refresh',
      title: '100% Money Back',
      text: 'You have 30 days to Return',
    },
    {
      icon: 'bx bx-gift',
      title: 'Payment Secure',
      text: 'We ensure secure payment',
    },
  ]
  return (
    <section className='service'>
      <div className='container'>
        <ul className='sevice__list'>
          {serviceData.map((item, i) =>(
            <li key={i} className='service__item'>
              <i className={item.icon}></i>
              <h3>{item.title}</h3>
              <p>{item.text}</p>

            </li>
          ))}
        </ul>

      </div>
    </section>
  )
}

export default Services





