import { VStack, Button, Flex, Link } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import theme from '@/theme';

import {
  FormInputImportant,
  FormTextImportant,
  FormTextareaImportant,
  FormInputFile,
} from '@/components/registration/styles';
import { useState } from 'react';

function soloForm() {
  const { setValue, handleSubmit } = useForm();

  // this state will be used to store all required data
  const [formValue, setFormValue] = useState({
    groupName: '',
    image: '',
    name: '',
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

    // Disini untuk reset semua input setelah masuk ke sheet
    setValue('groupName', '');
    setValue('name', '');
    setValue('desc', '');
  }

  return (
    <VStack>
      <Button onClick={addFields}>Add Member</Button>
      <form onSubmit={handleSubmit(submitHandler)}>
        <FormTextImportant>Group Name</FormTextImportant>
        <FormInputImportant
          placeholder="Group Name"
          name="groupName"
          onChange={(event) => handleChange(event)}
        />
        <FormInputFile />
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
                  <FormTextImportant>Description</FormTextImportant>
                  <FormTextareaImportant
                    placeholder="Your Stage Name"
                    name="desc"
                    onChange={(event) => handleDynamicChange(index, event)}
                    value={input.desc}
                  />
                  {index != 0 ? (
                    <Button onClick={() => removeFields(index)}>Remove</Button>
                  ) : null}
                </div>
              );
            })}
          </>
        )}
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
