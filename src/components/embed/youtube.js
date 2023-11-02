import React from 'react';
import { Box } from '@chakra-ui/react';

const YtEmbed = ({ embedId, title, pos }) => {
  // Safari 3.0+ "[object HTMLElementConstructor]" 
  const isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));
  
  return (
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
      src={isSafari ? `https://www.youtube.com/embed/${embedId}?mute=1` : `https://www.youtube.com/embed/${embedId}?autoplay=1&mute=1`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title={title}
    />
    // dikecilin volumenya / mute
    // seminggu berikutnya dimatiin autoplaynya
  );
};

export default YtEmbed;
