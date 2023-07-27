import { ChakraProvider } from '@chakra-ui/react';
import Head from 'next/head';

import '../theme/fonts.scss';
import theme from '../theme';
// import CustomCursor from '@/components/cursor/CustomCursor';
import './styles/global.css';

import iconSL from '../../public/favicon.ico';

import LayoutProvider from '../components/context/LayoutContext';
import { useEffect, useState } from 'react';
import Scroll from '@/components/smoothScroll/smoothScroll';
import SplashScreen from '@/components/SplashScreen';

const BaseHead = () => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="Let's Sail To The Horizon" />

      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/logo/starlight.png" />
    </Head>
  );
};

function MyApp({ Component, pageProps }) {
  const [showChild, setShowChild] = useState(false);

  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }
  return (
    <>
      <BaseHead />
      <ChakraProvider theme={theme}>
        <LayoutProvider>
          {/* <CustomCursor /> */}
          {/* <Scroll /> */}
          <SplashScreen />
          <Component {...pageProps} />
        </LayoutProvider>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
