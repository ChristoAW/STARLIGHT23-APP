import { Flex, Text } from "@chakra-ui/react";

import theme from "@/theme";

const AboutUs = () => {
	const fsizee = {
    head: {
      base: 'calc(.6rem + 2.5vw)',
      md: 'calc(.1rem + 1.5vw)',
    },
    subHead: {
      base: 'calc(.2rem + 2.25vw)',
      md: 'calc(.25rem + 1vw)',
    },
    body: {
      base: 'calc(.17rem + 2vw)',
      md: 'calc(.3rem + .75vw)',
    },
  };

  return (
    <Flex
      w="100%"
      minH="100%"
      justifyContent="center"
      alignItems="center"
			py={{ base: '10', md: '5rem' }}
			bgColor={theme.colors.bg[800]}
			color={theme.colors.text[300]}
    >
			<Text fontFamily="Exodus">ABOUT U<i>S</i></Text>
		</Flex>
  );
};

export default AboutUs;
