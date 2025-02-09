import { Box, Flex } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import theme from '@/theme';

import Footer from '@/components/Footer/footer';
import Header from '@/components/Header/header';
import SplashScreen from '../SplashScreen';
import Scrollbar from '../scrollbar/scrollbar';
const Layout = ({ children, ...props }) => {
  const scrollDirection = useScrollDirection();

  return (
    <Flex
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      minH="100vh"
      width="100%"
      bgGradient="linear(#828389 5%, #18223a 25%)"
      bgColor={{ base: '#828389', md: theme.colors.bg[500] }}
      {...props}
      sx={{
        '::-webkit-scrollbar': { display: 'none' },
      }}
    >
      <Scrollbar />
      <Box
        sx={{
          position: '-webkit-sticky',
          position: 'sticky' /* Safari */,
        }}
        top={{
          base: '0',
          md: scrollDirection === 'down' ? '-140' : '0',
        }}
        transition={{ md: 'all .4s ease-in-out' }}
        transitionDelay={{ md: '.1s' }}
        maxW="100%"
        zIndex={5}
      >
        <Header />
      </Box>
      {children}
      <Footer />
    </Flex>
  );
};

function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState(null);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? 'down' : 'up';
      if (
        direction !== scrollDirection &&
        (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)
      ) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener('scroll', updateScrollDirection); // add event listener
    return () => {
      window.removeEventListener('scroll', updateScrollDirection); // clean up
    };
  }, [scrollDirection]);

  return scrollDirection;
}

export default Layout;
