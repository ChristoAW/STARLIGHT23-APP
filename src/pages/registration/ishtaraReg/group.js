import {
  Box,
  Flex,
  ListItem,
  OrderedList,
  UnorderedList,
  Text,
  Checkbox,
  Link,
  Button,
  Wrap,
} from '@chakra-ui/react';
import NextLink from 'next/link';

import { useState } from 'react';

import theme from '@/theme';
import { Heado } from '@/components/styles';

import FormIstharaContextProvider from '@/components/context/FormIshtaraContext';
import GroupStep from '@/components/registration/group/step';

import bg from '@/asset/images/bg/bg.jpg';
import bgM from '@/asset/images/bg/bg-m.png';

const GroupRegist = () => {
  const [step, setStep] = useState(2);

  const handleStep = () => {
    if (!formRef.current.checkValidity()) return;
    if (!checkFiles(state)) return;

    const stp = step + 1;
    if (stp > 4) {
      if (!submit) {
        setSubmit(true);
        fetchApi(apiUrl, state)
          .then((v) => {
            console.log('res: ', v);
            resetForm();
            setSubmit(false);
            router.push('./twib');
          })

          .catch((e) => {
            console.error('Error:', e);
            setSubmit(false);
          });
      }
      return;
    }

    setStep(stp);
    window.history.pushState({ ...window.history.state, __N: false, stp }, '');
  };
  return (
    <Flex
      w="100%"
      pos="relative"
      justifyContent="center"
      py={{ base: '10', md: '4rem' }}
      flexDirection="column"
      overflowY="hidden"
      bgImage={{ base: bgM.src, md: bg.src }}
      bgSize="cover"
      bgPos="center"
      bgAttachment="fixed"
    >
      <FormIstharaContextProvider>
        <GroupStep step={step} />
        <Flex justify="flex-end" maxW="1080px" w="100%" mx="auto" mb="2em">
          <Button {...{ step, setStep }}>NEXT</Button>
        </Flex>
      </FormIstharaContextProvider>
    </Flex>
  );
};
export default GroupRegist;
