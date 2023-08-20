import {
  OrderedList,
  ListItem,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react';
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

const GroupStep3 = () => {
  return (
    <FormBox>
      <FormHeading>
        <i>S</i>tep 3
      </FormHeading>
      <FormSubHeading>Group Information</FormSubHeading>
      <FormTextImportant>Line ID (Representative)</FormTextImportant>
      <FormInputImportant placeholder="@StarlightUMN">
        Error: Field cannot be empty
      </FormInputImportant>
      <FormTextImportant>Phone Number (Representative)</FormTextImportant>
      <FormInputTel placeholder="0812345678">
        Error: Please input (+62 or 0) followed by 7-13 numbers
      </FormInputTel>
      <FormTextImportant>Instagram Username</FormTextImportant>
      <FormInputImportant placeholder="@StarlightUMN">
        Error: Field cannot be empty
      </FormInputImportant>
      <FormTextImportant>E-Mail (Representative)</FormTextImportant>
      <FormInputEmail placeholder="starlight@umn.ac.id" />
      <FormTextImportant>Number of Performers</FormTextImportant>
      <NumberInput defaultValue={2} min={2} max={6}>
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
    </FormBox>
  );
};

export default GroupStep3;
