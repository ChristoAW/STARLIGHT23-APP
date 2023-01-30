import { Flex, Image, Text } from '@chakra-ui/react';

import bgTreasure from '@/asset/images/pages/about-us/coming-soon.jpg';

const TreasureMap = () => {
  return (
    <Flex w="100%" minH="100%" justifyContent="center" alignItems="center">
      <Image src={bgTreasure.src} w="100vw" sizes="cover" />
      <Text
        mt="-16.5vw"
        pos="absolute"
        fontFamily="Exodus"
        fontSize={{
          base: 'calc(.4rem + 6.5vw)',
          md: 'calc(.6rem + 7vw)',
        }}
        textShadow={Array(1)
          .fill()
          .map((e, i) => `0 0 ${i + 4}0px #78a0cd`)
          .join(', ')}
        bgGradient="linear(to-b, #a5bff7, #81addf)"
        bgClip="text"
      >
        COMING <i>S</i>OON
      </Text>
    </Flex>
  );
};

export default TreasureMap;
