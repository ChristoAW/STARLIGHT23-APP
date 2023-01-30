import { Flex, Stack, Text } from '@chakra-ui/react';
import theme from '@/theme';

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
        bgPos="center"
        overflowX="auto"
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        py={{ base: '10', md: '5rem' }}
        // bgColor={theme.colors.bg[700]}
        color={theme.colors.text[300]}
      >
				{/* <Stack>
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
				</Stack> */}
			</Flex>
    </>
  );
};

export default FAQ;
