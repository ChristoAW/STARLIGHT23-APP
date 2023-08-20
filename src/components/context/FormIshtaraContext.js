import { createContext, useContext, useEffect, useReducer, useState } from 'react';

export const FormIstharaContext = createContext();

import { soloState } from '@/data/registration/SoloState';
import { groupState, memberState } from '@/data/registration/GroupState';

const initState = {
  solo: soloState,
  group: groupState,
};

const FormIstharaContextProvider = ({ children }) => {
  const [type, setType] = useState('solo');

  const reducer = (state, action, init) => {
    if (action instanceof Array) {
      let newState = reducer(action[0], {
        n_performers: action[0].n_performers,
      });
      return newState;
    }

    const keys = init ?? initState[type];

    let newState = state;
    for (const k in keys) {
      if (k === 'files' && action.files) {
        for (const f in newState.files) {
          if (undefined !== action.files[f])
            newState.files[f] = action.files[f];
        }
      } else if (k === 'members' && action.members) {
        newState.members[action.idx] = reducer(
          newState.members[action.idx],
          action.members,
          memberState
        );
      } else if (k === 'n_performers' && action.n_performers) {
        let n = parseInt(action.n_performers);
        let old = newState.members.length;
        newState.n_performers = n;

        if (n > old) {
          for (let i = 0; i < n - old; ++i) {
            newState.members.push({ ...memberState });
          }
        } else {
          for (let i = old - n; i > 0; --i) {
            newState.members.pop();
          }
        }
      } else if (undefined !== action[k]) {
        newState = { ...newState, [k]: action[k] };
      }
    }
    return newState;
  };

  const [state, setFormState] = useReducer(reducer, {});
  const resetForm = () => {
    setFormState([initState[type]]);
  };

  useEffect(() => {
    setFormState([initState[type]]);
  }, [type]);

  const [formRef, setFormRef] = useState();
  const [formValue, setFormValue] = useState({});

  return (
    <FormIstharaContext.Provider
      value={{
        state,
        setFormState,
        resetForm,
        type,
        setType,
        formRef,
        setFormRef,
        formValue,
        setFormValue,
      }}
    >
      {children}
    </FormIstharaContext.Provider>
  );
};

export default FormIstharaContextProvider;
