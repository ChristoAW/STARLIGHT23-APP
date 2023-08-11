import { FormIstharaContext } from '@/components/context/FormIshtaraContext';
import { useContext, useEffect, useRef } from 'react';

import SoloStep2 from './step2';
import SoloStep3 from './step3';
import SoloStep4 from './step4';

const SoloStep = ({ step }) => {
  const { setType, setFormRef } = useContext(FormIstharaContext);
  useEffect(() => {
    setType('solo');
  }, [setType]);

  const ref = useRef();
  useEffect(() => {
    setFormRef(ref);
  }, [ref, setFormRef]);

  const reg = {
    2: SoloStep2,
    3: SoloStep3,
    4: SoloStep4,
  };

  const Form = reg[step] || reg[2];

  return (
    <form ref={ref}>
      <Form />
    </form>
  );
};
export default SoloStep;
