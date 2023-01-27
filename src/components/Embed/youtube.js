import { Box } from '@chakra-ui/react';

const YtEmbed = ({ embedId, title, pos }) => (
  <Box
    as="iframe"
    pos={pos}
    h={{
      base: 'calc(9 * 5.2vw)',
      sm: 'calc(9 * 4.7vw)',
      md: 'calc(9 * 3.1vw)',
    }}
    w={{
      base: 'calc(16 * 5.2vw)',
      sm: 'calc(16 * 4.7vw)',
      md: 'calc(16 * 3.1vw)',
    }}
    src={`https://www.youtube.com/embed/${embedId}?autoplay=1`}
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    title={title}
  />
);

export default YtEmbed;
