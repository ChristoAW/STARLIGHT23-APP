import { useEffect, useState } from 'react';
import {
  Box,
  Flex,
  AspectRatio,
  Image,
  Wrap,
  WrapItem,
  keyframes,
  Text,
} from '@chakra-ui/react';

//dynamic window dimensions checker
function getWindowsDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return { width, height };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowsDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowsDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

const Popup = (props) => {
  useEffect(() => {
    document.getElementById('popup').focus();
  });

  const { height, width } = useWindowDimensions();
  const [revealed, setRevealed] = useState(0);

  const fade = keyframes`from {opacity: 0%}; to {opacity: 100%}`;

  if (props.selectedDivisi.name !== 'POSEIDON') {
    var listNama = props.selectedDivisi.members.map((member, idx) => {
      return (
        <WrapItem
          key={idx}
          animation={`${fade} ${
            Math.floor(Math.random() * 3) + Math.floor(Math.random() * 5)
          }s linear`}
        >
          <Text fontSize={height > width ? ['2vw', '2.5vw'] : ['3vw', '1.3vw']}>
            {member}
          </Text>
        </WrapItem>
      );
    });

    // console.log(listNama);
    // // Count Down (semoga berhasil :p -> update suda berhasil yey)
    // const [currDate, setCurrDate] = useState(new Date().getTime());
    // var startDate = new Date('2023-03-01').setHours(0); // midnight

    // useEffect(() => {
    //   const interval = setInterval(() => {
    //     setCurrDate(new Date().getTime());
    //     // console.log("Date : " + currDate);
    //   }, 1000);
    //   return() => clearInterval(interval);
    // },[])
    // // End Count Down

    return (
      <Flex
        w="100%"
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
        {height > width ? (
          <AspectRatio ratio={1191 / 1645} w={'75%'}>
            {revealed ? (
              <Flex
                bgImage={props.selectedDivisi.popupmbg}
                w="75%"
                bgSize="contain"
                bgPos="center"
                bgRepeat="no-repeat"
                onClick={(e) => {
                  if (!e) var e = window.event;
                  e.cancelBubble = true;
                  if (e.stopPropagation) e.stopPropagation();
                  setRevealed(0);
                  // setOpacity(0);
                }}
                // animation={
                //   opacity ? `${fade} 2s linear` : `${fade} 2s linear reverse`
                // }
                // onAnimationEnd={() => {
                //   if (revealed) setRevealed(0);
                // }}
              >
                <Wrap
                  w="70%"
                  position="absolute"
                  top="50%"
                  align="center"
                  justify="space-evenly"
                >
                  {listNama}
                </Wrap>
              </Flex>
            ) : (
              <Image
                src={props.selectedDivisi.popupm}
                placeholder="blur"
                layout="fill"
                draggable="false"
                onClick={(e) => {
                  if (!e) var e = window.event;
                  e.cancelBubble = true;
                  if (e.stopPropagation) e.stopPropagation();
                  setRevealed(1);
                  // setOpacity(1);
                }}
                // animation={
                //   opacity ? `${fade} 2s linear reverse` : `${fade} 2s linear`
                // }
                // onAnimationEnd={() => {
                //   if (!revealed) setRevealed(1);
                // }}
              />
            )}
          </AspectRatio>
        ) : (
          <AspectRatio ratio={1546 / 1191} w={['90%', '75%', '65%', '50%']}>
            {revealed ? (
              <Flex
                bgImage={props.selectedDivisi.popupdbg}
                w="75%"
                bgSize="contain"
                bgPos="center"
                bgRepeat="no-repeat"
                onClick={(e) => {
                  if (!e) var e = window.event;
                  e.cancelBubble = true;
                  if (e.stopPropagation) e.stopPropagation();
                  setRevealed(0);
                  // setOpacity(0);
                }}
                // animation={
                //   opacity ? `${fade} 2s linear` : `${fade} 2s linear reverse`
                // }
                // onAnimationEnd={() => {
                //   if (revealed) setRevealed(0);
                // }}
              >
                <Wrap
                  w="70%"
                  position="absolute"
                  top="50%"
                  align="center"
                  justify="space-evenly"
                >
                  {listNama}
                </Wrap>
              </Flex>
            ) : (
              <Image
                src={props.selectedDivisi.popupd}
                placeholder="blur"
                layout="fill"
                draggable="false"
                onClick={(e) => {
                  if (!e) var e = window.event;
                  e.cancelBubble = true;
                  if (e.stopPropagation) e.stopPropagation();
                  setRevealed(1);
                }}
              />
            )}
          </AspectRatio>
        )}

        {/* BUTTON PENDAFTARAN */}
        {/* {props.selectedDivisi.name !== 'POSEIDON' && (
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
        )} */}
      </Flex>
    );
  }

  //POSEIDON
  return (
    <Flex
      w="100%"
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
      {height > width ? (
        <AspectRatio ratio={1191 / 1645} w={'75%'}>
          <Image
            src={props.selectedDivisi.popupm}
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
      ) : (
        <AspectRatio ratio={1546 / 1191} w={['90%', '75%', '65%', '50%']}>
          <Image
            src={props.selectedDivisi.popupd}
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
      )}
    </Flex>
  );
};

export default Popup;
