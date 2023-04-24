import React, { useState, useEffect } from 'react';
import Swiper from 'swiper/react';
import { Pagination, Navigation, Lazy, Controller } from 'swiper';

import Slider from './slider';

// https://codesandbox.io/s/react-swiper-thumbs-centered-slides-1xo5b?file=/src/slider.js:1620-2027

const images = [
  {
    src: 'https://picsum.photos/320/240?v1',
  },
  {
    src: 'https://picsum.photos/320/240?v2',
  },
  {
    src: 'https://picsum.photos/320/240?v3',
  },
  {
    src: 'https://picsum.photos/320/240?v4',
  },
];

const ManipulatingSwiper = () => {
  // Swiper instance
  const [swiper, updateSwiper] = useState(null);
  // Swiper thumbsinstance
  const [swiperThumbs, updateSwiperThumbs] = useState(null);
  
	// Params definition
  let params = {
    modules: [Controller, Pagination, Navigation, Lazy],
    preloadImages: false,
    lazy: true,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    spaceBetween: 30,
    getSwiper: updateSwiper, // Get swiper instance callback
  };

  let thumbsParams = {
    modules: [Controller],
    loop: true,
    slideToClickedSlide: true,
    slidesPerView: '3',
    centeredSlides: true,
    spaceBetween: 10,
    getSwiper: updateSwiperThumbs, // Get swiper instance callback
    style: {
      width: '100px',
    },
  };

  // Bind swiper and swiper thumbs
  useEffect(() => {
    if (swiper && swiperThumbs) {
      swiper.controller.control = swiperThumbs;
      swiperThumbs.controller.control = swiper;
    }
  }, [swiper, swiperThumbs]);

  return (
    <div>
      <Swiper {...params}>
        {images.map((image, idx) => (
          <Slider key={`slide_${idx}`} style={{ width: '100px' }}>
            <img
              // @note w/o unique key the image won't be updated when the image set updates.
              key={image.src}
              className="swiper-lazy"
              data-src={image.src}
            />
          </Slider>
        ))}
      </Swiper>

      <Swiper {...thumbsParams}>
        {images.map((image, idx) => (
          <Slider key={`slide_${idx}`} className="swiper-slide-auto">
            <img
              // @note w/o unique key the image won't be updated when the image set updates.
              key={image.src}
              className="swiper-lazy"
              // @note Ignore that the images aren't matching
              src={image.src.replace('320/240', '100/100')}
            />
          </Slider>
        ))}
      </Swiper>
    </div>
  );
};

export default ManipulatingSwiper;
