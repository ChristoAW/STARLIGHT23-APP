import { useContext, useEffect, useState } from 'react';
import { Flex, Box, Spacer, list } from '@chakra-ui/react';
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
  const [isHover, setIsHover] = useState('false');
  const mouseLeaveHandler = () => setIsHover(false);

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
        w={
          isHover === listDivisi[0].name
            ? ['25vw', null, null, '17vw']
            : ['23vw', null, null, '15vw']
        }
        h={
          isHover === listDivisi[0].name
            ? ['25vw', null, null, '17vw']
            : ['23vw', null, null, '15vw']
        }
        m={isHover !== listDivisi[0].name && '1vw'}
        onClick={() => setPopUp(listDivisi[0].name)}
        onMouseEnter={() => setIsHover(listDivisi[0].name)}
        onMouseLeave={mouseLeaveHandler}
      />
      {isPopUp === listDivisi[0].name && (
        <PopUp selectedDivisi={listDivisi[0]} setPopUp={setPopUp} />
      )}

      <Flex w="100%" alignContent="center" justifyContent="center">
        <Spacer />
        <Box
          bgImage={listDivisi[1].logo}
          bgSize="contain"
          w={
            isHover === listDivisi[1].name
              ? ['25vw', null, null, '17vw']
              : ['23vw', null, null, '15vw']
          }
          h={
            isHover === listDivisi[1].name
              ? ['25vw', null, null, '17vw']
              : ['23vw', null, null, '15vw']
          }
          m={isHover !== listDivisi[1].name && '1vw'}
          onClick={() => setPopUp(listDivisi[1].name)}
          onMouseEnter={() => setIsHover(listDivisi[1].name)}
          onMouseLeave={mouseLeaveHandler}
        />
        {isPopUp === listDivisi[1].name && (
          <PopUp selectedDivisi={listDivisi[1]} setPopUp={setPopUp} />
        )}
        <Spacer />
        <Box
          bgImage={listDivisi[2].logo}
          bgSize="contain"
          w={
            isHover === listDivisi[2].name
              ? ['25vw', null, null, '17vw']
              : ['23vw', null, null, '15vw']
          }
          h={
            isHover === listDivisi[2].name
              ? ['25vw', null, null, '17vw']
              : ['23vw', null, null, '15vw']
          }
          m={isHover !== listDivisi[2].name && '1vw'}
          onClick={() => setPopUp(listDivisi[2].name)}
          onMouseEnter={() => setIsHover(listDivisi[2].name)}
          onMouseLeave={mouseLeaveHandler}
        />
        {isPopUp === listDivisi[2].name && (
          <PopUp selectedDivisi={listDivisi[2]} setPopUp={setPopUp} />
        )}
        <Spacer />
        <Box
          bgImage={listDivisi[3].logo}
          bgSize="contain"
          w={
            isHover === listDivisi[3].name
              ? ['25vw', null, null, '17vw']
              : ['23vw', null, null, '15vw']
          }
          h={
            isHover === listDivisi[3].name
              ? ['25vw', null, null, '17vw']
              : ['23vw', null, null, '15vw']
          }
          m={isHover !== listDivisi[3].name && '1vw'}
          onClick={() => setPopUp(listDivisi[3].name)}
          onMouseEnter={() => setIsHover(listDivisi[3].name)}
          onMouseLeave={mouseLeaveHandler}
        />
        {isPopUp === listDivisi[3].name && (
          <PopUp selectedDivisi={listDivisi[3]} setPopUp={setPopUp} />
        )}
        <Spacer />
        <Box
          bgImage={listDivisi[4].logo}
          bgSize="contain"
          w={
            isHover === listDivisi[4].name
              ? ['25vw', null, null, '17vw']
              : ['23vw', null, null, '15vw']
          }
          h={
            isHover === listDivisi[4].name
              ? ['25vw', null, null, '17vw']
              : ['23vw', null, null, '15vw']
          }
          m={isHover !== listDivisi[4].name && '1vw'}
          onClick={() => setPopUp(listDivisi[4].name)}
          onMouseEnter={() => setIsHover(listDivisi[4].name)}
          onMouseLeave={mouseLeaveHandler}
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
          w={
            isHover === listDivisi[5].name
              ? ['25vw', null, null, '17vw']
              : ['23vw', null, null, '15vw']
          }
          h={
            isHover === listDivisi[5].name
              ? ['25vw', null, null, '17vw']
              : ['23vw', null, null, '15vw']
          }
          m={isHover !== listDivisi[5].name && '1vw'}
          onClick={() => setPopUp(listDivisi[5].name)}
          onMouseEnter={() => setIsHover(listDivisi[5].name)}
          onMouseLeave={mouseLeaveHandler}
        />
        {isPopUp === listDivisi[5].name && (
          <PopUp selectedDivisi={listDivisi[5]} setPopUp={setPopUp} />
        )}
        <Spacer />
        <Box
          bgImage={listDivisi[6].logo}
          bgSize="contain"
          w={
            isHover === listDivisi[6].name
              ? ['25vw', null, null, '17vw']
              : ['23vw', null, null, '15vw']
          }
          h={
            isHover === listDivisi[6].name
              ? ['25vw', null, null, '17vw']
              : ['23vw', null, null, '15vw']
          }
          m={isHover !== listDivisi[6].name && '1vw'}
          onClick={() => setPopUp(listDivisi[6].name)}
          onMouseEnter={() => setIsHover(listDivisi[6].name)}
          onMouseLeave={mouseLeaveHandler}
        />
        {isPopUp === listDivisi[6].name && (
          <PopUp selectedDivisi={listDivisi[6]} setPopUp={setPopUp} />
        )}
        <Spacer />
        <Box
          bgImage={listDivisi[7].logo}
          bgSize="contain"
          w={
            isHover === listDivisi[7].name
              ? ['25vw', null, null, '17vw']
              : ['23vw', null, null, '15vw']
          }
          h={
            isHover === listDivisi[7].name
              ? ['25vw', null, null, '17vw']
              : ['23vw', null, null, '15vw']
          }
          m={isHover !== listDivisi[7].name && '1vw'}
          onClick={() => setPopUp(listDivisi[7].name)}
          onMouseEnter={() => setIsHover(listDivisi[7].name)}
          onMouseLeave={mouseLeaveHandler}
        />
        {isPopUp === listDivisi[7].name && (
          <PopUp selectedDivisi={listDivisi[7]} setPopUp={setPopUp} />
        )}
        <Spacer />
        <Box
          bgImage={listDivisi[8].logo}
          bgSize="contain"
          w={
            isHover === listDivisi[8].name
              ? ['25vw', null, null, '17vw']
              : ['23vw', null, null, '15vw']
          }
          h={
            isHover === listDivisi[8].name
              ? ['25vw', null, null, '17vw']
              : ['23vw', null, null, '15vw']
          }
          m={isHover !== listDivisi[8].name && '1vw'}
          onClick={() => setPopUp(listDivisi[8].name)}
          onMouseEnter={() => setIsHover(listDivisi[8].name)}
          onMouseLeave={mouseLeaveHandler}
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
          w={
            isHover === listDivisi[9].name
              ? ['25vw', null, null, '17vw']
              : ['23vw', null, null, '15vw']
          }
          h={
            isHover === listDivisi[9].name
              ? ['25vw', null, null, '17vw']
              : ['23vw', null, null, '15vw']
          }
          m={isHover !== listDivisi[9].name && '1vw'}
          onClick={() => setPopUp(listDivisi[9].name)}
          onMouseEnter={() => setIsHover(listDivisi[9].name)}
          onMouseLeave={mouseLeaveHandler}
        />
        {isPopUp === listDivisi[9].name && (
          <PopUp selectedDivisi={listDivisi[9]} setPopUp={setPopUp} />
        )}
        <Spacer />
        <Box
          bgImage={listDivisi[10].logo}
          bgSize="contain"
          w={
            isHover === listDivisi[10].name
              ? ['25vw', null, null, '17vw']
              : ['23vw', null, null, '15vw']
          }
          h={
            isHover === listDivisi[10].name
              ? ['25vw', null, null, '17vw']
              : ['23vw', null, null, '15vw']
          }
          m={isHover !== listDivisi[10].name && '1vw'}
          onClick={() => setPopUp(listDivisi[10].name)}
          onMouseEnter={() => setIsHover(listDivisi[10].name)}
          onMouseLeave={mouseLeaveHandler}
        />
        {isPopUp === listDivisi[10].name && (
          <PopUp selectedDivisi={listDivisi[10]} setPopUp={setPopUp} />
        )}
        <Spacer />
        <Box
          bgImage={listDivisi[11].logo}
          bgSize="contain"
          w={
            isHover === listDivisi[11].name
              ? ['25vw', null, null, '17vw']
              : ['23vw', null, null, '15vw']
          }
          h={
            isHover === listDivisi[11].name
              ? ['25vw', null, null, '17vw']
              : ['23vw', null, null, '15vw']
          }
          m={isHover !== listDivisi[11].name && '1vw'}
          onClick={() => setPopUp(listDivisi[11].name)}
          onMouseEnter={() => setIsHover(listDivisi[11].name)}
          onMouseLeave={mouseLeaveHandler}
        />
        {isPopUp === listDivisi[11].name && (
          <PopUp selectedDivisi={listDivisi[11]} setPopUp={setPopUp} />
        )}
        <Spacer />
        <Box
          bgImage={listDivisi[12].logo}
          bgSize="contain"
          w={
            isHover === listDivisi[12].name
              ? ['25vw', null, null, '17vw']
              : ['23vw', null, null, '15vw']
          }
          h={
            isHover === listDivisi[12].name
              ? ['25vw', null, null, '17vw']
              : ['23vw', null, null, '15vw']
          }
          m={isHover !== listDivisi[12].name && '1vw'}
          onClick={() => setPopUp(listDivisi[12].name)}
          onMouseEnter={() => setIsHover(listDivisi[12].name)}
          onMouseLeave={mouseLeaveHandler}
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
