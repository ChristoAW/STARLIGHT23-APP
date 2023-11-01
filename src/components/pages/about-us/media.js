import { SubSubHeado } from '@/components/styles';
import theme from '@/theme';
import { Box, Flex, Image } from '@chakra-ui/react';
import Marquee from 'react-fast-marquee';

import listMedia from '@/data/media/list-media';
import hydra from '@/asset/images/pages/recruitment/star/HYDRA-Star.png';

const Media = () => {
  const listMedpar = listMedia.filter((media) => media.type == 'medpar');
  const listSponsor = listMedia.filter((media) => media.type == 'sponsor');

  return (
    <Flex
      flexDir="column"
      alignItems="center"
      py={{ base: '2.5rem', md: '3rem' }}
      color="white"
      maxWidth="100vw"
      bgGradient={`linear(to-b, ${theme.colors.bg[400]} 90%, ${theme.colors.bg[500]} 100%)`}
    >
      <SubSubHeado>Sponsored By</SubSubHeado>
      <Box as={Marquee} my={8} gradient gradientColor={[19, 40, 74]}>
        {listSponsor.map((media, idx) => {
          return (
            <Image
              key={idx}
              src={media.logo}
              px={{ base: 'calc(2.5vw + .1rem)', md: 'calc(2.6vw + .2rem)' }}
              height={{ base: '15vw', md: '10vw' }}
            />
          );
        })}
      </Box>
      <SubSubHeado>Media Partner</SubSubHeado>
      <Box as={Marquee} mt={8} speed={70} gradient gradientColor={[19, 40, 74]}>
        {listMedpar.map((media, idx) => {
          return (
            <MedparComponent
              key={idx}
              alt={media.name}
              src={media.logo}
              cat={media.cat}
            />
          );
        })}
      </Box>
    </Flex>
  );
};

// nanti buat yang sponsor juga dibuat gini, cuma ukurannya dominan lebih gede" dibanding medpar
const MedparComponent = ({ ...props }) => {
  return (
    <Flex
      height="100%"
      justifyContent="center"
      alignItems="center"
      // apa efek ini cuma dikasih buat sponsor aja.. soalnya medpar terlalu cilik
      _hover={{
        filter: 'drop-shadow(0px 0px 3px #fff)',
      }}
      transition=".2s all linear"
    >
      <Image
        key={props.key}
        alt={props.alt}
        src={props.src}
        px={{ base: 'calc(2.5vw + .1rem)', md: 'calc(2.6vw + .2rem)' }}
        height={
          props.cat == 'high'
            ? { base: '12vw', md: '6vw' }
            : props.cat == 'mid'
            ? { base: '8vw', md: '6vw' }
            : { base: '5vw', md: '6vw' }
        }
        // ini belom dibuat responsivenya ya,
        // nanti tergantung ada berapa level
        // sama kondisinya dari sponsor nanti coba tanyain dulu
        // nanti juga perlu test pake logo yang orientasinya beda"
      />
    </Flex>
  );
};

export default Media;
