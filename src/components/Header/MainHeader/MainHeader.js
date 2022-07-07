import React from "react";
import "./MainHeader.scss";
import mainLogo from "../../../assets/Images/main-logo.png";
import { Link } from "react-router-dom";
import CartModal from "./CartModal";
import WishListModal from "./WishListModal";
import useStore  from  '../../../store/store';


function MainHeader() {

  const isAdded = useStore(state => state.isAdded)

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
                <span style={{display: isAdded ? 'block' : 'none'}} className="header__bag-badge">1</span>
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
              </button>
            </div>

            <CartModal />
            <WishListModal/>
          </div>
        </div>
      </div>
    </header>
  );
}

export default MainHeader;
