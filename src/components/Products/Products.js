import React, { useState } from "react";
import "./Products.scss";
import useStore from "../../store/store";
import { Link } from "react-router-dom";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import category from "../CategoriesData";
import usestore from "../../store/store";

function Products() {
  const addWishlist = usestore((state) => state.addWishlist);
  const productData = usestore((state) => state.productData);
  const filterHandler = usestore((state) => state.filterHandler);
  const [filterActive, setFilterActive] = useState(category);
  const addCard = usestore(state => state.addCard)

  const [filter, setFilter] = useState("fruits");

  const filterAct = (e) => {
    filterActive.map((item) =>
      item.name === e ? (item.active = true) : (item.active = false)
    );
    setFilter(e);
  };

  return (
    <section className="fproducts">
      <div className="container">
        <div className="fproducts__boxs">
          <h2 className="fproducts__title">Featured Products</h2>
          <ul className="fproducts__filters d-flex">
            {filterActive.map((item, i) => {
              return (
                <li
                  onClick={() => filterAct(item.name)}
                  className={`${item.active === true ? "active-filter" : ""}`}
                  key={i}
                >
                  <i className={item.icon}></i>
                  <button
                    style={{ color: item.active === true ? "#000" : "#aaa" }}
                    onClick={() => filterHandler(item.name)}
                  >
                    {item.name}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
        <ul className="fproducts__list">
          {productData.map((item, index) => {
            if (item.type === filter) {
              return (
                <li key={index * 20} className="fproducts__item">
                  <div className="fproducts__realative">
                    <Splide
                      options={{
                        perPage: 1,
                        arrows: true,
                        pagination: false,
                        drag: "free",
                      }}
                    >
                      <SplideSlide>
                        <div className="fproducts__imgbox">
                          <Link
                            className="fproducts__link"
                            to={`/ProductInner/${item.id}`}
                          >
                            <img src={item.images[0]} alt="product-img" />
                          </Link>
                        </div>
                      </SplideSlide>
                      <SplideSlide>
                        <div className="fproducts__imgbox">
                          <Link
                            className="fproducts__link"
                            to={`/ProductInner/${item.id}`}
                          >
                            <img src={item.images[1]} alt="product-img" />
                          </Link>
                        </div>
                      </SplideSlide>
                    </Splide>
                    <button
                      onClick={() => addWishlist(item)}
                      className="fproducts__hbtn"
                    >
                    <i className={`${item.like ? 'bx text-danger bxs-heart' : 'bx bx-heart'}`} ></i>
                    </button>
                    <div className="fproducts__mbox">
                      <button className="fproducts__mbtn"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasRight"
                        aria-controls="offcanvasRight"
                        onClick={() => addCard(item)} 
                      >
                        <i className="bx bx-shopping-bag"></i>
                      </button>
                      <button
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasRight1"
                        aria-controls="offcanvasRight"
                        className="fproducts__mbtn"
                      >
                        <i className="bx bx-low-vision"></i>
                      </button>
                      <button className="fproducts__mbtn">
                        <i className="bx bx-refresh"></i>
                      </button>
                    </div>
                  </div>
                  <div className="fproducts__box">
                    <h3 className="fproducts__subtitle">{item.name}</h3>
                    <div className="fproducts__dflex">
                      <p className="fproducts__price">
                        {" "}
                        <del>${item.priceFrom}</del> ${item.priceTo}
                      </p>
                      <div className="fproducts__kgbox">
                        <button className="fproducts__kgbtn">
                          1<br /> kg
                        </button>
                        <button className="fproducts__kgbtn">
                          500
                          <br />g
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              );
            }
          })}
        </ul>
      </div>
    </section>
  );
}

export default Products;
