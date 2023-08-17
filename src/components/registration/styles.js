import {
  Box,
  Flex,
  Text,
  Input,
  FormErrorMessage,
  FormControl,
  Textarea,
  InputGroup,
  InputLeftAddon,
} from '@chakra-ui/react';

import { useState, useRef } from 'react';

import theme from '@/theme';

export const FormBox = ({ children, ...props }) => {
    const formRef = useRef(null)
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
      ref={formRef}
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

export const FormInputImportant = ({ children, name, ...props }) => {
  const [isEmpty, setIsEmpty] = useState(false);
  const [validationMessage, setValidationMessage] = useState('');

  const handleBlur = (event) => {
    const inputValue = event.target.value;
    setIsEmpty(inputValue.trim() === '');
    setValidationMessage(event.target.validationMessage);
  };

  const isInvalid = validationMessage || isEmpty;

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
        required
        name={name}
        {...props}
      />
      <FormErrorMessage>{validationMessage}</FormErrorMessage>
    </FormControl>
  );
};

export const FormInput = ({ children, name, ...props }) => {
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
        name={name}
        {...props}
      />
      <FormErrorMessage>{children}</FormErrorMessage>
    </FormControl>
  );
};

export const FormTextareaImportant = ({ children, name, ...props }) => {
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
        h="150px"
        onBlur={handleError}
        value={text}
        onChange={handleInput}
        required
        name={name}
        {...props}
      ></Textarea>
      <FormErrorMessage>{children}</FormErrorMessage>
    </FormControl>
  );
};

export const FormTextarea = ({ children, name, ...props }) => {
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
        h="150px"
        value={text}
        onChange={handleInput}
        name={name}
        {...props}
      ></Textarea>
    </FormControl>
  );
};

export const FormNotes = ({ children, ...props }) => {
  return (
    <Text
      fontSize={{ base: '.9rem', md: '1rem' }}
      style={{ fontStyle: 'italic' }}
      mt="1rem"
      {...props}
    >
      *{children}
    </Text>
  );
};

export const FormInputFile = ({ name, ...props }) => {
  const [error, setError] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      const fileSizeInMB = selectedFile.size / (1024 * 1024);
      if (fileSizeInMB > 2) {
        setError('Error');
        e.target.value = null;
      } else {
        setError(null);
      }
    }
  };

  const isInvalid = error;
  return (
    <FormControl isInvalid={isInvalid}>
      <Flex
        w="100%"
        mt=".5rem"
        border="1px"
        p=".5rem"
        borderColor={theme.colors.deco[400]}
        color={theme.colors.deco[400]}
        bgColor={theme.colors.bg[700]}
        {...props}
      >
        <input
          type="file"
          accept=".jpg,.jpeg,.png"
          required
          onChange={handleFileChange}
          name={name}
        />
      </Flex>
      {error && (
        <FormErrorMessage>
          Error: File size too large (max. 2MB)
        </FormErrorMessage>
      )}
    </FormControl>
  );
};

export const FormInputDate = ({ name, ...props }) => {
  const [date, setDate] = useState('');
  const [isEmpty, setIsEmpty] = useState(true);
  const [isBlurred, setIsBlurred] = useState(false);

  const dateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    setIsEmpty(selectedDate === '');
  };

  const handleBlur = () => {
    setIsBlurred(true);
    if (date === 'dd/mm/yyyy') {
      setIsEmpty(true);
    }
  };

  const isInvalid = isEmpty && isBlurred;

  return (
    <FormControl isInvalid={isInvalid}>
      <Flex
        w="100%"
        p=".5rem"
        borderColor={theme.colors.deco[400]}
        color={theme.colors.deco[400]}
        bgColor={theme.colors.bg[700]}
        {...props}
      >
        <Input
          type="date"
          value={date}
          onChange={dateChange}
          onBlur={handleBlur}
          required
          name={name}
        />
      </Flex>
      <FormErrorMessage>
        Error: Please select your date of birth
      </FormErrorMessage>
    </FormControl>
  );
};

export const FormInputNIM = ({ children, name, ...props }) => {
  return (
    <Flex >
      <InputGroup borderColor={theme.colors.deco[400]} >
        <InputLeftAddon
          children="000000"
          bgColor={theme.colors.bg[600]}
          color={theme.colors.deco[400]}
        />
        <Input
          type="text"
          placeholder="12345"
          color={theme.colors.deco[400]}
          bgColor={theme.colors.bg[700]}
          name={name}
        />
      </InputGroup>
    </Flex>
  );
};

export const FormInputTel = ({ children, name, ...props }) => {
  const [isEmpty, setIsEmpty] = useState(false);
  const [isInvalid, setIsInvalid] = useState(false);

  const handleBlur = (event) => {
    const inputValue = event.target.value;
    setIsEmpty(inputValue.trim() === '');
    setIsInvalid(!isValidPhoneNumber(inputValue));
  };

  const isValidPhoneNumber = (phoneNumber) => {
    if (phoneNumber.startsWith('+62')) {
      const numericPart = phoneNumber.slice(3);
      return (
        /^[0-9]+$/.test(numericPart) &&
        numericPart.length >= 10 &&
        numericPart.length <= 16
      );
    } else if (phoneNumber.startsWith('0')) {
      return (
        /^[0-9]+$/.test(phoneNumber) &&
        phoneNumber.length >= 10 &&
        phoneNumber.length <= 13
      );
    }
    return false;
  };

  return (
    <FormControl isInvalid={isEmpty || isInvalid}>
      <Flex>
        <Input
          type="tel"
          border="1px"
          borderTop="none"
          borderLeft="none"
          borderRight="none"
          borderRadius="0"
          color={theme.colors.deco[400]}
          bgColor={theme.colors.bg[700]}
          onBlur={handleBlur}
          required
          pattern="^((0[0-9]{9,13})|\+62[0-9]{10,16})$"
          name={name}
          {...props}
        />
      </Flex>
      <FormErrorMessage>{children}</FormErrorMessage>
    </FormControl>
  );
};

export const FormInputEmail = ({ name, ...props }) => {
  const [isEmpty, setIsEmpty] = useState(false);
  const [isInvalidEmail, setIsInvalidEmail] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };

  const handleBlur = (event) => {
    const inputValue = event.target.value;
    setIsEmpty(inputValue.trim() === '');
    setIsInvalidEmail(!validateEmail(inputValue));
  };

  const isInvalid = isEmpty || isInvalidEmail;

  return (
    <FormControl isInvalid={isInvalid}>
      <Input
        type="email"
        border="1px"
        borderTop="none"
        borderLeft="none"
        borderRight="none"
        borderRadius="0"
        color={theme.colors.deco[400]}
        bgColor={theme.colors.bg[700]}
        onBlur={handleBlur}
        required
        name={name}
        {...props}
      />
      {isEmpty ? (
        <FormErrorMessage>Error: Field cannot be empty</FormErrorMessage>
      ) : (
        <FormErrorMessage>
          {isInvalidEmail ? 'Error: Please enter a valid email' : ''}
        </FormErrorMessage>
      )}
    </FormControl>
  );
};
