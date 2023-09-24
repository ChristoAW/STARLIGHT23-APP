import { Box, Flex, Text, Link } from '@chakra-ui/react';
import NextLink from 'next/link';

import { useState, useContext, useEffect } from 'react';
import { LayoutContext } from '@/components/context/LayoutContext';

import theme from '@/theme';
import { PageTitle, SubSubHeado } from '@/components/styles';

import bg from '@/asset/images/bg/bg.jpg';
import bgM from '@/asset/images/bg/bg-m.png';

const DisabledCardText = ({ children, ...props }) => {
  return (
    <Text
      fontFamily="Exodus"
      px={5}
      fontSize={{ base: '1.75rem', md: '3rem', sm: '2.25rem' }}
      color="rgba(233, 201, 143, 0.3)"
      cursor="not-allowed"
      {...props}
    >
      {children}
    </Text>
  );
};

const CardText = ({ children, ...props }) => {
  return (
    <Text
      fontFamily="Exodus"
      px={5}
      fontSize={{ base: '1.75rem', md: '3rem', sm: '2.25rem' }}
      color={theme.colors.deco[400]}
      cursor="default"
      {...props}
    >
      {children}
    </Text>
  );
};

const DisabledGlowOnHoverBox = ({ children, ...props }) => {
  return (
    <Flex
      w={{ base: '15rem', md: '25rem' }}
      h={{ base: '15rem', md: '25rem' }}
      bgColor="rgba(1, 1, 1, 0.3)"
      textAlign="center"
      borderWidth="7px"
      borderColor="rgba(225, 180, 92, 0.3)"
      display="flex"
      alignItems="center"
      justifyContent="center"
      transition="box-shadow 0.1s ease"
      cursor="not-allowed"
    >
      <Box
        borderWidth="3px"
        borderColor="rgba(225, 180, 92, 0.3)"
        w={{ base: '12rem', md: '22rem' }}
        h={{ base: '12rem', md: '22rem' }}
        display="flex"
        alignItems="center"
        justifyContent="center"
        mx="1rem"
      >
        <Text
          fontFamily="Exodus"
          fontSize={{ base: '1.75rem', md: '3rem', sm: '2.25rem' }}
        >
          {children}
        </Text>
      </Box>
    </Flex>
  );
};

const GlowOnHoverBox = ({ children, ...props }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Flex
      w={{ base: '15rem', md: '25rem' }}
      h={{ base: '15rem', md: '25rem' }}
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
        w={{ base: '12rem', md: '22rem' }}
        h={{ base: '12rem', md: '22rem' }}
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

const IstharaRegistration = () => {
  const { setTitleSuffix } = useContext(LayoutContext);

  useEffect(() => {
    setTitleSuffix(' - Registration');
  }, [setTitleSuffix]);

  return (
    <Flex
      w="100%"
      pos="relative"
      justifyContent="center"
      alignItems="center"
      py={{ base: '10', md: '4rem' }}
      px={{ base: '10vw', md: '5rem' }}
      flexDirection="column"
      overflowY="hidden"
      bgImage={{ base: bgM.src, md: bg.src }}
      bgSize="cover"
      bgPos="center"
      bgAttachment="fixed"
    >
      <PageTitle>
        Welcome, <i>s</i>tarlighter<i>s</i>!
      </PageTitle>
      <Flex textAlign="center">
        <SubSubHeado color={theme.colors.text[300]}>
          Which role do you want to register for?
        </SubSubHeado>
      </Flex>
      <Flex
        w="100%"
        pos="relative"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
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
          <NextLink href="/registration/ishtara" passHref>
            <Link>
              <GlowOnHoverBox>
                <CardText>
                  I<i>s</i>thara
                </CardText>
              </GlowOnHoverBox>
            </Link>
          </NextLink>
          <NextLink href="/division" passHref>
            <Link>
              <GlowOnHoverBox>
                <CardText>Gerda</CardText>
              </GlowOnHoverBox>
            </Link>
          </NextLink>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default IstharaRegistration;
