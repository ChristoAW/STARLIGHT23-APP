import { Box, Stack, Divider, Text, Flex, color } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import NextLink from 'next/link';

import theme from '@/theme';

export const NavbarLink = ({ to, children, display, ...props }) => {
  const router = useRouter();
  const isActive = to === router.pathname;

  return (
    <Box
      ps={{ md: '3', lg: '7' }}
      px={{ md: 'calc(7px + .85rem)', lg: '7' }}
      textAlign="center"
      fontSize={{
        md: 'calc(.4rem + 1.5vw)',
        lg: 'calc(.5rem + 1.2vw)',
        xl: 'calc(.4rem + 1vw)',
      }}
      display={{ base: 'none', md: `${display}` }}
      color={
        isActive
          ? `${theme.colors.nav['active']}`
          : `${theme.colors.nav['inactive']}`
      }
      // textDecor={isActive ? 'underline' : 'none'}
      _hover={{
        color: `${theme.colors.nav['active']}`,
        cursor: 'pointer',
      }}
      transition=".15s ease-in-out"
      {...props}
    >
      <NextLink href={to} passHref>
        <Text>{children}</Text>
      </NextLink>
    </Box>
  );
};

const NavDivider = () => {
  return (
    <Divider
      orientation="vertical"
      borderWidth=".05rem"
      borderColor={theme.colors.nav['inactive']}
      display={{ base: 'none', md: 'flex' }}
    />
  );
};

const DesktopNav = () => {
  return (
    <Stack direction="row" h="2.5rem" alignItems="center">
      <NavbarLink to="/">
        About U<i>s</i>
      </NavbarLink>
      <NavDivider />
      <NavbarLink to="/division">
        Divi<i>s</i>ion
      </NavbarLink>
      <NavDivider />
      <NavbarLink to="/registration">
        Regi<i>s</i>tration
      </NavbarLink>
      {/* <NavDivider /> */}
      {/* <NavbarLink to="/">Media</NavbarLink>
      <NavDivider />
      <NavbarLink to="/">
        Te<i>s</i>timony
      </NavbarLink>
      <NavDivider />
      <NavbarLink to="/">
        Talent<i>s</i>
      </NavbarLink>
      <NavDivider /> */}
      {/* <NavbarLink to="/faq">
        FA<i>Q</i>
      </NavbarLink> */}
    </Stack>
  );
};

export default DesktopNav;
