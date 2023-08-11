import { FormIstharaContext } from '@/components/context/FormIshtaraContext';
import { useContext, useEffect, useRef } from 'react';

import GroupStep2 from './step2';
import GroupStep3 from './step3';
import GroupStep4 from './step4';

const GroupStep = ({ step }) => {
  const { setType, setFormRef } = useContext(FormIstharaContext);
  useEffect(() => {
    setType('group');
  }, [setType]);

  const ref = useRef();
  useEffect(() => {
    setFormRef(ref);
  }, [ref, setFormRef]);

  const reg = {
    2: GroupStep2,
    3: GroupStep3,
    4: GroupStep4,
  };

  const Form = reg[step] || reg[2];

  return (
    <form ref={ref}>
      <Form />
    </form>
  );
};
export default GroupStep;
