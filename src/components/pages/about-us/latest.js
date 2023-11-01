import { useEffect, useState } from 'react';
import { Box, Button, Flex, Icon, Image, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';

import theme from '@/theme';
import { FaCaretLeft, FaCaretRight } from 'react-icons/fa';

// Import Swiper modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, Thumbs } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/pagination';

import YtEmbed from '@/components/embed/youtube';
import vidFrame from '@/asset/images/pages/about-us/frame.png';

YtEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
};

const LatestNews = () => {
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
          zIndex={3}
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
          <SwiperSlide>
            <YtEmbed
              pos="absolute"
              embedId="lbW5smA94Qw"
              title="The Relic Trailer"
            />
          </SwiperSlide>
          <SwiperSlide>
            <YtEmbed
              pos="absolute"
              embedId="wcM0lA1MCbg"
              title="Starlight 2023 Trailer"
            />
          </SwiperSlide>
          <SwiperSlide>
            <YtEmbed
              pos="absolute"
              embedId="1BBL12D3JjE"
              title="Interview Memories"
            />
          </SwiperSlide>
        </Box>
      </Flex>
    </Flex>
  );
};

export default LatestNews;
