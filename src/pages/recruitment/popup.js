import { useEffect } from 'react';
import { Box, Flex, AspectRatio, Image } from '@chakra-ui/react';

const Popup = (props) => {
  useEffect(() => {
    document.getElementById('popup').focus();
  });

  var currDate = new Date().getTime();
  var startDate = new Date('2023-02-06').getTime();

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
      top={0}
      flexDirection="column"
      tabIndex={0}
      id="popup"
    >
      <AspectRatio ratio={1546 / 1191} w={['90%', '75%', '65%', '50%']}>
        {/* <Box
          bgImage={props.selectedDivisi.popup}
          w="100%"
          bgSize="contain"
          bgPos="center"
          bgRepeat="no-repeat"
        /> */}
        <Image
          src={props.selectedDivisi.popup}
          placeholder="blur"
          layout="fill"
          draggable="false"
          onClick={(e) => {
            if (!e) var e = window.event;
            e.cancelBubble = true;
            if (e.stopPropagation) e.stopPropagation();
          }}
        />
      </AspectRatio>
      {/* {props.selectedDivisi.name !== 'POSEIDON' && currDate >= startDate && ( */}
      {props.selectedDivisi.name !== 'POSEIDON' && (
        <AspectRatio
          ratio={732 / 150}
          w={['45%', '30%', '25%', '20%']}
          my="20px"
          _hover={{
            cursor: 'pointer',
            transform: 'scale(1.1)',
          }}
          transition=".3s ease-in-out"
        >
          <Box
            bgImage={props.selectedDivisi.button}
            w="70%"
            bgSize="contain"
            bgPos="center"
            bgRepeat="no-repeat"
            onClick={(e) => {
              if (!e) var e = window.event;
              e.cancelBubble = true;
              if (e.stopPropagation) e.stopPropagation();
              window.open(props.selectedDivisi.link);
            }}
          />
        </AspectRatio>
      )}
    </Flex>
  );
};

export default Popup;
