import React from 'react'
import { Flex, Box, Image, AspectRatio } from '@chakra-ui/react';
import theme from '@/theme';

import { PageTitle } from '@/components/styles';
import bg from '@/asset/images/bg/bg.jpg';
import bgM from '@/asset/images/bg/bg-m.png';
import Map from './Map';

function index() {
    return (
        <Flex
            w="100%"
            h="100%"
            pos="relative"
            justifyContent="center"
            alignItems="center"
            py={{ base: '10', md: '4rem' }}
            color={theme.colors.text[300]}
            flexDirection="column"
            overflowX="hidden"
            overflowY="hidden"
            bgImage={{ base: bgM.src, md: bg.src }}
            bgSize="cover"
            bgPos="center"
            bgAttachment="fixed"
        >
            <Map />
        </Flex>
    )
}

export default index