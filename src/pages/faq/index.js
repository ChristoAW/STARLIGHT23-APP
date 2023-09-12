import { useContext, useEffect, useState } from 'react';
import { Accordion, Flex, Button } from '@chakra-ui/react';

import theme from '@/theme';
import colors from '@/theme/colors';
import { LayoutContext } from '@/components/context/LayoutContext';

import { PageTitle } from '@/components/styles';
import QNA from '@/components/pages/faq/qna';
import { qnaGerda, qnaIsthara } from '@/components/pages/faq/qnaList';

import bg from '@/asset/images/bg/bg.jpg';
import bgM from '@/asset/images/bg/bg-m.png';

const FAQ = () => {
  const { setTitleSuffix } = useContext(LayoutContext);
  const [type, setType] = useState(qnaIsthara);

  useEffect(() => {
    setTitleSuffix(' - FAQ');
  }, [setTitleSuffix]);

  return (
    <>
      <Flex
        minH="100vh"
        minW="100%"
        bgImage={{ base: bgM.src, md: bg.src }}
        bgSize="cover"
        bgPos="bottom"
        bgAttachment="fixed"
        overflowX="auto"
        flexDir="column"
        alignItems="center"
        color={theme.colors.text[300]}
        py={{ base: '10', md: '4rem' }}
        px={{ base: '10vw', md: '5rem' }}
      >
        <PageTitle>
          <i>F</i>re<i>q</i>uently A<i>s</i>ked <i>Q</i>ue<i>s</i>tion<i>s</i>
        </PageTitle>
        <Accordion w="100%" px={{ md: '5vw', xl: '10vw' }} allowToggle>
          <Flex mb="2rem" justifyContent="space-evenly">
            <TypeButton
              onClick={() => setType(qnaIsthara)}
              color={
                type == qnaIsthara
                  ? theme.colors.deco[400]
                  : theme.colors.text[400]
              }
            >
              Isthara (Peserta)
            </TypeButton>
            {/* <TypeButton
              onClick={() => setType(qnaGerda)}
              color={
                type == qnaGerda
                  ? theme.colors.deco[400]
                  : theme.colors.text[400]
              }
            >
              Gerda (Panitia)
            </TypeButton> */}
          </Flex>
          {type.map((qna, idx) => (
            <QNA
              q={qna.q}
              header={qna.a.heading}
              type={qna.a.type}
              body={qna.a.body}
              setIndex={() => setIndex(idx)}
              key={idx}
            />
          ))}
        </Accordion>
      </Flex>
    </>
  );
};

function TypeButton({ children, onClick, ...props }) {
  return (
    <Button
      width={{ base: '30vw', md: '20vw' }}
      py="1.5rem"
      color={theme.colors.deco[400]}
      bgColor="rgb(0,0,0,0)"
      bgGradient={`linear(160deg, ${colors.text[600]}55, ${colors.deco[400]}55)`}
      border="1px"
      _hover={{ bgColor: `${theme.colors.bg[500]}` }}
      onClick={onClick}
      {...props}
    >
      {children}
    </Button>
  );
}

export default FAQ;
