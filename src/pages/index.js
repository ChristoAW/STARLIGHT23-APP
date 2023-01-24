import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import { useContext, useEffect, useRef } from "react";
import theme from "../theme";

import { LayoutContext } from "../components/context/LayoutContext";
import { useInView, motion } from "framer-motion"

import LatestNews from "./latest";
import ScrollButton from "../components/ScrollToTop/scrollButton";

const Star = () => {
  const { setTitleSuffix, setInView } = useContext(LayoutContext);

	// const [latest, inViewLatest] = useInView({
	// 	threshold: 0.1
	// });

	// const [aboutUs, inViewAboutUs] = useInView({
	// 	threshold: 0.1
	// });

  useEffect(() => {
    setTitleSuffix(" - About Us");

		// if (inViewLatest)
		// 	setInView("Latest");
		// if (inViewAboutUs)
		// 	setInView("ABOUT U<i>S</i>");
  }, [setTitleSuffix, 
		// inViewAboutUs, inViewLatest, setInView
	]);

  return (
    <>
			<LatestNews/>
			{/* <LatestNews ref={latest}/> */}
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
        <Text id="bibi">disini</Text>
        <Text>halo</Text>
        <motion.Text>ABOUT US</motion.Text>
        <Text>halo</Text>
        <Text>halo</Text>
        <Text>halo</Text>
        <Text>halo</Text>
      </Stack> */}
    </>
  );
};

export default Star;
