import React, { useEffect, useState } from 'react'
import usestore from '../../../store/store'
import { useLocation } from 'react-router-dom';
import {Link} from "react-router-dom";
import './ProductInner.scss'
import Footer from '../../Footer/Footer';
import dealHero from '../../../assets/Images/deal-hero.jpg'
import fire from '../../../assets/Images/fire.png'
import dealAdvert from '../../../assets/Images/deal-advert.png'

function ProductInner() {
  const mainData = usestore(state => state.productData)
  const addCart = usestore(state => state.addCard)
  const addWishlist = usestore(state => state.addWishlist)
  let [count, setCount] = useState(1)
  let [isLiked, setLiked] = useState(false)
  let location = useLocation()


  return (
    <section className='deals-inner'>
      {mainData.map(item =>{
        if(item.id === +location.pathname.split('/').at(-1)){
          return(
            <div key={item.id}>
              <div className='deals-inner__imgWrap'>
                <img src={dealHero} className='deals-inner__img' alt='deal-hero' height='150' />
                <div className='deals-inner__content text-center'>
                    <p className='m-0 deals-inner__title'>{item.name}</p>
                    <div className='d-flex'>
                      <Link to='/' className='deals-inner__home d-flex align-items-center'>
                      <p className='m-0'>Home</p>
                      </Link>
                      <i className='bx text-dark bx-chevron-right me-3'></i>
                      <span>
                        Organic 
                      </span>
                      <i className='bx text-dark bx-chevron-right'></i>
                      <span className='d-flex align-items-center'>
                        Vegetables 
                      </span>
                      <i className='bx text-dark bx-chevron-right'></i>
                      <span className='d-flex align-items-center'>
                        Daily Vegetables 
                      </span>
                      <i className='bx text-dark bx-chevron-right'></i>
                    </div>
                </div>
              </div>
              <div className='container'>
                <div className='fruit-info mt-4'>
                  <div>
                    <div className='fruit-info__imgWrap'>
                      <img className='fruit-info__img' src={item.images[0]} alt={item.name} width='484' height='533'/>
                      <div className='fruit-info__btnWrap'>
                        <button onClick={() => addWishlist(item)} data-bs-toggle="tooltip" data-bs-placement="right" title="Wishlist">
                          <i className={`${item.like ? 'bx bxs-heart' : 'bx bx-heart'}`} ></i>
                        </button>
                        <button>
                          <i className='bx bx-refresh' ></i>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className='fruit-info__right'>
                    <h4>{item.name}</h4>
                    <del>${item.priceFrom}.00</del>
                    <span>${item.priceTo}.00</span>
                    <div className='d-flex'>
                      <img className='fruit-info__fire' src={fire} alt="fire" width='18' height='18' />
                      <p className='fruit-info__sold'>{item.soldCount}</p>
                    </div>
                    <p>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.</p>
                    <div className='d-flex align-items-center'>
                      <i className='bx bx-timer'></i>
                      <p className='fruit-info__sale m-0'>Hurry up! Sale end in:</p>
                    </div>
                    <ul className='deals__time fruit-info__list d-flex mb-3'>
                      <li>
                        <span>179</span>
                        <p>Days</p>
                      </li>
                      <li>
                        <span>03</span>
                        <p>Hours</p>
                      </li>
                      <li>
                        <span>19</span>
                        <p>Mins</p>
                      </li>
                      <li>
                        <span>59</span>
                        <p>Secs</p>
                      </li>
                    </ul>

                    <div className='deals__info mb-2'>
                      <p className='m-0'>Only <span className='fs-6 m-0'>{item.StockCount}</span> item (s) left in stock </p>
                    </div>
                    <div className='deals__amount fruit-info__amount'>
                      <span className='deals__fill fruit-info__dealFill'></span>
                    </div>
                    <div className='d-flex align-items-center mb-5'>
                      <input className='fruit-info__input' type="text" placeholder={count < 1 ? count = 1 : count}/>
                      <div>
                        <button onClick={() => setCount(count+1)} className='fruit-info__addBts'>+</button>
                        <button onClick={() => setCount(count-1)} className='fruit-info__addBts'>-</button>
                      </div>
                      <button 
                        className='fruit-info__main-btns'
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasRight"
                        aria-controls="offcanvasRight"
                        onClick={() => addCart(item)} 
                      >
                        Add to cart
                      </button>
                      <button className='fruit-info__main-btns'>Buy now</button>
                    </div>

                    <div className='fruit-info__about d-flex mb-2'>
                      <div className='d-flex align-items-center me-4'>
                        <i className='bx bx-exit me-2'></i>
                        <p className='m-0'>Delivery & Return</p>
                      </div>
                      <div className='d-flex align-items-center'>
                        <i className='bx bx-question-mark me-2'></i>
                        <p className='m-0'>Ask a Question</p>
                      </div>
                    </div>

                    <div className='d-flex align-items-center me-4  mb-2'>
                      <i className='bx bxs-truck me-2' ></i>
                      <p className='m-0'>Estimated Devlivery: July 09 - July 13</p>
                    </div>

                    <div className='d-flex align-items-center me-4 mb-3'>
                      <i className='bx bx-smile me-2' ></i>
                      <p className='m-0'> <strong>{item.view} people </strong> are viewing this right now</p>
                    </div>

                    <div className='d-flex align-items-center me-4 mb-4'>
                      <i className='bx bx-share-alt me-2' ></i>
                      <p className='m-0 me-5'>Share</p>

                      <ul className='fruit-info__socialMedia d-flex'>
                        <li>
                          <a data-bs-toggle="tooltip" data-bs-placement="top" title="Share on Twitter" href="#" >
                            <i className='bx bxl-twitter' ></i>
                          </a>
                        </li>
                        <li>
                          <a data-bs-toggle="tooltip" data-bs-placement="top" title="Share on Facebook" href="#">
                            <i className='bx bxl-facebook' ></i>
                          </a>
                        </li>
                        <li>
                          <a data-bs-toggle="tooltip" data-bs-placement="top" title="Share on Telegram" href="#">
                            <i className='bx bxl-telegram' ></i>
                          </a>
                        </li>
                        <li>
                          <a data-bs-toggle="tooltip" data-bs-placement="top" title="Share on Vk" href="#">
                            <i className='bx bxl-vk' ></i>
                          </a>
                        </li>
                        <li>
                          <a data-bs-toggle="tooltip" data-bs-placement="top" title="Email to your friends" href="#">
                            <i className='bx bx-envelope' ></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                      <img src={dealAdvert} alt="advert" width='494' height='47' />
                  </div>
                </div>
              </div>
            </div>
          )
        }
      })}
      <Footer/>
  </section>
  )
}

export default ProductInner