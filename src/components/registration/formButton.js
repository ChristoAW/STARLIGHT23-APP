import { useContext, useEffect, useState } from 'react';
import { FormIstharaContext } from '../context/FormIshtaraContext';
import { useRouter } from 'next/router';
import { Button, Flex } from '@chakra-ui/react';

const FormButton = ({ step, setStep, ...p }) => {
  const { state, type, resetForm, formRef } = useContext(FormIstharaContext);

  const [submit, setSubmit] = useState(false);
  const router = useRouter();

  const registUrl = {
    solo: '/api/isthara/solo',
    group: '/api/isthara/group',
  };

  const fixState = (_N) => {
    window.history.replaceState(
      { ...window.history.state, __N: _N ?? true },
      ''
    );
  };

  const checkFiles = (state) => {
    if (state.files) {
      for (const k in state.files) {
        if (state.files[k] && state.files[k]?.length !== 0 && !state[k]) {
          return false;
        }
      }
    } else if (state.members) {
      for (const m of state.members) {
        if (!checkFiles(m)) {
          return false;
        }
      }
    }
    return true;
  };

  let apiUrl = registUrl[type];

  const handleStep = () => {
		console.log(state);
    if (!formRef.current.checkValidity()) return;
    if (!checkFiles(state)) return;

    const stp = step + 1;
    if (stp > 4) {
      if (!submit) {
        setSubmit(true);
        // api disini
        console.log(state);
        resetForm();
        setSubmit(false);
      }

      return;
    }
    setStep(stp);
    window.history.pushState({ ...window.history.state, __N: false, stp }, '');
  };

  useEffect(() => {
    const histChange = () => fixState(true);
    router.events.on('beforeHistoryChange', histChange);

    if (!window.history.state.stp) {
      window.history.state.stp = 2;
      fixState(false);
    } else {
      setStep(window.history.state.stp);
    }

    window.onpopstate = (e) => {
      if (e.state.stp) {
        setStep(e.state.stp);
      }
    };

    return () => {
      router.events.off('beforeHistoryChange', histChange);
      window.onpopstate = null;
    };
  }, [router.events, setStep]);

  return (
    <Flex justify="flex-end" maxW="1080px" w="100%" mx="auto" mb="2em">
      <Button onclick={handleStep} {...p}>
        NEXT
      </Button>
    </Flex>
  );
};

export default FormButton;
