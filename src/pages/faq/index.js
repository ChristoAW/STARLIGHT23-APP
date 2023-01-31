import { Flex, Stack, Text } from '@chakra-ui/react';
import theme from '@/theme';

import { PageTitle } from '@/components/pages/about-us/styling/styles';

import bg from '@/asset/images/bg/bg.jpg';
import bgM from '@/asset/images/bg/bg-m.png';

const FAQ = () => {
  return (
    <>
      <Flex
        minH="100%"
        minW="100%"
        bgImage={{ base: bgM.src, md: bg.src }}
        bgSize="cover"
        bgPos="bottom"
        bgAttachment="fixed"
        overflowX="auto"
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        color={theme.colors.text[300]}
        py={{ base: '10', md: '4rem' }}
        px={{ base: '10vw', md: '5rem' }}
      >
        <PageTitle>
          <i>F</i>re<i>q</i>uently A<i>s</i>ked <i>Q</i>ue<i>s</i>tion<i>s</i>
        </PageTitle>
        <Stack>
          <Text>halo</Text>
          <Text>halo</Text>
          <Text>halo</Text>
          <Text>halo</Text>
          <Text>halo</Text>
          <Text>halo</Text>
          <Text>halo</Text>
          <Text>halo</Text>
          <Text>halo</Text>
          <Text>halo</Text>
          <Text>halo</Text>
          <Text>halo</Text>
          <Text>halo</Text>
          <Text>halo</Text>
          <Text>halo</Text>
          <Text>halo</Text>
        </Stack>

        {/* <Accordion allowToggle>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Section 1 title
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Section 2 title
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>
        </Accordion> */}
      </Flex>
    </>
  );
};

export default FAQ;
