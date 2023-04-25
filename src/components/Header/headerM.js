import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import NextLink from 'next/link';

import { Box, Flex, Image, Link, Text } from '@chakra-ui/react';
import { Squeeze } from 'hamburger-react';

import theme from '@/theme';

import logoStarlight from '@/asset/images/logo/starlight.png';

const NavbarLink = ({ to, children, isOpen, setOpen, ...props }) => {
  const router = useRouter();
  const isActive = to === router.pathname;

  return (
    <Box
      textAlign="center"
      fontSize="xl"
      py="2"
      my={isActive ? '2.5' : '1'}
      color={
        isActive ? `${theme.colors.nav['active']}` : `${theme.colors.text[600]}`
      }
      transform={isActive ? 'scale(1.2)' : 'auto'}
      transition="all .3s ease-out"
      onClick={() => setOpen(false)}
      _hover={{
        cursor: 'pointer',
        transform: 'scale(1.2)',
      }}
      {...props}
    >
      <NextLink href={to} passHref>
        <Text>{children}</Text>
      </NextLink>
    </Box>
  );
};

const MobileNav = () => {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  return (
    <>
      <Flex
        display={{ md: 'none' }}
        bgColor={isOpen ? 'none' : `${theme.colors.bg[300]}`}
        h={10}
        rounded="lg"
        transition=".3s ease-in"
        _hover={{
          bgColor: isOpen ? 'none' : `${theme.colors.nav['inactive']}`,
          cursor: 'pointer',
        }}
        zIndex={8}
      >
        <Box mt="-1">
          <Squeeze
            size={25}
            distance="md"
            color={theme.colors.deco[400]}
            easing="ease-out"
            rounded
            toggled={isOpen}
            toggle={setOpen}
          />
        </Box>
      </Flex>
      <Box
        pos="fixed"
        top={0}
        right={0}
        right={isOpen ? '0' : '-100vw'}
        h="100vh"
        w="100vw"
        bgColor={theme.colors.bg[400]}
        transition="all .4s"
        opacity="94%"
        display={{ md: 'none' }}
      >
        <Flex
          flexDir="column"
          justifyContent="center"
          alignItems="center"
          h="100%"
        >
          <Image
            src={logoStarlight.src}
            alt="Starlight 2023"
            minW="3.5rem"
            w={{ base: '9rem', sm: '9.5rem' }}
            pb={{ base: '5', sm: '7' }}
          />
          <NavbarLink to="/" isOpen={isOpen} setOpen={setOpen}>
            About U<i>s</i>
          </NavbarLink>
          <NavbarLink to="/division" isOpen={isOpen} setOpen={setOpen}>
            Divi<i>s</i>ion
          </NavbarLink>
          {/* <NavbarLink to="/media" isOpen={isOpen} setOpen={setOpen}>Media</NavbarLink>
          <NavbarLink to="/testimony" isOpen={isOpen} setOpen={setOpen}>
            Te<i>s</i>timony
          </NavbarLink>
          <NavbarLink to="/talent" isOpen={isOpen} setOpen={setOpen}>
            Talent<i>s</i>
          </NavbarLink> */}
          {/* <NavbarLink to="/faq" isOpen={isOpen} setOpen={setOpen}>
            FA<i>Q</i>
          </NavbarLink> */}
        </Flex>
      </Box>
    </>
  );
};

export default MobileNav;
