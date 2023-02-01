import { useContext, useEffect } from 'react';
import { Accordion, Flex } from '@chakra-ui/react';

import theme from '@/theme';
import { LayoutContext } from '@/components/context/LayoutContext';

import { PageTitle } from '@/components/styles';
import QNA from '@/components/pages/faq/qna';
import qna from '@/components/pages/faq/qnaList';

import bg from '@/asset/images/bg/bg.jpg';
import bgM from '@/asset/images/bg/bg-m.png';

const FAQ = () => {
  const { setTitleSuffix } = useContext(LayoutContext);
	const currentAns = qna.a;

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
        // justifyContent="center"
        alignItems="center"
        color={theme.colors.text[300]}
        py={{ base: '10', md: '4rem' }}
        px={{ base: '10vw', md: '5rem' }}
      >
        <PageTitle>
          <i>F</i>re<i>q</i>uently A<i>s</i>ked <i>Q</i>ue<i>s</i>tion<i>s</i>
        </PageTitle>
        <Accordion w="100%" px={{ md: '5vw', xl: '10vw' }} allowToggle>
				{qna.map((qna, idx) => (
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

export default FAQ;
