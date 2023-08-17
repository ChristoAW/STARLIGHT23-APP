import { Box, Flex, Text, Link, FormErrorMessage } from '@chakra-ui/react';
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

const GroupStep2 = () => {
  const { handleSubmit, register, setValue } = useForm();
  const { formValue, setFormValue } = useContext(FormIstharaContext);

  return (
    <FormBox>
      <FormHeading>
        <i>S</i>tep 2
      </FormHeading>
      <FormSubHeading>Group Participation</FormSubHeading>{' '}
      <FormTextImportant>a. Stage Name</FormTextImportant>
      <FormInputImportant
        name="stageNamee"
        register={register}
        placeholder="Your Stage Name"
      >
        Error: Field cannot be empty
      </FormInputImportant>
      <FormTextImportant>b. Performance Description</FormTextImportant>
      <FormInputImportant
        name="descTalent"
        register={register}
        placeholder="Briefly describe your talent ... (max. 150 words)"
      >
        Error: Field cannot be empty
      </FormInputImportant>
      <FormTextImportant>c. Audition Equipments</FormTextImportant>
      <FormInputImportant
        name="equipStage"
        register={register}
        placeholder="Equipment needed..."
      >
        Error: Field cannot be empty
      </FormInputImportant>
      <FormNotes>Starlight will provide...</FormNotes>
      <FormTextImportant>d. Additional Notes</FormTextImportant>
      <FormInputImportant
        name="moreInfo"
        register={register}
        placeholder="(Music, Audio, Songs Used) ..."
      >
        Error: Field cannot be empty
      </FormInputImportant>
      <FormNotes>Please attach files using Google Drive links</FormNotes>
    </FormBox>
  );
};
export default GroupStep2;
