import { Box, Stack, Divider, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import NextLink from "next/link";

import theme from "@/theme";

export const NavbarLink = ({ to, children, display, ...props }) => {
  const router = useRouter();
  const isActive = to === router.pathname;

  return (
    <Box
      ps={{ md: '3', lg: '7' }}
      pe={{ md: 'calc(2px + .85rem)', lg: '7' }}
      textAlign="center"
      fontSize={{ md: 'sm', lg: 'md', xl: 'larger' }}
      display={{ base: 'none', md: `${display}` }}
      color={
        isActive
          ? `${theme.colors.nav['active']}`
          : `${theme.colors.nav['inactive']}`
      }
      _hover={{
        color: `${theme.colors.nav['active']}`,
        cursor: 'pointer',
      }}
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
    <Stack direction="row" h="2rem" alignItems="center" display="flex">
      <NavbarLink to="/">
        About U<i>s</i>
      </NavbarLink>
      <NavDivider />
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
      <NavbarLink to="/faq">
        FA<i>Q</i>
      </NavbarLink>
    </Stack>
  );
};

export default DesktopNav;