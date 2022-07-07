import React from 'react'
import './Category.scss'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import usestore from '../../store/store';

function Category() {
  const category = usestore(state => state.categoryData)
  
  const settings = {
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 6,
    speed: 500,
    autoplay: true,
  }

  return (
    <section className='categories'>
      <div className='container'>
        <h3 className='text-center mb-4'>Top Categories</h3>
        <ul className='categories__list'>
          <Slider {...settings}>
              {category.map((item, i) => (
                <li key={i} className='text-center'>
                  <img className='categories__img' src={item.img} alt={item.name} />
                  <h4>{item.name}</h4>
                </li>
              ))}
          </Slider>
        </ul>
      </div>
    </section>
  )
}

export default Category