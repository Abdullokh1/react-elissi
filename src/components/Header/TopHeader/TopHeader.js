import React from 'react'
import './TopHeader.scss'
import english from '../../../assets/Images/english.png'
import german from '../../../assets/Images/german.png'
import france from '../../../assets/Images/france.png'


function TopHeader() {
  return (
    <div className='top-nav'>
      <div className='top-nav__wrapper container d-flex align-items-center'>
        <i className='bx bx-news me-1'></i>
        <p className='top-nav__text m-0'>Add anything here or just remove it..</p>

        <div className='top-nav__list d-flex align-items-center'>
          <div className='top-nav__dropdown me-4'>
            <img src={english} alt="eng-flag"/>
            <p className='top-nav__eng m-0 ms-1'>English</p>

            <ul className='top-nav__lang-box'>
              <li className='d-flex align-items-center'>
                <img src={german} alt="german-flag"/>
                <p className='m-0 ms-1'>Deutsch</p>
              </li>

              <li className='d-flex align-items-center'>
                <img src={france} alt="france-flag"/>
                <p className='m-0 ms-1'>Francais</p>
              </li>

              <li className='d-flex align-items-center'>
                <p className='m-0 ms-1'>Requires WPML</p>
              </li>
            </ul>
          </div>

          <div className='top-nav__dropdown top-nav__dropdown-currency me-4'>
            <p className='top-nav__eng m-0 ms-1'>US Dollar</p>

            <ul className='top-nav__lang-box top-nav__currency'>
              <li className='d-flex align-items-center'>
                <p className='m-0 ms-1'>Euro (Euro)</p>
              </li>

              <li className='d-flex align-items-center'>
                <p className='m-0 ms-1'>India Rupee (INR)</p>
              </li>

              <li className='d-flex align-items-center'>
                <p className='m-0 ms-1'>Pount (GBR)</p>
              </li>
            </ul>
          </div>

          <div>
            <button className='top-nav__login'><i className='bx bx-user-circle'></i> Login / Register</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopHeader