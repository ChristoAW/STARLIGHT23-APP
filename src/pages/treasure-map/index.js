import React, { useEffect, useState, useRef } from 'react';
import { Flex, Box, Image, AspectRatio } from '@chakra-ui/react';
import theme from '@/theme';

import { PageTitle } from '@/components/styles';
import bg from '@/asset/images/bg/bg.jpg';
import bgM from '@/asset/images/bg/bg-m.png';
import Map from './Map';
import Popup from './Popup';

function index() {
  const [isAbyssOpened, setIsAbyssOpened] = useState(false);
  const [isLabrysOpened, setIsLabyrsOpened] = useState(false);
  const [isElysiumOpened, setIsElysiumOpened] = useState(false);
  const [currOpen, setCurrOpen] = useState('');

  //Get element dimensions
  const [parentH, setParentH] = useState(0);
  const [parentW, setParentW] = useState(0);
  const parentRef = useRef(null);
  useEffect(() => {
    if (parentH === 0 || parentW === 0) {
      setParentH(parentRef.current.offsetHeight);
      setParentW(parentRef.current.offsetWidth);
    }
    function handleResize() {
      setParentH(parentRef.current.offsetHeight);
      setParentW(parentRef.current.offsetWidth);
    }
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [parentRef]);

  function setOpenedStage(stage) {
    if (stage === 'abyss') {
      setIsAbyssOpened(true);
      setCurrOpen('abyss');
    } else if (stage === 'labyrs') {
      setIsLabyrsOpened(true);
      setCurrOpen('labrys');
    } else if (stage === 'elysium') {
      setIsElysiumOpened(true);
      setCurrOpen('elysium');
    }
  }

  return (
    <Flex
      w="100%"
      h="100%"
      pos="relative"
      justifyContent="center"
      alignItems="center"
      // py={{ base: '10', md: '4rem' }}
      color={theme.colors.text[300]}
      flexDirection="column"
      overflowX="hidden"
      overflowY="hidden"
      bgImage={{ base: bgM.src, md: bg.src }}
      bgSize="cover"
      bgPos="center"
      bgAttachment="fixed"
      ref={parentRef}
    >
      <Map
        setOpenedStage={setOpenedStage}
        isAbyssOpened={isAbyssOpened}
        isLabrysOpened={isLabrysOpened}
        isElysiumOpened={isElysiumOpened}
        currOpen={currOpen}
      />
      {currOpen !== '' ? (
        <Popup parentH={parentH} parentW={parentW} setCurrOpen={setCurrOpen} />
      ) : null}
    </Flex>
  );
}

export default index;
