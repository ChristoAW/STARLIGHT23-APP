import React from 'react'
import { Flex, Box, Image, AspectRatio } from '@chakra-ui/react';
import TM from "@/asset/images/treasure/TM_120 kosong.png"
import AbyssOpen from "@/asset/images/treasure/Abyss Terbuka.png"
import AbyssClose from "@/asset/images/treasure/Abyss Tertutup.png"
import LabyrssOpen from "@/asset/images/treasure/Labyrss Terbuka.png"
import LabyrssClose from "@/asset/images/treasure/Labyrss Tertutup.png"
import ElysiumOpen from "@/asset/images/treasure/Elysium REV PSB 2.png"
import ElysiumClose from "@/asset/images/treasure/Elysium_(cangkang_tutup)_REV.png"


function tm() {
    return (
        <AspectRatio
            // w="100%"
            w="100vh"
            h="100vw"
            ratio={16 / 9}
            marginTop="78px"
        >
            <Flex
                h="100%"
                position="relative"
                transform="rotate(90deg)"
            >
                <Image
                    maxW="none"
                    w="100vh"
                    h="100vw"
                    objectFit='cover'
                    src={TM.src}
                    alt=''
                >
                </Image>
                <Box
                    position="fixed"
                    top="110px"
                    left="120px"
                >
                    <Image
                        boxSize={{ base: '20%', sm: "20%" }}
                        objectFit='cover'
                        src={AbyssOpen.src}
                        alt=''
                    />
                    {/* <Image
                        boxSize='20%'
                        objectFit='cover'
                        src={AbyssClose.src}
                        alt=''
                        marginTop="1rem"
                    /> */}
                </Box>
                <Box
                    position="fixed"
                    top="200px"
                    left="330px"
                >
                    <Image
                        boxSize={{
                            base: '25%',
                            sm: "25%"
                        }}
                        objectFit='cover'
                        src={LabyrssOpen.src}
                        alt=''
                    />
                    {/* <Image
                        boxSize='25%'
                        objectFit='cover'
                        src={LabyrssClose.src}
                        alt=''
                        marginTop="1.5rem"
                    /> */}
                </Box>
                <Box
                    position="fixed"
                    top="60px"
                    left="500px"
                >
                    <Image
                        boxSize={['45%', "40%"]}
                        objectFit='cover'
                        src={ElysiumOpen.src}
                        alt=''
                    />
                    {/* <Image
                        boxSize='35%'
                        objectFit='cover'
                        src={ElysiumClose.src}
                        alt=''
                        marginStart="1rem"
                        marginTop="3rem"
                    /> */}
                </Box>
            </Flex>
        </AspectRatio>
    )
}

export default tm