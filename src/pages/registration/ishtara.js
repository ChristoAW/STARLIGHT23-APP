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
  Wrap,
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
        w={{ base: '90%', md: '80%', lg: '70%' }}
        h="90%"
        color=""
        mx="auto"
        mt="9rem"
        flexDirection="column"
        mb="4rem"
        px={{ base: '2.5rem', md: '4rem' }}
      >
        <Flex
          mt="6rem"
          flexDirection="column"
          justifyContent="cemter"
          alignContent="center"
          textAlign="center"
          color={theme.colors.text[600]}
        >
          <RegistrationHeading>
            Ketentuan Umum Pe<i>s</i>erta
          </RegistrationHeading>
          <RegistrationHeading>
            <i>S</i>tarlight 2023
          </RegistrationHeading>
          <OrderedList
            fontSize={{ base: '1rem', md: '1.15rem' }}
            spacing="1rem"
            textAlign="left"
            mt="6rem"
            mb="6rem"
          >
            <ListItem>
              Peserta <b>SOLO</b> terdiri dari minimal 1 orang, dan <b>GROUP</b>{' '}
              maksimal 5 orang
            </ListItem>
            <ListItem>
              Peserta <b>WAJIB</b> berusia 15-25 tahun
            </ListItem>
            <ListItem>
              Peserta <b>WAJIB</b> secara resmi terdaftar dalam instansi
              pendidikan pada tingkat SMA/SMK/MA (Sekolah Menengah Atas /
              Sekolah Menengah Kejuruan / Madrasah Aliyah) atau Perguruan Tinggi
              se-Indoneia
            </ListItem>
            <ListItem>
              Apabila rangkaian Starlight 2023 akan dilaksanakan secara{' '}
              <b>luring</b> maka
              <OrderedList listStyleType="lower-alpha" spacing="1rem">
                <ListItem>
                  Seluruh biaya akomodasi, kesehatan, dan keperluan lainnya
                  ditanggung oleh masing-masing peserta
                </ListItem>
                <ListItem>
                  Seluruh peserta <b>WAJIB</b> mencantumkan bukti vaksinasi
                  berupa sertifikat vaksin (<b>vaksin booster</b>)
                </ListItem>
                <ListItem>
                  Seluruh peserta <b>WAJIB</b> mencantumkan informasi kesehatan
                  dan penyakit bawaan/komorbid jika ada
                </ListItem>
              </OrderedList>
            </ListItem>
            <ListItem>
              Peserta <b>Wajib </b> melampirkan identitas instansi terkait yang
              valid (<b>Kartu Pelajar atau Kartu Tanda Mahasiswa</b>) dalam
              formulir pendaftaran
            </ListItem>
            <ListItem>
              Peserta yang sudah mendaftar <b>TIDAK</b> diperkenankan untuk
              mengubah/mengganti/mengurangi anggotanya dari awal hingga akhir
              kegiatan, kecuali dalam keadaan sebagai berikut:
              <UnorderedList listStyleType="none" spacing="1rem" mt="1rem">
                <ListItem>
                  - <b>Terinfeksi COVID-19</b>
                  <UnorderedList ps="2rem">
                    <ListItem>
                      Jika salah satu anggota terinfeksi COVID-19, peserta
                      tersebut dapat mengundurkan diri, tetapi <b>TIDAK</b>{' '}
                      diperbolehkan penggantian / penambahan anggota
                    </ListItem>
                  </UnorderedList>
                </ListItem>
                <ListItem>
                  - <b>Sakit Berat</b>
                  <UnorderedList ps="2rem">
                    <ListItem>
                      Sakit berat yang dimaksud adalah sakit yang memberatkan
                      aktivitas fisik, seperti kecelakaan yang menyebabkan patah
                      tulang dan opname
                    </ListItem>
                    <ListItem>
                      Peserta <b>WAJIB</b> memberikan surat dokter kepada{' '}
                      <i>Liaison Officer</i> (Aquamarine) masing-masing
                    </ListItem>
                  </UnorderedList>
                </ListItem>
                <ListItem>
                  - <b>Keluarga inti meninggal</b>
                  <UnorderedList ps="2rem">
                    <ListItem>
                      Peserta <b>WAJIB</b> menginformasikan kepada{' '}
                      <i>Liaison Officer</i> (Aquamarine) masing-masing
                    </ListItem>
                  </UnorderedList>
                </ListItem>
              </UnorderedList>
            </ListItem>
            <ListItem>
              Setiap peserta <b>WAJIB</b> membayar deposit sebesar:
              <OrderedList listStyleType="lower-alpha" spacing="1rem" mt="1rem">
                <ListItem>
                  Solo Rp50.000,00 saat mendaftar dan akan dikembalikan setelah
                  peserta menyelesaikan seluruh rangkaian Starlight 2023
                </ListItem>
                <ListItem>
                  Group Rp100.000,00 saat mendaftar dan akan dikembalikan
                  setelah peserta menyelesaikan seluruh rangkaian Starlight 2023
                </ListItem>
              </OrderedList>
            </ListItem>
            <ListItem>
              Seluruh peserta <b>WAJIB</b> mengikuti seluruh peraturan dan
              regulasi kegiatan yang berlaku selama rangkaian Starlight 2023
            </ListItem>
          </OrderedList>
        </Flex>
      </Flex>
      <Flex
        bgColor="rgba(1, 1, 1, 0.5)"
        border="1px"
        borderColor={theme.colors.deco[400]}
        w={{ base: '90%', md: '70%' }}
        h="90%"
        color=""
        mx="auto"
        mt="3rem"
        flexDirection="column"
        mb="4rem"
        px={{ base: '2.5rem', md: '4rem' }}
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
      <Flex
        justifyContent={{ base: 'center', md: 'end' }}
        mr={{ base: '0', md: '12rem' }}
      >
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
