import {
  Box,
  Flex,
  ListItem,
  OrderedList,
  UnorderedList,
  Text,
  Checkbox,
  Link,
  Button,
} from '@chakra-ui/react';
import NextLink from 'next/link';

import { useState } from 'react';

import theme from '@/theme';

import bg from '@/asset/images/bg/bg.jpg';
import bgM from '@/asset/images/bg/bg-m.png';

const RegistrationHeading = ({ children, ...props }) => {
  return (
    <Text
      fontFamily="Exodus"
      fontSize={{ base: '1.25rem', md: '2.5rem', sm: '1.75rem' }}
      color={theme.colors.text[300]}
      {...props}
    >
      {children}
    </Text>
  );
};

const Registration = () => {
  const [checked, setChecked] = useState(false);
  const handleCheck = (e) => {
    setChecked(e.target.checked);
  };
  return (
    <Box
      w="100%"
      pos="relative"
      justifyContent="center"
      alignItems="center"
      py={{ base: '10', md: '4rem' }}
      px={{ base: '6', md: '4rem' }}
      flexDirection="column"
      overflowY="hidden"
      bgImage={{ base: bgM.src, md: bg.src }}
      bgSize="cover"
      bgPos="center"
      bgAttachment="fixed"
    >
      <Flex
        bgColor="rgba(1, 1, 1, 0.5)"
        border="1px"
        borderColor={theme.colors.deco[400]}
        h="90%"
        color=""
        mx="auto"
        flexDirection="column"
        mb="4rem"
        px={{ base: '2.5rem', md: '4rem' }}
      >
        <Flex
          mt={{ base: '2rem', md: '6rem' }}
          flexDirection="column"
          alignContent="center"
          textAlign="center"
          color={theme.colors.text[600]}
        >
          <RegistrationHeading>
            Ketentuan Umum I<i>s</i>thara
          </RegistrationHeading>
          <RegistrationHeading>
            <i>S</i>tarlight 2023
          </RegistrationHeading>
          <OrderedList
            fontSize={{ base: '1rem', md: '1.15rem' }}
            spacing="1rem"
            textAlign="left"
            mt={{ base: '2rem', md: '6rem' }}
            mb={{ base: '2rem', md: '6rem' }}
          >
            <ListItem>
              Peformance <b>OFFLINE</b> berdurasi maksimal 10 menit.
            </ListItem>
            <ListItem>Kreativitas dan orisinalitas diutamakan.</ListItem>
            <ListItem>
              Kebutuhan properti performance menggunakan uan pribadi kecuali
              keperluan untuk pengeras suara, kursi, atau meja.
            </ListItem>
            <ListItem>
              Isthara <b>DILARANG</b> menggunakan benda-benda illegal, tajam,
              dan yang berpotensi membahayakan diri sendiri serta orang lain.
            </ListItem>
            <ListItem>
              Isthara dapat mendaftar secara individu atau kelompok.
            </ListItem>
            <ListItem>
              Isthara wajib hadir sesuai dengan ketentuan dari pihak Starlight
              2023.
            </ListItem>
            <ListItem>
              Isthara <b>DILARANG</b> menampilkan hal-hal yang mengandung unsur
              pornografi, hal yang tidak berpendidikan, dan SARA.
            </ListItem>
            <ListItem>Isthara wajib berpakaian sesuai aturan kampus.</ListItem>
            <ListItem>
              Peserta wajib mengumpulkan daftar keperluan penampilan (lagu,
              properti) dan lain-lain kepada LO sesuai dengan waktu yang telah
              ditetapkan oleh pihak Starlight UMN.
            </ListItem>
            <ListItem>
              Isthara harus memberikan informasi apabila terdapat riwayat
              penyakit.
            </ListItem>
            <ListItem>
              Isthara yang berkebutuhan khusus dapat menghubungi panitia via DM
              instagram atau menghubungi contact person yang telah disediakan.
              <UnorderedList listStyleType="none" spacing="1rem" mt="1rem">
                <ListItem>
                  - Isthara yang memiliki kebutuhan khusus secara fisik,
                  intelektual, atau emosional disarankan membawa pendamping.
                  Apabila Isthara tidak memiliki pendamping akan ditemani oleh
                  LO dan petugas keamanan.
                </ListItem>
              </UnorderedList>
            </ListItem>
            <ListItem>
              Jika Isthara melakukan tindakan yang mengganggu keberlangsungan
              kegiatan Starlight 2023 maupun Isthara lain, maka akan diberikan
              3 kali peringatan.
            </ListItem>
            <ListItem>
              Apabila Isthara mendapat peringatan sebanyak 3 kali dari pihak
              Starlight 2023, maka Isthara akan dikeluarkan dari keberlangsungan
              kegiatan Starlight 2023.
            </ListItem>
          </OrderedList>
        </Flex>
      </Flex>
      <Flex
        bgColor="rgba(1, 1, 1, 0.5)"
        border="1px"
        borderColor={theme.colors.deco[400]}
        h="90%"
        color=""
        mx="auto"
        mt={{ base: '.5rem', md: '3rem' }}
        flexDirection="column"
        mb="4rem"
        px={{ base: '.5rem', md: '4rem' }}
      >
        <Flex mt="2rem" mb="2rem" color={theme.colors.text[300]}>
          <Checkbox
            px="2rem"
            size="lg"
            checked={checked}
            onChange={handleCheck}
          >
            <Text fontSize={{ base: '1.10rem', md: '1.25rem' }}>
              Saya telah membaca dan menyetujui seluruh regulasi yang tertera
            </Text>
          </Checkbox>
        </Flex>
      </Flex>
      <Flex justifyContent={{ base: 'center', md: 'end' }}>
        <NextLink href="./ishtaraReg" passHref>
          <Link
            h="3rem"
            w="9rem"
            color={theme.colors.deco[400]}
            bgColor={theme.colors.bg[700]}
            border="1px"
            as={Button}
            _hover={{ bgColor: '0,0,0', color: ' rgb(227,218,201)' }}
            isDisabled={!checked}
          >
            NEXT
          </Link>
        </NextLink>
      </Flex>
    </Box>
  );
};

export default Registration;
