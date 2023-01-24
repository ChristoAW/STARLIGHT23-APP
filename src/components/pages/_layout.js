import { Box, Flex } from "@chakra-ui/react";

import Footer from "../Footer/footer";
import Header from "../Header/header";
import ScrollButton from "../ScrollToTop/scrollButton";
// import SplashLoader from '@/components/SplashLoader';

const Layout = ({ children, ...props }) => (
  <Flex
    flexDir="column"
    justifyContent="center"
    alignItems="center"
    minH="100vh"
    width="100%"
    // maxW="100vw"
    // overflowX="hidden"
    {...props}
  >
    <Box
      sx={{
        position: "-webkit-sticky",
        position: "sticky", /* Safari */ 
        top: "0",
      }}
			maxW="100%"
			zIndex={5}
			overflowX="hidden"
    >
      <Header />
    </Box>
    {/* <SplashLoader /> */}
    {children}
    {/* <ScrollButton /> */}
    <Footer />
  </Flex>
);

export default Layout;
