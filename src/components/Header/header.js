import { Flex, Link, Stack, Box, Divider } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";

import { LayoutContext } from "../context/LayoutContext";

import NextLink from "next/link";
import theme from "@/theme";

import Logo from "../Logo";

import bgHeader from "@/asset/images/header/header.png";
import logoStarlight from "@/asset/images/logo/starlight.png";
import MobileNav from "./headerM";

const NavbarLink = ({ to, children, ...props }) => {
  const router = useRouter();

	// const { inView } = useContext(LayoutContext);
	// const isActive = true;

	const isActive = to === router.pathname;

	// useEffect(() => {
	// 	if (router.pathname != '/starlight') {
	// 		const isActive = to === router.pathname;
	// 	}
	// 	else {
	// 		const isActive = inView === {children}
	// 	}
	// }, [to, router.pathname, inView, children])

  return (
    <Box
      ps={{ md: "3", lg: "7" }}
      pe={{ md: "calc(2px + .85rem)", lg: "7" }}
      textAlign="center"
      fontSize={{ md: "sm", lg: "md", xl: "larger" }}
      color={
        isActive
          ? `${theme.colors.nav["active"]}`
          : `${theme.colors.nav["inactive"]}`
      }
      _hover={{
        color: `${theme.colors.nav["active"]}`,
        cursor: "pointer",
      }}
      {...props}
    >
      <NextLink href={to} passHref>
        <Link>{children}</Link>
      </NextLink>
    </Box>
  );
};

const NavDivider = () => {
  return (
    <Divider
      orientation="vertical"
      borderWidth=".05rem"
      borderColor={theme.colors.nav["inactive"]}
    />
  );
};

const Header = () => {
  return (
    <Box
      bgImage={bgHeader.src}
      bgSize="cover"
      bgPos="center bottom"
      minH="100%"
      // w="100%"
      // maxW="100vw"
      fontFamily={theme.fonts.exodus}
      color={theme.colors.nav["inactive"]}
      // overflowX="hidden"
      as="header"
    >
      <Flex
        w="100vw"
        // maxW="100vw"
        pb={1.5}
        mx="auto"
        px={{ base: "5vw", md: "3vw" }}
        justifyContent="space-between"
        alignItems="center"
      >
        <Flex justifyContent="space-between" alignItems="center">
          <NextLink href="/" passHref>
            {/* <Link p="2"> */}
              <Logo
                img={logoStarlight.src}
                alt="Starlight 2023"
                py={{base: "2", md: "3", lg: "1.5", xl:"3"}}
                minW="3.5rem"
                size={{ base: "3.5rem", sm: "4rem", lg: "4.5rem" }}
              />
            {/* </Link> */}
          </NextLink>
          <NavbarLink
            to="/recruitment"
            display={{ base: "none", md: "block" }}
          >
            RECRUITMENT
          </NavbarLink>
        </Flex>
        <Stack
          direction="row"
          h="2rem"
          alignItems="center"
          display={{ base: "none", md: "flex" }}
        >
          <NavbarLink to="/">
            ABOUT U<i>S</i>
          </NavbarLink>
          <NavDivider />
          <NavbarLink to="/">MEDIA</NavbarLink>
          <NavDivider />
          <NavbarLink to="/">
            TE<i>S</i>TIMONY
          </NavbarLink>
          <NavDivider />
          <NavbarLink to="/">
            TALENT<i>S</i>
          </NavbarLink>
          <NavDivider />
          <NavbarLink to="/">
            FA<i>Q</i>
          </NavbarLink>
        </Stack>
        <MobileNav />
      </Flex>
    </Box>
  );
};

export default Header;
