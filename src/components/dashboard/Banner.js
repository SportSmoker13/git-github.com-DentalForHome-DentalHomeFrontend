import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import image1 from '../../images/slider1.png'
import '../../css/DashBoard.css'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

function Banner() {
    const slideImages = [
        {
          url: '../../images/slider1.jpg',
          caption: 'Slide 1'
        },
        {
          url: 'images/slide_3.jpg',
          caption: 'Slide 2'
        },
        {
          url: 'images/slide_4.jpg',
          caption: 'Slide 3'
        },
      ];

  return (
    <div className="banner-main">
        <Slide arrows="false" >
         {slideImages.map((slideImage, index)=> (
            <div  key={index}>
              <div style={{borderRadius:`20px`}}>
                  <img className="sliderimg" src={image1} />
                {/* <span>{slideImage.caption}</span> */}
              </div>
            </div>
          ))} 
        </Slide>
      </div>
  );
}

export default Banner;
