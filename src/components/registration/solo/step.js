import { VStack, Button, Flex, Link, Text, Box } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import theme from '@/theme';

import {
  FormBox,
  FormHeading,
  FormSubHeading,
  FormTextImportant,
  FormText,
  FormInputImportant,
  FormInput,
  FormTextareaImportant,
  FormTextarea,
  FormNotes,
  FormInputFile,
  FormInputDate,
  FormInputNIM,
  FormInputTel,
  FormInputEmail,
} from '../styles';

import { useState } from 'react';

function soloForm() {
  const { setValue, handleSubmit } = useForm();

  // this state will be used to store all required data except for those that has its own state
  const [formValue, setFormValue] = useState({
    stageName: '',
    name: '',
    univ: '',
    nim: '',
    tel: '',
    instagram: '',
    email:'',
  });

  function defineValue() {
     console.log(formValue);

    // handle all values to be transfered to sheet here
    setValue('timestamp', new Date().toLocaleString() + '');
    setValue('stageName', formValue.stageName);
    setValue('name', formValue.name);
    setValue('nim', formValue.nim);
    setValue('univ', formValue.univ);
    setValue('tel', formValue.tel);
    setValue('instagram', formValue.instagram);
    setValue('email', formValue.email)
    // handle the remaining values

    // reset all input fields
    //
  }

  const handleChange = (event) => {
    let data = formValue;
    data[event.target.name] = event.target.value;
    setFormValue(data);
  };

  async function submitHandler(data) {
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
    setValue('email')
  }

  return (
    <VStack>
      <FormBox>
        <form onSubmit={handleSubmit(submitHandler)}>
          <FormHeading>
            Pendaftaran I<i>s</i>htara <i>S</i>tarlight 2023
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
            placeholder="Chintia Libby"
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
          <FormInputNIM name="nim" onChange={(event) => handleChange(event)} placeholder="12345">Please Enter Only Numbers</FormInputNIM>
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
          <FormTextImportant>Instagram</FormTextImportant>
          <FormInputImportant
            placeholder="@starlightumn"
            name="instagram"
            onChange={(event) => handleChange(event)}
          >
            Error: Field cannot be empty
          </FormInputImportant>
          <FormTextImportant>Email</FormTextImportant>
          <FormInputEmail placeholder="starlight@umn.ac.id" name="email" onChange={(event) => handleChange(event)}/>
                    {/*🔻File Upload disini🔻*/}

          {/*<FormInputImportant
            placeholder="@starlightumn"
            name="instagram"
            onChange={(event) => handleChange(event)}
          >Error: Field cannot be empty</FormInputImportant>
          <FormTextImportant>Proof of Uploading Twibbon</FormTextImportant>
          <Link href="twibbon" color={theme.colors.text[600]}>*Twibbon Link Here*</Link>
          
          
          <FormInputFile name="twibbon"></FormInputFile>
          <FormTextImportant>Proof of Following @starlight.umn</FormTextImportant>
  <FormInputFile name="instagram_follow" />*/}

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

          <br />
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
              SUBMIT
            </Link>
          </Flex>
        </form>
      </FormBox>
    </VStack>
  );
}

export default soloForm;

// reference : https://www.freecodecamp.org/news/build-dynamic-forms-in-react/
