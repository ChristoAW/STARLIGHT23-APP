import { ChakraProvider } from '@chakra-ui/react';
import Head from 'next/head';

import '../theme/fonts.scss';
import theme from '../theme';

import iconSL from '../../public/favicon.ico';

import LayoutProvider from '../components/context/LayoutContext';
import { useEffect, useState } from 'react';
import Scroll from '@/components/smoothScroll/smoothScroll';

// kalo pake base head bagian linknya, icon di hp oke tapi yg di pc ilang
const BaseHead = () => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <link rel="icon" href="../../public/favicon.ico" />
      {/* <link rel="apple-touch-icon" href="../../public/favicon.ico" /> */}
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
      {/* <BaseHead /> */}
      <ChakraProvider theme={theme}>
        <LayoutProvider>
          {/* <Scroll /> */}
          <Component {...pageProps} />
        </LayoutProvider>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
