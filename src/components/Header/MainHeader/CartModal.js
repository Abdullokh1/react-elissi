import React from 'react'
import usestore from '../../../store/store'

function CartModal() {
    const cards = usestore(state => state.items)

    console.log(cards);
  
  return (
    <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasRightLabel">My Cart</h5>
        <button type="button" className='offcanvas-close' data-bs-dismiss="offcanvas" aria-label="Close">
          <i className='bx bx-chevron-right' ></i>
        </button>
      </div>
      <div className="offcanvas-body">
        <ul>
          {cards.map(item =>{
            return (
              <li key={item.id}>
                <p>{item.name}</p>
                <span>{item.newPrice}</span>
               2
              </li>
            )
          })}
        </ul>
      </div>
    </div>
)
}



export default CartModal