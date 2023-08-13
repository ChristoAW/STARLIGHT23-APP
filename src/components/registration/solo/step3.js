import { OrderedList, ListItem, Button } from '@chakra-ui/react';
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
import { useForm } from 'react-hook-form';
import { useContext, useEffect } from 'react';
import { FormIstharaContext } from '@/components/context/FormIshtaraContext';

const SoloStep3 = () => {
  const { handleSubmit, register } = useForm();
  const { formValue, setFormValue } = useContext(FormIstharaContext);

  function saveData(data) {
    console.log(data);
    setFormValue({ ...formValue, ...data });
  }

  useEffect(() => {
    console.log(formValue);
  }, [formValue]);
  return (
    <>
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
        <FormInputImportant
          placeholder="Your name ..."
          name="fullName"
          register={register}
        >
          Error: Field cannot be empty
        </FormInputImportant>
        <FormTextImportant>Date of Birth</FormTextImportant>
        <FormInputDate name="dob" register={register} />
        <FormTextImportant>Domicile</FormTextImportant>
        <FormInputImportant
          placeholder="Gading Serpong, Tanggerang"
          name="domicile"
          register={register}
        >
          Error: Field cannot be empty
        </FormInputImportant>
        <FormTextImportant>Institution</FormTextImportant>
        <FormInputImportant
          placeholder="Universitas Multimedia Nusantara"
          name="institution"
          register={register}
        >
          Error: Field cannot be empty
        </FormInputImportant>
        <FormText>NIM (for UMN Students Only)</FormText>
        <FormInputNIM name="nim" register={register} />
        <FormTextImportant>
          KTP (18 years or above) / Kartu Tanda pelajar
        </FormTextImportant>
        <FormInputFile name="ktp" register={register} />
      </FormBox>
      <Button onClick={handleSubmit(saveData)}>children submit</Button>
    </>
  );
};
export default SoloStep3;
