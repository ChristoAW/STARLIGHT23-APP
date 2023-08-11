import {
  Box,
  Flex,
  Text,
  Input,
  FormErrorMessage,
  FormControl,
  Textarea,
} from '@chakra-ui/react';

import { useState } from 'react';

import theme from '@/theme';

export const FormBox = ({ children, ...props }) => {
  return (
    <Box
      bgColor="rgba(1, 1, 1, 0.5)"
      border="1px"
      borderColor={theme.colors.deco[400]}
      w="100%"
      maxW="1080px"
      color={theme.colors.text[300]}
      mx="auto"
      mt="5rem"
      mb="4rem"
      px={{ base: '2.5rem', md: '4rem' }}
      py={{ base: '3rem', md: '5rem' }}
      {...props}
    >
      {children}
    </Box>
  );
};

export const FormHeading = ({ children, ...props }) => {
  return (
    <Text
      fontFamily="Exodus"
      fontSize={{ base: '3.25rem', md: '2.5rem', sm: '3.25rem' }}
      color={theme.colors.text[300]}
      textAlign="center"
      {...props}
    >
      {children}
    </Text>
  );
};

export const FormSubHeading = ({ children, ...props }) => {
  return (
    <Text
      fontSize={{ base: '1.75rem', md: '1.5rem', xl: '1.75rem' }}
      color={theme.colors.text[300]}
      fontFamily="Montserrat"
      textAlign="center"
      mb="6rem"
      {...props}
    >
      {children}
    </Text>
  );
};

export const FormTextImportant = ({ children, ...props }) => {
  return (
    <Text
      fontSize={{ base: '1rem', md: '1.15rem' }}
      fontFamily="Montserrat"
      display="flex"
      mt="3rem"
      {...props}
    >
      {children}
      <Text color={theme.colors.deco[500]}>*</Text>
    </Text>
  );
};

export const FormText = ({ children, ...props }) => {
  return (
    <Text
      fontSize={{ base: '1rem', md: '1.15rem' }}
      fontFamily="Montserrat"
      mt="3rem"
      {...props}
    >
      {children}
    </Text>
  );
};

export const FormInputImportant = ({ children, ...props }) => {
  const [isEmpty, setIsEmpty] = useState(false);

  const handleBlur = (event) => {
    const inputValue = event.target.value;
    setIsEmpty(inputValue.trim() === '');
  };

  const isInvalid = isEmpty;

  return (
    <FormControl isInvalid={isInvalid}>
      <Input
        border="1px"
        borderTop="none"
        borderLeft="none"
        borderRight="none"
        borderRadius="0"
        color={theme.colors.deco[400]}
        bgColor={theme.colors.bg[700]}
        onBlur={handleBlur}
        {...props}
      />
      <FormErrorMessage>{children}</FormErrorMessage>
    </FormControl>
  );
};

export const FormInput = ({ children, ...props }) => {
    return (
      <FormControl>
        <Input
          border="1px"
          borderTop="none"
          borderLeft="none"
          borderRight="none"
          borderRadius="0"
          color={theme.colors.deco[400]}
          bgColor={theme.colors.bg[700]}
          {...props}
        />
        <FormErrorMessage>{children}</FormErrorMessage>
      </FormControl>
    );
  };
  

export const FormTextareaImportant = ({ children, ...props }) => {
  const [isEmpty, setIsEmpty] = useState(false);
  const [text, setText] = useState('');


  const handleError = (event) => {
    const inputValue = event.target.value;
    setIsEmpty(inputValue.trim() === '');
  };

  const handleInput = (event) => {
    const inputValue = event.target.value;

    if (inputValue.trim().split(/\s+/).length <= 150) {
      setText(inputValue); 
    }
  };

  const isInvalid = isEmpty;
  return (
    <FormControl isInvalid={isInvalid}>
      <Textarea
        color={theme.colors.deco[400]}
        borderColor={theme.colors.deco[400]}
        bgColor={theme.colors.bg[700]}
        h ="150px"
        onBlur={handleError}
        value={text}
        onChange={handleInput}
        {...props}
      ></Textarea>
      <FormErrorMessage>{children}</FormErrorMessage>
    </FormControl>
  );
};
export const FormTextarea = ({ children, ...props }) => {
    const [text, setText] = useState('');
  
    const handleInput = (event) => {
      const inputValue = event.target.value;
  
      if (inputValue.trim().split(/\s+/).length <= 150) {
        setText(inputValue); 
      }
    };
  
    return (
      <FormControl>
        <Textarea
          color={theme.colors.deco[400]}
          borderColor={theme.colors.deco[400]}
          bgColor={theme.colors.bg[700]}
          h ="150px"
          value={text}
          onChange={handleInput}
          {...props}
        ></Textarea>
      </FormControl>
    );
  };

export const FormNotes = ({children, ...props}) =>{
    return(
        <Text fontSize={{ base: '.9rem', md: '1rem' }} style={{fontStyle: 'italic'}} mt="1rem" {...props}>*{children}</Text>
    )
}
