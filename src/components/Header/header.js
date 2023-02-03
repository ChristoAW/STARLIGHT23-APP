import { Flex, Box } from '@chakra-ui/react';
import NextLink from 'next/link';
import theme from '@/theme';

import Logo from '../Logo';

import MobileNav from './headerM';
import DesktopNav from './headerD';

import bgHeader from '@/asset/images/header/header.png';
import logoStarlight from '@/asset/images/logo/starlight.png';

const Header = () => {
  return (
    <Box
      bgImage={bgHeader.src}
      bgSize="cover"
      bgPos="center bottom"
      minH="100%"
      fontFamily={theme.fonts.exodus}
      color={theme.colors.nav['inactive']}
      overflow="hidden"
      as="header"
    >
      <Flex
        h={{ md: 'calc(4.5rem + 2vw)', lg: 'calc(5.5rem + 2vw)', xl: 'calc(6rem + 1.5vw)' }}
        w="100vw"
        mx="auto"
        pb={1.5}
        px={{ base: '5vw', md: '3vw' }}
        pos="relative"
        // justifyContent="space-between"
        justifyContent={{ base: 'space-between', md: 'center' }}
        alignItems="center"
      >
        <Box pos={{ md: 'absolute' }} left={{ md: 0 }} px={{ md: '3vw' }}>
          <NextLink href="/" passHref>
            <Logo
              img={logoStarlight.src}
              alt="Starlight 2023"
              minW="3.5rem"
              // pe={{ md: 'calc(2px + .85rem)', lg: '5' }}
              py={{ base: '2', md: '' }}
              size={{ base: '3.5rem', md: '4.5rem', lg: '5.5rem', xl: '6rem' }}
              // size={{ base: '3.5rem', sm: '4rem', lg: '4.5rem' }}
            />
          </NextLink>
        </Box>
        {/* <Flex justifyContent="space-between" alignItems="center"> */}
        {/* </Flex> */}
        <DesktopNav />
        <MobileNav />
      </Flex>
    </Box>
  );
};

export default Header;
