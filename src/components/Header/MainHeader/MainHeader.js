import React, { useState } from "react";
import "./MainHeader.scss";
import mainLogo from "../../../assets/Images/main-logo.png";
import { Link } from "react-router-dom";
import CartModal from "./CartModal";
import WishListModal from "./WishListModal";
import useStore  from  '../../../store/store';


function MainHeader() {
  let [searchText, setSearchText] = useState('')
  const isAdded = useStore(state => state.isAdded)
  const prodData = useStore(state => state.productData)
  const myCard = useStore(state => state.myCartObj)
  const wishlist = useStore(state => state.wishlist)

  const searchHandler = (e) =>{
    setSearchText(e.target.value)
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <div>
            <Link to="/">
              <img src={mainLogo} alt="main-logo" width={120} height={30} />
            </Link>
          </div>

          <div className="header__input-wrapper">
            <input
             onChange={searchHandler}
              type="text"
              className="header__input"
              placeholder="I'm shopping for ..."
            />
            <button className="header__search">
              <span>Search</span>
              <i className="bx bx-search"></i>
            </button>
          </div>

          <div>
            <div className="header__btn-wrap">
              <button
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRight"
                aria-controls="offcanvasRight"
                className="header__buttons"
              >
                <i className="bx bx-shopping-bag" />
                {myCard.length === 0 ? '' : <span className="header__bag-badge">{myCard.length}</span>} 
              </button>
              <button
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRight2"
                aria-controls="offcanvasRight2"
                className="header__buttons"
              >
                <i className="bx bx-heart" />
              </button>
              <button className="header__buttons">
                <i className="bx bx-refresh" />
               {wishlist.length === 0 ? '' : <span className="header__wishlist-badge">{wishlist.length}</span>} 
              </button>
            </div>

            <CartModal />
            <WishListModal/>
          </div>
        </div>
        <ul >
          {
            prodData.map((item, index) => {
              if(searchText === '') {
                return
              }
              if(item.name.toLowerCase().includes(searchText.toLowerCase())) {
                return(
                  <li key={index*55} className='header__searchBox'>
                    <Link className='d-flex' to={`ProductInner/${item.id}`}>
                      <div>
                        <img src={item.images[0]} alt={item.name} width='70' height='70' />
                      </div>
                      <div className="ms-3">
                        <h3>{item.name}</h3>
                        <del className="me-2">${item.oldPrice}.00</del>
                        <span>${item.priceTo}.00</span>
                      </div>
                    </Link>
                  </li>
                )
              }
            })
          }
          </ul>
      </div>
    </header>
  );
}

export default MainHeader;
