import { useEffect, useState } from 'react';
import { Flex, keyframes } from '@chakra-ui/react';
import {
  SubHeadBody,
  SubSubHeadBody,
} from '@/components/pages/about-us/styling/texts';

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

  const fade = keyframes`from {opacity: 0%}; to {opacity: 100%}`;
  // End of Pop Up Animation
  return (
    <Flex
      w={width < 768 ? props.parentH : '100%'}
      h={width < 768 ? props.parentW : '100%'}
      pos="absolute"
      bgColor="rgba(0,0,0,0.7)"
      onClick={() => props.setCurrOpen('')}
      justifyContent="center"
      alignItems="center"
      p={5}
      px="10vw"
      m={0}
      top={width < 768 ? '50%' : null}
      transform={width < 768 ? 'translate(-50%, -50%)' : null}
      flexDirection="column"
      tabIndex={0}
      id="popup"
      transform={width < 768 ? 'rotate(90deg)' : null}
    >
      <SubHeadBody
        mt={{ base: 6, md: '6rem' }}
        textAlign="center"
        header={<>The Aby<i>ss</i></>}
        body={
          <>
            Stages pertama yaitu Abyss, memiliki arti sebagai tempat terbawah
            bum yang gelap, dimana para peserta mulai berdatangan untuk memulai
            perjalanan panjang dengan bakat unik yang mereka miliki. Stage
            pertama merupakan proses penyaringan pertama bagi Isthara. Dalam
            stage ini, akan diadakan seleksi pertama (30 Isthara) untuk
            menyaring Isthara-Isthara mana yang masih harus berlatih, Isthara
            mana yang siap untuk tampil di Kantin C pada stages berikutnya
          </>
        }
      />
    </Flex>
  );
};
export default Popup;
