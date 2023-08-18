import { Box, Flex, Text, Link } from '@chakra-ui/react';
import NextLink from 'next/link';

import { useState } from 'react';

import theme from '@/theme';
import { PageTitle } from '@/components/styles';

import bg from '@/asset/images/bg/bg.jpg';
import bgM from '@/asset/images/bg/bg-m.png';
const CardText = ({ children, ...props }) => {
  return (
    <Text
      fontFamily="Exodus"
      fontSize={{ base: '1.75rem', md: '3rem', sm: '2.25rem' }}
      color={theme.colors.deco[400]}
      cursor="default"
      {...props}
    >
      {children}
    </Text>
  );
};

const GlowOnHoverBox = ({ children }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Flex
      w="25rem"
      h="25rem"
      bgColor="rgba(1, 1, 1, 0.5)"
      textAlign="center"
      borderWidth="7px"
      borderColor={theme.colors.deco[500]}
      display="flex"
      alignItems="center"
      justifyContent="center"
      transition="box-shadow 0.1s ease"
      boxShadow={isHovered ? '0 0 20px rgba(255, 255, 255, 0.5)' : 'none'}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      cursor="default"
    >
      <Box
        borderWidth="3px"
        borderColor={theme.colors.deco[500]}
        w="22rem"
        h="22rem"
        display="flex"
        alignItems="center"
        justifyContent="center"
        mx="1rem"
      >
        <Text
          fontFamily="Exodus"
          fontSize={{ base: '1.75rem', md: '3rem', sm: '2.25rem' }}
          color={theme.colors.deco[400]}
          textShadow={isHovered ? '0 0 20px rgba(233, 201, 143, 0.5)' : 'none'}
        >
          {children}
        </Text>
      </Box>
    </Flex>
  );
};

const formIshtara = () => {
  return (
    <Flex
      w="100%"
      pos="relative"
      justifyContent="center"
      alignItems="center"
      py={{ base: '10', md: '4rem' }}
      px={{ base: '6', md: '4rem' }}
      flexDirection="column"
      overflowY="hidden"
      bgImage={{ base: bgM.src, md: bg.src }}
      bgSize="cover"
      bgPos="center"
      bgAttachment="fixed"
    >
      <PageTitle textShadow="0 0 20px #b8dafe">
        Welcome, <i>s</i>tarlighter<i>s</i>!
      </PageTitle>
      <Flex textAlign="center">
        <Text
          fontSize={{ base: '1.25rem', md: '1.5rem', xl: '1.75rem' }}
          mt="2rem"
          color={theme.colors.text[300]}
          fontFamily="Montserrat"
        >
          Before expressing your true colors at Starlight 2023, please fill out
          this form!
        </Text>
      </Flex>
      <Flex
        w="100%"
        pos="relative"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        py={{ base: '10', md: '4rem' }}
        overflowY="hidden"
        textAlign="center"
      >
        <Flex
          w="70%"
          mx="auto"
          alignItems="center"
          justifyContent="center"
          mt="4rem"
          mb={{ base: '6rem', md: '10rem' }}
          flexDir={{ base: 'column', lg: 'row' }}
          gap={{ base: '10', md: '150', xl: '200' }}
        >
          <NextLink href="./ishtaraReg/solo" passHref>
            <Link>
              <GlowOnHoverBox>
                <CardText>
                  <i>S</i>olo
                </CardText>
              </GlowOnHoverBox>
            </Link>
          </NextLink>
          <NextLink href="./ishtaraReg/group" passHref>
            <Link>
              <GlowOnHoverBox>
                <CardText>Group</CardText>
              </GlowOnHoverBox>
            </Link>
          </NextLink>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default formIshtara;
