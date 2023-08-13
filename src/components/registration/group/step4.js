import { Box, Divider, Flex, Heading, Text } from '@chakra-ui/react';
import { Fragment, useContext } from 'react';

import { FormIstharaContext } from '@/components/context/FormIshtaraContext';
import GroupMember from './member';

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
} from '../styles';

const GroupStep4 = () => {
  const { state } = useContext(FormIstharaContext);
  const repeat = [...Array(state.n_performers).keys()];

  return (
    <FormBox>
      <FormHeading>
        <i>S</i>tep 4
      </FormHeading>
      <Heading fontSize="2rem" textAlign="center" fontWeight="400">
        Group Information
      </Heading>
      <Flex direction="column" gap="1.5rem">
        {repeat.map((idx) => (
          <Fragment key={idx}>
            <Divider borderColor="#00cde3" pb="1rem" />
            <Text
              fontSize="1.5rem"
              fontWeight="bold"
              textDecoration="underline"
            >
              Member {idx + 1}:
            </Text>
            <GroupMember idx={idx} />
          </Fragment>
        ))}
      </Flex>
    </FormBox>
  );
};

export default GroupStep4;
