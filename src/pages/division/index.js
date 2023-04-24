import { useContext, useEffect, useState } from 'react';
import { Flex, Box, Grid, GridItem } from '@chakra-ui/react';
import theme from '@/theme';

import { LayoutContext } from '@/components/context/LayoutContext';

import PopUp from './popup';

import listDivisi from '@/data/list-divisi';
import { PageTitle } from '@/components/styles';
import bg from '@/asset/images/bg/bg.jpg';
import bgM from '@/asset/images/bg/bg-m.png';

const Division = () => {
  const { setTitleSuffix } = useContext(LayoutContext);
  const [isPopUp, setPopUp] = useState('false');
  const [isHover, setIsHover] = useState('false');
  const mouseLeaveHandler = () => setIsHover(false);
  const divGrid = createDivGrid();

  useEffect(() => {
    setTitleSuffix(' - Division');
  }, []);

  //Create Grid
  function createDivGrid() {
    var temp = listDivisi.map((div, idx) => {
      return (
        <GridItem
          key={idx}
          colSpan={div.name === 'Poseidon' && [3, 4]}
          margin={'auto'}
        >
          <Box
            bgImage={div.logo}
            bgSize="contain"
            w={
              isHover === div.name
                ? ['25vw', null, null, '17vw']
                : ['23vw', null, null, '15vw']
            }
            h={
              isHover === div.name
                ? ['25vw', null, null, '17vw']
                : ['23vw', null, null, '15vw']
            }
            m={isHover !== div.name && '1vw'}
            onClick={() => {
              if (isPopUp === 'false') setPopUp(div.name);
            }}
            onMouseEnter={() => setIsHover(div.name)}
            onMouseLeave={mouseLeaveHandler}
            _hover={{
              cursor: 'pointer',
              filter: `drop-shadow(0 0 15px var(--chakra-colors-div-${div.name.toUpperCase()}))`,
            }}
          />
        </GridItem>
      );
    });
    return temp;
  }

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
      <PageTitle>
        Divi<i>s</i>ion
      </PageTitle>

      <Grid templateColumns={['repeat(3, 1fr)', 'repeat(4, 1fr)']}>
        {divGrid}
      </Grid>

      {isPopUp !== 'false' && (
        <PopUp
          selectedDivisi={listDivisi.find((div) => {
            return div.name == isPopUp;
          })}
          setPopUp={setPopUp}
          isPopUp={isPopUp}
        />
      )}
    </Flex>
  );
};

export default Division;
