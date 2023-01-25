import { Box } from "@chakra-ui/react";

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

export default YtEmbed;