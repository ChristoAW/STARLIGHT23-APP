import { Box, Flex, Button, AspectRatio, Popover } from '@chakra-ui/react';

const Popup = (props) => {
  return (
    <Flex
      w="100%"
      // h={['35%', '42.5%', '70%', '70%']}
      h="100%"
      pos="absolute"
      bgColor="rgba(0,0,0,0.7)"
      onClick={() => props.setPopUp('false')}
      justifyContent="center"
      alignItems="center"
      p={0}
      m={0}
      top={7}
      flexDirection="column"
    >
      <AspectRatio ratio={1546 / 1191} w={['90%', '75%', '65%', '50%']}>
        <Box
          bgImage={props.selectedDivisi.popup}
          w="100%"
          bgSize="contain"
          bgPos="center"
          bgRepeat="no-repeat"
        />
      </AspectRatio>
      {props.selectedDivisi.name !== 'POSEIDON' && (
        <AspectRatio
          ratio={732 / 150}
          w={['45%', '30%', '25%', '20%']}
          my="20px"
          _hover={{
            cursor : "pointer",
            transform: "scale(1.1)"
          }}
          transition=".3s ease-in-out"
        >
          <Box
            bgImage={props.selectedDivisi.button}
            w="70%"
            bgSize="contain"
            bgPos="center"
            bgRepeat="no-repeat"
            onClick={() => {
              window.open(props.selectedDivisi.link);
            }}
          />
        </AspectRatio>
      )}
    </Flex>
  );
};

export default Popup;
