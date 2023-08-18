import {
  VStack,
  Button,
  Flex,
  Link,
  Text,
  Box,
  Divider,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import theme from '@/theme';
import NextLink from 'next/link';

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

  // this state will be used to store all required data
  const [formValue, setFormValue] = useState({
    groupName: '',
    image: '',
    name: '',
    univ: '',
    nim: '',
    tel: '',
    instagram: '',
    email: '',
    desc: '',
  });
  // ini untuk data member yang recurring aja
  const [inputFields, setInputFields] = useState([{ name: '', desc: '' }]);

  function defineValue() {
    // console.log(inputFields);

    // Enter other recurring field here
    formValue.name = inputFields[0].name;
    formValue.desc = inputFields[0].desc;

    // Concatenate the remaining values except for the first one
    inputFields.slice(1).map((input) => {
      // uhmm ini kenapa gabisa new line :'))

      // nanti disini bisa masukin variable lain biar sekalian
      formValue.name = formValue.name + '   ' + input.name;
      formValue.desc = formValue.desc + '   ' + input.desc;
    });

    console.log(formValue);

    // handle all values to be transfered to sheet here
    setValue('timestamp', new Date().toLocaleString() + '');
    setValue('groupName', formValue.groupName);
    setValue('name', formValue.name);
    setValue('desc', formValue.desc);
    setValue('nim', formValue.nim);
    setValue('univ', formValue.univ);
    setValue('tel', formValue.tel);
    setValue('instagram', formValue.instagram);
    setValue('email', formValue.email);

    // reset all input fields
  }

  const handleChange = (event) => {
    let data = formValue;
    data[event.target.name] = event.target.value;
    setFormValue(data);
  };

  const handleDynamicChange = (index, event) => {
    let data = [...inputFields];
    data[index][event.target.name] = event.target.value;
    setInputFields(data);
  };

  const addFields = () => {
    let newField = { name: '', desc: '' };
    setInputFields([...inputFields, newField]);
  };

  const removeFields = (index) => {
    let data = [...inputFields];
    data.splice(index, 1);
    setInputFields(data);
  };

  async function submitHandler(data) {
    const response = await fetch('/api/isthara/group', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(response.status, response.statusText);

    //biar ganti halaman
    window.location.href = "/registration/ishtaraReg/welcome";

    // Disini untuk reset semua input setelah masuk ke sheet
    setValue('groupName', '');
    setValue('name', '');
    setValue('desc', '');
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
          <FormTextImportant>Group Name</FormTextImportant>
          <FormInputImportant
            placeholder="Group Name"
            name="groupName"
            onChange={(event) => handleChange(event)}
          />
          <FormTextImportant>Email Representative</FormTextImportant>
          <FormInputEmail
            placeholder="starlight@umn.ac.id"
            name="email"
            onChange={(event) => handleChange(event)}
          />
          {/* <FormInputFile /> */}
          {inputFields.length > 0 && (
            <>
              {inputFields.map((input, index) => {
                return (
                  <div key={index}>
                    <FormTextImportant>
                      {index != 0 ? 'Name' : 'Representative Name'}
                    </FormTextImportant>
                    <FormInputImportant
                      placeholder="Your Name"
                      name="name"
                      onChange={(event) => handleDynamicChange(index, event)}
                      value={input.name} // ini ga perlu juga gpp
                    />
                    <FormTextImportant>University</FormTextImportant>
                    <FormInputImportant
                      placeholder="Universitas Multimedia Nusantara"
                      name="univ"
                      onChange={(event) => handleDynamicChange(index, event)}
                      value={input.univ}
                    />
                    <FormText>Nomor Induk Mahasiswa (NIM)</FormText>
                    <FormInputNIM
                      name="nim"
                      onChange={(event) => handleChange(event)}
                      placeholder="12345"
                    >
                      Please Enter Only Numbers
                    </FormInputNIM>
                    <FormNotes>For UMN Students Only</FormNotes>
                    <FormTextImportant>Instagram</FormTextImportant>
                    <FormInputImportant
                      placeholder="@starlightumn"
                      name="instagram"
                      onChange={(event) => handleChange(event)}
                    >
                      Error: Field cannot be empty
                    </FormInputImportant>
                    {index != 0 ? (
                      <Button
                        mt="1rem"
                        h="3rem"
                        w="9rem"
                        color={theme.colors.deco[400]}
                        bgColor={theme.colors.bg[700]}
                        border="1px"
                        onClick={() => removeFields(index)}
                        _hover={{
                          bgColor: '0,0,0',
                          color: ' rgb(227,218,201)',
                        }}
                      >
                        Remove
                      </Button>
                    ) : null}
                  </div>
                );
              })}
            </>
          )}
          <br />
          {/* Pemisah */}
          {/* <Divider
            mb="2rem"
            color={theme.colors.deco[400]}
            bgColor={theme.colors.bg[700]}
          /> */}
          {/*🔻File Upload disini🔻*/}

          {/* <FormInputImportant
            placeholder="@starlightumn"
            name="instagram"
            onChange={(event) => handleChange(event)}
          >
            Error: Field cannot be empty
          </FormInputImportant>
          <FormTextImportant>Proof of Uploading Twibbon</FormTextImportant>
          <Link href="twibbon" color={theme.colors.text[600]}>
            *Twibbon Link Here*
          </Link> */}

          {/* <FormInputFile name="twibbon"></FormInputFile>
          <FormTextImportant>
            Proof of Following @starlight.umn
          </FormTextImportant>
          <FormInputFile name="instagram_follow" /> */}

          <Button
            h="3rem"
            w="9rem"
            color={theme.colors.deco[400]}
            bgColor={theme.colors.bg[700]}
            border="1px"
            onClick={addFields}
            _hover={{
              bgColor: '0,0,0',
              color: ' rgb(227,218,201)',
            }}
          >
            Add Member
          </Button>
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
