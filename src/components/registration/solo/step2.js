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
  FormNotes
} from '../styles';

import theme from '@/theme';

const SoloStep2 = () => {
  return (
    <FormBox>
      <FormHeading>
        <i>S</i>tep 2
      </FormHeading>
      <FormSubHeading>Solo Participation</FormSubHeading>{' '}
      <FormTextImportant>a. Stage Name</FormTextImportant>
      <FormInputImportant placeholder="Your Stage Name">
        Error: Field cannot be empty
      </FormInputImportant>
      <FormTextImportant>b. Performance Description</FormTextImportant>
      <FormTextareaImportant placeholder="Briefly describe your talent ... (max. 150 words)">
        Error: Field cannot be empty
      </FormTextareaImportant>
      <FormTextImportant>c. Audition Equipments</FormTextImportant>
      <FormTextareaImportant placeholder="Equipment needed...">Error: Field cannot be empty</FormTextareaImportant>
      <FormNotes>Starlight will provide...</FormNotes>
      <FormTextImportant>d. Additional Notes</FormTextImportant>
      <FormTextareaImportant placeholder="(Music, Audio, Songs Used) ...">Error: Field cannot be empty</FormTextareaImportant>
      <FormNotes>Please attach files using Google Drive links</FormNotes>
    </FormBox>
  );
};
export default SoloStep2;
