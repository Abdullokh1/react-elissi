import React from 'react'

function WishListModal() {
  return (
    <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasRight2" aria-labelledby="offcanvasRightLabel2">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasRightLabel">Wishlist</h5>
        <button type="button" className='offcanvas-close' data-bs-dismiss="offcanvas" aria-label="Close">
          <i className='bx bx-chevron-right' ></i>
        </button>
      </div>
      <div className="offcanvas-body">
        
      </div>
    </div>
  )
}

export default WishListModal