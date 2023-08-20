import { OrderedList, ListItem } from '@chakra-ui/react';
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

import theme from '@/theme';

const SoloStep4 = () => {
  return (
    <FormBox>
      <FormHeading>
        <i>S</i>tep 4
      </FormHeading>
      <FormSubHeading>Personal Information</FormSubHeading>
      <FormTextImportant>Line ID</FormTextImportant>
      <FormInputImportant placeholder="@StarlightUMN">Error: Field cannot be empty</FormInputImportant>
      <FormTextImportant>Phone Number</FormTextImportant>
      <FormInputTel placeholder="0812345678">Error: Please input (+62 or 0) followed by 7-13 numbers</FormInputTel>
      <FormTextImportant>Instagram Username</FormTextImportant>
      <FormInputImportant placeholder="@StarlightUMN">Error: Field cannot be empty</FormInputImportant>
        <FormTextImportant>E-Mail</FormTextImportant>
        <FormInputEmail placeholder="starlight@umn.ac.id"/>
    </FormBox>
  );
};
export default SoloStep4;
