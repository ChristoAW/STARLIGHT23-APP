import { Box, Divider, Flex, ListItem, UnorderedList } from '@chakra-ui/react';
import theme from '@/theme';

import { Heado } from '@/components/pages/about-us/styling/styles';
import {
  SubHeadBody,
  SubSubHeadBody,
} from '@/components/pages/about-us/styling/texts';

import {
  LogoStarlight,
  TitleStarlight,
} from '@/components/pages/about-us/styling/images';

const AboutUs = () => {
  return (
    <>
      
      <Flex
        w="100%"
        minH="100%"
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        px={{ base: '15vw', sm: '12vw', md: '15vw' }}
        py={{ base: '10', md: '5rem' }}
        // bgColor={theme.colors.bg[800]}
      >
        <Heado>
          ABOUT U<i>S</i>
        </Heado>
        <TitleStarlight />
        <SubHeadBody
          mt={{ base: 6, md: '6rem' }}
          header={
            <>
              What i<i>s S</i>tarlight ?
            </>
          }
          body={
            <>
              Starlight adalah salah satu kegiatan mahasiswa yang dinaungi Badan
              Eksekutif Mahasiswa (BEM) Universitas Multimedia Nusantara untuk
              mewadahi serta menyalurkan minat dan bakat individu. Kegiatan
              Mahasiswa Starlight mengupayakan dorongan bagi masyarakat untuk
              percaya akan perkembangan bakat mereka masing-masing
            </>
          }
        />
        <Flex
          my={{ base: '10', md: '8rem' }}
          flexDir={{ base: 'column', md: 'row' }}
          justifyContent="space-between"
        >
          <Box w={{ md: '48%' }}>
            <SubHeadBody
              header={
                <>
                  Vi<i>s</i>ion
                </>
              }
              body={
                <>
                  Menciptakan lingkungan Starlight yang positif dan mendukung
                  sehingga dapat menjadi tempat bagi panitia dan peserta untuk
                  menggali potensi dan mengembangkan diri sebaik mungkin
                </>
              }
            />
          </Box>
          <Box w={{ md: '48%' }} pt={{ base: '10', md: '0' }}>
            <SubHeadBody
              // header={['Mi', <i>ss</i>, 'ion']} pake yg ini juga bisa kok
              header={
                <>
                  Mi<i>ss</i>ion
                </>
              }
              body={
                <UnorderedList>
                  <ListItem>
                    Memberikan wadah bagi setiap individu di UMN dan di luar UMN
                    yang ingin menampilkan bakat terbaik mereka
                  </ListItem>
                  <ListItem mt={3}>
                    Menjaring orang sebanyak mungkin untuk mengikuti rangkaian
                    kegiatan Starlight 2023
                  </ListItem>
                </UnorderedList>
              }
            />
          </Box>
        </Flex>
        <Divider
          orientation="horizontal"
          mb={{ base: 5, md: 10 }}
          borderWidth=".05rem"
          borderColor={theme.colors.text[300]}
        />
        <LogoStarlight />
        <SubHeadBody
          mb={{ base: '6rem', md: '8rem' }}
          header={
            <>
              <i>S</i>tarlight 2023 Logo
            </>
          }
          body={
            <>
              Seperti logo Starlight pada tahun-tahun sebelumnya, Starlight 2023
              juga menggunakan bintang sebagai elemen utamanya. Namun, Starlight
              2023 memberikan penekanan pada kesan "Greek" dan lautan yang
              didasarkan pada tema, konsep, dan nama divisi pada Starlight 2023
            </>
          }
        />
        <SubSubHeadBody
          mb={{ base: '6rem', md: '8rem' }}
          title={<>STARLIGHT 2023 CONCEPT</>}
          header={
            <>
              Luminou<i>s</i> Va<i>s</i>t Ocean
            </>
          }
          body={
            <>
              Lautan luas yang memiliki berbagai cahaya di dalamnya untuk
              membuat lautan tersebut bersinar. Dimulai dengan percikan (bakat)
              yang memerlukan proses pencarian panjang dalam kehidupan kita
              untuk siap bersinar. Siapkah kamu mengarungi lautan luas untuk
              memancarkan cahaya terbaikmu?
            </>
          }
        />
        <SubSubHeadBody
          mb={{ base: '6rem', md: '8rem' }}
          title={<>STARLIGHT 2023 THEME</>}
          header={
            <>
              Journey of The Voyager<i>s</i>
            </>
          }
          body={
            <>
              Starlight 2023 mengusung tema Journey of The Voyagers yang
              memiliki makna sebuah perjalanan dari pengembara atau penjelajah.
              Kita meyakini setiap individu memerlukan sebuah proses yang
              panjang dalam menemukan bakat yang mereka miliki sampai akhirnya
              bakat itu dapat menjadi ciri khas serta berdampak bagi sekitarnya.
            </>
          }
        />
        <SubSubHeadBody
          mb={{ base: '5rem', md: '3rem' }}
          title={<>STARLIGHT 2023 TAGLINE</>}
          header={
            <>
              Let’<i>s S</i>ail To The Horizon
            </>
          }
          body={
            <>
              Tagline Starlight 2023 ini bertujuan untuk mengajak para peserta
              berlayar dengan menempuh perjalanan bersama hingga tujuan akhir
              yaitu Horizon. Pada stage “Elysium” yang merupakan tahap terakhir,
              melambangkan Horizon sendiri sebagai puncak penampilan bakat penuh
              dengan kebahagiaan dan kemeriahan.
            </>
          }
        />
      </Flex>
    </>
  );
};

export default AboutUs;
