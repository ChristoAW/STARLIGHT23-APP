import { useContext, useEffect, useRef } from 'react';
import theme from '@/theme';

import { LayoutContext } from '@/components/context/LayoutContext';
import { useInView, motion } from 'framer-motion';

import LatestNews from './home/latest';
import TreasureMap from './home/treasure-map';
import AboutUs from './home/about-us';

const Home = () => {
  const { setTitleSuffix, setInView } = useContext(LayoutContext);

  // const [latest, inViewLatest] = useInView({
  // 	threshold: 0.1
  // });

  // const [aboutUs, inViewAboutUs] = useInView({
  // 	threshold: 0.1
  // });

  useEffect(() => {
    setTitleSuffix(' - Home');

    // if (inViewLatest)
    // 	setInView("Latest");
    // if (inViewAboutUs)
    // 	setInView("ABOUT U<i>S</i>");
  }, [
    setTitleSuffix,
    // inViewAboutUs, inViewLatest, setInView
  ]);

  return (
    <>
      <LatestNews />
      {/* <LatestNews ref={latest}/> */}
      <TreasureMap />
      <AboutUs />
    </>
  );
};

export default Home;
