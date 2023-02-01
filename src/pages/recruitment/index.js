import { useContext, useEffect, useState } from 'react';
import { Flex, Box, Spacer } from '@chakra-ui/react';
import theme from '@/theme';

import { LayoutContext } from '@/components/context/LayoutContext';

import PopUp from './popup';

import listDivisi from '@/data/list-divisi';
import { PageTitle } from '@/components/styles';
import bg from '@/asset/images/bg/bg.jpg';
import bgM from '@/asset/images/bg/bg-m.png';

const Recruitment = () => {
  const { setTitleSuffix } = useContext(LayoutContext);
  const [isPopUp, setPopUp] = useState('false');

  useEffect(() => {
    setTitleSuffix(' - Recruitment');
  }, []);

  return (
    <Flex
      w="100%"
      pos="relative"
      justifyContent="center"
      alignItems="center"
      py={{ base: '10', md: '4rem' }}
      // px={{ base: '10vw', md: '5rem' }}
      color={theme.colors.text[300]}
      flexDirection="column"
      overflowY="hidden"
      bgImage={{ base: bgM.src, md: bg.src }}
      bgSize="cover"
      bgPos="center"
      bgAttachment="fixed"
    >
      <PageTitle>Recruitment</PageTitle>

      <Box
        bgImage={listDivisi[0].logo}
        bgSize="contain"
        w={['23vw', null, null, '15vw']}
        h={['23vw', null, null, '15vw']}
        onClick={() => setPopUp(listDivisi[0].name)}
      />
      {isPopUp === listDivisi[0].name && (
        <PopUp selectedDivisi={listDivisi[0]} setPopUp={setPopUp} />
      )}

      <Flex w="100%" alignContent="center" justifyContent="center">
        <Spacer />
        <Box
          bgImage={listDivisi[1].logo}
          bgSize="contain"
          w={['23vw', null, null, '15vw']}
          h={['23vw', null, null, '15vw']}
          onClick={() => setPopUp(listDivisi[1].name)}
        />
        {isPopUp === listDivisi[1].name && (
          <PopUp selectedDivisi={listDivisi[1]} setPopUp={setPopUp} />
        )}
        <Spacer />
        <Box
          bgImage={listDivisi[2].logo}
          bgSize="contain"
          w={['23vw', null, null, '15vw']}
          h={['23vw', null, null, '15vw']}
          onClick={() => setPopUp(listDivisi[2].name)}
        />
        {isPopUp === listDivisi[2].name && (
          <PopUp selectedDivisi={listDivisi[2]} setPopUp={setPopUp} />
        )}
        <Spacer />
        <Box
          bgImage={listDivisi[3].logo}
          bgSize="contain"
          w={['23vw', null, null, '15vw']}
          h={['23vw', null, null, '15vw']}
          onClick={() => setPopUp(listDivisi[3].name)}
        />
        {isPopUp === listDivisi[3].name && (
          <PopUp selectedDivisi={listDivisi[3]} setPopUp={setPopUp} />
        )}
        <Spacer />
        <Box
          bgImage={listDivisi[4].logo}
          bgSize="contain"
          w={['23vw', null, null, '15vw']}
          h={['23vw', null, null, '15vw']}
          onClick={() => setPopUp(listDivisi[4].name)}
        />
        {isPopUp === listDivisi[4].name && (
          <PopUp selectedDivisi={listDivisi[4]} setPopUp={setPopUp} />
        )}
        <Spacer />
      </Flex>
      <Flex w="100%" alignContent="center" justifyContent="center">
        <Spacer />
        <Box
          bgImage={listDivisi[5].logo}
          bgSize="contain"
          w={['23vw', null, null, '15vw']}
          h={['23vw', null, null, '15vw']}
          onClick={() => setPopUp(listDivisi[5].name)}
        />
        {isPopUp === listDivisi[5].name && (
          <PopUp selectedDivisi={listDivisi[5]} setPopUp={setPopUp} />
        )}
        <Spacer />
        <Box
          bgImage={listDivisi[6].logo}
          bgSize="contain"
          w={['23vw', null, null, '15vw']}
          h={['23vw', null, null, '15vw']}
          onClick={() => setPopUp(listDivisi[6].name)}
        />
        {isPopUp === listDivisi[6].name && (
          <PopUp selectedDivisi={listDivisi[6]} setPopUp={setPopUp} />
        )}
        <Spacer />
        <Box
          bgImage={listDivisi[7].logo}
          bgSize="contain"
          w={['23vw', null, null, '15vw']}
          h={['23vw', null, null, '15vw']}
          onClick={() => setPopUp(listDivisi[7].name)}
        />
        {isPopUp === listDivisi[7].name && (
          <PopUp selectedDivisi={listDivisi[7]} setPopUp={setPopUp} />
        )}
        <Spacer />
        <Box
          bgImage={listDivisi[8].logo}
          bgSize="contain"
          w={['23vw', null, null, '15vw']}
          h={['23vw', null, null, '15vw']}
          onClick={() => setPopUp(listDivisi[8].name)}
        />
        {isPopUp === listDivisi[8].name && (
          <PopUp selectedDivisi={listDivisi[8]} setPopUp={setPopUp} />
        )}
        <Spacer />
      </Flex>
      <Flex w="100%" alignContent="center" justifyContent="center">
        <Spacer />
        <Box
          bgImage={listDivisi[9].logo}
          bgSize="contain"
          w={['23vw', null, null, '15vw']}
          h={['23vw', null, null, '15vw']}
          onClick={() => setPopUp(listDivisi[9].name)}
        />
        {isPopUp === listDivisi[9].name && (
          <PopUp selectedDivisi={listDivisi[9]} setPopUp={setPopUp} />
        )}
        <Spacer />
        <Box
          bgImage={listDivisi[10].logo}
          bgSize="contain"
          w={['23vw', null, null, '15vw']}
          h={['23vw', null, null, '15vw']}
          onClick={() => setPopUp(listDivisi[10].name)}
        />
        {isPopUp === listDivisi[10].name && (
          <PopUp selectedDivisi={listDivisi[10]} setPopUp={setPopUp} />
        )}
        <Spacer />
        <Box
          bgImage={listDivisi[11].logo}
          bgSize="contain"
          w={['23vw', null, null, '15vw']}
          h={['23vw', null, null, '15vw']}
          onClick={() => setPopUp(listDivisi[11].name)}
        />
        {isPopUp === listDivisi[11].name && (
          <PopUp selectedDivisi={listDivisi[11]} setPopUp={setPopUp} />
        )}
        <Spacer />
        <Box
          bgImage={listDivisi[12].logo}
          bgSize="contain"
          w={['23vw', null, null, '15vw']}
          h={['23vw', null, null, '15vw']}
          onClick={() => setPopUp(listDivisi[12].name)}
        />
        {isPopUp === listDivisi[12].name && (
          <PopUp selectedDivisi={listDivisi[12]} setPopUp={setPopUp} />
        )}
        <Spacer />
      </Flex>
    </Flex>
  );
};

export default Recruitment;
