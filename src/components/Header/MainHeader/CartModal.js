import React, { useState } from 'react'
import './CartModal.scss'
import {Link} from "react-router-dom";
import usestore from '../../../store/store'

function CartModal() {
    const cards = usestore(state => state.mycardObj)
    const removeHandle = usestore(state => state.removeHandle)

    let [addItem, setAddItem] = useState(1)

    
  
  return (
    <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasRightLabel">My Cart</h5>
        <button type="button" className='offcanvas-close' data-bs-dismiss="offcanvas" aria-label="Close">
          <i className='bx bx-chevron-right' ></i>
        </button>
      </div>
      <div className="offcanvas-body p-5 pb-2 pt-2">
        <ul className='added-cards'>
          {cards.map(item =>{
            return (
              <li key={item.id} className='d-flex align-items-start'>
                <img src={item.image} alt={item.name} width='85' height='87' />
                <div className='ms-3 flex-grow-1'>
                  <h5>{item.name}</h5>
                  <div className='d-flex align-items-center'>
                    <input className='fruit-info__input' type="text" placeholder={addItem < 1 ? addItem = 1 : addItem}/>
                    <div>
                      <button onClick={ () => setAddItem(addItem+1)} className='fruit-info__addBts'>+</button>
                      <button onClick={() => setAddItem(addItem-1)} className='fruit-info__addBts'>-</button>
                    </div>
                   <p className='ms-3 flex-grow-1 mb-0'>x ${item.newPrice}.00</p>
                  <p className='m-0 added-cards__price'>${item.newPrice}.00</p>
                  </div>
                </div>
                <button onClick={() => removeHandle(item.id)}>
                  <i className='bx text-grey fs-4 bx-x'></i>
                </button>
              </li>
            )
          })}
        </ul>
          <ul className='delivery d-flex justify-content-evenly'>
            <li className='text-center'>
              <i className='bx bxs-edit'></i>
              <p>Note</p>
            </li>
            <li className='text-center'>
              <i className='bx bxs-truck'></i>
              <p>Shipping</p>
            </li>
            <li className='text-center'>
              <i className='bx bxs-coupon'></i>
              <p>Coupon</p>
            </li>
          </ul>

          <div className='order-total pt-3'>
            <div className='d-flex'>
              <div className='flex-grow-1'>
                <h5 className='mb-1'>Subtotal</h5>
                <p>Shipping</p>
              </div>
              <div className='text-right'>
                <p className='m-0'>Flat Rate: $19.00</p>
              </div>  
            </div>
          </div>
          <div className='d-flex justify-content-between mt-3'>
            <h5>Total</h5>
            <p className='total-price'>$22.00</p>
          </div>
          <input type="range" className='w-100' />
          <p className='text-center advert-text'>
            Spend <span className='text-success'>$178.00</span>  more to reach FREE SHIPPING!
          </p>
          <div className='checkout-btnWrap d-flex flex-column'>
            <button>View cart</button>
            <button>Checkout</button> 
          </div>
      </div>
    </div>
)
}



export default CartModal