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
import theme from '@/theme';

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

  // Count Down (kl bisa nantinya dibikin jadi component supaya bisa dipanggil dimana mana)
  const [currDate, setCurrDate] = useState('new Date().getTime()');
  var startDate = new Date('2023-03-05').setHours(12); // midnight = 0

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrDate(new Date().getTime());
      // console.log("Date : " + currDate);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  // End Count Down

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
          <Text
            color={theme.colors.div['POSEIDON']}
            textShadow={Array(1)
              .fill()
              .map((e, i) => `0 0 ${i + 1}0px rgba(0, 0, 0, 0.9)`)
              .join(', ')}
            {...props}
            fontSize={
              props.selectedDivisi.members.length > 10
                ? { base: '2.4vw', sm: '2.6vw', md: '2.6vw', lg: '1.2vw' }
                : { base: '2.7vw', sm: '2.4vw', md: '1.8vw', lg: '1.3vw' }
            }
          >
            {member}
          </Text>
        </WrapItem>
      );
    });

    // Pop Up Animation (kalo bisa, pas di hover, animationnya ga gerak)
    const clickMe = keyframes`
    0%, 32%, 50%, 80%, 100% {transform: scale(1);}
    40% {transform: scale(0.94);}
    60% {transform: scale(0.98);}`;

    const clickAnimate = `${clickMe} infinite 2s ease-out`;
    // End of Pop Up Animation

    // console.log(listNama);

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
          <AspectRatio
            ratio={1191 / 1645}
            w={'80%'}
            _hover={{
              cursor: 'pointer',
              transform: 'scale(1.02)',
            }}
            transition="0.2s linear"
          >
            {revealed && currDate >= startDate ? (
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
                  w={props.selectedDivisi.name === 'SCYLLA' ? '70%' : '65%'}
                  position="absolute"
                  top="45%"
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
                animation={`${currDate >= startDate ? clickAnimate : ''}`}
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
          <AspectRatio
            ratio={1546 / 1191}
            w={['90%', '75%', '65%', '50%']}
            _hover={{
              cursor: 'pointer',
              transform: 'scale(1.02)',
            }}
            transition="0.2s linear"
          >
            {revealed && currDate >= startDate ? (
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
                  top={props.selectedDivisi.name === 'SCYLLA' ? '39%' : '45%'}
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
                animation={`${currDate >= startDate ? clickAnimate : ''}`}
              />
            )}
          </AspectRatio>
        )}

        {/* BUTTON PENDAFTARAN */}
        {props.selectedDivisi.name !== 'POSEIDON' &&
          props.selectedDivisi.name !== 'LEVIATHAN' &&
          props.selectedDivisi.name !== 'CALYPSO' && (
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
