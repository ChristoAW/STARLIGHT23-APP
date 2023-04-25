import { useEffect, useState } from 'react';
import { Box, Button, Flex, Icon, Image, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';

import theme from '@/theme';
import { FaCaretLeft, FaCaretRight } from 'react-icons/fa';

// Import Swiper modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Controller, Navigation, Pagination, Thumbs } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/pagination';

import YtEmbed from '@/components/embed/youtube';
import vidFrame from '@/asset/images/pages/about-us/frame.png';

const data = [
  {
    title: "Starlight's Latest",
    src: 'wcM0lA1MCbg',
  },
  {
    title: 'Starlight 2022 After Movie',
    src: 'YRgK7p-AENs',
  },
];

YtEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
};

const LatestNews = () => {
  // // Swiper instance
  // const [swiper, updateSwiper] = useState(null);
  // // Swiper thumbsinstance
  // const [swiperThumbs, updateSwiperThumbs] = useState(null);

  // // Params definition
  // let params = {
  //   modules: [Controller, Pagination, Navigation],
  //   preloadImages: false,
  //   loop: true,
  //   pagination: {
  //     el: '.swiper-pagination',
  //     type: 'bullets',
  //     clickable: true,
  //   },
  //   navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev',
  //   },
  //   spaceBetween: 30,
  //   getSwiper: updateSwiper, // Get swiper instance callback
  // };

  // let thumbsParams = {
  //   modules: [Controller],
  //   loop: true,
  //   slideToClickedSlide: true,
  //   slidesPerView: '3',
  //   centeredSlides: true,
  //   spaceBetween: 10,
  //   getSwiper: updateSwiperThumbs, // Get swiper instance callback
  //   style: {
  //     width: '100px',
  //   },
  // };

  // // Bind swiper and swiper thumbs
  // useEffect(() => {
  //   if (swiper && swiperThumbs) {
  //     swiper.controller.control = swiperThumbs;
  //     swiperThumbs.controller.control = swiper;
  //   }
  // }, [swiper, swiperThumbs]);

  const SwipeBtn = (btn, { ...props }) => {
    return (
      <Flex
        className="swiper-next"
        backgroundColor="rgb(203,220,203,0.5)"
        backdropFilter="auto"
        backdropBlur="5px"
        pe={btn.pe}
        ps={btn.ps}
        justifyContent="center"
        alignItems="center"
        rounded={15}
        cursor="pointer"
        {...props}
      >
        <Icon
          as={btn.icon}
          boxSize={{ base: 25, md: 45 }}
          color={theme.colors.deco[500]}
        />
      </Flex>
    );
  };

  return (
    <Flex
      w="100%"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      py={{ base: '10', md: '5rem' }}
      color={theme.colors.text[300]}
      textShadow={Array(1)
        .fill()
        .map((e, i) => `0 0 ${i + 2}0px var(--chakra-colors-text-300)`)
        .join(', ')}
    >
      <Text
        fontSize={{
          base: 'calc(.2rem + 4vw)',
          md: 'calc(.4rem + 1.5vw)',
        }}
        mb="5"
      >
        Latest News
      </Text>
      <Flex alignItems="center" justifyContent="center">
        <Image
          src={vidFrame.src}
          alt="Latest News"
          w={{ base: '100%', md: '70vw', xl: '60vw' }}
          px={{ base: '6', sm: '16', md: '0' }}
          pointerEvents="none"
          zIndex={3}
        />
        <Flex
          pos="absolute"
          w={{ base: '70vw', sm: '65vw', md: '60vw', xl: '52vw' }}
          justifyContent="space-between"
          alignItems="center"
          zIndex={5}
        >
          <Flex
            className="swiper-prev"
            backgroundColor="rgb(203,220,203,0.2)"
            backdropFilter="auto"
            backdropBlur="5px"
            height={{ base: '60px', md: 20 }}
            justifyContent="center"
            alignItems="center"
            rounded={{ base: 10, md: 15 }}
            pe={1}
            cursor="pointer"
          >
            <Icon
              as={FaCaretLeft}
              boxSize={{ base: 22, md: 30 }}
              color={theme.colors.deco[500]}
            />
          </Flex>
          <Flex
            className="swiper-next"
            backgroundColor="rgb(203,220,203,0.2)"
            backdropFilter="auto"
            backdropBlur="5px"
            height={{ base: '60px', md: 20 }}
            justifyContent="center"
            alignItems="center"
            rounded={{ base: 10, md: 15 }}
            ps={1}
            cursor="pointer"
          >
            <Icon
              as={FaCaretRight}
              boxSize={{ base: 22, md: 30 }}
              color={theme.colors.deco[500]}
            />
          </Flex>

          {/* Belom bisa pake function */}
          {/* <SwipeBtn icon={FaCaretLeft} pe={1} class="swiper-prev" /> */}
          {/* <SwipeBtn icon={FaCaretRight} ps={1} /> */}
        </Flex>
        <Box
          as={Swiper}
          pos="absolute"
          h={{
            base: 'calc(9 * 5.2vw)',
            sm: 'calc(9 * 4.6vw)',
            md: 'calc(9 * 4vw)',
            xl: 'calc(9 * 3.4vw)',
          }}
          w={{
            base: 'calc(16 * 5.2vw)',
            sm: 'calc(16 * 4.7vw)',
            md: 'calc(16 * 4vw)',
            xl: 'calc(16 * 3.4vw)',
          }}
          style={{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
          }}
          loop={true}
          spaceBetween={30}
          grabCursor={true}
          modules={[Autoplay, Navigation, Thumbs, Pagination]}
          // thumbs={{
          //   swiper:
          //     thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          // }}
          autoplay={{
            delay: 8000,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={{
            nextEl: '.swiper-next',
            prevEl: '.swiper-prev',
          }}
        >
          {/* gabisa pake map.. */}
          {/* {data.map((vid, idx) => (
            <SwiperSlide key={`slide_${idx}`}>
              <YtEmbed
                pos="absolute"
                key={vid.src}
                embedId={vid.src}
                title={vid.title}
              />
            </SwiperSlide>
          ))} */}
          <SwiperSlide>
            <YtEmbed
              pos="absolute"
              embedId="wcM0lA1MCbg"
              title="Starlight's Latest"
            />
          </SwiperSlide>
          <SwiperSlide>
            <YtEmbed
              pos="absolute"
              embedId="YRgK7p-AENs"
              title="Starlight's Latest"
            />
          </SwiperSlide>
        </Box>
      </Flex>
    </Flex>
  );
};

{
  /* <Flex
          as={Swiper}
          pos="absolute"
          justifyContent="center"
          alignItems="center"
          h={{
            base: 'calc(9 * 5.2vw)',
            sm: 'calc(9 * 3.7vw)',
            md: 'calc(9 * 4vw)',
            xl: 'calc(9 * 3.4vw)',
          }}
          w={{
            base: 'calc(16 * 5.2vw)',
            sm: 'calc(16 * 4.7vw)',
            md: 'calc(16 * 4vw)',
            xl: 'calc(16 * 3.4vw)',
          }}
          {...params}
        >
          {images.map((image, idx) => (
            // <SwiperSlide key={`slide_${idx}`}>
              <YtEmbed
                key={image.src}
                embedId={image.src}
                pos="absolute"
                title="Starlight's Latest"
              /> 
            //   <Image
            //     w={{ base: '100%', md: '70vw', xl: '60vw' }}
            //     key={image.src}
            //     src={image.src}
            //   />
            // </SwiperSlide>
            <Flex
              key={`slide_${idx}`}
              // h={{
              //   base: 'calc(9 * 5.2vw)',
              //   sm: 'calc(9 * 3.7vw)',
              //   md: 'calc(9 * 4vw)',
              //   xl: 'calc(9 * 3.4vw)',
              // }}
              // w={{
              //   base: 'calc(16 * 5.2vw)',
              //   sm: 'calc(16 * 4.7vw)',
              //   md: 'calc(16 * 4vw)',
              //   xl: 'calc(16 * 3.4vw)',
              // }}
              alignItems="center"
              justifyContent="center"
            >
              <Image key={image.src} src={image.src} />
            </Flex>
          ))}
        </Flex>
        <SwiperSlide>
            <YtEmbed
              pos="absolute"
              embedId="wcM0lA1MCbg"
              title="Starlight's Latest"
            />
        </Box>
      <Flex
        as={Swiper}
        {...thumbsParams}
        w={{ base: '100%', md: '70vw', xl: '60vw' }}
      >
        {images.map((image, idx) => (
          <SwiperSlide key={`slide_${idx}`}>
            <YtEmbed
                key={image.src}
                embedId={image.src}
                pos="absolute"
                title="Starlight's Latest"
              />
            <Image
              key={image.src}
              src={image.src.replace('320/240', '100/100')}
            />
          </SwiperSlide>
        ))}
      </Flex> */
}

{
  /* <Box
          as={Swiper}
          pos="absolute"
          h={{
            base: 'calc(9 * 5.2vw)',
            sm: 'calc(9 * 3.7vw)',
            md: 'calc(9 * 4vw)',
            xl: 'calc(9 * 3.4vw)',
          }}
          w={{
            base: 'calc(16 * 5.2vw)',
            sm: 'calc(16 * 4.7vw)',
            md: 'calc(16 * 4vw)',
            xl: 'calc(16 * 3.4vw)',
          }}
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          loop={true}
          // loopedSlides={3}
          spaceBetween={30}
          // slidesPerView={1}
          grabCursor={true}
          modules={[Autoplay, Navigation, Thumbs, Pagination]}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          autoplay={{
            delay: 2500,
          }}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <YtEmbed
              pos="absolute"
              embedId="wcM0lA1MCbg"
              title="Starlight's Latest"
            />
          </SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
        </Box>
      <Box
        as={Swiper}
        w={{
          base: 'calc(16 * 5.2vw)',
          sm: 'calc(16 * 4.7vw)',
          md: 'calc(16 * 4vw)',
          xl: 'calc(16 * 3.4vw)',
        }}
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        centeredSlides={true}
        slidesPerView="auto"
        slideToClickedSlide={true}
        loop={true}
        // loopedSlides={3}
        // freeMode={true}
        // watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
      >
        <SwiperSlide>
          <img src="http://img.youtube.com/vi/wcM0lA1MCbg/mqdefault.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
      </Box> */
}

export default LatestNews;
