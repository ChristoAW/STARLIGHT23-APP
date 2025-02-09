import {
  Box,
  Flex,
  ListItem,
  OrderedList,
  UnorderedList,
  Text,
  Checkbox,
  Link,
  Button,
  Wrap,
} from '@chakra-ui/react';
import NextLink from 'next/link';

import { useState } from 'react';

import theme from '@/theme';
import { Heado } from '@/components/styles';

import FormIstharaContextProvider from '@/components/context/FormIshtaraContext';
import GroupStep from '@/components/registration/group/step';
import NextButton from '@/components/registration/NextButton';

import bg from '@/asset/images/bg/bg.jpg';
import bgM from '@/asset/images/bg/bg-m.png';

const GroupRegist = () => {
  return (
    <Flex
      w="100%"
      pos="relative"
      justifyContent="center"
      py={{ base: '10', md: '4rem' }}
      px={{ base: '6', md: '4rem' }}
      flexDirection="column"
      overflowY="hidden"
      bgImage={{ base: bgM.src, md: bg.src }}
      bgSize="cover"
      bgPos="center"
      bgAttachment="fixed"
    >
      <GroupStep />
    </Flex>
  );
};
export default GroupRegist;
