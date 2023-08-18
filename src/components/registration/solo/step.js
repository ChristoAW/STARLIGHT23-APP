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

import { useState, useRef, useEffect } from 'react';
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
  const { setValue, handleSubmit } = useForm();
  const [twibbonUpload, setTwibbonUpload] = useState(null);
  const [instagramUpload, setInstagramUpload] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  // this state will be used to store all required data except for those that has its own state
  const [formValue, setFormValue] = useState({
    stageName: '',
    name: '',
    univ: '',
    nim: '',
    tel: '',
    instagram: '',
    email: '',
    line: '',
    twibProof: '',
    igProof: ''
  });

  function defineValue() {
    // console.log(formValue);

    // handle all values to be transfered to sheet here
    setValue('timestamp', new Date().toLocaleString() + '');
    setValue('stageName', formValue.stageName);
    setValue('name', formValue.name);
    setValue('nim', "'000000" + formValue.nim);
    setValue('univ', formValue.univ);
    setValue('tel', formValue.tel);
    setValue('instagram', formValue.instagram);
    setValue('email', formValue.email);
    setValue('line', formValue.line);
    setValue('twibProof', formValue.twibProof);
    setValue('igProof', formValue.igProof);

    // image upload handler is inside the fileHandler function

    // reset all input fields
  }

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
        console.log('Twibbon image uploaded.');
      });
      //link twibbon url
      const twibbonDownloadURL = await getDownloadURL(twibbonRef);
      console.log('Twibbon Image:', twibbonDownloadURL);
      formValue.twibProof = twibbonDownloadURL;
      // setValue('twibProof', twibbonDownloadURL);
    }

    if (instagramUpload !== null) {
      const instagramRef = ref(
        storage,
        `solo/instagramProof/${instagramUpload.name + v4()}`
      );
      await uploadBytes(instagramRef, instagramUpload).then(() => {
        console.log('Instagram proof image uploaded.');
      });
      //link proof instagram url
      const instagramDownloadURL = await getDownloadURL(instagramRef);
      console.log('Instagram Image:', instagramDownloadURL);
      formValue.igProof = instagramDownloadURL;
      // setValue('igProof', instagramDownloadURL);
      
      console.log(formValue) // yg disini uda bener masuknya linknya
    }
  }

  async function submitHandler(data) {
    setIsLoading(true);
    
    await fileHandler();

    console.log(data); // yang disini masuknya yang sebelomnya

    const response = await fetch('/api/isthara/solo', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(response.status, response.statusText);

    // Disini untuk reset semua input setelah masuk ke sheet
    setValue('name', '');
    setValue('stageName', '');
    setValue('univ', '');
    setValue('nim', '');
    setValue('tel', '');
    setValue('instagram', '');
    setValue('email', '');
    setValue('line', '');
    // setValue('twibProof', '');
    // setValue('igProof', '');

    setIsLoading(false);

    // router.push('/registration/ishtaraReg/welcome');
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
          onChange={(event) => handleChange(event)}
        >
          Error: Field cannot be empty
        </FormInputImportant>

        <FormTextImportant>Stage Name</FormTextImportant>
        <FormInputImportant
          placeholder="Stage Name"
          name="stageName"
          onChange={(event) => handleChange(event)}
        >
          Error: Field cannot be empty
        </FormInputImportant>
        <FormTextImportant>University</FormTextImportant>
        <FormInputImportant
          placeholder="Universitas Multimedia Nusantara"
          name="univ"
          onChange={(event) => handleChange(event)}
        >
          Error: Field cannot be empty
        </FormInputImportant>
        <FormText>Nomor Induk Mahasiswa (NIM)</FormText>
        <FormInputNIM
          name="nim"
          onChange={(event) => handleChange(event)}
          placeholder="12345"
        >
          Invalid NIM
        </FormInputNIM>
        <FormNotes>For UMN Students Only</FormNotes>
        <FormTextImportant>Phone Number (Whatsapp)</FormTextImportant>
        <FormInputTel
          placeholder="0812345678"
          name="tel"
          onChange={(event) => handleChange(event)}
        >
          Error: Please input (+62 or 0) followed by 7-13 numbers
        </FormInputTel>
        <FormNotes>Example: +62XXXXXXXXXX</FormNotes>
        <FormTextImportant>Line ID</FormTextImportant>
        <FormInputImportant
          placeholder="@starlightumn"
          name="line"
          onChange={(event) => handleChange(event)}
        ></FormInputImportant>
        <FormTextImportant>Instagram</FormTextImportant>
        <FormInputImportant
          placeholder="@starlight.umn"
          name="instagram"
          onChange={(event) => handleChange(event)}
        >
          Error: Field cannot be empty
        </FormInputImportant>
        <FormTextImportant>Email</FormTextImportant>
        <FormInputEmail
          placeholder="starlight@umn.ac.id"
          name="email"
          onChange={(event) => handleChange(event)}
        />
        {/*🔻File Upload disini🔻*/}
        <FormTextImportant>Proof of Uploading Twibbon</FormTextImportant>
        <Link href="twibbon" color={theme.colors.text[600]}>
          *Twibbon Link Here*
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
          onChange={(event) => {
            setInstagramUpload(event.target.files[0]);
          }}
        />

        {/*<FormTextImportant>Description</FormTextImportant>
          <FormTextareaImportant
            placeholder="Performance description"
            name="desc"
            onChange={(event) => {
              setDesc(event.target.value);
            }}
            value={desc}
          >
            Error: Field cannot be empty
          </FormTextareaImportant>
          <FormNotes>Starlight will provide...</FormNotes> */}
      </FormBox>
      <Flex justify="flex-end" maxW="1080px" w="100%" mx="auto" mb="2em">
        <Link
          h="3rem"
          w="9rem"
          color={theme.colors.deco[400]}
          bgColor={theme.colors.bg[700]}
          border="1px"
          as={Button}
          type="submit"
          onClick={defineValue}
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
