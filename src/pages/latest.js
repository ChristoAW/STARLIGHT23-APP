import { Box, Flex, Image, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import theme from '../theme';

import YtEmbed from "../components/embed/youtube"

import vidFrame from '../asset/images/pages/about-us/frame.png';

YtEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
};

const LatestNews = () => {
  return (
    <Flex
      w="100%"
      justifyContent="center"
      alignItems="center"
      py={{ base: '10', md: '5rem' }}
      bgColor={theme.colors.bg[700]}
      color={theme.colors.text[500]}
    >
      <Image
        src={vidFrame.src}
        alt="Latest News"
        w={{ base: '100%', md: '55vw' }}
        px={{ base: '6', md: '0' }}
        // zIndex={3}
      />
      <Flex flexDir="column" position="absolute" justifyContent="center" alignItems="center">
        <Text>Latest News</Text>
        <YtEmbed embedId="1RolTkKkp8c" title="Gudetama" />
      </Flex>
    </Flex>
  );
};

export default LatestNews;
