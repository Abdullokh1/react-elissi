import React from 'react'
import './Products.scss'
import useStore  from '../../store/store'
import filterIcons from '../FilterIcons'
import { Link } from "react-router-dom";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

function Products() {
  const productData = useStore(state => state.productData)
  let filterBtn = [...new Set(productData.map(item => item.type))]

  return(
    <section className="fproducts">
      <div className="container">
        <div className="fproducts__boxs">
          <h2 className="fproducts__title">Featured Products</h2>
          <ul className='fproducts__filters d-flex'>
            {filterIcons.map(item =>{
               return (
                <>
                <li>
                  <i className={item}></i>
                </li>
                </>
               ) 
            })}
        

          </ul>
        </div>
        <ul className="fproducts__list">
          {
            productData.map((item, index) => {
              if(item.type === 'fruits') {
                return(
                  <li key={index+45} className="fproducts__item">
                    <Link className="fproducts__link" to='/'>
                      <div className="fproducts__realative">
                      <Splide
                          options={{
                          perPage: 1,
                          arrows: true,
                          pagination: false,
                          drag: 'free',
                        }}>
                          <SplideSlide>
                            <div className="fproducts__imgbox">
                              <img src={item.images[0]} alt="product-img" />
                            </div>
                          </SplideSlide>
                            <SplideSlide>
                              <div className="fproducts__imgbox">
                                <img src={item.images[1]} alt="product-img" />
                              </div>
                            </SplideSlide>
                      </Splide>
                          <button className="fproducts__hbtn"><i className='bx bx-heart'></i></button>
                          <div className="fproducts__mbox">
                            <button className="fproducts__mbtn"><i className='bx bx-shopping-bag'></i></button>
                            <button data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight1" aria-controls="offcanvasRight" className="fproducts__mbtn"><i className='bx bx-low-vision'></i></button>
                            <button className="fproducts__mbtn"><i className='bx bx-refresh'></i></button>
                          </div>
                        </div>
                      <div className="fproducts__box">
                        <h3 className="fproducts__subtitle">{item.name}</h3>
                        <div className="fproducts__dflex">
                          <p className="fproducts__price"> <del>${item.priceFrom}</del> ${item.priceTo}</p>
                          <div className="fproducts__kgbox">
                            <button className="fproducts__kgbtn">1<br/> kg</button>
                            <button className="fproducts__kgbtn">500<br/>g</button>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </li>
                )
              }
            })
          }
        </ul>
      </div>
    </section>
  )
}

export default Products



    // <section className='products'>
    //   <div className='container'>
    //     <h4 className='products__title text-center'>Featured Products</h4>
    //     <ul className='products__filter-list d-flex justify-content-center'>
    //       <li className='products__item'>
    //         {filterIcons.map(item =>{
    //           return (
    //             <div className='products__inner d-flex flex-column'>
    //               <i className={item}></i>
    //             </div>
    //           )
    //           {filterBtn}
    //         })}
    //       </li>
    //     </ul>
    //     <ul>
    //       {productData.map(item =>{
    //         if(item.type === 'fruits'){
    //           return (
    //             <li>
    //               {item.name}
    //               {item.images.map(img =>{
    //                 return <img src={img} alt={item.name} width='280' height='308' />
    //               })}
    //             </li>
    //           )
    //         }
    //       })}
    //     </ul>

    //   </div>
    // </section>