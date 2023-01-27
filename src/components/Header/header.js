import { Flex, Box } from '@chakra-ui/react';
import NextLink from 'next/link';
import theme from '@/theme';

import Logo from '../Logo';
import { NavbarLink } from './headerD';

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
        w="100vw"
        pb={1.5}
        mx="auto"
        px={{ base: '5vw', md: '3vw' }}
        justifyContent="space-between"
        alignItems="center"
      >
        <Flex justifyContent="space-between" alignItems="center">
          <NextLink href="/" passHref>
            <Logo
              img={logoStarlight.src}
              alt="Starlight 2023"
              minW="3.5rem"
              py={{ base: '2', md: '3', lg: '1.5', xl: '3' }}
              size={{ base: '3.5rem', sm: '4rem', lg: '4.5rem' }}
            />
          </NextLink>
          <NavbarLink to="/recruitment" display="block">
            RECRUITMENT
          </NavbarLink>
        </Flex>
        <DesktopNav />
        <MobileNav />
      </Flex>
    </Box>
  );
};

export default Header;
