import { Text } from '@chakra-ui/react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

import theme from '@/theme';

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 },
};

export const Heado = ({ children, ...props }) => {
  return (
    <Text
      fontFamily="Exodus"
      fontSize={{
        base: 'calc(.5rem + 5vw)',
        md: 'calc(.6rem + 4vw)',
      }}
      // textShadow={Array(1)
      //   .fill()
      //   .map((e, i) => `0 0 ${i + 2}0px var(--chakra-colors-text-300)`)
      //   .join(', ')}
      color={theme.colors.text[300]}
      {...props}
    >
      {children}
    </Text>
  );
};

export const SubHeado = ({ children, ...props }) => {
  return (
    <Text
      mb="2"
      fontFamily="Exodus"
      fontSize={{
        base: 'calc(.6rem + 3vw)',
        md: 'calc(.35rem + 2vw)',
      }}
      color={theme.colors.text[300]}
      textShadow={{
        base: `${Array(2)
          .fill()
          .map((e, i) => `0 0 ${i + 2}0px var(--chakra-colors-text-300)`)
          .join(', ')}`,
        md: `${Array(1)
          .fill()
          .map((e, i) => `0 0 ${i + 2}0px var(--chakra-colors-text-300)`)
          .join(', ')}`,
      }}
      {...props}
    >
      {children}
    </Text>
  );
};

export const SubSubHeado = ({ children, ...props }) => {
  return (
    <Text
      mb={0.5}
      fontFamily="Montserrat"
      fontSize={{
        base: 'calc(.4rem + 2vw)',
        md: 'calc(.3rem + 1vw)',
      }}
      color={theme.colors.text[500]}
      textShadow={Array(1)
        .fill()
        .map((e, i) => `0 0 ${i + 2}0px var(--chakra-colors-text-300)`)
        .join(', ')}
      {...props}
    >
      {children}
    </Text>
  );
};

export const Buddy = ({ children, ...props }) => {
  return (
    <Text
      fontSize={{
        base: 'md',
        md: 'lg',
        xl: 'xl',
      }}
      color={theme.colors.text[600]}
      {...props}
    >
      {children}
    </Text>
  );
};
