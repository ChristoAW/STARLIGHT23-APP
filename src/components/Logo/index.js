import { Flex, Image } from '@chakra-ui/react';

const Logo = ({
  w,
  h,
  size,
  img,
  alt,
  objectFit = 'contain',
  useMap,
  children,
  ...props
}) => (
  <Flex flex="1 0 auto" w={w} h={h} maxH="fit-content" {...props}>
    <Image
      src={img}
      alt={alt}
      objectFit={objectFit}
      w="fit-content"
      h="auto"
      maxW="100%"
      maxH="100%"
      boxSize={size}
      useMap={useMap}
    />
    {children}
  </Flex>
);

export default Logo;
