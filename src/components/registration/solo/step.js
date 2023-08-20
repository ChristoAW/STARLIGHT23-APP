import {
  VStack,
  Button,
  Flex,
  Link,
  Text,
  Box,
  Spinner,
} from '@chakra-ui/react';
import theme from '@/theme';

import { useState, useRef } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';

import {
  FormBox,
  FormHeading,
  FormSubHeading,
  FormTextImportant,
  FormText,
  FormInputImportant,
  FormNotes,
  FormInputFile,
  FormInputNIM,
  FormInputTel,
  FormInputEmail,
} from '../styles';

import { storage } from '@/pages/api/isthara/firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { v4 } from 'uuid';

function soloForm() {
  const { handleSubmit } = useForm();
  const [twibbonUpload, setTwibbonUpload] = useState(null);
  const [instagramUpload, setInstagramUpload] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  // this state will be used to store all required data except for those that has its own state
  const [formValue, setFormValue] = useState({
    timestamp: '',
    stageName: '',
    name: '',
    univ: '',
    nim: '',
    tel: '',
    instagram: '',
    email: '',
    line: '',
    twibProof: '',
    igProof: '',
  });

  const handleChange = (event) => {
    let data = formValue;
    data[event.target.name] = event.target.value;
    setFormValue(data);
  };

  async function fileHandler() {
    // Upload the files to Firebase Storage
    if (twibbonUpload !== null) {
      const twibbonRef = ref(
        storage,
        `solo/twibbon/${twibbonUpload.name + v4()}`
      );
      await uploadBytes(twibbonRef, twibbonUpload).then(() => {
        // console.log('Twibbon image uploaded.');
      });
      //link twibbon url
      const twibbonDownloadURL = await getDownloadURL(twibbonRef);
      // console.log('Twibbon Image:', twibbonDownloadURL);
      formValue.twibProof = twibbonDownloadURL;
    }

    if (instagramUpload !== null) {
      const instagramRef = ref(
        storage,
        `solo/instagramProof/${instagramUpload.name + v4()}`
      );
      await uploadBytes(instagramRef, instagramUpload).then(() => {
        // console.log('Instagram proof image uploaded.');
      });
      //link proof instagram url
      const instagramDownloadURL = await getDownloadURL(instagramRef);
      // console.log('Instagram Image:', instagramDownloadURL);
      formValue.igProof = instagramDownloadURL;
    }
  }

  async function submitHandler(e) {
    setIsLoading(true);
    await fileHandler();

    // customize value
    if (formValue.nim != '') {
      formValue.nim = "'000000" + formValue.nim;
    }
    formValue.timestamp = new Date().toLocaleString() + '';

    const response = await fetch('/api/isthara/solo', {
      method: 'POST',
      body: JSON.stringify(formValue),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    // console.log(response.status, response.statusText);

    if (response.status != 201) {
      setIsLoading(false);
      alert('Submission Unsuccessful. Submit Again');
    } else {
      router.push('/registration/ishtaraReg/welcome');
      setIsLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <FormBox mt={0}>
        <FormHeading>
          Pendaftaran I<i>s</i>thara <i>S</i>tarlight 2023
        </FormHeading>
        <FormSubHeading>Solo Registration</FormSubHeading>
        <Box
          textAlign="center"
          fontSize={{ base: '1rem', md: '1.25rem', sm: '.75rem' }}
        >
          <Text as="b">Contact Person:</Text>
          <Text>
            Chintia Libby <br />
            +62 815 1073 7353 (Whatsapp)
          </Text>
        </Box>
        <FormTextImportant>Full Name</FormTextImportant>
        <FormInputImportant
          placeholder="Your Name"
          name="name"
          isDisabled={isLoading}
          onChange={(event) => handleChange(event)}
        >
          Error: Field cannot be empty
        </FormInputImportant>

        <FormTextImportant>Stage Name</FormTextImportant>
        <FormInputImportant
          placeholder="Stage Name"
          name="stageName"
          isDisabled={isLoading}
          onChange={(event) => handleChange(event)}
        >
          Error: Field cannot be empty
        </FormInputImportant>
        <FormTextImportant>University</FormTextImportant>
        <FormInputImportant
          placeholder="Universitas Multimedia Nusantara"
          name="univ"
          isDisabled={isLoading}
          onChange={(event) => handleChange(event)}
        >
          Error: Field cannot be empty
        </FormInputImportant>
        <FormText>Nomor Induk Mahasiswa (NIM)</FormText>
        <FormInputNIM
          placeholder="12345"
          name="nim"
          isDisabled={isLoading}
          onChange={(event) => handleChange(event)}
        >
          Invalid NIM
        </FormInputNIM>
        <FormNotes>For UMN Students Only</FormNotes>
        <FormTextImportant>Phone Number (Whatsapp)</FormTextImportant>
        <FormInputTel
          placeholder="0812345678"
          name="tel"
          isDisabled={isLoading}
          onChange={(event) => handleChange(event)}
        >
          Error: Please input (+62 or 0) followed by 7-13 numbers
        </FormInputTel>
        <FormNotes>Example: +62XXXXXXXXXX</FormNotes>
        <FormTextImportant>Line ID</FormTextImportant>
        <FormInputImportant
          placeholder="@starlightumn"
          name="line"
          isDisabled={isLoading}
          onChange={(event) => handleChange(event)}
        ></FormInputImportant>
        <FormTextImportant>Instagram</FormTextImportant>
        <FormInputImportant
          placeholder="@starlight.umn"
          name="instagram"
          isDisabled={isLoading}
          onChange={(event) => handleChange(event)}
        >
          Error: Field cannot be empty
        </FormInputImportant>
        <FormTextImportant>Email</FormTextImportant>
        <FormInputEmail
          placeholder="starlight@umn.ac.id"
          name="email"
          isDisabled={isLoading}
          onChange={(event) => handleChange(event)}
        />
        {/*🔻File Upload disini🔻*/}
        <FormTextImportant>Proof of Uploading Twibbon</FormTextImportant>
        <Link target="_blank" href="https://drive.google.com/file/d/1IP4TIlrZPjxUbFkKaaxvQmqTLf7GARXa/view?usp=drive_link" color={theme.colors.text[600]}>
          Twibbon Calon Isthara Starlight UMN 2023
        </Link>

        <FormInputFile
          name="twibbon"
          onChange={(event) => {
            setTwibbonUpload(event.target.files[0]);
          }}
        />
        <FormTextImportant>Proof of Following @starlight.umn</FormTextImportant>
        <FormInputFile
          name="instagram"
          isDisabled={isLoading}
          onChange={(event) => {
            setInstagramUpload(event.target.files[0]);
          }}
        />
      </FormBox>
      <Flex justify="flex-end" maxW="1080px" w="100%" mx="auto" mb="2em">
        <Link
          h="3rem"
          w="9rem"
          color={theme.colors.deco[400]}
          bgColor={theme.colors.bg[700]}
          border="1px"
          disable
          as={Button}
          isDisabled={isLoading}
          type="submit"
          _hover={{ bgColor: '0,0,0', color: ' rgb(227,218,201)' }}
        >
          {isLoading ? <Spinner /> : 'SUBMIT'}
        </Link>
      </Flex>
    </form>
  );
}

export default soloForm;

// reference : https://www.freecodecamp.org/news/build-dynamic-forms-in-react/
