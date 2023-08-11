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
} from '../styles';

import theme from '@/theme';

const SoloStep3 = () => {
  return (
    <FormBox>
      <FormHeading>
        <i>S</i>tep 3
      </FormHeading>
      <FormSubHeading>Personal Information</FormSubHeading>
      <FormTextImportant>Formal Photo (3x4)</FormTextImportant>
      <OrderedList spacing=".5rem" mt=".5rem">
        <ListItem>Size Orientation 3x4</ListItem>
        <ListItem>Formal Identity Photo</ListItem>
        <ListItem>
          Required High Resolution Photo (no blur or pixelated)
        </ListItem>
        <ListItem>JPG/JPEG/PNG format only</ListItem>
        <ListItem>Maximum File Size: 2MB</ListItem>
      </OrderedList>
      <FormInputFile />
      <FormTextImportant>Full Name</FormTextImportant>
      <FormInputImportant placeholder="Your name ...">
        Error: Field cannot be empty
      </FormInputImportant>
      <FormTextImportant>Date of Birth</FormTextImportant>
      <FormInputDate />
      <FormTextImportant>Domicile</FormTextImportant>
      <FormInputImportant placeholder="Gading Serpong, Tanggerang">Error: Field cannot be empty</FormInputImportant>
    <FormTextImportant>Institution</FormTextImportant>
    <FormInputImportant placeholder="Universitas Multimedia Nusantara">
        Error: Field cannot be empty
      </FormInputImportant>
      <FormText>NIM (for UMN Students Only)</FormText>
      <FormInputNIM />
      <FormTextImportant>KTP (18 years or above) / Kartu Tanda pelajar</FormTextImportant>
      <FormInputFile />

    </FormBox>
  );
};
export default SoloStep3;
