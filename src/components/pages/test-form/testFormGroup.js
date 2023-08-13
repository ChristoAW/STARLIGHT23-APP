import {
  VStack,
  Text,
  Input,
  Button,
  FormControl,
  FormLabel,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

function groupForm() {
  const { register, setValue, handleSubmit } = useForm();

  // nantinya kalo ada form yang mau di define sendiri bisa ditambahin disini
  function defineValue() {
    setValue('timestamp', new Date().toLocaleString() + '');
  }

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
    setValue('desc', '');
  }

  return (
    <VStack>
      <form onSubmit={handleSubmit(submitHandler)}>
        <Input
          display="none"
          {...register('timestamp')}
          // value di define pake function di atas
        />
        <FormControl isRequired>
          <FormLabel>Group Name</FormLabel>
          <Input {...register('groupName')} />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Deskripsi</FormLabel>
          <Input type="text" {...register('desc')} />
        </FormControl>
        <Button type="submit" onClick={defineValue}>
          Submit
        </Button>
      </form>
    </VStack>
  );
}

export default groupForm;
