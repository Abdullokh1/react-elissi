import React from 'react'
import './Advertisement.scss'
import advert1 from '../../assets/Images/advert-1.jpg'
import advert2 from '../../assets/Images/advert-2.jpg'
import advert3 from '../../assets/Images/advert-3.jpg'



function Advertisement() {
  return (
    <section className='advertisement'>
      <div className='container'>
        <ul className='advertisement__list'>
          <li>
            <div className='advertisement__imgWrap'>
              <img src={advert1} alt="advertImg" width='380' height='212' />
              <div className='advertisement__content'>
                <h4>Joobie <br/> Ice Cream</h4>
                <p>Sales off <span className='text-danger'>25%</span> </p>
                <button>Shop now</button>
              </div>
            </div>
          </li>
          <li>
            <div className='advertisement__imgWrap'>
              <img src={advert2} alt="advertImg" width='380' height='212' />
              <div className='advertisement__content'>
                <h4>Fresh <br/> Guava Juice</h4>
                <button>Shop now</button>
              </div>
            </div>
          </li>
          <li>
            <div className='advertisement__imgWrap'>
              <img src={advert3} alt="advertImg" width='380' height='212' />
              <div className='advertisement__content'>
                <h4>Fresh <br/> Vegetables</h4>
                <button>Shop now</button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Advertisement