import { Flex, Text, Link } from "@chakra-ui/react";
import theme from "@/theme";
import {
  FaInstagram,
  FaYoutube,
  FaRegEnvelope,
  FaTiktok,
} from "react-icons/fa";

const Contact = () => {
  return (
    <Flex
      py={{ base: "4", md: "3" }}
      px={{ md: "12vw", xl: "4vw" }}
      fontFamily={theme.fonts.montserrat}
      bgColor={theme.colors.bg[600]}
      flexDir={{ base: "column", md: "row" }}
      justifyContent="space-between"
      alignItems="center"
    >
      <Flex alignItems="center" mb={{ base: "3", md: "0" }}>
        <Text fontSize="x-small" me="1" display={{ base: "none", md: "block" }}>
          FIND US ON
        </Text>
        <Link mx="2" href="https://www.instagram.com/starlightumn/" isExternal>
          <FaInstagram size="22" />
        </Link>
        <Link mx="2" href="https://www.tiktok.com/@starlight.umn" isExternal>
          <FaTiktok size="20" />
        </Link>
        <Link
          mx="2"
          href="https://www.youtube.com/channel/UCaREK9fEXHiKvrpLK7rrJYQ"
          isExternal
        >
          <FaYoutube size="25" />
        </Link>
        <Link mx="2" href="mailto:starlight@umn.ac.id" isExternal>
          <FaRegEnvelope size="25" />
        </Link>
      </Flex>
      <Text fontSize="x-small">© STARLIGHT 2023</Text>
    </Flex>
  );
};

export default Contact;
