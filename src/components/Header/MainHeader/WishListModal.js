import React from 'react'
import usestore from '../../../store/store'

function WishListModal() {
  const wishlist = usestore(state => state.wishlist)
  const removeWishlist = usestore(state => state.removeWishlist)


  return (
    <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasRight2" aria-labelledby="offcanvasRightLabel2">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasRightLabel">Wishlist</h5>
        <button type="button" className='offcanvas-close' data-bs-dismiss="offcanvas" aria-label="Close">
          <i className='bx bx-chevron-right' ></i>
        </button>
      </div>
      {wishlist.length == 0 ? '' : 
      <div className="offcanvas-body p-5 pb-2 pt-2">
        <ul className='added-cards'>
          {wishlist.map(item =>{
            return (
              <li key={item.id} className='d-flex align-items-start'>
                <img src={item.images[0]} alt={item.name} width='85' height='87' />
                <div className='ms-3 flex-grow-1'>
                  <h5>{item.name}</h5>
                  <div className='d-flex align-items-center'>
                  <del className='ms-1 text-secondary me-2 mb-0'>${item.priceFrom}.00</del>
                  <p className='m-0 added-cards__price'>
                    ${item.priceTo}.00 - <span className='text-success ,s-3'>{item.StockCount} in stock</span>
                  </p>
                  </div>
                </div>
                <button onClick={() => removeWishlist(item)}>
                  <i className='bx text-grey fs-4 bx-x'></i>
                </button>
              </li>
            )
          })}
        </ul>
      </div>
      } 
        
      </div>
  )
}

export default WishListModal