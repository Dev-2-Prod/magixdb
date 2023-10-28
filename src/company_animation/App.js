// Carousel.js
import React, { useEffect } from 'react';
import './App.css'
import comp1 from './comp_1.png'
import comp2 from './comp_2.png'
import comp3 from './comp_3.png'
import comp4 from './comp_4.png'
import comp5 from './comp_5.png'
import comp6 from './comp_6.png'
import comp7 from './comp_7.png'
import comp8 from './comp_8.png'


const Carousel = () => {
  useEffect(() => {
    const copy = document.querySelector('.logos-slide').cloneNode(true);
    document.querySelector('.logos').appendChild(copy);
  }, []);

  return (
    <div className="carousel-container">
      <div className="logos">
        <div className="logos-slide">
          <img src={comp1} alt="logo1" />
          <img src={comp2} alt="logo2" />
          <img src={comp3} alt="logo3" />
          <img src={comp4} alt="logo4" />
          <img src={comp5} alt="logo5" />
          <img src={comp6} alt="logo6" />
          <img src={comp7} alt="logo7" />
          <img src={comp8} alt="logo8" />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
