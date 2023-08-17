import { VStack, Button, Flex, Link } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import theme from '@/theme';

import {
  FormInputImportant,
  FormTextImportant,
  FormTextareaImportant,
  FormInputFile,
  FormNotes,
} from '@/components/registration/styles';
import { useState } from 'react';

function soloForm() {
  const { setValue, handleSubmit } = useForm();

  const [desc, setDesc] = useState('');

  // this state will be used to store all required data except for those that has its own state
  const [formValue, setFormValue] = useState({
    stageName: '',
    name: '',
  });

  function defineValue() {
    // console.log(formValue);

    // handle all values to be transfered to sheet here
    setValue('timestamp', new Date().toLocaleString() + '');
    setValue('stageName', formValue.stageName);
    setValue('name', formValue.name);
    // handle the remaining values
    setValue('desc', desc);

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
    setValue('stageName', '');
    setValue('name', '');
    setValue('desc', '');
  }

  return (
    <VStack>
      <form onSubmit={handleSubmit(submitHandler)}>
        <FormTextImportant>Stage Name</FormTextImportant>
        <FormInputImportant
          placeholder="Stage Name"
          name="stageName"
          onChange={(event) => handleChange(event)}
        >
          Error: Field cannot be empty
        </FormInputImportant>
        <FormTextImportant>Name</FormTextImportant>
        <FormInputImportant
          placeholder="Name"
          name="name"
          onChange={(event) => handleChange(event)}
        >
          Error: Field cannot be empty
        </FormInputImportant>
        <FormTextImportant>Description</FormTextImportant>
        <FormTextareaImportant
          placeholder="Performance description"
          name="desc"
          onChange={(event) => {
            setDesc(event.target.value)
          }}
          value={desc}
        >
          Error: Field cannot be empty
        </FormTextareaImportant>
        <FormNotes>Starlight will provide...</FormNotes>
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
    </VStack>
  );
}

export default soloForm;

// reference : https://www.freecodecamp.org/news/build-dynamic-forms-in-react/
