import { Flex, Link, Button, Image } from '@chakra-ui/react';
import {
  FormBox,
  FormHeading,
  FormSubHeading,
} from '../../../components/registration/styles';

import { Buddy } from '@/components/styles';

import theme from '@/theme';
import NextLink from 'next/link';

import bg from '@/asset/images/bg/bg.jpg';
import bgM from '@/asset/images/bg/bg-m.png';
import qr from '@/asset/images/regist/qrWaGroup.png';

const welcomeUser = () => {
  return (
    <Flex
      w="100%"
      minH="100%"
      justifyContent="center"
      alignItems="center"
      bgImage={{ base: bgM.src, md: bg.src }}
      py={{ base: '10', md: '4rem' }}
      px={{ base: '6', md: '4rem' }}
    >
      <FormBox margin={0}>
        <Flex
          w="100%"
          minH="100%"
          flexDir="column"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
          // bgColor={theme.colors.bg[800]}
        >
          <FormHeading>Welcome aboard!</FormHeading>
          <FormSubHeading mt={1}>Let's start our journey!</FormSubHeading>
          <Link
            target="_blank"
            href="https://chat.whatsapp.com/HDHT3AXBlxbDVxZZSKLFDJ"
            _hover={{
              transform: "scale(1.06)"
            }}
            transition="0.3s linear"
          >
            <Image mb={5} width={{ base: '40vw', md: '20vw' }} src={qr.src} />
          </Link>
          <Buddy>Good Luck, Calon Isthara Starlight UMN 2023! ⭐️</Buddy>
          <NextLink href="/" passHref>
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
