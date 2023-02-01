import { Text, Flex, Stack, Box, Divider } from '@chakra-ui/react';
import NextLink from 'next/link';

import theme from '@/theme';

import Contact from './contactFooter';
import Logo from '../Logo';

import logoStarlight from '@/asset/images/logo/starlight.png';
import logoBEM from '@/asset/images/logo/bem-umn.png';
import logoUMN from '@/asset/images/logo/umn-logo.png';

const FooterLink = ({ to, children }) => (
  <Box>
    <NextLink href={to} passHref>
      <Text _hover={{ textDecoration: 'underline' }}>{children}</Text>
    </NextLink>
  </Box>
);

const Footer = () => {
  return (
    <>
      <Flex
        w="100%"
        mt="auto"
        sx={{
          bottom : "0"
        }}
        flexDir="column"
        bgColor={theme.colors.bg[500]}
        fontFamily={theme.fonts.montserrat}
        color={theme.colors.text[500]}
      >
        <Flex
          mx="auto"
          py={{ base: '10', md: '7' }}
          px={{ base: '3rem', md: '4rem' }}
          maxW="7xl"
          flexDir={{ base: 'column', md: 'row' }}
          justifyContent={{ base: 'center', xl: 'space-between' }}
          alignItems="center"
          as="footer"
        >
          {/* starlight logo + page navigation */}
          <Flex
            flexDir={{ base: 'column', md: 'row' }}
            justifyContent="space-evenly"
            alignItems="center"
          >
            <Flex
              flexDir="column"
              justifyContent="center"
              alignItems="center"
              px={{ md: '2rem', xl: '1rem' }}
              mb={{ base: '3', md: '' }}
            >
              <Logo
                img={logoStarlight.src}
                alt="Starlight 2023"
                w="140px"
                justifyContent="center"
              />
              <Text
                fontSize="smaller"
                textAlign="center"
                display={{ base: 'none', md: 'block' }}
              >
                Let&#39;s Sail To The Horizon!
              </Text>
            </Flex>
            {/* page navigation */}
            <Flex
              px={{ md: '1rem' }}
              ps={{ xl: '3vw' }}
              flexDir={{ base: 'column', md: 'row' }}
              textAlign={{ base: 'center', md: 'left' }}
            >
              <Stack minW={{ base: '150px', xl: '180px' }} gap={{ md: 2 }}>
                <FooterLink to="/">About Us</FooterLink>
                <FooterLink to="/recruitment">Recruitment</FooterLink>
                <FooterLink to="/faq">FAQ</FooterLink>
              </Stack>
              {/* <Stack minW="100px" py={{ base: "2", md: "0" }} gap={{ md: 2 }}>
                <FooterLink to="/">Talents</FooterLink>
                <FooterLink to="/">Media</FooterLink>
                <FooterLink to="/">Testimony</FooterLink>
              </Stack> */}
            </Flex>
            {/* end page navigation */}
          </Flex>
          <Address />
        </Flex>
        <Contact />
      </Flex>
    </>
  );
};

const Address = () => {
  return (
    <>
      <Divider
        orientation="horizontal"
        my={{ base: '5', md: '' }}
        display={{ md: 'none' }}
      />
      <Flex
        flexDir={{ base: 'column', xl: 'row-reverse' }}
        alignItems="center"
        px="5"
      >
        {/* eh? perlu flex lagi, kalo ga logonya ga bisa diatur ukurannya*/}
        <Flex mb={{ base: '5', md: '3' }}>
          <Flex gap="8">
            <Logo img={logoBEM.src} alt="Starlight 2022" w="70px" />
            <Logo img={logoUMN.src} alt="Starlight 2022" w="70px" />
          </Flex>
        </Flex>
        <Stack
          direction="row"
          h={{ base: '', xl: '10vw' }}
          textAlign="center"
          fontSize={{ base: 'smaller', xl: 'md' }}
          alignItems="center"
        >
          <Divider
            orientation="vertical"
            display={{ base: 'none', xl: 'block' }}
          />
          <Box px={{ base: '', xl: '5' }}>
            <Text>Universitas Multimedia Nusantara</Text>
            <Text
              maxW={{ base: '18rem', xl: '24rem' }}
              mt={{ base: '', xl: '2' }}
            >
              Jl. Scientia Boulevard, Gading Serpong, Tangerang, Banten, 15810
            </Text>
          </Box>
        </Stack>
      </Flex>
    </>
  );
};

export default Footer;
