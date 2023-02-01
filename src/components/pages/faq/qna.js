import theme from '@/theme';
import colors from '@/theme/colors';
import {
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  color,
  Divider,
  ListItem,
  OrderedList,
  Text,
} from '@chakra-ui/react';
import { useRef, useState } from 'react';

import { FaPlus, FaMinus } from 'react-icons/fa';

const QNA = ({ q, header, type, body }) => {
  const [isOpen, setisOpen] = useState(false); // isExpanded buat yg diluar

  return (
    <Box
      mb={5}
      border="1px solid #fff"
      borderRadius="lg"
      bgGradient={
        isOpen
          ? `linear(160deg, ${colors.text[600]}55, ${colors.deco[400]}55)`
          : 'none'
      }
      // tinggal dibikin kalo yg base opacitynya kurangin jadi 1 semua jadi gini
    >
      <AccordionItem borderStyle="none">
        {({ isExpanded }) => (
          <>
            {isExpanded ? setisOpen(true) : setisOpen(false)}
            <AccordionButton
              p={6}
              _expanded={{
                fontWeight: 'semibold',
                textShadow: '0 0 10px var(--chakra-colors-text-600)',
                fontSize: "lg"
              }}
              _hover={{
                sm: {
                  bgGradient: isExpanded
                    ? 'none'
                    : `linear(160deg, ${colors.text[600]}55, ${colors.deco[400]}55)`,
                },
              }}
              transition="all .2s ease-out"
            >
              <Text me={5} flex="1" textAlign="left">
                {q}
              </Text>
              {isExpanded ? (
                <FaMinus fontSize="12px" />
              ) : (
                <FaPlus fontSize="12px" />
              )}
            </AccordionButton>

            <AccordionPanel px={6} pb={6} pt={0}>
              <Divider
                orientation="horizontal"
                mb={6}
                borderColor={theme.colors.text[300]}
              />
              <Text mb={5}>{header}</Text>

              {type === 'list' ? (
                <OrderedList>
                  {body.map((text, idx) => (
                    <ListItem mb="1rem" key={idx}>
                      {text}
                    </ListItem>
                  ))}
                </OrderedList>
              ) : (
                body.map((text, idx) => (
                  <Text mb="1rem" key={idx}>
                    {text}
                  </Text>
                ))
              )}
            </AccordionPanel>
          </>
        )}
      </AccordionItem>
    </Box>
  );
};

export default QNA;
