import React from 'react';
import { Box } from '@chakra-ui/react';
// import Youtube from 'react-youtube'

const YtEmbed = ({ embedId, title, pos }) => (
  <Box
    as="iframe"
    pos={pos}
    h={{
      base: 'calc(9 * 5.2vw)',
      sm: 'calc(9 * 4.7vw)',
      md: 'calc(9 * 4vw)',
      xl: 'calc(9 * 3.4vw)',
    }}
    w={{
      base: 'calc(16 * 5.2vw)',
      sm: 'calc(16 * 4.7vw)',
      md: 'calc(16 * 4vw)',
      xl: 'calc(16 * 3.4vw)',
    }}
    // w={{ base: '100%', md: '70vw', xl: '60vw' }}
    src={`https://www.youtube.com/embed/${embedId}?autoplay=1&mute=1`}
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    title={title}
  />
  // dikecilin volumenya / mute
  // seminggu berikutnya dimatiin autoplaynya
);

const Example = ({ embedId, title, pos, ...props }) => {
  const opts = {
    playerVars: {
      autoplay: 1,
    },
  };

  function _onReady (e) {
    e.target.setVolume(30);
    e.target.playVideo();
  };

  return (
    <Box
      title={title}
      pos={pos}
      h={{
        base: 'calc(9 * 5.2vw)',
        sm: 'calc(9 * 3.7vw)',
        md: 'calc(9 * 4vw)',
        xl: 'calc(9 * 3.4vw)',
      }}
      w={{
        base: 'calc(16 * 5.2vw)',
        sm: 'calc(16 * 4.7vw)',
        md: 'calc(16 * 4vw)',
        xl: 'calc(16 * 3.4vw)',
      }}
      {...props}
    >
      <Youtube videoId={embedId} opts={opts} onReady={_onReady} />
    </Box>
  );
};

export default YtEmbed;
