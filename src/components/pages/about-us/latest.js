import { Box, Flex, Image, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import theme from '@/theme';

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
          px={{ base: "6", sm: "16", md: "0" }}
          pointerEvents="none"
          zIndex={3}
        />
        <YtEmbed pos="absolute" embedId="YRgK7p-AENs" title="Gudetama" />
      </Flex>
    </Flex>
  );
};

export default LatestNews;
