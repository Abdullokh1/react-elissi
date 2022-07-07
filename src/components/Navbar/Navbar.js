import React from 'react'
import './Navbar.scss'
import boxData from './BoxImgData'


function Navbar() {

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

        <ul className='hero__nav d-flex'>
            <li className='hero__nav-home'>
              <span>Home</span> 
              <i className='bx bx-chevron-down'></i>
              <div className='home-dropdown'>
                <div className='dropdown-box'>
                  {boxData.map((item, i) =>(
                    <div key={i} className='d-flex flex-column align-items-center'>
                      <img className='dropdown__img' src={item.img} alt={item.text} width={157} height={157} />
                      <p className='dropdown__text'>{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </li>
            
            <li>
            <span>Shop</span> 
              <i className='bx bx-chevron-down'></i>
            </li>
            <li>
            <span>Elements</span> 
              <i className='bx bx-chevron-down'></i>
            </li>
            <li>
              <span>Pages</span> 
              <i className='bx bx-chevron-down'></i>
            </li>
            <li>
              <span>Vendors</span> 
              <i className='bx bx-chevron-down'></i>
            </li>
        </ul>


         

    
   
  )
}

export default Navbar
