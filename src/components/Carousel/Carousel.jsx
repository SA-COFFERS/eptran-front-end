/* eslint-disable no-param-reassign */
// import React from 'react';

// import { CCarousel, CCarouselItem, CImage } from '@coreui/react';
// import '@coreui/coreui/dist/css/coreui.min.css';

// import carouselImg1 from '../../assets/carousel-1.png';

// function Carousel() {
//   return (

//     <CCarousel controls indicators>
//       <CCarouselItem>
//         <CImage className="d-block w-100" src={carouselImg1} alt="slide 1" />
//       </CCarouselItem>
//       <CCarouselItem>
//         <CImage className="d-block w-100" src={carouselImg1} alt="slide 2" />
//       </CCarouselItem>
//       <CCarouselItem>
//         <CImage className="d-block w-100" src={carouselImg1} alt="slide 3" />
//       </CCarouselItem>
//     </CCarousel>

//   );
// }

// export default Carousel;

/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */
/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import img1 from '../../assets/carousel-1.png';
import './Carousel.css';

function Carousel() {
  const [slideIndex, setSlideIndex] = useState(1);

  const showSlides = (n) => {
    let i;
    const slides = document.getElementsByClassName('mySlides');
    const dots = document.getElementsByClassName('dot');

    if (n > slides.length) {
      n = 1;
    }
    if (n < 1) {
      n = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' active', '');
    }
    if (slides[n - 1]) {
      slides[n - 1].style.display = 'block';
      dots[n - 1].className += ' active';
    }
  };

  useEffect(() => {
    showSlides(slideIndex);
  }, [slideIndex]);

  const plusSlides = (n) => {
    setSlideIndex((prevIndex) => {
      let newIndex = prevIndex + n;
      if (newIndex > document.getElementsByClassName('mySlides').length) {
        newIndex = 1;
      }
      if (newIndex < 1) {
        newIndex = document.getElementsByClassName('mySlides').length;
      }
      return newIndex;
    });
  };

  const currentSlide = (n) => {
    setSlideIndex(n);
  };

  return (
    <>
      <div className="slideshow-container">
        <div className="mySlides fade">
          <img src={img1} style={{ width: '100%' }} alt="img1" />
        </div>
        <div className="mySlides fade">
          <img src={img1} style={{ width: '100%' }} alt="img2" />
        </div>
        <div className="mySlides fade">
          <img src={img1} style={{ width: '100%' }} alt="img3" />
        </div>
        <a className="prev" onClick={() => plusSlides(-1)}>❮</a>
        <a className="next" onClick={() => plusSlides(1)}>❯</a>
      </div>
      <br />
      <div style={{ textAlign: 'center' }}>
        <span className="dot" onClick={() => currentSlide(1)} />
        <span className="dot" onClick={() => currentSlide(2)} />
        <span className="dot" onClick={() => currentSlide(3)} />
      </div>
    </>
  );
}

export default Carousel;
