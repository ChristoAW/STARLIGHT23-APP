import { Box, Flex, Image, Stack, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";
import theme from "../theme";

import logoStarlight from "../asset/images/logo/starlight.png";

import vidFrame from "../asset/images/pages/about-us/frame.png";

const YtEmbed = ({ embedId, title }) => (
  <Box pos="absolute">
    <iframe
      w="853"
      h="480"
      src={`https://www.youtube.com/embed/${embedId}?autoplay=1`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title={title}
    />
  </Box>
);

YtEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
};

const LatestNews = () => {
  return (
    <Flex
      w="100%"
      justifyContent="center"
      alignItems="center"
      py={{ base: "10", md: "5rem" }}
      bgColor={theme.colors.bg[700]}
      color={theme.colors.text[500]}
    >
      <Image
        src={vidFrame.src}
        alt="Latest News"
        w={{ base: "100%", md: "55vw" }}
        px={{ base: "6", md: "0" }}
        // zIndex={3}
      />
      <Text position="absolute">Latest News</Text>
      <YtEmbed embedId="1RolTkKkp8c" title="Gudetama" />
    </Flex>
  );
};

// const LatestNews = () => {
//   return (
//     <>
//       <Flex
//         w="100%"
//         mt="auto"
//         bottom="0"
//         flexDir="column"
//         bgColor={theme.colors.bg[500]}
//         fontFamily={theme.fonts.montserrat}
//         color={theme.colors.text[500]}
//       >
//         <Flex
//           mx={{ xl: "6vw" }}
//           py={{ base: "10", md: "7" }}
//           px={{ base: "3rem", md: "4rem" }}
//           maxW="7xl"
//           flexDir={{ base: "column", md: "row" }}
//           justifyContent={{ base: "center", xl: "space-between" }}
//           alignItems="center"
//           as="footer"
//         >
//           {/* starlight logo + page navigation */}
//           <Flex
//             flexDir={{ base: "column", md: "row" }}
//             justifyContent="space-evenly"
//             alignItems="center"
//           >
//             <Flex
//               flexDir="column"
//               justifyContent="center"
//               alignItems="center"
//               px={{ md: "2rem", xl: "1rem" }}
//               mb={{ base: "3", md: "" }}
//             >
//               <Image
//                 src={logoStarlight.src}
//                 alt="Starlight 2023"
//                 w="140px"
//                 justifyContent="center"
//               />
//               <Text
//                 fontSize="smaller"
//                 textAlign="center"
//                 display={{ base: "none", md: "block" }}
//               >
//                 Let&#39;s Sail To The Horizon!
//               </Text>
//             </Flex>
//             {/* page navigation */}
//             <Flex
//               px={{ md: "1rem" }}
//               ps={{ xl: "3vw" }}
//               flexDir={{ base: "column", md: "row" }}
//               textAlign={{ base: "center", md: "left" }}
//             >
//               <Stack minW={{ base: "150px", xl: "180px" }}>
//                 <Text to="/">About Us</Text>
//                 <Text to="/">Media</Text>
//                 <Text to="/">Recruitment</Text>
//               </Stack>
//               <Stack minW="100px" py={{ base: "2", md: "0" }}>
//                 <Text to="/">Testimony</Text>
//                 <Text to="/">Talents</Text>
//                 <Text to="/">FAQ</Text>
//               </Stack>
//             </Flex>
//             {/* end page navigation */}
//           </Flex>
//         </Flex>
//       </Flex>
//     </>
//   );
// };

export default LatestNews;
