import { Box } from "@chakra-ui/react";
import { useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behaviour: 'smooth',
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <Box
      position="fixed"
      w="100%"
      left="50%"
      bottom="40px"
      h="20px"
      fontSize="3rem"
			color="green"
    >
      <FaArrowCircleUp
        onClick={scrollToTop}
        display={visible ? "block" : "none"}
      />
    </Box>
  );
};

export default ScrollButton;
