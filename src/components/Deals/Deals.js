import Slider from 'react-slick';
import {Link} from "react-router-dom";
import usestore from '../../store/store';
import './Deals.scss'



function Deals() {
  const dealsData = usestore(state => state.dealData)
  const addCart = usestore(state => state.addCard)

  const dealSetting = {
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 1,
  }

  return (
    <section className='deals'>
      <div className='container'>
        <div className='deals__inner'>
          <div className='deals__left'>
            <div className='deals__head d-flex justify-content-between'>
              <h3>Deal of the Day</h3>
              <div>
                <span className='me-5'>Prev Deal</span>
                <span>Next Deal</span>
              </div>
            </div>

            <ul className='deals__list'>
              <Slider {...dealSetting}>
                {dealsData.map(item => (
                  <li key={item.id} className='deals__item d-flex'>
                    <Link to={`DealInner/${item.id}`}>
                      <img src={item.image} alt={item.name} width='326' height='358' />
                    </Link>
                    <div className='ms-4 w-100'>
                      <h5>{item.type}</h5>
                      <h4>{item.name}</h4>
                      <del>${item.oldPrice}.00</del>
                      <span className='deals__price'>${item.newPrice}.00</span>
                      <ul className='deals__time d-flex mb-3'>
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
                      <div className='deals__info d-flex justify-content-between align-items-center'>
                        <p className='m-0'>Already Sold: <span>{item.sold}</span> </p>
                        <p className='m-0'>Available: <span className='text-dark'>{item.available}</span> </p>
                      </div>
                      <div className='deals__amount'>
                        <span className='deals__fill'></span>
                      </div>
                      <button 
                       data-bs-toggle="offcanvas"
                       data-bs-target="#offcanvasRight"
                       aria-controls="offcanvasRight"
                       onClick={() => addCart(item.id)} 
                       className='deals__add'>Add to cart</button>
                    </div>
                  </li>
               ))}
               </Slider>
            </ul>
          </div>
          <div className='deals__right'>
            <ul>
              {dealsData.map(item => {
                return (
                  <li key={item.id} className='deals__right-item d-flex'>
                    <img src={item.image} alt={item.name} width='73' height='80' />
                    <div>
                      <p className='m-0'>{item.name}</p>
                      <del>${item.oldPrice}.00</del>
                      <span className='deals__price'>${item.newPrice}.00</span>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Deals





