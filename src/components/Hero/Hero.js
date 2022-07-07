import React from "react";
import "./Hero.scss";
import Navbar from "../Navbar/Navbar";
import heroImg1 from "../../assets/Images/hero-img-1.jpg";
import heroImg2 from "../../assets/Images/hero-img-2.jpg";
import heroImg3 from "../../assets/Images/hero-img-3.jpg";

function Hero() {
  const iconsData = [
    {
      icon: "bx bx-lemon me-2",
      text: "Fruits",
      rightIcon: "bx bx-chevron-right",
    },
    {
      icon: "bx bxs-baguette me-2",
      text: "Vegatables",
      rightIcon: "bx bx-chevron-right",
    },
    {
      icon: "bx bxs-drink me-2",
      text: "Drinks",
      rightIcon: "bx bx-chevron-right",
    },
    {
      icon: "bx bxs-bowl-rice me-2",
      text: "Butter & Egges",
    },
    {
      icon: "bx bxs-tree-alt me-2",
      text: "Trees",
    },
    {
      icon: "bx bx-cake me-2",
      text: "Cakes",
    },
    {
      icon: "bx bxs-capsule me-2",
      text: "Meats",
    },
    {
      icon: "bx bxl-flask me-2",
      text: "Fish",
    },
    {
      icon: "bx bxl-mongodb me-2",
      text: "Grapes",
    },
    {
      icon: "bx bxl-mongodb me-2",
      text: "Potatos",
    },
  ];

  return (
    <section className="hero">
      <div className="hero__wrapper">
        <div className="container">
          <div className="hero__inner d-flex">
            <div className="hero__catagory category">
              <div className="category__title d-flex align-items-center">
                <i className="bx me-2 bx-menu"></i>
                <p className="m-0">BROWSE CATEGORIES</p>
              </div>

              <ul className="hero__list">
                {iconsData.map((item, i) => (
                  <li key={i} className="d-flex  justify-content-between">
                    <div className="hero__list-wrap d-flex align-items-center">
                      <i className={item.icon}></i>
                      <p className="m-0">{item.text}</p>
                    </div>
                    <i className={item.rightIcon}></i>
                  </li>
                ))}
              </ul>
            </div>
            <Navbar />
            <div className="pt-3">
              <a className="hero__tel-link" href="tel:+6199942413">
                <i className="bx bx-headphone"></i>
                (+01)-800-3456-88
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide-to={0}
            className="active slide-indicator"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide-to={1}
            className="slide-indicator"
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleFade"
            className="slide-indicator"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="hero__content ms-4 animate__animated animate__fadeInUp">
              <h3 className="text-white elissy-text mb-4">Elessi store</h3>
              <h1 className="text-white">
                Fresh vegetables sales up to 30% off
              </h1>
              <button className="hero__shop-btn hero__shop-act">
                Shop Now
              </button>
            </div>
            <img className="hero__img" src={heroImg1} alt="hero-img" />
          </div>
          <div className="carousel-item">
            <div className="hero__content text-center animate__animated animate__fadeInLeft">
              <h3>Shop our freshest</h3>
              <h1>
                Fresh hand-picked Vegatables{" "}
                <span className="text-danger">everyday!</span>
              </h1>
              <button className="hero__shop-btn">Shop Now</button>
            </div>
            <img className="hero__img" src={heroImg2} alt="hero-img" />
          </div>
          <div className="carousel-item">
            <div className="hero__content animate__animated animate__fadeInLeft">
              <h3>Shop our freshest</h3>
              <h1>
                Fresh hand-picked Vegatables{" "}
                <span className="text-danger">everyday!</span>
              </h1>
              <button className="hero__shop-btn">Shop Now</button>
            </div>
            <img className="hero__img" src={heroImg3} alt="hero-img" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true">
            <i className="bx bx-chevron-left"></i>
          </span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true">
            <i className="bx text-dark bx-chevron-right"></i>
          </span>
        </button>
      </div>
    </section>
  );
}

export default Hero;
