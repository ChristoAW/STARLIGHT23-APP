import { Box, Flex } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';

const SplashScreen = () => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(true);
  const vid = useRef();

  const [first, setFirst] = useState(true);

  const [shown, setShown] = useState(false);
  const [stop, setStop] = useState(false);

  useEffect(() => {
    const loading = () => {
      setIsLoading(true);
      setShown(false);
      setStop(false);
    };

    const complete = () => setStop(true);

    router.events.on('routeChangeStart', loading);
    router.events.on('routeChangeComplete', complete);

    return () => {
      router.events.off('routeChangeStart', loading);
      router.events.off('routeChangeComplete', complete);
    };
  });

  useEffect(() => {
    if (stop && shown) {
      setIsLoading(false);
    }
  }, [stop, shown]);

  useEffect(() => {
    if (isLoading && !stop) {
      vid.current.load();

      //first page load
      if (first) {
        const ft = setTimeout(() => {
          setIsLoading(false);
          setFirst(false);
          clearTimeout(ft);
        }, 11500);
        return;
      }

      // Minimum time shown
      vid.current.currentTime = 4;
      const st = setTimeout(() => {
        setShown(true);
        clearTimeout(st);
      }, 4500);
    }
  }, [first, stop, isLoading]);

  return (
    isLoading && (
      <Flex
        position="fixed"
        top="0"
        left="0"
        zIndex="2000"
        w="100%"
        h="100%"
        bgGradient="linear(to-b, #100724, #230d3b)"
        alignItems="center"
        justifyContent="center"
        transition="0.4s"
        overflow="hidden"
        // mau dibikin biar fade out gitu, tapi.. nantian yak :)
        // opacity={setShown? 1 : 0}
      >
        <Box
          ref={vid}
          as="video"
          objectFit="cover"
          w="100%"
          h="100%"
          loop
          muted
          playsInline
          onCanPlay={() => vid.current.play()}
        >
          <source src={'/splashScreen/animation-logo.mp4'} type="video/mp4" />
        </Box>
      </Flex>
    )
  );
};

export default SplashScreen;
