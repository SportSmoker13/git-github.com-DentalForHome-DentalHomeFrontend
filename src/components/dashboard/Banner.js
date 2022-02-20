import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import image1 from '../../images/slider1.jpg'
import image2 from '../../images/slider2.png'
import image3 from '../../images/slider3.png'
import '../../css/DashBoard.css'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

function Banner() {
    const slideImages = [
        {
            src:image1
        },
        {
          src:image2
        },
        {
          src:image3
        }
        // {
          
        // },
      ];

  return (
    <div className="banner-main">
        <Slide arrows="false" >
         {slideImages.map((slideImage, index)=> (
            <div className="silderimg-container"  key={index} style={{borderRadius:`20px`}}>
                  <img className="sliderimg" src={slideImage.src} />
                {/* <span>{slideImage.caption}</span> */}
            </div>
          ))} 
        </Slide>
      </div>
  );
}

export default Banner;
