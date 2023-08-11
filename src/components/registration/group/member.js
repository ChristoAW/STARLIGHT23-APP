import { ListItem, OrderedList, Text } from '@chakra-ui/react';

import FormWrap from '@/components/Form/FormWrap';

const GroupMember = ({ idx }) => {
  // const IdxWrap = ({ children, ...p }) => {
  //   return (
  //     <FormWrap idx={idx} {...p}>
  //       {children}
  //     </FormWrap>
  //   );
  // };

  return (
    <>
      <IdxWrap
        id="img_photo"
        type="file"
        accept="image/jpg,image/jpeg,image/png"
        helperText={
          <OrderedList spacing="0.8rem" styleType="i" color="#00cde3">
            <ListItem>Size Orientation 3x4</ListItem>
            <ListItem>Formal Identity Photo</ListItem>
            <ListItem>
              Required High Resolution photo (no blur or pixelated)
            </ListItem>
            <ListItem>JPG/JPEG/PNG format only</ListItem>
            <ListItem>Maximum File Size: 2MB</ListItem>
          </OrderedList>
        }
      >
        Formal Photo (3 x 4)
      </IdxWrap>

      <IdxWrap id="id_name" placeholder="Your name" maxLength="200">
        Full Name
      </IdxWrap>

      <IdxWrap id="id_birthdate" type="date">
        Date of Birth
      </IdxWrap>

      <IdxWrap
        id="id_domicile"
        placeholder="Gading Serpong, Tangerang"
        maxLength="200"
      >
        Domicile
      </IdxWrap>

      <IdxWrap
        id="id_institute"
        placeholder="Universitas Multimedia Nusantara"
        maxLength="100"
      >
        Institution
      </IdxWrap>

      <IdxWrap
        id="id_nim"
        type="number"
        min="0"
        max="9999999999"
        placeholder="12345"
        leftAddon="000000"
        ps="0.5"
        isRequired={false}
        noStep
      >
        NIM <Text as="i">(for UMN students only)</Text>
      </IdxWrap>

      <IdxWrap
        id="img_ktp"
        type="file"
        accept="image/jpg,image/jpeg,image/png,application/pdf"
      >
        KTP <Text as="i">(18 years or above)</Text> / Kartu Tanda Pelajar (2MB)
      </IdxWrap>

      <IdxWrap
        id="vaccine"
        type="file"
        accept="image/jpg,image/jpeg,image/png,application/pdf"
      >
        Booster Vaccine Certificate (2MB)
      </IdxWrap>
    </>
  );
};
export default GroupMember;
