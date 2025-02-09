import { Button, Flex, Link, Text, Box, Spinner } from '@chakra-ui/react';
import theme from '@/theme';

import { useState } from 'react';
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
  TwibbonInfo,
  PaymentInfo,
} from '../styles';

import { storage } from '@/pages/api/isthara/firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { v4 } from 'uuid';

function groupForm() {
  const { handleSubmit } = useForm();
  const [twibbonUpload, setTwibbonUpload] = useState(null);
  const [instagramUpload, setInstagramUpload] = useState(null);
  const [paymentUpload, setPaymentUpload] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [num, setNum] = useState(1);

  const router = useRouter();

  // this state will be used to store all required data
  const [formValue, setFormValue] = useState({
    timestamp: '',
    groupName: '',
    number: '',
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

  // ini untuk data member yang recurring aja
  const [inputFields, setInputFields] = useState([
    {
      name: '',
      univ: '',
      nim: '',
      line: '',
      tel: '',
      instagram: '',
      email: '',
    },
  ]);

  function defineValue() {
    // console.log(inputFields);

    // Enter other recurring field here
    formValue.name = inputFields[0].name;
    formValue.univ = inputFields[0].univ;
    formValue.nim = "'000000" + inputFields[0].nim;
    // if (formValue.nim != '') {
    //   formValue.nim = "'000000" + inputFields[0].nim;
    // }
    formValue.line = inputFields[0].line;
    formValue.tel = inputFields[0].tel;
    formValue.instagram = inputFields[0].instagram;
    formValue.email = inputFields[0].email;

    // Concatenate the remaining values except for the first one
    inputFields.slice(1).map((input) => {
      // uhmm ini kenapa gabisa new line :'))

      // nanti disini bisa masukin variable lain biar sekalian
      formValue.name = formValue.name + '  *  ' + input.name;
      formValue.univ = formValue.univ + '  *  ' + input.univ;
      // if (input.nim != '') {
      //   formValue.nim = formValue.nim + '  *  ' + '000000' + input.nim;
      // } else {
      //   formValue.nim = formValue.nim + '  *  ';
      // }

      formValue.nim = formValue.nim + '  *  ' + '000000' + input.nim;
      formValue.line = formValue.line + '  *  ' + input.line;
      formValue.tel = formValue.tel + '  *  ' + input.tel;
      formValue.instagram = formValue.instagram + '  *  ' + input.instagram;
      formValue.email = formValue.email + '  *  ' + input.email;
    });

    //console.log(formValue);
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
    let newField = {
      name: '',
      univ: '',
      nim: '',
      tel: '',
      line: '',
      instagram: '',
      email: '',
    };
    setInputFields([...inputFields, newField]);
    setNum(num + 1);
  };

  const removeFields = (index) => {
    let data = [...inputFields];
    data.splice(index, 1);
    setInputFields(data);
    setNum(num - 1);
  };

  async function fileHandler() {
    // Upload the files to Firebase Storage
    if (twibbonUpload !== null) {
      const twibbonRef = ref(
        storage,
        `group/twibbon/${twibbonUpload.name + v4()}`
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
        `group/instagramProof/${instagramUpload.name + v4()}`
      );
      await uploadBytes(instagramRef, instagramUpload).then(() => {
        // console.log('Instagram proof image uploaded.');
      });
      //link proof instagram url
      const instagramDownloadURL = await getDownloadURL(instagramRef);
      // console.log('Instagram Image:', instagramDownloadURL);
      formValue.igProof = instagramDownloadURL;
    }

    if (paymentUpload !== null) {
      const paymentRef = ref(storage, `group/paymentProof/${paymentUpload.name + v4()}`)
      await uploadBytes(paymentRef, paymentUpload).then(() => {
        //console.log('Payment Proof Uploaded.');
      })
      const paymentDownloadURL = await getDownloadURL(paymentRef);
      //console.log('Payment Proof Image:', paymentDownloadURL);
      formValue.paymentProof = paymentDownloadURL;
    }
  }

  async function submitHandler(data) {
    setIsLoading(true);

    await fileHandler();

    // customize value
    formValue.number = num;
    formValue.timestamp = new Date().toLocaleString() + '';

    const response = await fetch('/api/isthara/group', {
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
        <FormSubHeading>Group Registration</FormSubHeading>
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
        <FormText textAlign="center">Informasi</FormText>
        <PaymentInfo />
        <TwibbonInfo />
        <FormTextImportant>Group Name</FormTextImportant>
        <FormInputImportant
          placeholder="Group Name"
          name="groupName"
          isDisabled={isLoading}
          onChange={(event) => handleChange(event)}
        />
        {/*🔻File Upload disini🔻*/}
        <FormTextImportant>Proof of Uploading Twibbon</FormTextImportant>
        <FormInputFile
          name="twibbon"
          isDisabled={isLoading}
          onChange={(event) => {
            setTwibbonUpload(event.target.files[0]);
          }}
        />
        <FormNotes>
          Silahkan unggah bukti upload Twibbon setiap anggota kelompok yang
          telah disatukan
        </FormNotes>
        <FormTextImportant>Proof of Following @starlight.umn</FormTextImportant>
        <FormInputFile
          name="instagram"
          isDisabled={isLoading}
          onChange={(event) => {
            setInstagramUpload(event.target.files[0]);
          }}
        />
        <FormNotes>
          Silahkan unggah bukti follow Instagram setiap anggota kelompok yang
          telah disatukan
        </FormNotes>
        <FormTextImportant>
          Proof of Payment Transfer for Registration Fee and Deposit
        </FormTextImportant>
        <FormInputFile
          name="payment"
          isDisabled={isLoading}
          onChange={(event) => {
            setPaymentUpload(event.target.files[0]);
          }}
        />
        {inputFields.length > 0 && (
          <>
            {inputFields.map((input, index) => {
              return (
                <div key={index}>
                  <FormBox px={{ base: '5', md: '4rem' }} mt="2rem" mb="1rem">
                    <FormSubHeading>Member {index + 1}</FormSubHeading>
                    {index != 0 ? null : (
                      <FormNotes
                        textAlign="center"
                        color={theme.colors.text[400]}
                      >
                        Anggota yang akan dihubungi untuk kelanjutan acara
                      </FormNotes>
                    )}
                    <FormTextImportant>
                      {index != 0 ? 'Name' : 'Representative Name'}
                    </FormTextImportant>
                    <FormInputImportant
                      placeholder="Your Name"
                      name="name"
                      isDisabled={isLoading}
                      onChange={(event) => handleDynamicChange(index, event)}
                      value={input.name} // ini ga perlu juga gpp
                    />
                    <FormTextImportant>University</FormTextImportant>
                    <FormInputImportant
                      placeholder="Universitas Multimedia Nusantara"
                      name="univ"
                      isDisabled={isLoading}
                      onChange={(event) => handleDynamicChange(index, event)}
                      value={input.univ}
                    />
                    <FormText>Nomor Induk Mahasiswa (NIM)</FormText>
                    <FormInputNIM
                      placeholder="12345"
                      name="nim"
                      isDisabled={isLoading}
                      onChange={(event) => handleDynamicChange(index, event)}
                    >
                      Invalid NIM
                    </FormInputNIM>
                    <FormNotes>For UMN Students Only</FormNotes>
                    <FormTextImportant>
                      {index != 0 ? 'Email' : 'Representative Email'}
                    </FormTextImportant>
                    <FormInputEmail
                      placeholder="starlight@umn.ac.id"
                      name="email"
                      isDisabled={isLoading}
                      onChange={(event) => handleDynamicChange(index, event)}
                    />
                    <FormTextImportant>
                      Phone Number (Whatsapp)
                    </FormTextImportant>
                    <FormInputTel
                      placeholder="0812345678"
                      name="tel"
                      isDisabled={isLoading}
                      onChange={(event) => handleDynamicChange(index, event)}
                    >
                      Error: Please input (+62 or 0) followed by 7-13 numbers
                    </FormInputTel>
                    <FormNotes>Example: +62XXXXXXXXXX</FormNotes>
                    <FormTextImportant>
                      {index != 0 ? 'Line ID' : 'Line ID (Representative)'}
                    </FormTextImportant>
                    <FormInputImportant
                      placeholder="@starlightumn"
                      name="line"
                      isDisabled={isLoading}
                      onChange={(event) => handleDynamicChange(index, event)}
                    >
                      Error: Field cannot be empty
                    </FormInputImportant>
                    <FormTextImportant>Instagram</FormTextImportant>
                    <FormInputImportant
                      placeholder="@starlightumn"
                      name="instagram"
                      isDisabled={isLoading}
                      onChange={(event) => handleDynamicChange(index, event)}
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
                        isDisabled={isLoading}
                        _hover={{
                          bgColor: '0,0,0',
                          color: ' rgb(227,218,201)',
                        }}
                      >
                        Remove
                      </Button>
                    ) : null}
                  </FormBox>
                </div>
              );
            })}
          </>
        )}
        <Button
          h="3rem"
          w="9rem"
          color={theme.colors.deco[400]}
          bgColor={theme.colors.bg[700]}
          border="1px"
          onClick={addFields}
          isDisabled={isLoading}
          _hover={{
            bgColor: '0,0,0',
            color: ' rgb(227,218,201)',
          }}
        >
          Add Member
        </Button>
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
          isDisabled={isLoading}
          _hover={{ bgColor: '0,0,0', color: ' rgb(227,218,201)' }}
        >
          {isLoading ? <Spinner /> : 'SUBMIT'}
        </Link>
      </Flex>
    </form>
  );
}

export default groupForm;

// reference : https://www.freecodecamp.org/news/build-dynamic-forms-in-react/
