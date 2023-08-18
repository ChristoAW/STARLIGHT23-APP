import {
  FormBox,
  FormHeading,
  FormSubHeading,
  FormTextImportant,
  FormText,
  FormInputImportant,
  FormInput,
  FormTextareaImportant,
  FormTextarea,
  FormNotes,
  FormInputFile,
  FormInputDate,
  FormInputNIM,
  FormInputTel,
  FormInputEmail,
} from '../../../components/registration/styles';
import { useState } from 'react';
import theme from '@/theme';
import NextLink from 'next/link';
import {
  LogoStarlight,
  TitleStarlight,
} from '@/components/pages/about-us/styling/images';
import { Box, Divider, Flex, Link, Button } from '@chakra-ui/react';
import bg from '@/asset/images/bg/bg.jpg';
import bgM from '@/asset/images/bg/bg-m.png';

const welcomeUser = () => {
  return (
    <Flex
      w="100%"
      minH="100%"
      bgImage={{ base: bgM.src, md: bg.src }}
      py={{ base: '10', md: '4rem' }}
      px={{ base: '6', md: '4rem' }}
    >
      <FormBox>
        <Flex
          w="100%"
          minH="100%"
          flexDir="column"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
          px={{ base: '15vw', sm: '12vw', md: '15vw' }}
          py={{ base: '10', md: '5rem' }}
          // bgColor={theme.colors.bg[800]}
        >
          <FormHeading>CONGRATULATIONS</FormHeading>
          <FormSubHeading>
            You are now officially part of Ishtara Starlight 2023
          </FormSubHeading>
          <TitleStarlight />
          <NextLink href="/pages/about-us/about-us" passHref>
            <Link
              mt="4rem"
              h="3rem"
              w="9rem"
              color={theme.colors.deco[400]}
              bgColor={theme.colors.bg[700]}
              border="1px"
              as={Button}
              type="submit"
              _hover={{ bgColor: '0,0,0', color: ' rgb(227,218,201)' }}
            >
              Home
            </Link>
          </NextLink>
        </Flex>
      </FormBox>
    </Flex>
  );
};

export default welcomeUser;
