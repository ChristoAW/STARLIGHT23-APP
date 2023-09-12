import { Box, Divider } from '@chakra-ui/react';
import { useContext, useEffect } from 'react';

import { LayoutContext } from '@/components/context/LayoutContext';

import LatestNews from '@/components/pages/about-us/latest';
import TreasureMap from '@/components/pages/about-us/treasure-map';
import AboutUs from '@/components/pages/about-us/about-us';
import Media from '@/components/pages/about-us/media';

import bg from '@/asset/images/bg/bg.jpg';
import bgM from '@/asset/images/bg/bg-m.png';
import theme from '@/theme';

const Home = () => {
  const { setTitleSuffix } = useContext(LayoutContext);

  useEffect(() => {
    setTitleSuffix(' - About Us');
  }, [setTitleSuffix]);

  return (
    <>
      <Box
        minH="100vh"
        bgImage={{ base: bgM.src, md: bg.src }}
        bgSize="cover"
        bgPos="center"
        bgAttachment="fixed"
      >
        {/* <LatestNews /> */}
        <TreasureMap />
        <Box px={{ base: 6, sm: 14, md: 20 }}>
          <Divider
            orientation="horizontal"
            mt={{ base: 12, md: 28 }}
            borderWidth=".05rem"
            borderColor={theme.colors.text[300]}
          />
        </Box>
        <AboutUs />
        <Media />
      </Box>
    </>
  );
};

export default Home;
