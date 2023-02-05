import { useEffect } from 'react';
import { Box, ListItem, UnorderedList } from '@chakra-ui/react';

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { Buddy, SubHeado, SubSubHeado } from '../../../styles';
import theme from '@/theme';

const theVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0.5 },
};

export const SubHeadBody = ({ header, body, ...props }) => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start('visible');
    } else {
      control.start('hidden');
    }
  }, [control, inView]);

  return (
    <Box
      as={motion.div}
      ref={ref}
      variants={theVariant}
      initial="hidden"
      animate={control}
      {...props}
    >
      <SubHeado>{header}</SubHeado>
      <Buddy>{body}</Buddy>
    </Box>
  );
};

export const SubSubHeadBody = ({ title, header, body, ...props }) => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start('visible');
    } else {
      control.start('hidden');
    }
  }, [control, inView]);

  return (
    <Box
      as={motion.div}
      ref={ref}
      variants={theVariant}
      initial="hidden"
      animate={control}
      {...props}
    >
      <SubSubHeado>{title}</SubSubHeado>
      <SubHeado>{header}</SubHeado>
      <Buddy>{body}</Buddy>
    </Box>
  );
};

export const WithList = ({ header, list1, list2, ...props }) => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start('visible');
    } else {
      control.start('hidden');
    }
  }, [control, inView]);
  return (
    <Box
      as={motion.div}
      ref={ref}
      variants={theVariant}
      initial="hidden"
      animate={control}
      color={theme.colors.text[600]}
      {...props}
    >
      <SubHeado>{header}</SubHeado>
      <UnorderedList listStyleType="none">
        <ListItem>
          <Buddy>{list1}</Buddy>
        </ListItem>
        <ListItem mt={4}>
          <Buddy>{list2}</Buddy>
        </ListItem>
      </UnorderedList>
    </Box>
  );
};
