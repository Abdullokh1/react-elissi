import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import sponsors from '../SponsorsData'
import './Sponsors.scss'

function Sponsors() {
  const settings = {
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 6,
    speed: 500,
    autoplay: true,
  }

  return (
    <section className='sponsor'>
      <div className='container'>
        <ul className='sponsor__list'>
          <Slider {...settings}>
            {sponsors.map((item, i) =>{
              return (
                <li key={i}>
                  <img src={item} alt='sponsor-img' />
                </li>
              ) 
            })}
          </Slider>
        </ul>
      </div>
    </section>
  )
}

export default Sponsors