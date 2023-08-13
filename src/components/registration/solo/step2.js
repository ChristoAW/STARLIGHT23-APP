import {
  Box,
  Flex,
  Text,
  Link,
  Input,
  Button,
  FormErrorMessage,
} from '@chakra-ui/react';
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
} from '../styles';

import theme from '@/theme';
import { useForm } from 'react-hook-form';
import { useContext, useEffect } from 'react';
import { FormIstharaContext } from '@/components/context/FormIshtaraContext';

const SoloStep2 = () => {
  const { handleSubmit, register, setValue } = useForm();
  const { formValue, setFormValue } = useContext(FormIstharaContext);

  // timestamp masuknya masih 1 step behind
	// tapi mungkin nantinya ga perlu timestamp (?)
  function defineValue() {
    setValue('timestamp', new Date().toLocaleString() + '');
  }

  function saveData(data) {
    // console.log(data);
    // defineValue();
    setFormValue({ ...formValue, ...data });
  }

  // async function uploadData() {
  //   const response = await fetch('/api/isthara/solo', {
  //     method: 'POST',
  //     body: JSON.stringify(formValue),
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   });
  //   console.log(response.status, response.statusText);
  // }

  useEffect(() => {
    console.log(formValue);
    // uploadData();
  }, [formValue]);

  return (
    <>
      <FormBox>
        <FormHeading>
          <i>S</i>tep 2
        </FormHeading>
        <FormSubHeading>Solo Participation</FormSubHeading>{' '}
        <FormTextImportant>a. Stage Name</FormTextImportant>
        {/* error messagenya nda keluar kalo pake register 😭 */}
        <FormInputImportant
          placeholder="Your Stage Name"
          name="name"
          register={register}
        >
          Error: Field cannot be empty
        </FormInputImportant>
        <FormTextImportant>b. Performance Description</FormTextImportant>
        <FormInputImportant
          placeholder="Briefly describe your talent ..."
          name="desc"
          register={register}
        >
          Error: Field cannot be empty
        </FormInputImportant>
				<Input
          display="none"
          {...register('timestamp')}
          // value di define pake function di atas
        />
        {/* value textarea ga bisa diubah -.- */}
        {/* <FormTextareaImportant placeholder="Briefly describe your talent ... (max. 150 words)" name="desc" register={register}>
                    Error: Field cannot be empty
                </FormTextareaImportant>
                <FormTextImportant>c. Audition Equipments</FormTextImportant>
                <FormTextareaImportant placeholder="Equipment needed..." name="equipment" register={register}>
                    Error: Field cannot be empty
                </FormTextareaImportant>
                <FormNotes>Starlight will provide...</FormNotes>
                <FormTextImportant>d. Additional Notes</FormTextImportant>
                <FormTextareaImportant placeholder="(Music, Audio, Songs Used) ..." name="addon" register={register} >
                    Error: Field cannot be empty
                </FormTextareaImportant>
                <FormNotes>
                    Please attach files using Google Drive links
                </FormNotes> */}
      </FormBox>
      <Button onClick={handleSubmit(saveData)}>children submit</Button>
    </>
  );
};
export default SoloStep2;
