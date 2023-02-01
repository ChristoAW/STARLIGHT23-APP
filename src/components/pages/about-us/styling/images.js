import { Image } from '@chakra-ui/react';
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import textStarlight from '@/asset/images/logo/starlight-title.png';
import logoStarlight from '@/asset/images/logo/starlight.png';

const theVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0.5 },
};

export const TitleStarlight = () => {
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
    <Image
      src={textStarlight.src}
      alt="Starlight 2023"
      w={{ base: '16rem', md: 'calc(8rem + 20vw)' }}
      mt={{ base: '10', md: '5rem' }}
      // safari filter (?)
      sx={{
        base: {
          WebkitFilter: 'drop-shadow(0 0 20px var(--chakra-colors-text-500))',
        },
        md: {
          WebkitFilter: 'drop-shadow(0 0 0 var(--chakra-colors-text-600))',
        },
      }}
      // masih perlu ini kah?
      filter={{
        base: 'drop-shadow(0 0 20px var(--chakra-colors-text-500))',
        md: 'drop-shadow(0 0 0 var(--chakra-colors-text-600))',
      }}
      as={motion.img}
      ref={ref}
      variants={theVariant}
      initial="hidden"
      animate={control}
    />
  );
};

export const LogoStarlight = () => {
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
    <Image
      src={logoStarlight.src}
      alt="Logo Starlight 2023"
      w={{ base: '12rem', md: 'calc(2rem + 20vw)' }}
      pb={{ base: '5', md: '8' }}
      as={motion.img}
      ref={ref}
      variants={theVariant}
      initial="hidden"
      animate={control}
    />
  );
};
